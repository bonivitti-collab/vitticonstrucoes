import React, { useEffect } from 'react';
import { LocationItem, LOCATIONS_LIST } from '../data/locationsData';
import { ServiceItem, SERVICES_LIST } from '../data/servicesData';
import { Article, ARTICLES } from '../data/articles';
import { CONFIG, whatsappLink } from '../../lib/config';
import { VittiLogo } from './VittiLogo';
import { WhatsAppIcon } from './WhatsAppIcon';
import {
  ArrowLeft,
  ArrowUpRight,
  MapPin,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  HelpCircle,
  Building2,
  Wrench,
  BookOpen,
  Instagram,
  Facebook,
} from 'lucide-react';

interface DedicatedLocationPageProps {
  location: LocationItem;
  onBackToHome: () => void;
  onSelectLocation: (loc: LocationItem) => void;
  onSelectService: (srv: ServiceItem) => void;
  onSelectGuide: (art: Article) => void;
}

export const DedicatedLocationPage: React.FC<DedicatedLocationPageProps> = ({
  location,
  onBackToHome,
  onSelectLocation,
  onSelectService,
  onSelectGuide,
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [location.slug]);

  // Other cities
  const otherLocations = LOCATIONS_LIST.filter((l) => l.slug !== location.slug);

  // Relevant guides
  const relatedGuides = ARTICLES.slice(0, 4);

  return (
    <div className="min-h-screen bg-[#0D0C0B] text-[#F5F2EB] selection:bg-[#C89467] selection:text-[#0D0C0B] font-sans antialiased flex flex-col justify-between">
      {/* ─── HEADER DE NAVEGAÇÃO ─── */}
      <header className="sticky top-0 z-40 bg-[#0D0C0B]/95 backdrop-blur-md border-b border-white/10 pt-[env(safe-area-inset-top,0px)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 h-18 sm:h-20 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                onBackToHome();
              }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs sm:text-sm font-medium text-[#B8B2A7] hover:text-white transition-colors border border-white/10"
              aria-label="Voltar para a página inicial"
            >
              <ArrowLeft className="w-4 h-4 text-[#C89467]" />
              <span className="hidden sm:inline">Voltar ao Início</span>
              <span className="sm:hidden">Início</span>
            </a>
          </div>

          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onBackToHome();
            }}
            className="group focus-visible:outline-none"
            aria-label="Grupo Vitti — Página Inicial"
          >
            <VittiLogo variant="official-with-subtitle" theme="light" />
          </a>

          <a
            href={whatsappLink(location.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-[#0A2412] font-semibold text-xs sm:text-sm transition-transform active:scale-95 shadow-md shadow-[#25D366]/10"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span className="hidden sm:inline">Orçar em {location.name}</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>
        </div>
      </header>

      {/* ─── CONTEÚDO PRINCIPAL (SEMANTIC & SEO) ─── */}
      <main className="max-w-4xl mx-auto px-4 sm:px-8 py-10 sm:py-16 flex-1 w-full">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#8A8479]">
            <li>
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  onBackToHome();
                }}
                className="hover:text-[#C89467] transition-colors"
              >
                Início
              </a>
            </li>
            <li>/</li>
            <li>
              <span className="text-[#8A8479]">Cidades Atendidas</span>
            </li>
            <li>/</li>
            <li className="text-[#C89467] font-medium" aria-current="page">
              {location.name}
            </li>
          </ol>
        </nav>

        <article>
          {/* Badge & Metadados Territoriais */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide uppercase bg-[#C89467]/15 text-[#C89467] border border-[#C89467]/30">
              <MapPin className="w-3.5 h-3.5" />
              {location.name} {location.district ? `· ${location.district}` : ''}
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-white/5 text-[#A8A29A] border border-white/10">
              <ShieldCheck className="w-3.5 h-3.5 text-[#25D366]" />
              Equipe Própria &amp; Garantia Formal
            </span>
          </div>

          {/* Único H1 da Página */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4 tracking-tight">
            {location.title}
          </h1>

          {/* Subtítulo / Lead */}
          <p className="text-lg sm:text-xl text-[#B8B2A7] leading-relaxed mb-8 border-l-2 border-[#C89467] pl-4">
            {location.subtitle}
          </p>

          {/* Box de Desafios Geotécnicos & Climáticos Locais */}
          <section className="mb-12 bg-[#141312] border border-white/10 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#C89467] uppercase tracking-wider mb-3">
              <Building2 className="w-4 h-4" />
              Particularidades Geotécnicas e Desafios Locais em {location.name}
            </div>
            <p className="text-[#D8D3C9] text-base leading-relaxed mb-6">
              {location.localChallenges}
            </p>

            <h2 className="text-sm font-mono font-bold text-white uppercase tracking-wider mb-4">
              Diferenciais de Engenharia do Grupo Vitti para {location.name}:
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {location.technicalDifferentiators.map((diff, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 bg-white/[0.02] border border-white/5 rounded-xl p-3.5 text-sm text-[#B8B2A7]"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#C89467] shrink-0 mt-0.5" />
                  <span>{diff}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Bairros e Condomínios Atendidos */}
          <section className="mb-12">
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-5 h-5 text-[#C89467]" />
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Bairros e Condomínios Atendidos em {location.name}
              </h2>
            </div>
            <p className="text-sm text-[#8A8479] mb-4">
              Atendimento técnico com deslocamento rápido de equipes volantes nos principais polos residenciais e comerciais:
            </p>
            <div className="flex flex-wrap gap-2">
              {location.neighborhoodsList.map((bairro, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-xs sm:text-sm text-[#D8D3C9]"
                >
                  {bairro}
                </span>
              ))}
            </div>
          </section>

          {/* Lista Completa dos 13 Serviços com Links */}
          <section className="mb-14">
            <div className="flex items-center justify-between gap-4 mb-4">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white">
                  13 Serviços Especializados Disponíveis em {location.name}
                </h2>
                <p className="text-sm text-[#8A8479]">
                  Contrate com preço fechado, garantia técnica e emissão de nota fiscal.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SERVICES_LIST.map((srv) => (
                <div
                  key={srv.slug}
                  className="bg-[#141312] border border-white/10 rounded-xl p-5 flex flex-col justify-between hover:border-[#C89467]/50 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono text-[#C89467] mb-2">
                      <span>{srv.category}</span>
                      <span className="text-[#8A8479]">Nº {srv.num}</span>
                    </div>
                    <h3 className="text-base font-bold text-white mb-2">
                      <a
                        href={`/servicos/${srv.slug}`}
                        onClick={(e) => {
                          e.preventDefault();
                          onSelectService(srv);
                        }}
                        className="hover:text-[#C89467] transition-colors"
                      >
                        {srv.title}
                      </a>
                    </h3>
                    <p className="text-xs text-[#A8A29A] leading-relaxed mb-4">
                      {srv.subtitle}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-white/5">
                    <a
                      href={`/servicos/${srv.slug}`}
                      onClick={(e) => {
                        e.preventDefault();
                        onSelectService(srv);
                      }}
                      className="text-xs text-[#C89467] font-semibold hover:underline inline-flex items-center gap-1"
                    >
                      Página Técnica &rarr;
                    </a>
                    <a
                      href={whatsappLink(`Olá! Gostaria de um orçamento para o serviço de ${srv.title} em ${location.name}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#25D366] font-semibold hover:underline"
                    >
                      Orçar no WhatsApp
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Perguntas Frequentes Locais */}
          {location.faq && location.faq.length > 0 && (
            <section className="mb-12 bg-[#141312] border border-white/10 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#C89467] uppercase tracking-wider mb-4">
                <HelpCircle className="w-4 h-4" />
                Perguntas Frequentes sobre Obras e Manutenção em {location.name}
              </div>
              <div className="space-y-4">
                {location.faq.map((item, idx) => (
                  <div key={idx} className="border-b border-white/5 pb-4 last:border-b-0 last:pb-0">
                    <h3 className="text-base font-bold text-white mb-1.5">{item.question}</h3>
                    <p className="text-sm text-[#A8A29A] leading-relaxed">{item.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Banner de Conversão WhatsApp */}
          <div className="bg-gradient-to-r from-[#141312] to-[#1a1816] border border-[#25D366]/30 rounded-2xl p-6 sm:p-8 text-center mb-14 shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-2">
              Precisa de Construção, Reforma ou Reparo em {location.name}?
            </h2>
            <p className="text-sm text-[#B8B2A7] max-w-xl mx-auto mb-6">
              Fale diretamente com nossa equipe técnica pelo WhatsApp. Atendimento no mesmo dia para emergências e visita técnica especializada com preço fechado.
            </p>
            <a
              href={whatsappLink(location.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-[#0A2412] font-bold text-base transition-transform active:scale-95 shadow-md shadow-[#25D366]/20"
            >
              <WhatsAppIcon className="w-5 h-5" />
              <span>Chamar no WhatsApp ({CONFIG.whatsappDisplay})</span>
            </a>
          </div>

          {/* Teia Territorial: Outras Cidades Atendidas */}
          <section className="pt-8 border-t border-white/10">
            <h2 className="text-lg font-bold text-white mb-4">
              Outras Cidades e Polos Atendidos na Região dos Lagos
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              {otherLocations.map((other) => (
                <a
                  key={other.slug}
                  href={`/atuacao/${other.slug}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectLocation(other);
                  }}
                  className="bg-[#141312] border border-white/10 rounded-lg p-3 hover:border-[#C89467]/50 transition-colors text-center"
                >
                  <div className="text-xs text-[#C89467] font-mono">{other.district || 'Região dos Lagos'}</div>
                  <div className="text-sm font-semibold text-white mt-1">{other.name}</div>
                  <div className="text-[11px] text-[#8A8479] mt-1">Ver cobertura técnica &rarr;</div>
                </a>
              ))}
            </div>

            <h2 className="text-lg font-bold text-white mb-4">
              Guias Técnicos Recomendados
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {relatedGuides.map((guide) => (
                <a
                  key={guide.slug}
                  href={`/guias/${guide.slug}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectGuide(guide);
                  }}
                  className="bg-[#141312] border border-white/10 rounded-lg p-3.5 hover:border-[#C89467]/50 transition-colors"
                >
                  <div className="text-xs text-[#C89467] font-mono">{guide.category}</div>
                  <div className="text-sm font-semibold text-white mt-1">{guide.title}</div>
                  <div className="text-xs text-[#8A8479] mt-1 line-clamp-1">{guide.problemSummary}</div>
                </a>
              ))}
            </div>
          </section>
        </article>
      </main>

      {/* ─── FOOTER INSTITUCIONAL COM LINKS TERRITORIAIS ─── */}
      <footer className="border-t border-white/10 bg-[#080707] py-10 px-4 sm:px-8 mt-12 text-[#8A8479]">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  onBackToHome();
                }}
                className="group focus-visible:outline-none"
              >
                <VittiLogo variant="official-with-subtitle" theme="light" />
              </a>
              <div className="text-xs text-[#888] font-mono mt-1">
                CNPJ {CONFIG.cnpj} · {CONFIG.regiao}
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs">
              <a
                href={CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#B8B2A7] hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#C89467]" />
                <span>@{CONFIG.instagram}</span>
              </a>
              <a
                href={CONFIG.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#B8B2A7] hover:text-white transition-colors"
              >
                <Facebook className="w-4 h-4 text-[#C89467]" />
                <span>Facebook</span>
              </a>
            </div>
          </div>

          {/* Links Internos Reais para as 7 Cidades */}
          <div className="border-t border-white/5 pt-4">
            <p className="text-xs text-[#A8A29A] mb-2 font-mono">Cobertura Territorial Oficial na Região dos Lagos:</p>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs">
              {LOCATIONS_LIST.map((loc) => (
                <a
                  key={loc.slug}
                  href={`/atuacao/${loc.slug}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectLocation(loc);
                  }}
                  className="text-[#C89467] hover:underline"
                >
                  {loc.name}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#666] border-t border-white/5 pt-4">
            <div>
              © {new Date().getFullYear()} {CONFIG.siteName}. Todos os direitos reservados.
            </div>
            <div>
              Engenharia, Reformas, Pintura Anti-Maresia &amp; Manutenção
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
