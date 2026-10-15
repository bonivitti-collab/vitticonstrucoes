/**
 * Serviço de envio de leads via Web3Forms.
 *
 * - Nunca lança exceção: sempre retorna um resultado tipado, para que a UI
 *   possa exibir um feedback elegante (ou um fallback via WhatsApp).
 * - Timeout com AbortController para não deixar o botão "Enviando..." travado
 *   em conexões móveis instáveis do litoral.
 * - Valida `response.ok` E o campo `success` do JSON da Web3Forms (uma resposta
 *   HTTP 200 com `success: false` também é tratada como falha).
 * - Honeypot (`botcheck`): bots que preenchem o campo oculto são descartados
 *   silenciosamente, sem consumir a cota da Web3Forms.
 */
import { CONFIG } from '../../lib/config';

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';
const REQUEST_TIMEOUT_MS = 12_000;

export type LeadFailureReason =
  /** Chave VITE_WEB3FORMS_ACCESS_KEY ausente no build. */
  | 'not_configured'
  /** Dispositivo sem conexão. */
  | 'offline'
  /** Servidor não respondeu dentro do tempo limite. */
  | 'timeout'
  /** Falha de rede/CORS/DNS. */
  | 'network'
  /** Servidor respondeu, mas recusou o envio (cota, chave inválida, spam...). */
  | 'rejected';

export type LeadSubmitResult =
  | { ok: true; reason?: never }
  | { ok: false; reason: LeadFailureReason };

type FormFields = Record<string, string | boolean>;

async function postToWeb3Forms(fields: FormFields): Promise<LeadSubmitResult> {
  const accessKey = CONFIG.web3formsAccessKey;
  if (!accessKey) {
    if (import.meta.env.DEV) {
      console.warn('[leads] VITE_WEB3FORMS_ACCESS_KEY não configurada — envio ignorado. Veja .env.example.');
    }
    return { ok: false, reason: 'not_configured' };
  }

  if (typeof navigator !== 'undefined' && navigator.onLine === false) {
    return { ok: false, reason: 'offline' };
  }

  const controller = new AbortController();
  const timer = window.setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const response = await fetch(WEB3FORMS_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ access_key: accessKey, ...fields }),
      signal: controller.signal,
    });

    const data = (await response.json().catch(() => null)) as { success?: boolean; message?: string } | null;

    if (!response.ok || !data?.success) {
      if (import.meta.env.DEV) {
        console.warn('[leads] Web3Forms recusou o envio:', response.status, data?.message);
      }
      return { ok: false, reason: 'rejected' };
    }

    return { ok: true };
  } catch (err) {
    const isAbort = err instanceof DOMException && err.name === 'AbortError';
    return { ok: false, reason: isAbort ? 'timeout' : 'network' };
  } finally {
    window.clearTimeout(timer);
  }
}

export interface VipLeadInput {
  email: string;
  profileLabel: string;
  submittedAt: string;
  /** Valor do campo honeypot. Usuários reais nunca o preenchem. */
  botcheck?: boolean;
}

export async function submitVipLead(input: VipLeadInput): Promise<LeadSubmitResult> {
  // Bot detectado: finge sucesso para não dar pistas, mas não envia nada.
  if (input.botcheck) return { ok: true };

  return postToWeb3Forms({
    subject: `[Verta AI] Novo interessado na Lista VIP: ${input.email}`,
    from_name: `${CONFIG.siteName} — Site`,
    // A Web3Forms usa o campo `email` como Reply-To automaticamente.
    email: input.email,
    'Perfil selecionado': input.profileLabel,
    'Data e hora do cadastro': input.submittedAt,
    Origem: 'Site Grupo Vitti — Seção Verta AI (Lista VIP de Lançamento)',
    'Página': typeof window !== 'undefined' ? window.location.href : CONFIG.siteUrl,
  });
}

/** Mensagens amigáveis em pt-BR para cada tipo de falha. */
export function leadFailureMessage(reason: LeadFailureReason): string {
  switch (reason) {
    case 'offline':
      return 'Parece que você está sem conexão no momento. Verifique sua internet e tente novamente.';
    case 'timeout':
      return 'A conexão demorou mais que o esperado. Tente novamente em alguns segundos.';
    case 'network':
    case 'rejected':
    case 'not_configured':
    default:
      return 'Não conseguimos confirmar seu cadastro agora. Tente novamente ou fale direto com a nossa equipe pelo WhatsApp.';
  }
}
