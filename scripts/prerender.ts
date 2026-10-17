import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { ARTICLES } from '../src/data/articles.ts';
import { PROJECTS_MEMORIAL } from '../src/data/projectsData.ts';
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

// 1. Gera o sitemap.xml com Home + 10 Guias
function generateSitemap(): void {
  const today = formatDateISO();
  const urls: { loc: string; lastmod: string; changefreq: string; priority: string }[] = [
    {
      loc: 'https://vitticonstrucoes.com.br/',
      lastmod: today,
      changefreq: 'weekly',
      priority: '1.0',
    },
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
    <div style="max-w:1280px;margin:0 auto;display:flex;justify-content:space-between;align-items:center;">
      <a href="/" style="color:#FFF;text-decoration:none;font-weight:bold;font-size:1.25rem;">GRUPO VITTI</a>
      <nav style="display:flex;gap:1.5rem;font-size:0.875rem;">
        <a href="#sobre" style="color:#B8B2A7;text-decoration:none;">Sobre Nós</a>
        <a href="#servicos" style="color:#B8B2A7;text-decoration:none;">Serviços</a>
        <a href="#obras" style="color:#B8B2A7;text-decoration:none;">Conceito &amp; Obras</a>
        <a href="#artigos" style="color:#C89467;text-decoration:none;">10 Guias Práticos</a>
        <a href="#contato" style="color:#B8B2A7;text-decoration:none;">Contato</a>
      </nav>
      <a href="${whatsappLink()}" style="background:#25D366;color:#0A2412;padding:0.5rem 1rem;border-radius:9999px;font-weight:bold;text-decoration:none;font-size:0.875rem;">WhatsApp ${CONFIG.whatsappDisplay}</a>
    </div>
  </header>

  <main style="background:#0D0C0B;color:#F5F2EB;">
    <section style="padding:4rem 1.5rem;text-align:center;max-width:960px;margin:0 auto;">
      <p style="color:#C89467;font-family:monospace;font-size:0.875rem;text-transform:uppercase;letter-spacing:1px;margin-bottom:1rem;">
        Região dos Lagos · Cabo Frio · Tamoios · Búzios · Arraial do Cabo
      </p>
      <h1 style="font-size:2.5rem;line-height:1.2;font-weight:800;color:#FFFFFF;margin-bottom:1.5rem;">
        Construção Residencial de Alto Padrão e Reformas com Preço Fechado e Blindagem Anti-Maresia
      </h1>
      <p style="font-size:1.125rem;color:#B8B2A7;line-height:1.6;margin-bottom:2rem;">
        Assumimos sua obra completa no regime Turnkey (chave na mão): do estudo de viabilidade, sondagem e projeto executivo à entrega final das chaves. Orçamento analítico auditável e zero surpresas financeiras.
      </p>
      <div style="display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;">
        <a href="#contato" style="background:#25D366;color:#0A2412;padding:0.875rem 1.75rem;border-radius:0.75rem;font-weight:bold;text-decoration:none;">Solicitar Orçamento de Engenharia</a>
        <a href="#artigos" style="background:rgba(255,255,255,0.05);color:#FFF;border:1px solid rgba(255,255,255,0.15);padding:0.875rem 1.75rem;border-radius:0.75rem;text-decoration:none;">Consultar os 10 Guias Técnicos</a>
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
            <div style="background:#141312;border:1px solid rgba(255,255,255,0.1);border-radius:1rem;padding:1.5rem;">
              <span style="color:#C89467;font-family:monospace;font-size:0.75rem;font-weight:bold;text-transform:uppercase;">${escapeHtml(p.city)}</span>
              <h3 style="color:#FFF;font-size:1.25rem;font-weight:bold;margin:0.5rem 0;">${escapeHtml(p.title)}</h3>
              <p style="color:#8A8479;font-size:0.875rem;margin-bottom:1rem;">${escapeHtml(p.type)} · ${escapeHtml(p.tag)}</p>
              <p style="color:#B8B2A7;font-size:0.8125rem;line-height:1.5;margin-bottom:1rem;">${escapeHtml(p.idealTerrain)}</p>
              <a href="${whatsappLink(p.whatsappPrompt)}" style="color:#25D366;font-size:0.875rem;font-weight:600;text-decoration:none;">Orçar neste padrão no WhatsApp &rarr;</a>
            </div>`
          ).join('')}
        </div>
      </div>
    </section>

    <section id="artigos" style="padding:4rem 1.5rem;background:#141312;border-top:1px solid rgba(255,255,255,0.1);">
      <div style="max-width:1200px;margin:0 auto;">
        <h2 style="font-size:1.875rem;font-weight:700;color:#FFF;margin-bottom:0.5rem;">Os 10 Guias Práticos de Engenharia para a Região dos Lagos</h2>
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

    <section id="contato" style="padding:4rem 1.5rem;background:#0D0C0B;border-top:1px solid rgba(255,255,255,0.1);">
      <div style="max-width:1200px;margin:0 auto;text-align:center;">
        <h2 style="font-size:2rem;font-weight:700;color:#FFF;margin-bottom:1rem;">Tire seu projeto do papel com quem entende de litoral</h2>
        <p style="color:#B8B2A7;max-width:600px;margin:0 auto 2rem auto;line-height:1.6;">
          Atendimento técnico em Cabo Frio, Tamoios (2º Distrito), Búzios, Arraial do Cabo, São Pedro da Aldeia, Iguaba Grande e Rio das Ostras.
        </p>
        <a href="${whatsappLink()}" style="background:#25D366;color:#0A2412;padding:1rem 2rem;border-radius:0.75rem;font-weight:bold;font-size:1.125rem;text-decoration:none;display:inline-block;">
          Falar Diretamente pelo WhatsApp (${CONFIG.whatsappDisplay})
        </a>
      </div>
    </section>
  </main>

  <footer style="background:#080707;color:#8A8479;padding:2rem 1.5rem;border-top:1px solid rgba(255,255,255,0.1);font-size:0.8125rem;text-align:center;">
    <p>CNPJ ${CONFIG.cnpj} · Grupo Vitti Construção, Reforma &amp; Tecnologia · Região dos Lagos (RJ)</p>
    <p style="margin-top:0.5rem;color:#666;">Cabo Frio · Tamoios (2º Distrito) · Búzios · Arraial do Cabo · São Pedro da Aldeia · Iguaba Grande · Rio das Ostras</p>
  </footer>
  `;
}

// 3. Pré-renderiza cada um dos 10 Guias em dist/guias/<slug>/index.html
function prerenderGuides(baseTemplateHtml: string): void {
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

    // Injeta JSON-LD de Artigo no Schema.org existente
    const articleJsonLd = {
      '@type': 'Article',
      '@id': `${canonicalUrl}#article`,
      headline: art.title,
      description: art.subtitle,
      inLanguage: 'pt-BR',
      mainEntityOfPage: canonicalUrl,
      publisher: {
        '@id': 'https://vitticonstrucoes.com.br/#organization',
      },
      author: {
        '@type': 'Organization',
        name: 'Grupo Vitti',
      },
      articleSection: art.category,
      about: [
        { '@type': 'Thing', name: 'Construção Civil Litorânea' },
        { '@type': 'Place', name: 'Região dos Lagos' },
      ],
    };

    html = html.replace(
      '</script>',
      `</script>\n    <script type="application/ld+json">\n${JSON.stringify(articleJsonLd, null, 2)}\n    </script>`
    );

    // Monta o conteúdo estático completo do artigo para ser injetado em <div id="root">
    const articleStaticBody = `
      <div style="background:#F8F6F2;color:#171614;min-height:100vh;font-family:system-ui,-apple-system,sans-serif;">
        <header style="background:#0D0C0B;color:#FFF;padding:1rem 1.5rem;display:flex;justify-content:space-between;align-items:center;">
          <a href="/" style="color:#FFF;text-decoration:none;font-weight:bold;">&larr; Voltar para Grupo Vitti</a>
          <a href="${whatsappLink(art.whatsappPrompt)}" style="background:#25D366;color:#0A2412;padding:0.5rem 1rem;border-radius:9999px;font-weight:bold;text-decoration:none;font-size:0.875rem;">Falar no WhatsApp</a>
        </header>

        <article style="max-width:860px;margin:0 auto;padding:3rem 1.5rem;line-height:1.7;">
          <div style="margin-bottom:1.5rem;font-size:0.8125rem;color:#7A756E;text-transform:uppercase;font-weight:bold;letter-spacing:1px;">
            <span>${escapeHtml(art.category)}</span> · <span>${escapeHtml(art.readTime)}</span>
          </div>

          <h1 style="font-size:2.25rem;font-weight:800;color:#171614;line-height:1.25;margin-bottom:1rem;">
            ${escapeHtml(art.title)}
          </h1>

          <p style="font-size:1.125rem;color:#66615B;line-height:1.6;margin-bottom:2rem;">
            ${escapeHtml(art.subtitle)}
          </p>

          <div style="background:#EFECE4;border:1px solid #DDD8CD;border-radius:0.75rem;padding:1.5rem;margin-bottom:2.5rem;">
            <div style="font-size:0.75rem;font-family:monospace;font-weight:bold;color:#9E693B;text-transform:uppercase;margin-bottom:0.5rem;">
              A Dor Comum do Proprietário
            </div>
            <p style="color:#383531;font-size:0.9375rem;margin:0;">
              ${escapeHtml(art.problemSummary)}
            </p>
          </div>

          <div style="margin-bottom:2.5rem;">
            <h2 style="font-size:1rem;font-family:monospace;font-weight:bold;color:#7A756E;text-transform:uppercase;margin-bottom:1rem;">
              Pontos Fundamentais de Engenharia
            </h2>
            <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:0.75rem;">
              ${art.highlights
                .map(
                  (h) => `
                <li style="background:#FFF;border:1px solid #E5E0D5;padding:0.875rem 1rem;border-radius:0.5rem;font-size:0.875rem;color:#2C2925;">
                  &check; ${escapeHtml(h)}
                </li>`
                )
                .join('')}
            </ul>
          </div>

          <div style="display:flex;flex-direction:column;gap:2rem;margin-bottom:2.5rem;">
            ${art.content
              .map(
                (sec) => `
              <section>
                <h2 style="font-size:1.5rem;font-weight:700;color:#171614;margin-bottom:0.75rem;">
                  ${escapeHtml(sec.sectionTitle)}
                </h2>
                ${sec.paragraphs
                  .map((p) => `<p style="color:#423E3A;font-size:1rem;margin-bottom:1rem;">${escapeHtml(p)}</p>`)
                  .join('')}
              </section>`
              )
              .join('')}
          </div>

          <div style="background:#FFF;border:1px solid #E5E0D5;border-radius:0.75rem;padding:1.5rem;margin-bottom:2.5rem;">
            <h2 style="font-size:0.875rem;font-family:monospace;font-weight:bold;color:#9E693B;text-transform:uppercase;margin-bottom:1rem;">
              Checklist Prático do Grupo Vitti
            </h2>
            <ul style="padding-left:1.25rem;margin:0;color:#423E3A;font-size:0.875rem;display:flex;flex-direction:column;gap:0.5rem;">
              ${art.practicalTips.map((tip) => `<li>${escapeHtml(tip)}</li>`).join('')}
            </ul>
          </div>

          <div style="text-align:center;padding:2rem 0;">
            <a href="${whatsappLink(art.whatsappPrompt)}" style="background:#25D366;color:#0A2412;padding:1rem 2rem;border-radius:0.75rem;font-weight:bold;font-size:1.125rem;text-decoration:none;display:inline-block;">
              Tirar Dúvidas sobre Este Tema no WhatsApp &rarr;
            </a>
          </div>
        </article>
      </div>
    `;

    // Injeta dentro de <div id="root">
    html = html.replace('<div id="root"></div>', `<div id="root">${articleStaticBody}</div>`);

    fs.writeFileSync(path.join(guideDir, 'index.html'), html, 'utf8');
  }

  console.log(`[SEO] ${ARTICLES.length} guias pré-renderizados com sucesso em dist/guias/<slug>/index.html.`);
}

function runPrerender(): void {
  console.log('[SEO] Iniciando processo de SSG pós-build...');

  // 1. Gera sitemaps
  generateSitemap();

  const indexPath = path.join(distDir, 'index.html');
  if (!fs.existsSync(indexPath)) {
    console.warn('[SEO] dist/index.html não encontrado! Certifique-se de rodar "vite build" antes.');
    return;
  }

  const rawIndexHtml = fs.readFileSync(indexPath, 'utf8');

  // 2. Pré-renderiza os 10 guias
  prerenderGuides(rawIndexHtml);

  // 3. Injeta conteúdo semântico no dist/index.html principal
  const homeWithContent = rawIndexHtml.replace(
    '<div id="root"></div>',
    `<div id="root">${buildHomeSemanticHtml()}</div>`
  );
  fs.writeFileSync(indexPath, homeWithContent, 'utf8');
  console.log('[SEO] dist/index.html enriquecido com snapshot semântico para motores de busca.');
  console.log('[SEO] Processo de pré-renderização estática concluído com sucesso!');
}

runPrerender();
