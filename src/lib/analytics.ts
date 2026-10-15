/**
 * Analytics (GA4 + Meta Pixel) — carregamento sob demanda.
 *
 * - Só carrega em produção e apenas se o respectivo ID estiver configurado.
 * - Scripts injetados em tempo ocioso (requestIdleCallback) para não competir
 *   com a animação de abertura nem com o LCP.
 * - IDs validados por regex antes de serem interpolados em URLs.
 * - Falhas de carregamento (adblockers, rede) são silenciosas e nunca quebram o site.
 * - Cliques em links do WhatsApp (wa.me) são rastreados automaticamente via
 *   delegação de eventos — sem precisar alterar cada botão.
 */
import { CONFIG } from '../../lib/config';

type GtagFn = (...args: unknown[]) => void;
type FbqFn = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void;
  queue: unknown[][];
  push: FbqFn;
  loaded: boolean;
  version: string;
};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: GtagFn;
    fbq?: FbqFn;
    _fbq?: FbqFn;
  }
}

const GA_ID_PATTERN = /^G-[A-Z0-9]{4,20}$/;
const META_PIXEL_PATTERN = /^\d{6,20}$/;

let initialized = false;

function injectScript(src: string): void {
  const script = document.createElement('script');
  script.async = true;
  script.src = src;
  script.onerror = () => {
    // Bloqueado por adblock ou rede: ignorar silenciosamente.
  };
  document.head.appendChild(script);
}

function loadGA4(id: string): void {
  window.dataLayer = window.dataLayer || [];
  // O gtag oficial exige o objeto `arguments` (não um array) no dataLayer.
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', id, { anonymize_ip: true });
  injectScript(`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`);
}

function loadMetaPixel(id: string): void {
  if (window.fbq) return;
  const fbq = function (...args: unknown[]) {
    if (fbq.callMethod) fbq.callMethod(...args);
    else fbq.queue.push(args);
  } as FbqFn;
  fbq.push = fbq;
  fbq.loaded = true;
  fbq.version = '2.0';
  fbq.queue = [];
  window.fbq = fbq;
  if (!window._fbq) window._fbq = fbq;
  injectScript('https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', id);
  fbq('track', 'PageView');
}

function safeCall(fn: () => void): void {
  try {
    fn();
  } catch {
    // Analytics nunca deve quebrar a experiência do usuário.
  }
}

/** Evento genérico (GA4). */
export function trackEvent(name: string, params: Record<string, unknown> = {}): void {
  safeCall(() => window.gtag?.('event', name, params));
}

/** Lead cadastrado com sucesso (GA4 `generate_lead` + Meta `Lead`). */
export function trackLead(source: string): void {
  trackEvent('generate_lead', { lead_source: source });
  safeCall(() => window.fbq?.('track', 'Lead', { content_name: source }));
}

/** Clique de contato via WhatsApp (GA4 + Meta `Contact`). */
export function trackWhatsAppClick(source: string): void {
  trackEvent('whatsapp_click', { link_source: source });
  safeCall(() => window.fbq?.('track', 'Contact', { content_name: source }));
}

function listenWhatsAppClicks(): void {
  document.addEventListener(
    'click',
    (event) => {
      const target = event.target as Element | null;
      const anchor = target?.closest?.('a[href*="wa.me/"]') as HTMLAnchorElement | null;
      if (!anchor) return;
      const label = (anchor.getAttribute('aria-label') || anchor.textContent || '').trim().slice(0, 80);
      trackWhatsAppClick(label || 'whatsapp_link');
    },
    { capture: true, passive: true }
  );
}

export function initAnalytics(): void {
  if (initialized || typeof window === 'undefined') return;
  initialized = true;

  if (!import.meta.env.PROD) return;

  const gaId = GA_ID_PATTERN.test(CONFIG.gaId) ? CONFIG.gaId : '';
  const pixelId = META_PIXEL_PATTERN.test(CONFIG.metaPixelId) ? CONFIG.metaPixelId : '';
  if (!gaId && !pixelId) return;

  const load = () =>
    safeCall(() => {
      if (gaId) loadGA4(gaId);
      if (pixelId) loadMetaPixel(pixelId);
      listenWhatsAppClicks();
    });

  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(load, { timeout: 4000 });
  } else {
    setTimeout(load, 2500);
  }
}
