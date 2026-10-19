import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { ARTICLES } from '../src/data/articles.ts';
import { PROJECTS_MEMORIAL } from '../src/data/projectsData.ts';
import { SERVICES_LIST } from '../src/data/servicesData.ts';
import { LOCATIONS_LIST } from '../src/data/locationsData.ts';
import { CONFIG, whatsappLink } from '../lib/config.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');
const publicDir = path.resolve(rootDir, 'public');

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function formatDateISO(date: Date = new Date()): string {
  return date.toISOString().split('T')[0];
}

// Rodapé institucional compartilhado com Links Reais para as 7 Cidades (Teia Territorial)
function buildSharedFooterHtml(): string {
  return `
    <footer style="background:#080707;color:#8A8479;padding:2.5rem 1.5rem;border-top:1px solid rgba(255,255,255,0.1);font-size:0.8125rem;text-align:center;">
      <p style="margin:0 0 1rem 0;">CNPJ ${CONFIG.cnpj} · Grupo Vitti Construção, Reforma &amp; Tecnologia · Região dos Lagos (RJ)</p>
      <div style="margin-top:1rem;padding-top:1rem;border-top:1px solid rgba(255,255,255,0.05);display:flex;flex-wrap:wrap;justify-content:center;align-items:center;gap:0.75rem;font-size:0.75rem;">
        <span style="color:#A8A29A;font-weight:600;">Cobertura Territorial Oficial na Região dos Lagos:</span>
        ${LOCATIONS_LIST.map((l) => `<a href="/atuacao/${l.slug}" style="color:#C89467;text-decoration:none;font-weight:500;">${escapeHtml(l.name)}</a>`).join('<span style="color:rgba(255,255,255,0.2);">·</span>')}
      </div>
      <p style="margin-top:1rem;color:#555;font-size:0.6875rem;">© ${new Date().getFullYear()} ${CONFIG.siteName}. Todos os direitos reservados.</p>
    </footer>
  `;
}

// 1. Gera o sitemap.xml com Home (1) + 13 Serviços + 7 Cidades + 3 Obras + 15 Guias = 39 URLs
function generateSitemap(): void {
  const today = formatDateISO();
  const urls: { loc: string; lastmod: string; changefreq: string; priority: string }[] = [
    {
      loc: 'https://vitticonstrucoes.com.br/',
      lastmod: today,
      changefreq: 'weekly',
      priority: '1.0',
    },
    ...SERVICES_LIST.map((srv) => ({
      loc: `https://vitticonstrucoes.com.br/servicos/${srv.slug}`,
      lastmod: today,
      changefreq: 'weekly',
      priority: '0.9',
    })),
    ...LOCATIONS_LIST.map((loc) => ({
      loc: `https://vitticonstrucoes.com.br/atuacao/${loc.slug}`,
      lastmod: today,
      changefreq: 'weekly',
      priority: '0.9',
    })),
    ...PROJECTS_MEMORIAL.map((proj) => ({
      loc: `https://vitticonstrucoes.com.br/obras/${proj.slug}`,
      lastmod: today,
      changefreq: 'monthly',
      priority: '0.8',
    })),
    ...ARTICLES.map((art) => ({
      loc: `https://vitticonstrucoes.com.br/guias/${art.slug}`,
      lastmod: today,
      changefreq: 'monthly',
      priority: '0.8',
    })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), xml, 'utf8');
  if (fs.existsSync(distDir)) {
    fs.writeFileSync(path.join(distDir, 'sitemap.xml'), xml, 'utf8');
  }
  console.log(`[SEO] sitemap.xml gerado com sucesso (${urls.length} URLs registradas).`);
}

// 2. Snapshot semântico inicial para o dist/index.html (Zero tela em branco para bots)
function buildHomeSemanticHtml(): string {
  return `
  <header style="background:#0D0C0B;color:#F5F2EB;padding:1.25rem 1.5rem;border-bottom:1px solid rgba(255,255,255,0.1);">
    <div style="max-width:1280px;margin:0 auto;display:flex;justify-content:space-between;align-items:center;">
      <a href="/" style="color:#FFF;text-decoration:none;font-weight:bold;font-size:1.25rem;">GRUPO VITTI</a>
      <nav style="display:flex;gap:1.5rem;font-size:0.875rem;">
        <a href="#sobre" style="color:#B8B2A7;text-decoration:none;">Sobre Nós</a>
        <a href="#servicos" style="color:#B8B2A7;text-decoration:none;">13 Serviços</a>
        <a href="#obras" style="color:#B8B2A7;text-decoration:none;">Conceito &amp; Obras</a>
        <a href="#artigos" style="color:#C89467;text-decoration:none;">15 Guias Práticos</a>
        <a href="#contato" style="color:#B8B2A7;text-decoration:none;">Contato</a>
      </nav>
      <a href="${whatsappLink()}" style="background:#25D366;color:#0A2412;padding:0.5rem 1rem;border-radius:9999px;font-weight:bold;text-decoration:none;font-size:0.875rem;">WhatsApp ${CONFIG.whatsappDisplay}</a>
    </div>
  </header>

  <main style="background:#0D0C0B;color:#F5F2EB;">
    <section style="padding:4rem 1.5rem;text-align:center;max-width:960px;margin:0 auto;">
      <p style="color:#C89467;font-family:monospace;font-size:0.875rem;text-transform:uppercase;letter-spacing:1px;margin-bottom:1rem;">
        Ecossistema da Construção &amp; Manutenção · Região dos Lagos · Cabo Frio · Tamoios · Búzios · Arraial
      </p>
      <h1 style="font-size:2.5rem;line-height:1.2;font-weight:800;color:#FFFFFF;margin-bottom:1.5rem;">
        Construção, Reformas e Manutenção Residencial em Cabo Frio, Búzios e Região dos Lagos.
      </h1>
      <p style="font-size:1.125rem;color:#B8B2A7;line-height:1.6;margin-bottom:2rem;">
        Do reparo urgente à obra completa: pintura anti-maresia, elétrica, hidráulica com caça-vazamentos, piscinas, carpintaria, ar-condicionado, obras chave na mão e suporte expresso para Airbnb. Equipe própria, garantia técnica e atendimento no mesmo dia.
      </p>
      <div style="display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;">
        <a href="#servicos" style="background:#25D366;color:#0A2412;padding:0.875rem 1.75rem;border-radius:0.75rem;font-weight:bold;text-decoration:none;">Ver os 13 Serviços Especializados</a>
        <a href="#artigos" style="background:rgba(255,255,255,0.05);color:#FFF;border:1px solid rgba(255,255,255,0.15);padding:0.875rem 1.75rem;border-radius:0.75rem;text-decoration:none;">Consultar os 15 Guias Técnicos</a>
      </div>
    </section>

    <section id="servicos" style="padding:4rem 1.5rem;background:#141312;border-top:1px solid rgba(255,255,255,0.1);">
      <div style="max-width:1200px;margin:0 auto;">
        <div style="text-align:center;margin-bottom:2.5rem;">
          <span style="color:#C89467;font-family:monospace;font-size:0.75rem;font-weight:bold;text-transform:uppercase;">Ecossistema de Soluções</span>
          <h2 style="font-size:2rem;font-weight:700;color:#FFF;margin:0.5rem 0;">13 Serviços Especializados para Sua Casa ou Pousada</h2>
          <p style="color:#B8B2A7;max-width:700px;margin:0 auto;">Atendimento técnico com profissionais qualificados, garantia formal e preço justo em toda a Região dos Lagos.</p>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1.5rem;">
          ${SERVICES_LIST.map(
            (srv) => `
            <div style="background:#0D0C0B;border:1px solid rgba(255,255,255,0.1);border-radius:1rem;padding:1.5rem;display:flex;flex-direction:column;justify-content:space-between;">
              <div>
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.75rem;">
                  <span style="color:#C89467;font-family:monospace;font-size:0.75rem;font-weight:bold;">${escapeHtml(srv.num)} · ${escapeHtml(srv.category)}</span>
                  <span style="background:rgba(200,148,103,0.15);color:#C89467;font-size:0.6875rem;padding:0.25rem 0.5rem;border-radius:0.375rem;font-weight:600;">${escapeHtml(srv.badge)}</span>
                </div>
                <h3 style="color:#FFF;font-size:1.125rem;font-weight:bold;margin:0 0 0.5rem 0;">
                  <a href="/servicos/${srv.slug}" style="color:#FFF;text-decoration:none;">${escapeHtml(srv.title)}</a>
                </h3>
                <p style="color:#A8A29A;font-size:0.8125rem;line-height:1.5;margin-bottom:1rem;">${escapeHtml(srv.subtitle)}</p>
                <ul style="color:#8A8479;font-size:0.75rem;padding-left:1.25rem;margin-bottom:1.5rem;line-height:1.6;">
                  ${srv.bullets.map((b) => `<li>${escapeHtml(b)}</li>`).join('')}
                </ul>
              </div>
              <div style="display:flex;flex-direction:column;gap:0.5rem;">
                <a href="${whatsappLink(srv.whatsappMsg)}" style="background:#25D366;color:#0A2412;padding:0.625rem 1rem;border-radius:0.5rem;font-weight:bold;font-size:0.8125rem;text-decoration:none;text-align:center;">Pedir Orçamento no WhatsApp</a>
                <a href="/servicos/${srv.slug}" style="color:#C89467;font-size:0.75rem;text-decoration:none;text-align:center;font-weight:600;">Ver página técnica do serviço &rarr;</a>
              </div>
            </div>`
          ).join('')}
        </div>
      </div>
    </section>

    <section id="sobre" style="padding:4rem 1.5rem;background:#141312;border-top:1px solid rgba(255,255,255,0.1);">
      <div style="max-width:1200px;margin:0 auto;">
        <h2 style="font-size:1.875rem;font-weight:700;color:#FFF;margin-bottom:1rem;">Engenharia Costeira e Transparência Radical</h2>
        <p style="color:#B8B2A7;line-height:1.6;margin-bottom:1.5rem;">
          Fundado na Região dos Lagos, o Grupo Vitti une rigor normativo (ABNT NBR 6118, NBR 9575 e NBR 10821) a uma gestão digital transparente. Eliminamos a informalidade e os aditivos abusivos, garantindo proteção patrimonial e segurança técnica total para proprietários que residem na capital do RJ ou em outros estados.
        </p>
      </div>
    </section>

    <section id="obras" style="padding:4rem 1.5rem;background:#0D0C0B;border-top:1px solid rgba(255,255,255,0.1);">
      <div style="max-width:1200px;margin:0 auto;">
        <h2 style="font-size:1.875rem;font-weight:700;color:#FFF;margin-bottom:0.5rem;">Acervo &amp; Conceito Visual</h2>
        <p style="color:#B8B2A7;margin-bottom:2rem;">Fichas técnicas e memoriais construtivos desenvolvidos para as particularidades climáticas e geotécnicas do litoral fluminense.</p>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:1.5rem;">
          ${PROJECTS_MEMORIAL.map(
            (p) => `
            <div style="background:#141312;border:1px solid rgba(255,255,255,0.1);border-radius:1rem;padding:1.5rem;display:flex;flex-direction:column;justify-content:space-between;">
              <div>
                <span style="color:#C89467;font-family:monospace;font-size:0.75rem;font-weight:bold;text-transform:uppercase;">${escapeHtml(p.city)}</span>
                <h3 style="color:#FFF;font-size:1.25rem;font-weight:bold;margin:0.5rem 0;">
                  <a href="/obras/${p.slug}" style="color:#FFF;text-decoration:none;">${escapeHtml(p.title)}</a>
                </h3>
                <p style="color:#8A8479;font-size:0.875rem;margin-bottom:1rem;">${escapeHtml(p.type)} · ${escapeHtml(p.tag)}</p>
                <p style="color:#B8B2A7;font-size:0.8125rem;line-height:1.5;margin-bottom:1rem;">${escapeHtml(p.idealTerrain)}</p>
              </div>
              <div style="display:flex;flex-direction:column;gap:0.5rem;padding-top:1rem;border-top:1px solid rgba(255,255,255,0.05);">
                <a href="/obras/${p.slug}" style="color:#C89467;font-size:0.8125rem;font-weight:600;text-decoration:none;">Ver Memorial Técnico Completo &rarr;</a>
                <a href="${whatsappLink(p.whatsappPrompt)}" style="color:#25D366;font-size:0.8125rem;font-weight:600;text-decoration:none;">Orçar neste padrão no WhatsApp &rarr;</a>
              </div>
            </div>`
          ).join('')}
        </div>
      </div>
    </section>

    <section id="artigos" style="padding:4rem 1.5rem;background:#141312;border-top:1px solid rgba(255,255,255,0.1);">
      <div style="max-width:1200px;margin:0 auto;">
        <h2 style="font-size:1.875rem;font-weight:700;color:#FFF;margin-bottom:0.5rem;">Os 15 Guias Práticos de Engenharia e Serviços para a Região dos Lagos</h2>
        <p style="color:#B8B2A7;margin-bottom:2rem;">Respostas claras e técnicas para as principais dores de quem constrói ou reforma em Cabo Frio, Tamoios, Búzios e cidades vizinhas.</p>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:1.5rem;">
          ${ARTICLES.map(
            (art) => `
            <article style="background:#0D0C0B;border:1px solid rgba(255,255,255,0.1);border-radius:1rem;padding:1.5rem;">
              <span style="color:#C89467;font-size:0.75rem;font-weight:bold;">${escapeHtml(art.category)}</span>
              <h3 style="margin:0.5rem 0;font-size:1.125rem;line-height:1.4;">
                <a href="/guias/${art.slug}" style="color:#FFF;text-decoration:none;font-weight:bold;">${escapeHtml(art.title)}</a>
              </h3>
              <p style="color:#A8A29A;font-size:0.8125rem;line-height:1.5;margin-bottom:1rem;">${escapeHtml(art.problemSummary)}</p>
              <a href="/guias/${art.slug}" style="color:#C89467;font-size:0.8125rem;font-weight:600;text-decoration:none;">Ler guia técnico completo &rarr;</a>
            </article>`
          ).join('')}
        </div>
      </div>
    </section>

    <section id="faq" style="padding:4rem 1.5rem;background:#0D0C0B;border-top:1px solid rgba(255,255,255,0.1);">
      <div style="max-width:960px;margin:0 auto;">
        <h2 style="font-size:1.875rem;font-weight:700;color:#FFF;margin-bottom:1.5rem;text-align:center;">Perguntas Frequentes Sobre Obras &amp; Serviços no Litoral</h2>
        <div style="display:flex;flex-direction:column;gap:1rem;">
          <div style="background:#141312;border:1px solid rgba(255,255,255,0.1);border-radius:0.75rem;padding:1.25rem;">
            <h3 style="color:#FFF;font-size:1rem;font-weight:bold;margin:0 0 0.5rem 0;">Vocês realizam serviços rápidos e manutenção emergencial?</h3>
            <p style="color:#A8A29A;font-size:0.875rem;margin:0;line-height:1.5;">Sim. Dispomos de equipes volantes para atendimento ágil em Cabo Frio, Tamoios (Unamar), Búzios, Arraial do Cabo e cidades vizinhas com nota fiscal e garantia técnica.</p>
          </div>
          <div style="background:#141312;border:1px solid rgba(255,255,255,0.1);border-radius:0.75rem;padding:1.25rem;">
            <h3 style="color:#FFF;font-size:1rem;font-weight:bold;margin:0 0 0.5rem 0;">Como funciona o suporte de manutenção para Airbnb e casas de temporada?</h3>
            <p style="color:#A8A29A;font-size:0.875rem;margin:0;line-height:1.5;">Atendemos anfitriões com suporte técnico expresso entre check-outs e check-ins: ar-condicionado, chuveiros, bombas de piscina e vistorias fotográficas de avarias para preservar sua nota 5 estrelas.</p>
          </div>
          <div style="background:#141312;border:1px solid rgba(255,255,255,0.1);border-radius:0.75rem;padding:1.25rem;">
            <h3 style="color:#FFF;font-size:1rem;font-weight:bold;margin:0 0 0.5rem 0;">Como funciona o contrato a preço fechado do Grupo Vitti?</h3>
            <p style="color:#A8A29A;font-size:0.875rem;margin:0;line-height:1.5;">Elaboramos orçamento executivo detalhado antes do início do serviço ou da obra, com escopo e prazos definidos. Você sabe exatamente quanto vai investir, sem surpresas nem aditivos.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="contato" style="padding:4rem 1.5rem;background:#141312;border-top:1px solid rgba(255,255,255,0.1);">
      <div style="max-width:1200px;margin:0 auto;text-align:center;">
        <h2 style="font-size:2rem;font-weight:700;color:#FFF;margin-bottom:1rem;">Tire seu projeto do papel com quem entende de litoral</h2>
        <p style="color:#B8B2A7;max-width:700px;margin:0 auto 2rem auto;line-height:1.6;">
          Atendimento técnico em Cabo Frio (Braga, Peró, Ogiva) · Tamoios e Unamar (2º Distrito) · Búzios (Ferradura, Geribá, Manguinhos) · Arraial do Cabo (Pontal do Atalaia) · São Pedro da Aldeia · Iguaba Grande · Rio das Ostras.
        </p>
        <a href="${whatsappLink()}" style="background:#25D366;color:#0A2412;padding:1rem 2rem;border-radius:0.75rem;font-weight:bold;font-size:1.125rem;text-decoration:none;display:inline-block;">
          Falar Diretamente pelo WhatsApp (${CONFIG.whatsappDisplay})
        </a>
      </div>
    </section>
  </main>

  ${buildSharedFooterHtml()}
  `;
}

// 3. Pré-renderiza cada um dos 15 Guias em dist/guias/<slug>/index.html
function prerenderGuides(baseTemplateHtml: string): void {
  const today = formatDateISO();

  for (const art of ARTICLES) {
    const guideDir = path.join(distDir, 'guias', art.slug);
    fs.mkdirSync(guideDir, { recursive: true });

    const canonicalUrl = `https://vitticonstrucoes.com.br/guias/${art.slug}`;
    const pageTitle = `${art.title} — Grupo Vitti`;
    const pageDesc = art.subtitle;

    let html = baseTemplateHtml;

    // Substitui title
    html = html.replace(/<title>.*?<\/title>/i, `<title>${escapeHtml(pageTitle)}</title>`);

    // Substitui meta description
    html = html.replace(
      /<meta\s+name="description"\s+content=".*?"\s*\/?>/i,
      `<meta name="description" content="${escapeHtml(pageDesc)}" />`
    );

    // Substitui canonical
    html = html.replace(
      /<link\s+rel="canonical"\s+href=".*?"\s*\/?>/i,
      `<link rel="canonical" href="${canonicalUrl}" />`
    );

    // Substitui OpenGraph
    html = html.replace(
      /<meta\s+property="og:title"\s+content=".*?"\s*\/?>/i,
      `<meta property="og:title" content="${escapeHtml(pageTitle)}" />`
    );
    html = html.replace(
      /<meta\s+property="og:description"\s+content=".*?"\s*\/?>/i,
      `<meta property="og:description" content="${escapeHtml(pageDesc)}" />`
    );
    html = html.replace(
      /<meta\s+property="og:url"\s+content=".*?"\s*\/?>/i,
      `<meta property="og:url" content="${canonicalUrl}" />`
    );

    // Substitui Twitter Card
    html = html.replace(
      /<meta\s+name="twitter:title"\s+content=".*?"\s*\/?>/i,
      `<meta name="twitter:title" content="${escapeHtml(pageTitle)}" />`
    );
    html = html.replace(
      /<meta\s+name="twitter:description"\s+content=".*?"\s*\/?>/i,
      `<meta name="twitter:description" content="${escapeHtml(pageDesc)}" />`
    );

    // Substitui o JSON-LD da Home por Article + BreadcrumbList (Sem duplicar FAQPage da Home)
    const guideJsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Article',
          '@id': `${canonicalUrl}#article`,
          headline: art.title,
          description: art.subtitle,
          image: 'https://vitticonstrucoes.com.br/og-image.jpg',
          datePublished: '2026-10-16',
          dateModified: today,
          author: {
            '@type': 'Organization',
            name: 'Corpo Técnico Grupo Vitti',
            url: 'https://vitticonstrucoes.com.br/',
          },
          publisher: {
            '@type': 'Organization',
            name: 'Grupo Vitti',
            url: 'https://vitticonstrucoes.com.br/',
            logo: {
              '@type': 'ImageObject',
              url: 'https://vitticonstrucoes.com.br/favicon.svg',
            },
          },
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': canonicalUrl,
          },
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Grupo Vitti',
              item: 'https://vitticonstrucoes.com.br/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: art.title,
              item: canonicalUrl,
            },
          ],
        },
      ],
    };

    html = html.replace(
      /<script\s+type="application\/ld\+json">[\s\S]*?<\/script>/i,
      `<script type="application/ld+json">\n${JSON.stringify(guideJsonLd, null, 2)}\n    </script>`
    );

    const relatedServices = SERVICES_LIST.slice(0, 3);
    const relatedGuides = ARTICLES.filter((a) => a.slug !== art.slug).slice(0, 3);

    const articleStaticBody = `
      <div style="background:#0D0C0B;color:#F5F2EB;min-height:100vh;font-family:system-ui,-apple-system,sans-serif;">
        <header style="background:#0D0C0B;color:#FFF;padding:1.25rem 1.5rem;border-bottom:1px solid rgba(255,255,255,0.1);display:flex;justify-content:space-between;align-items:center;">
          <a href="/" style="color:#FFF;text-decoration:none;font-weight:bold;">&larr; Voltar para Grupo Vitti</a>
          <a href="${whatsappLink(art.whatsappPrompt)}" style="background:#25D366;color:#0A2412;padding:0.5rem 1rem;border-radius:9999px;font-weight:bold;text-decoration:none;font-size:0.875rem;">Falar com Engenheiro no WhatsApp</a>
        </header>

        <main style="max-width:860px;margin:0 auto;padding:3rem 1.5rem;line-height:1.7;">
          <nav aria-label="Breadcrumb" style="margin-bottom:2rem;font-size:0.75rem;font-family:monospace;color:#8A8479;">
            <a href="/" style="color:#8A8479;text-decoration:none;">Início</a> /
            <a href="/#artigos" style="color:#8A8479;text-decoration:none;">Guias Práticos</a> /
            <span style="color:#C89467;">${escapeHtml(art.title)}</span>
          </nav>

          <article>
            <div style="margin-bottom:1.5rem;font-size:0.8125rem;color:#C89467;text-transform:uppercase;font-weight:bold;letter-spacing:1px;">
              <span>${escapeHtml(art.category)}</span> · <span>Tempo de leitura: ${escapeHtml(art.readTime)}</span>
            </div>

            <h1 style="font-size:2.25rem;font-weight:800;color:#FFFFFF;line-height:1.25;margin-bottom:1rem;">
              ${escapeHtml(art.title)}
            </h1>

            <p style="font-size:1.125rem;color:#B8B2A7;line-height:1.6;margin-bottom:2.5rem;">
              ${escapeHtml(art.subtitle)}
            </p>

            <div style="background:#141312;border-left:4px solid #C89467;padding:1.5rem;border-radius:0.5rem;margin-bottom:2.5rem;">
              <h2 style="font-size:0.875rem;font-family:monospace;font-weight:bold;color:#C89467;text-transform:uppercase;margin-bottom:0.5rem;">
                Resumo do Desafio Técnico
              </h2>
              <p style="color:#D8D3C9;font-size:0.9375rem;margin:0;">
                ${escapeHtml(art.problemSummary)}
              </p>
            </div>

            <div style="margin-bottom:3rem;">
              ${(art.content || [])
                .map(
                  (sec) => `
                <section style="margin-bottom:2rem;">
                  <h2 style="font-size:1.5rem;font-weight:700;color:#FFFFFF;margin-bottom:0.75rem;">
                    ${escapeHtml(sec.sectionTitle)}
                  </h2>
                  ${sec.paragraphs
                    .map((p) => `<p style="color:#B8B2A7;font-size:1rem;margin-bottom:1rem;">${escapeHtml(p)}</p>`)
                    .join('')}
                </section>`
                )
                .join('')}
            </div>

            <div style="background:#141312;border:1px solid rgba(255,255,255,0.1);border-radius:0.75rem;padding:1.5rem;margin-bottom:2.5rem;">
              <h2 style="font-size:0.875rem;font-family:monospace;font-weight:bold;color:#C89467;text-transform:uppercase;margin-bottom:1rem;">
                Checklist Prático do Grupo Vitti
              </h2>
              <ul style="padding-left:1.25rem;margin:0;color:#D8D3C9;font-size:0.875rem;display:flex;flex-direction:column;gap:0.5rem;">
                ${art.practicalTips.map((tip) => `<li>${escapeHtml(tip)}</li>`).join('')}
              </ul>
            </div>

            <div style="text-align:center;padding:2rem 0;border-top:1px solid rgba(255,255,255,0.1);margin-bottom:3rem;">
              <a href="${whatsappLink(art.whatsappPrompt)}" style="background:#25D366;color:#0A2412;padding:1rem 2rem;border-radius:0.75rem;font-weight:bold;font-size:1.125rem;text-decoration:none;display:inline-block;">
                Tirar Dúvidas sobre Este Tema no WhatsApp &rarr;
              </a>
            </div>

            <!-- Links Internos Relacionados -->
            <section style="padding-top:2rem;border-top:1px solid rgba(255,255,255,0.1);">
              <h2 style="font-size:1.25rem;font-weight:bold;color:#FFF;margin-bottom:1rem;">Serviços Relacionados</h2>
              <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:1rem;margin-bottom:2rem;">
                ${relatedServices.map((s) => `
                  <a href="/servicos/${s.slug}" style="background:#141312;border:1px solid rgba(255,255,255,0.1);border-radius:0.75rem;padding:1rem;text-decoration:none;display:block;">
                    <div style="color:#C89467;font-size:0.6875rem;font-family:monospace;text-transform:uppercase;">${escapeHtml(s.category)}</div>
                    <div style="color:#FFF;font-size:0.9375rem;font-weight:bold;margin:0.25rem 0;">${escapeHtml(s.title)}</div>
                    <div style="color:#8A8479;font-size:0.75rem;">Ver página técnica &rarr;</div>
                  </a>`).join('')}
              </div>

              <h2 style="font-size:1.25rem;font-weight:bold;color:#FFF;margin-bottom:1rem;">Outros Guias Práticos</h2>
              <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:1rem;">
                ${relatedGuides.map((g) => `
                  <a href="/guias/${g.slug}" style="background:#141312;border:1px solid rgba(255,255,255,0.1);border-radius:0.75rem;padding:1rem;text-decoration:none;display:block;">
                    <div style="color:#C89467;font-size:0.6875rem;font-family:monospace;text-transform:uppercase;">${escapeHtml(g.category)}</div>
                    <div style="color:#FFF;font-size:0.9375rem;font-weight:bold;margin:0.25rem 0;">${escapeHtml(g.title)}</div>
                    <div style="color:#8A8479;font-size:0.75rem;">Ler guia &rarr;</div>
                  </a>`).join('')}
              </div>
            </section>
          </article>
        </main>

        ${buildSharedFooterHtml()}
      </div>
    `;

    html = html.replace('<div id="root"></div>', `<div id="root">${articleStaticBody}</div>`);
    fs.writeFileSync(path.join(guideDir, 'index.html'), html, 'utf8');
  }

  console.log(`[SEO] ${ARTICLES.length} guias pré-renderizados com sucesso em dist/guias/<slug>/index.html.`);
}

// 4. Pré-renderiza cada um dos 13 Serviços em dist/servicos/<slug>/index.html
function prerenderServices(baseTemplateHtml: string): void {
  for (const srv of SERVICES_LIST) {
    const serviceDir = path.join(distDir, 'servicos', srv.slug);
    fs.mkdirSync(serviceDir, { recursive: true });

    const canonicalUrl = `https://vitticonstrucoes.com.br/servicos/${srv.slug}`;
    const pageTitle = `${srv.title} em Cabo Frio, Búzios e Tamoios — Grupo Vitti`;
    const pageDesc = srv.summary;

    let html = baseTemplateHtml;

    // Substitui title
    html = html.replace(/<title>.*?<\/title>/i, `<title>${escapeHtml(pageTitle)}</title>`);

    // Substitui meta description
    html = html.replace(
      /<meta\s+name="description"\s+content=".*?"\s*\/?>/i,
      `<meta name="description" content="${escapeHtml(pageDesc)}" />`
    );

    // Substitui canonical
    html = html.replace(
      /<link\s+rel="canonical"\s+href=".*?"\s*\/?>/i,
      `<link rel="canonical" href="${canonicalUrl}" />`
    );

    // Substitui OpenGraph
    html = html.replace(
      /<meta\s+property="og:title"\s+content=".*?"\s*\/?>/i,
      `<meta property="og:title" content="${escapeHtml(pageTitle)}" />`
    );
    html = html.replace(
      /<meta\s+property="og:description"\s+content=".*?"\s*\/?>/i,
      `<meta property="og:description" content="${escapeHtml(pageDesc)}" />`
    );
    html = html.replace(
      /<meta\s+property="og:url"\s+content=".*?"\s*\/?>/i,
      `<meta property="og:url" content="${canonicalUrl}" />`
    );

    // Substitui Twitter Card
    html = html.replace(
      /<meta\s+name="twitter:title"\s+content=".*?"\s*\/?>/i,
      `<meta name="twitter:title" content="${escapeHtml(pageTitle)}" />`
    );
    html = html.replace(
      /<meta\s+name="twitter:description"\s+content=".*?"\s*\/?>/i,
      `<meta name="twitter:description" content="${escapeHtml(pageDesc)}" />`
    );

    // Substitui o JSON-LD da Home por Service + BreadcrumbList (Sem duplicar FAQPage da Home)
    const serviceJsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Service',
          '@id': `${canonicalUrl}#service`,
          name: srv.title,
          description: srv.summary,
          serviceType: srv.category,
          url: canonicalUrl,
          provider: {
            '@type': 'LocalBusiness',
            '@id': 'https://vitticonstrucoes.com.br/#organization',
            name: 'Grupo Vitti',
            telephone: '+55-22-99843-4956',
            url: 'https://vitticonstrucoes.com.br/',
          },
          areaServed: [
            { '@type': 'City', name: 'Cabo Frio' },
            { '@type': 'Place', name: 'Tamoios, Cabo Frio' },
            { '@type': 'Place', name: 'Unamar, Cabo Frio' },
            { '@type': 'City', name: 'Armação dos Búzios' },
            { '@type': 'City', name: 'Arraial do Cabo' },
            { '@type': 'City', name: 'São Pedro da Aldeia' },
            { '@type': 'City', name: 'Iguaba Grande' },
            { '@type': 'City', name: 'Rio das Ostras' },
          ],
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Grupo Vitti',
              item: 'https://vitticonstrucoes.com.br/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: srv.title,
              item: canonicalUrl,
            },
          ],
        },
      ],
    };

    html = html.replace(
      /<script\s+type="application\/ld\+json">[\s\S]*?<\/script>/i,
      `<script type="application/ld+json">\n${JSON.stringify(serviceJsonLd, null, 2)}\n    </script>`
    );

    const otherServices = SERVICES_LIST.filter((s) => s.slug !== srv.slug).slice(0, 3);
    const relatedGuides = ARTICLES.slice(0, 3);

    const serviceStaticBody = `
      <div style="background:#0D0C0B;color:#F5F2EB;min-height:100vh;font-family:system-ui,-apple-system,sans-serif;">
        <header style="background:#0D0C0B;color:#FFF;padding:1.25rem 1.5rem;border-bottom:1px solid rgba(255,255,255,0.1);display:flex;justify-content:space-between;align-items:center;">
          <a href="/" style="color:#FFF;text-decoration:none;font-weight:bold;">&larr; Voltar para Grupo Vitti</a>
          <a href="${whatsappLink(srv.whatsappMsg)}" style="background:#25D366;color:#0A2412;padding:0.5rem 1rem;border-radius:9999px;font-weight:bold;text-decoration:none;font-size:0.875rem;">Pedir Orçamento no WhatsApp</a>
        </header>

        <main style="max-width:860px;margin:0 auto;padding:3rem 1.5rem;line-height:1.7;">
          <nav aria-label="Breadcrumb" style="margin-bottom:2rem;font-size:0.75rem;font-family:monospace;color:#8A8479;">
            <a href="/" style="color:#8A8479;text-decoration:none;">Início</a> /
            <a href="/#servicos" style="color:#8A8479;text-decoration:none;">Serviços Especializados</a> /
            <span style="color:#C89467;">${escapeHtml(srv.title)}</span>
          </nav>

          <article>
            <div style="margin-bottom:1.5rem;font-size:0.8125rem;color:#C89467;text-transform:uppercase;font-weight:bold;letter-spacing:1px;">
              <span>${escapeHtml(srv.category)}</span> · <span>${escapeHtml(srv.badge)}</span> · <span>Serviço Nº ${escapeHtml(srv.num)}</span>
            </div>

            <h1 style="font-size:2.25rem;font-weight:800;color:#FFFFFF;line-height:1.25;margin-bottom:1rem;">
              ${escapeHtml(srv.title)}
            </h1>

            <p style="font-size:1.125rem;color:#B8B2A7;line-height:1.6;margin-bottom:2rem;">
              ${escapeHtml(srv.subtitle)}
            </p>

            <div style="background:#141312;border:1px solid rgba(200,148,103,0.3);border-radius:0.75rem;padding:1.5rem;margin-bottom:2.5rem;">
              <div style="font-size:0.75rem;font-family:monospace;font-weight:bold;color:#C89467;text-transform:uppercase;margin-bottom:0.5rem;">
                Padrão Técnico &amp; Garantia Grupo Vitti
              </div>
              <p style="color:#D8D3C9;font-size:0.9375rem;margin:0;">
                ${escapeHtml(srv.summary)}
              </p>
            </div>

            <div style="margin-bottom:2.5rem;">
              <h2 style="font-size:1.25rem;font-weight:bold;color:#FFFFFF;margin-bottom:1rem;">
                O Que Está Incluso no Serviço
              </h2>
              <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:0.75rem;">
                ${srv.bullets
                  .map(
                    (b) => `
                  <li style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.1);padding:0.875rem 1rem;border-radius:0.5rem;font-size:0.875rem;color:#F5F2EB;">
                    &check; ${escapeHtml(b)}
                  </li>`
                  )
                  .join('')}
              </ul>
            </div>

            ${
              srv.diferenciaisMaresia && srv.diferenciaisMaresia.length > 0
                ? `
            <div style="margin-bottom:2.5rem;">
              <h2 style="font-size:1.25rem;font-weight:bold;color:#FFFFFF;margin-bottom:1rem;">
                Blindagem Contra o Clima do Litoral (Anti-Maresia)
              </h2>
              <div style="display:flex;flex-direction:column;gap:0.75rem;">
                ${srv.diferenciaisMaresia
                  .map(
                    (d) => `
                  <div style="background:#141312;border:1px solid rgba(255,255,255,0.1);padding:1rem;border-radius:0.5rem;color:#B8B2A7;font-size:0.875rem;">
                    &bull; ${escapeHtml(d)}
                  </div>`
                  )
                  .join('')}
              </div>
            </div>`
                : ''
            }

            <div style="background:#141312;border:1px solid rgba(255,255,255,0.1);border-radius:0.75rem;padding:1.5rem;margin-bottom:2.5rem;">
              <h2 style="font-size:1rem;font-weight:bold;color:#FFF;margin-bottom:0.75rem;">Cidades Atendidas na Região dos Lagos</h2>
              <p style="color:#B8B2A7;font-size:0.875rem;line-height:1.6;margin:0;">
                ${(srv.cidadesAtendidas || CONFIG.cidades).join(' · ')}
              </p>
            </div>

            <div style="text-align:center;padding:2rem 0;border-top:1px solid rgba(255,255,255,0.1);margin-bottom:3rem;">
              <a href="${whatsappLink(srv.whatsappMsg)}" style="background:#25D366;color:#0A2412;padding:1rem 2rem;border-radius:0.75rem;font-weight:bold;font-size:1.125rem;text-decoration:none;display:inline-block;">
                Solicitar Orçamento no WhatsApp (${CONFIG.whatsappDisplay}) &rarr;
              </a>
            </div>

            <!-- Links Internos Relacionados -->
            <section style="padding-top:2rem;border-top:1px solid rgba(255,255,255,0.1);">
              <h2 style="font-size:1.25rem;font-weight:bold;color:#FFF;margin-bottom:1rem;">Outros Serviços do Grupo Vitti</h2>
              <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:1rem;margin-bottom:2rem;">
                ${otherServices.map((s) => `
                  <a href="/servicos/${s.slug}" style="background:#141312;border:1px solid rgba(255,255,255,0.1);border-radius:0.75rem;padding:1rem;text-decoration:none;display:block;">
                    <div style="color:#C89467;font-size:0.6875rem;font-family:monospace;text-transform:uppercase;">${escapeHtml(s.category)}</div>
                    <div style="color:#FFF;font-size:0.9375rem;font-weight:bold;margin:0.25rem 0;">${escapeHtml(s.title)}</div>
                    <div style="color:#8A8479;font-size:0.75rem;">Ver página técnica &rarr;</div>
                  </a>`).join('')}
              </div>

              <h2 style="font-size:1.25rem;font-weight:bold;color:#FFF;margin-bottom:1rem;">Guias Técnicos Relacionados</h2>
              <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:1rem;">
                ${relatedGuides.map((g) => `
                  <a href="/guias/${g.slug}" style="background:#141312;border:1px solid rgba(255,255,255,0.1);border-radius:0.75rem;padding:1rem;text-decoration:none;display:block;">
                    <div style="color:#C89467;font-size:0.6875rem;font-family:monospace;text-transform:uppercase;">${escapeHtml(g.category)}</div>
                    <div style="color:#FFF;font-size:0.9375rem;font-weight:bold;margin:0.25rem 0;">${escapeHtml(g.title)}</div>
                    <div style="color:#8A8479;font-size:0.75rem;">Ler guia &rarr;</div>
                  </a>`).join('')}
              </div>
            </section>
          </article>
        </main>

        ${buildSharedFooterHtml()}
      </div>
    `;

    html = html.replace('<div id="root"></div>', `<div id="root">${serviceStaticBody}</div>`);
    fs.writeFileSync(path.join(serviceDir, 'index.html'), html, 'utf8');
  }

  console.log(`[SEO] ${SERVICES_LIST.length} serviços pré-renderizados com sucesso em dist/servicos/<slug>/index.html.`);
}

// 5. Pré-renderiza cada uma das 7 Cidades/Polos em dist/atuacao/<slug>/index.html
function prerenderLocations(baseTemplateHtml: string): void {
  for (const loc of LOCATIONS_LIST) {
    const locDir = path.join(distDir, 'atuacao', loc.slug);
    fs.mkdirSync(locDir, { recursive: true });

    const canonicalUrl = `https://vitticonstrucoes.com.br/atuacao/${loc.slug}`;
    const pageTitle = `${loc.title} | Grupo Vitti`;
    const pageDesc = loc.metaDescription;

    let html = baseTemplateHtml;

    // Substitui title
    html = html.replace(/<title>.*?<\/title>/i, `<title>${escapeHtml(pageTitle)}</title>`);

    // Substitui meta description
    html = html.replace(
      /<meta\s+name="description"\s+content=".*?"\s*\/?>/i,
      `<meta name="description" content="${escapeHtml(pageDesc)}" />`
    );

    // Substitui canonical
    html = html.replace(
      /<link\s+rel="canonical"\s+href=".*?"\s*\/?>/i,
      `<link rel="canonical" href="${canonicalUrl}" />`
    );

    // Substitui OpenGraph
    html = html.replace(
      /<meta\s+property="og:title"\s+content=".*?"\s*\/?>/i,
      `<meta property="og:title" content="${escapeHtml(pageTitle)}" />`
    );
    html = html.replace(
      /<meta\s+property="og:description"\s+content=".*?"\s*\/?>/i,
      `<meta property="og:description" content="${escapeHtml(pageDesc)}" />`
    );
    html = html.replace(
      /<meta\s+property="og:url"\s+content=".*?"\s*\/?>/i,
      `<meta property="og:url" content="${canonicalUrl}" />`
    );

    // Substitui Twitter Card
    html = html.replace(
      /<meta\s+name="twitter:title"\s+content=".*?"\s*\/?>/i,
      `<meta name="twitter:title" content="${escapeHtml(pageTitle)}" />`
    );
    html = html.replace(
      /<meta\s+name="twitter:description"\s+content=".*?"\s*\/?>/i,
      `<meta name="twitter:description" content="${escapeHtml(pageDesc)}" />`
    );

    // Substitui o JSON-LD da Home por HomeAndConstructionBusiness + Service + BreadcrumbList
    const locationJsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'HomeAndConstructionBusiness',
          '@id': `${canonicalUrl}#organization`,
          name: `Grupo Vitti — ${loc.name}`,
          description: loc.metaDescription,
          url: canonicalUrl,
          telephone: '+55-22-99843-4956',
          image: 'https://vitticonstrucoes.com.br/og-image.jpg',
          logo: 'https://vitticonstrucoes.com.br/favicon.svg',
          priceRange: '$$',
          address: {
            '@type': 'PostalAddress',
            addressLocality: loc.name,
            addressRegion: 'RJ',
            addressCountry: 'BR',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: -22.8794,
            longitude: -42.0186,
          },
          areaServed: [
            { '@type': 'City', name: loc.name },
            ...loc.neighborhoodsList.map((n) => ({ '@type': 'Place', name: n })),
          ],
        },
        {
          '@type': 'Service',
          '@id': `${canonicalUrl}#services`,
          name: `Construção, Reformas e Manutenção em ${loc.name}`,
          serviceType: 'Construção Civil e Manutenção Residencial',
          provider: { '@id': `${canonicalUrl}#organization` },
          areaServed: { '@type': 'City', name: loc.name },
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Grupo Vitti',
              item: 'https://vitticonstrucoes.com.br/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Cidades Atendidas',
              item: 'https://vitticonstrucoes.com.br/#contato',
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: loc.name,
              item: canonicalUrl,
            },
          ],
        },
      ],
    };

    html = html.replace(
      /<script\s+type="application\/ld\+json">[\s\S]*?<\/script>/i,
      `<script type="application/ld+json">\n${JSON.stringify(locationJsonLd, null, 2)}\n    </script>`
    );

    const otherLocations = LOCATIONS_LIST.filter((l) => l.slug !== loc.slug);
    const relatedGuides = ARTICLES.slice(0, 4);

    const locationStaticBody = `
      <div style="background:#0D0C0B;color:#F5F2EB;min-height:100vh;font-family:system-ui,-apple-system,sans-serif;">
        <header style="background:#0D0C0B;color:#FFF;padding:1.25rem 1.5rem;border-bottom:1px solid rgba(255,255,255,0.1);display:flex;justify-content:space-between;align-items:center;">
          <a href="/" style="color:#FFF;text-decoration:none;font-weight:bold;">&larr; Voltar para Grupo Vitti</a>
          <a href="${whatsappLink(loc.whatsappMessage)}" style="background:#25D366;color:#0A2412;padding:0.5rem 1rem;border-radius:9999px;font-weight:bold;text-decoration:none;font-size:0.875rem;">Orçar em ${escapeHtml(loc.name)}</a>
        </header>

        <main style="max-width:860px;margin:0 auto;padding:3rem 1.5rem;line-height:1.7;">
          <nav aria-label="Breadcrumb" style="margin-bottom:2rem;font-size:0.75rem;font-family:monospace;color:#8A8479;">
            <a href="/" style="color:#8A8479;text-decoration:none;">Início</a> /
            <span>Cidades Atendidas</span> /
            <span style="color:#C89467;">${escapeHtml(loc.name)}</span>
          </nav>

          <article>
            <div style="margin-bottom:1rem;font-size:0.8125rem;color:#C89467;text-transform:uppercase;font-weight:bold;letter-spacing:1px;">
              <span>${escapeHtml(loc.name)}</span> ${loc.district ? `· <span>${escapeHtml(loc.district)}</span>` : ''} · <span>Equipe Própria &amp; Garantia Formal</span>
            </div>

            <h1 style="font-size:2.25rem;font-weight:800;color:#FFFFFF;line-height:1.25;margin-bottom:1rem;">
              ${escapeHtml(loc.title)}
            </h1>

            <p style="font-size:1.125rem;color:#B8B2A7;line-height:1.6;margin-bottom:2rem;">
              ${escapeHtml(loc.subtitle)}
            </p>

            <div style="background:#141312;border:1px solid rgba(255,255,255,0.1);border-radius:0.75rem;padding:1.5rem;margin-bottom:2.5rem;">
              <h2 style="font-size:0.875rem;font-family:monospace;font-weight:bold;color:#C89467;text-transform:uppercase;margin-bottom:0.75rem;">
                Particularidades Geotécnicas e Desafios Locais em ${escapeHtml(loc.name)}
              </h2>
              <p style="color:#D8D3C9;font-size:0.9375rem;line-height:1.6;margin-bottom:1.5rem;">
                ${escapeHtml(loc.localChallenges)}
              </p>
              <h3 style="font-size:0.8125rem;font-family:monospace;font-weight:bold;color:#FFF;text-transform:uppercase;margin-bottom:0.75rem;">
                Diferenciais de Engenharia do Grupo Vitti:
              </h3>
              <ul style="padding-left:1.25rem;margin:0;color:#B8B2A7;font-size:0.875rem;display:flex;flex-direction:column;gap:0.5rem;">
                ${loc.technicalDifferentiators.map((d) => `<li>${escapeHtml(d)}</li>`).join('')}
              </ul>
            </div>

            <div style="margin-bottom:2.5rem;">
              <h2 style="font-size:1.25rem;font-weight:bold;color:#FFFFFF;margin-bottom:0.75rem;">
                Bairros e Condomínios Atendidos em ${escapeHtml(loc.name)}
              </h2>
              <p style="color:#B8B2A7;font-size:0.875rem;margin-bottom:1rem;">
                ${escapeHtml(loc.neighborhoods)}
              </p>
            </div>

            <div style="margin-bottom:2.5rem;">
              <h2 style="font-size:1.25rem;font-weight:bold;color:#FFFFFF;margin-bottom:1rem;">
                13 Serviços Disponíveis em ${escapeHtml(loc.name)}
              </h2>
              <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:1rem;">
                ${SERVICES_LIST.map((srv) => `
                  <div style="background:#141312;border:1px solid rgba(255,255,255,0.1);border-radius:0.75rem;padding:1rem;">
                    <span style="color:#C89467;font-size:0.6875rem;font-family:monospace;text-transform:uppercase;">${escapeHtml(srv.category)}</span>
                    <h3 style="color:#FFF;font-size:0.9375rem;font-weight:bold;margin:0.25rem 0;">
                      <a href="/servicos/${srv.slug}" style="color:#FFF;text-decoration:none;">${escapeHtml(srv.title)}</a>
                    </h3>
                    <p style="color:#8A8479;font-size:0.75rem;margin-bottom:0.75rem;">${escapeHtml(srv.subtitle)}</p>
                    <a href="/servicos/${srv.slug}" style="color:#C89467;font-size:0.75rem;font-weight:600;text-decoration:none;">Página técnica &rarr;</a>
                  </div>`).join('')}
              </div>
            </div>

            ${
              loc.faq && loc.faq.length > 0
                ? `
            <div style="background:#141312;border:1px solid rgba(255,255,255,0.1);border-radius:0.75rem;padding:1.5rem;margin-bottom:2.5rem;">
              <h2 style="font-size:1rem;font-weight:bold;color:#FFF;margin-bottom:1rem;">Perguntas Frequentes em ${escapeHtml(loc.name)}</h2>
              <div style="display:flex;flex-direction:column;gap:1rem;">
                ${loc.faq
                  .map(
                    (f) => `
                  <div>
                    <h3 style="color:#FFF;font-size:0.875rem;font-weight:bold;margin:0 0 0.25rem 0;">${escapeHtml(f.question)}</h3>
                    <p style="color:#A8A29A;font-size:0.8125rem;margin:0;line-height:1.5;">${escapeHtml(f.answer)}</p>
                  </div>`
                  )
                  .join('')}
              </div>
            </div>`
                : ''
            }

            <div style="text-align:center;padding:2rem 0;border-top:1px solid rgba(255,255,255,0.1);margin-bottom:3rem;">
              <a href="${whatsappLink(loc.whatsappMessage)}" style="background:#25D366;color:#0A2412;padding:1rem 2rem;border-radius:0.75rem;font-weight:bold;font-size:1.125rem;text-decoration:none;display:inline-block;">
                Chamar no WhatsApp em ${escapeHtml(loc.name)} (${CONFIG.whatsappDisplay}) &rarr;
              </a>
            </div>

            <!-- Links Territoriais Internos (Teia Territorial) -->
            <section style="padding-top:2rem;border-top:1px solid rgba(255,255,255,0.1);">
              <h2 style="font-size:1.25rem;font-weight:bold;color:#FFF;margin-bottom:1rem;">Outras Cidades Atendidas na Região dos Lagos</h2>
              <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:0.75rem;margin-bottom:2rem;">
                ${otherLocations.map((ol) => `
                  <a href="/atuacao/${ol.slug}" style="background:#141312;border:1px solid rgba(255,255,255,0.1);border-radius:0.5rem;padding:0.75rem 1rem;text-decoration:none;display:block;">
                    <div style="color:#C89467;font-size:0.6875rem;font-family:monospace;">${escapeHtml(ol.district || 'Região dos Lagos')}</div>
                    <div style="color:#FFF;font-size:0.875rem;font-weight:bold;">${escapeHtml(ol.name)}</div>
                    <div style="color:#8A8479;font-size:0.6875rem;">Ver cobertura &rarr;</div>
                  </a>`).join('')}
              </div>

              <h2 style="font-size:1.25rem;font-weight:bold;color:#FFF;margin-bottom:1rem;">Guias Técnicos Recomendados</h2>
              <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:1rem;">
                ${relatedGuides.map((g) => `
                  <a href="/guias/${g.slug}" style="background:#141312;border:1px solid rgba(255,255,255,0.1);border-radius:0.75rem;padding:1rem;text-decoration:none;display:block;">
                    <div style="color:#C89467;font-size:0.6875rem;font-family:monospace;text-transform:uppercase;">${escapeHtml(g.category)}</div>
                    <div style="color:#FFF;font-size:0.9375rem;font-weight:bold;margin:0.25rem 0;">${escapeHtml(g.title)}</div>
                    <div style="color:#8A8479;font-size:0.75rem;">Ler guia &rarr;</div>
                  </a>`).join('')}
              </div>
            </section>
          </article>
        </main>

        ${buildSharedFooterHtml()}
      </div>
    `;

    html = html.replace('<div id="root"></div>', `<div id="root">${locationStaticBody}</div>`);
    fs.writeFileSync(path.join(locDir, 'index.html'), html, 'utf8');
  }

  console.log(`[SEO] ${LOCATIONS_LIST.length} páginas de cidades pré-renderizadas com sucesso em dist/atuacao/<slug>/index.html.`);
}

// 6. Pré-renderiza cada um dos 3 Memoriais de Obras em dist/obras/<slug>/index.html
function prerenderProjects(baseTemplateHtml: string): void {
  for (const proj of PROJECTS_MEMORIAL) {
    const projDir = path.join(distDir, 'obras', proj.slug);
    fs.mkdirSync(projDir, { recursive: true });

    const canonicalUrl = `https://vitticonstrucoes.com.br/obras/${proj.slug}`;
    const pageTitle = `${proj.title} — Memorial Técnico | Grupo Vitti`;
    const pageDesc = `${proj.type} em ${proj.city}. ${proj.tag}. Memorial descritivo de engenharia costeira com Fck, impermeabilização e esquadrias navais.`;

    let html = baseTemplateHtml;

    // Substitui title
    html = html.replace(/<title>.*?<\/title>/i, `<title>${escapeHtml(pageTitle)}</title>`);

    // Substitui meta description
    html = html.replace(
      /<meta\s+name="description"\s+content=".*?"\s*\/?>/i,
      `<meta name="description" content="${escapeHtml(pageDesc)}" />`
    );

    // Substitui canonical
    html = html.replace(
      /<link\s+rel="canonical"\s+href=".*?"\s*\/?>/i,
      `<link rel="canonical" href="${canonicalUrl}" />`
    );

    // Substitui OpenGraph
    html = html.replace(
      /<meta\s+property="og:title"\s+content=".*?"\s*\/?>/i,
      `<meta property="og:title" content="${escapeHtml(pageTitle)}" />`
    );
    html = html.replace(
      /<meta\s+property="og:description"\s+content=".*?"\s*\/?>/i,
      `<meta property="og:description" content="${escapeHtml(pageDesc)}" />`
    );
    html = html.replace(
      /<meta\s+property="og:url"\s+content=".*?"\s*\/?>/i,
      `<meta property="og:url" content="${canonicalUrl}" />`
    );

    // Substitui Twitter Card
    html = html.replace(
      /<meta\s+name="twitter:title"\s+content=".*?"\s*\/?>/i,
      `<meta name="twitter:title" content="${escapeHtml(pageTitle)}" />`
    );
    html = html.replace(
      /<meta\s+name="twitter:description"\s+content=".*?"\s*\/?>/i,
      `<meta name="twitter:description" content="${escapeHtml(pageDesc)}" />`
    );

    // Substitui o JSON-LD da Home por CreativeWork + BreadcrumbList
    const projectJsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'CreativeWork',
          '@id': `${canonicalUrl}#project`,
          headline: proj.title,
          description: pageDesc,
          image: proj.img,
          url: canonicalUrl,
          author: {
            '@type': 'Organization',
            name: 'Grupo Vitti',
            url: 'https://vitticonstrucoes.com.br/',
          },
          publisher: {
            '@type': 'Organization',
            name: 'Grupo Vitti',
            url: 'https://vitticonstrucoes.com.br/',
          },
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Grupo Vitti',
              item: 'https://vitticonstrucoes.com.br/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Acervo & Obras',
              item: 'https://vitticonstrucoes.com.br/#obras',
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: proj.title,
              item: canonicalUrl,
            },
          ],
        },
      ],
    };

    html = html.replace(
      /<script\s+type="application\/ld\+json">[\s\S]*?<\/script>/i,
      `<script type="application/ld+json">\n${JSON.stringify(projectJsonLd, null, 2)}\n    </script>`
    );

    const otherProjects = PROJECTS_MEMORIAL.filter((p) => p.slug !== proj.slug);
    const relatedServices = SERVICES_LIST.slice(0, 3);
    const relatedGuides = ARTICLES.slice(0, 3);

    const projectStaticBody = `
      <div style="background:#0D0C0B;color:#F5F2EB;min-height:100vh;font-family:system-ui,-apple-system,sans-serif;">
        <header style="background:#0D0C0B;color:#FFF;padding:1.25rem 1.5rem;border-bottom:1px solid rgba(255,255,255,0.1);display:flex;justify-content:space-between;align-items:center;">
          <a href="/" style="color:#FFF;text-decoration:none;font-weight:bold;">&larr; Voltar para Grupo Vitti</a>
          <a href="${whatsappLink(proj.whatsappPrompt)}" style="background:#25D366;color:#0A2412;padding:0.5rem 1rem;border-radius:9999px;font-weight:bold;text-decoration:none;font-size:0.875rem;">Orçar neste Padrão</a>
        </header>

        <main style="max-width:860px;margin:0 auto;padding:3rem 1.5rem;line-height:1.7;">
          <nav aria-label="Breadcrumb" style="margin-bottom:2rem;font-size:0.75rem;font-family:monospace;color:#8A8479;">
            <a href="/" style="color:#8A8479;text-decoration:none;">Início</a> /
            <a href="/#obras" style="color:#8A8479;text-decoration:none;">Acervo &amp; Obras</a> /
            <span style="color:#C89467;">${escapeHtml(proj.title)}</span>
          </nav>

          <article>
            <div style="margin-bottom:1rem;font-size:0.8125rem;color:#C89467;text-transform:uppercase;font-weight:bold;letter-spacing:1px;">
              <span>${escapeHtml(proj.city)}</span> · <span>${escapeHtml(proj.type)}</span> · <span>${escapeHtml(proj.tag)}</span>
            </div>

            <h1 style="font-size:2.25rem;font-weight:800;color:#FFFFFF;line-height:1.25;margin-bottom:1.5rem;">
              ${escapeHtml(proj.title)}
            </h1>

            <div style="margin-bottom:2rem;border-radius:1rem;overflow:hidden;border:1px solid rgba(255,255,255,0.1);">
              <img src="${escapeHtml(proj.img)}" alt="${escapeHtml(proj.imageAlt)}" style="width:100%;height:auto;display:block;" loading="lazy" />
            </div>

            <div style="background:#141312;border:1px solid rgba(255,255,255,0.1);border-radius:0.75rem;padding:1.5rem;margin-bottom:2rem;">
              <h2 style="font-size:0.875rem;font-family:monospace;font-weight:bold;color:#C89467;text-transform:uppercase;margin-bottom:0.75rem;">
                Contexto Regional &amp; Terreno Recomendado
              </h2>
              <p style="color:#D8D3C9;font-size:0.9375rem;margin-bottom:1rem;">
                <strong>Localização Indicada:</strong> ${escapeHtml(proj.regionalContext)}
              </p>
              <p style="color:#B8B2A7;font-size:0.875rem;margin:0;">
                <strong>Partido Topográfico:</strong> ${escapeHtml(proj.idealTerrain)}
              </p>
            </div>

            <div style="margin-bottom:2rem;">
              <h2 style="font-size:1.25rem;font-weight:bold;color:#FFFFFF;margin-bottom:1rem;">
                Ficha Técnica &amp; Memorial Descritivo de Engenharia
              </h2>
              <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:1rem;margin-bottom:1.5rem;">
                <div style="background:#141312;border:1px solid rgba(255,255,255,0.1);padding:1rem;border-radius:0.5rem;">
                  <div style="color:#C89467;font-size:0.6875rem;font-family:monospace;text-transform:uppercase;">Resistência do Concreto</div>
                  <div style="color:#FFF;font-weight:bold;font-size:0.875rem;">${escapeHtml(proj.engineeringSpecs.fck)}</div>
                  <div style="color:#8A8479;font-size:0.75rem;">${escapeHtml(proj.engineeringSpecs.concreteNorm)}</div>
                </div>
                <div style="background:#141312;border:1px solid rgba(255,255,255,0.1);padding:1rem;border-radius:0.5rem;">
                  <div style="color:#C89467;font-size:0.6875rem;font-family:monospace;text-transform:uppercase;">Cobrimento de Armadura</div>
                  <div style="color:#FFF;font-weight:bold;font-size:0.875rem;">${escapeHtml(proj.engineeringSpecs.cobrimento)}</div>
                </div>
              </div>

              <div style="background:#141312;border:1px solid rgba(255,255,255,0.1);padding:1rem;border-radius:0.5rem;margin-bottom:1rem;">
                <div style="color:#C89467;font-size:0.6875rem;font-family:monospace;text-transform:uppercase;margin-bottom:0.25rem;">Impermeabilização Estanque</div>
                <div style="color:#D8D3C9;font-size:0.875rem;">${escapeHtml(proj.engineeringSpecs.waterproofing)}</div>
              </div>

              <div style="background:#141312;border:1px solid rgba(255,255,255,0.1);padding:1rem;border-radius:0.5rem;margin-bottom:1.5rem;">
                <div style="color:#C89467;font-size:0.6875rem;font-family:monospace;text-transform:uppercase;margin-bottom:0.25rem;">Esquadrias &amp; Aço Inox Marítimo</div>
                <div style="color:#D8D3C9;font-size:0.875rem;">${escapeHtml(proj.engineeringSpecs.framesAndInox)}</div>
              </div>

              <h3 style="font-size:0.9375rem;font-weight:bold;color:#FFF;margin-bottom:0.75rem;">Destaques Estruturais:</h3>
              <ul style="padding-left:1.25rem;margin:0 0 1.5rem 0;color:#B8B2A7;font-size:0.875rem;display:flex;flex-direction:column;gap:0.5rem;">
                ${proj.engineeringSpecs.structuralHighlights.map((hl) => `<li>${escapeHtml(hl)}</li>`).join('')}
              </ul>
            </div>

            <div style="background:#141312;border:1px solid rgba(255,255,255,0.1);border-radius:0.75rem;padding:1.5rem;margin-bottom:2.5rem;">
              <h2 style="font-size:1rem;font-weight:bold;color:#FFF;margin-bottom:0.75rem;">Fases do Cronograma Físico-Financeiro</h2>
              <div style="display:flex;flex-direction:column;gap:0.75rem;">
                ${proj.timelinePhases.map((phase) => `
                  <div style="display:flex;justify-content:space-between;border-bottom:1px solid rgba(255,255,255,0.05);padding-bottom:0.5rem;">
                    <div>
                      <strong style="color:#FFF;">${escapeHtml(phase.phase)}: </strong>
                      <span style="color:#A8A29A;font-size:0.875rem;">${escapeHtml(phase.description)}</span>
                    </div>
                    <span style="color:#C89467;font-family:monospace;font-size:0.75rem;margin-left:1rem;white-space:nowrap;">${escapeHtml(phase.duration)}</span>
                  </div>`).join('')}
              </div>
            </div>

            <div style="text-align:center;padding:2rem 0;border-top:1px solid rgba(255,255,255,0.1);margin-bottom:3rem;">
              <a href="${whatsappLink(proj.whatsappPrompt)}" style="background:#25D366;color:#0A2412;padding:1rem 2rem;border-radius:0.75rem;font-weight:bold;font-size:1.125rem;text-decoration:none;display:inline-block;">
                Orçar Obra Neste Padrão Construtivo &rarr;
              </a>
            </div>

            <!-- Outras Obras e Serviços Relacionados -->
            <section style="padding-top:2rem;border-top:1px solid rgba(255,255,255,0.1);">
              <h2 style="font-size:1.25rem;font-weight:bold;color:#FFF;margin-bottom:1rem;">Outros Memoriais de Obras</h2>
              <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:1rem;margin-bottom:2rem;">
                ${otherProjects.map((op) => `
                  <a href="/obras/${op.slug}" style="background:#141312;border:1px solid rgba(255,255,255,0.1);border-radius:0.75rem;padding:1rem;text-decoration:none;display:block;">
                    <div style="color:#C89467;font-size:0.6875rem;font-family:monospace;text-transform:uppercase;">${escapeHtml(op.city)}</div>
                    <div style="color:#FFF;font-size:0.9375rem;font-weight:bold;margin:0.25rem 0;">${escapeHtml(op.title)}</div>
                    <div style="color:#8A8479;font-size:0.75rem;">Ver memorial completo &rarr;</div>
                  </a>`).join('')}
              </div>

              <h2 style="font-size:1.25rem;font-weight:bold;color:#FFF;margin-bottom:1rem;">Serviços Relacionados</h2>
              <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:1rem;">
                ${relatedServices.map((s) => `
                  <a href="/servicos/${s.slug}" style="background:#141312;border:1px solid rgba(255,255,255,0.1);border-radius:0.75rem;padding:1rem;text-decoration:none;display:block;">
                    <div style="color:#C89467;font-size:0.6875rem;font-family:monospace;text-transform:uppercase;">${escapeHtml(s.category)}</div>
                    <div style="color:#FFF;font-size:0.875rem;font-weight:bold;margin:0.25rem 0;">${escapeHtml(s.title)}</div>
                    <div style="color:#8A8479;font-size:0.75rem;">Página técnica &rarr;</div>
                  </a>`).join('')}
              </div>
            </section>
          </article>
        </main>

        ${buildSharedFooterHtml()}
      </div>
    `;

    html = html.replace('<div id="root"></div>', `<div id="root">${projectStaticBody}</div>`);
    fs.writeFileSync(path.join(projDir, 'index.html'), html, 'utf8');
  }

  console.log(`[SEO] ${PROJECTS_MEMORIAL.length} memoriais de obras pré-renderizados com sucesso em dist/obras/<slug>/index.html.`);
}

function runPrerender(): void {
  console.log('[SEO] Iniciando processo de SSG pós-build...');

  // 1. Gera sitemaps com as 39 URLs
  generateSitemap();

  const indexPath = path.join(distDir, 'index.html');
  if (!fs.existsSync(indexPath)) {
    console.warn('[SEO] dist/index.html não encontrado! Certifique-se de rodar "vite build" antes.');
    return;
  }

  const rawIndexHtml = fs.readFileSync(indexPath, 'utf8');

  // 2. Pré-renderiza os 15 guias
  prerenderGuides(rawIndexHtml);

  // 3. Pré-renderiza os 13 serviços
  prerenderServices(rawIndexHtml);

  // 4. Pré-renderiza as 7 cidades/polos
  prerenderLocations(rawIndexHtml);

  // 5. Pré-renderiza os 3 memoriais de obras
  prerenderProjects(rawIndexHtml);

  // 6. Injeta conteúdo semântico no dist/index.html principal
  const homeWithContent = rawIndexHtml.replace(
    '<div id="root"></div>',
    `<div id="root">${buildHomeSemanticHtml()}</div>`
  );
  fs.writeFileSync(indexPath, homeWithContent, 'utf8');
  console.log('[SEO] dist/index.html enriquecido com snapshot semântico para motores de busca.');
  console.log('[SEO] Processo de pré-renderização estática (39 URLs) concluído com sucesso!');
}

runPrerender();
