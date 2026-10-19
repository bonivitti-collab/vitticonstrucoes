import React, { useEffect } from 'react';
import { ProjectMemorial, PROJECTS_MEMORIAL } from '../data/projectsData';
import { ServiceItem, SERVICES_LIST } from '../data/servicesData';
import { Article, ARTICLES } from '../data/articles';
import { LocationItem, LOCATIONS_LIST } from '../data/locationsData';
import { CONFIG, whatsappLink } from '../../lib/config';
import { VittiLogo } from './VittiLogo';
import { WhatsAppIcon } from './WhatsAppIcon';
import {
  ArrowLeft,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Sparkles,
  Building,
  Layers,
  Ruler,
  Calendar,
  Instagram,
  Facebook,
} from 'lucide-react';

interface DedicatedProjectPageProps {
  project: ProjectMemorial;
  onBackToHome: () => void;
  onSelectProject: (proj: ProjectMemorial) => void;
  onSelectService: (srv: ServiceItem) => void;
  onSelectGuide: (art: Article) => void;
  onSelectLocation: (loc: LocationItem) => void;
}

export const DedicatedProjectPage: React.FC<DedicatedProjectPageProps> = ({
  project,
  onBackToHome,
  onSelectProject,
  onSelectService,
  onSelectGuide,
  onSelectLocation,
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [project.slug]);

  const otherProjects = PROJECTS_MEMORIAL.filter((p) => p.slug !== project.slug);
  const relatedServices = SERVICES_LIST.slice(0, 3);
  const relatedGuides = ARTICLES.slice(0, 3);

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
            href={whatsappLink(project.whatsappPrompt)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-[#0A2412] font-semibold text-xs sm:text-sm transition-transform active:scale-95 shadow-md shadow-[#25D366]/10"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span className="hidden sm:inline">Orçar neste Padrão</span>
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
              <a
                href="/#obras"
                onClick={(e) => {
                  e.preventDefault();
                  onBackToHome();
                }}
                className="hover:text-[#C89467] transition-colors"
              >
                Acervo &amp; Obras
              </a>
            </li>
            <li>/</li>
            <li className="text-[#C89467] font-medium" aria-current="page">
              {project.title}
            </li>
          </ol>
        </nav>

        <article>
          {/* Badge & Metadados */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide uppercase bg-[#C89467]/15 text-[#C89467] border border-[#C89467]/30">
              <Building className="w-3.5 h-3.5" />
              {project.city}
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-white/5 text-[#A8A29A] border border-white/10">
              {project.type}
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-white/5 text-[#A8A29A] border border-white/10">
              {project.tag}
            </span>
          </div>

          {/* Único H1 da Página */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6 tracking-tight">
            {project.title}
          </h1>

          {/* Imagem Principal do Projeto */}
          <div className="mb-8 rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative aspect-[16/9]">
            <img
              src={project.img}
              alt={project.imageAlt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Contexto Regional & Terreno Ideal */}
          <section className="mb-10 bg-[#141312] border border-white/10 rounded-2xl p-6 sm:p-8">
            <h2 className="text-xs font-mono font-bold text-[#C89467] uppercase tracking-wider mb-2">
              Contexto Regional &amp; Terreno Recomendado
            </h2>
            <p className="text-[#D8D3C9] text-base leading-relaxed mb-4">
              <strong>Localização Indicada:</strong> {project.regionalContext}
            </p>
            <p className="text-[#A8A29A] text-sm leading-relaxed">
              <strong>Partido Topográfico:</strong> {project.idealTerrain}
            </p>
          </section>

          {/* Ficha Técnica & Especificações de Engenharia */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">
              Memorial Descritivo &amp; Especificações de Engenharia
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-[#141312] border border-white/10 rounded-xl p-4">
                <div className="text-xs font-mono text-[#C89467] uppercase mb-1">Resistência do Concreto</div>
                <div className="text-white font-semibold text-sm">{project.engineeringSpecs.fck}</div>
                <div className="text-xs text-[#8A8479] mt-1">{project.engineeringSpecs.concreteNorm}</div>
              </div>
              <div className="bg-[#141312] border border-white/10 rounded-xl p-4">
                <div className="text-xs font-mono text-[#C89467] uppercase mb-1">Cobrimento de Armadura</div>
                <div className="text-white font-semibold text-sm">{project.engineeringSpecs.cobrimento}</div>
              </div>
              <div className="bg-[#141312] border border-white/10 rounded-xl p-4 sm:col-span-2">
                <div className="text-xs font-mono text-[#C89467] uppercase mb-1">Protocolo de Impermeabilização</div>
                <div className="text-sm text-[#D8D3C9] leading-relaxed">{project.engineeringSpecs.waterproofing}</div>
              </div>
              <div className="bg-[#141312] border border-white/10 rounded-xl p-4 sm:col-span-2">
                <div className="text-xs font-mono text-[#C89467] uppercase mb-1">Esquadrias &amp; Aço Inox Marítimo</div>
                <div className="text-sm text-[#D8D3C9] leading-relaxed">{project.engineeringSpecs.framesAndInox}</div>
              </div>
            </div>

            <h3 className="text-base font-bold text-white mb-3">Destaques Estruturais:</h3>
            <ul className="space-y-2 mb-8">
              {project.engineeringSpecs.structuralHighlights.map((hl, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-sm text-[#B8B2A7] bg-white/[0.02] border border-white/5 rounded-lg p-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#C89467] shrink-0 mt-0.5" />
                  <span>{hl}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Flexibilidade de Metragem & Cronograma */}
          <section className="mb-10 bg-[#141312] border border-white/10 rounded-2xl p-6 sm:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#C89467] uppercase mb-1">
                  <Ruler className="w-4 h-4" />
                  Faixa de Metragem
                </div>
                <div className="text-xl font-bold text-white">{project.metragensRange}</div>
              </div>
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#C89467] uppercase mb-1">
                  <Clock className="w-4 h-4" />
                  Prazo Médio de Execução
                </div>
                <div className="text-xl font-bold text-[#25D366]">{project.estimatedDuration}</div>
              </div>
            </div>

            <p className="text-sm text-[#B8B2A7] leading-relaxed mb-6">
              {project.metragemFlexibility}
            </p>

            <h3 className="text-sm font-mono font-bold text-white uppercase tracking-wider mb-4">
              Fases Construtivas (Cronograma Físico-Financeiro):
            </h3>
            <div className="space-y-3">
              {project.timelinePhases.map((phase, idx) => (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-white/[0.02] border border-white/5 rounded-xl p-3.5 text-sm"
                >
                  <div>
                    <span className="font-bold text-white">{phase.phase}: </span>
                    <span className="text-[#A8A29A]">{phase.description}</span>
                  </div>
                  <span className="text-xs font-mono text-[#C89467] font-semibold shrink-0">
                    {phase.duration}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Banner de Conversão WhatsApp */}
          <div className="bg-gradient-to-r from-[#141312] to-[#1a1816] border border-[#25D366]/30 rounded-2xl p-6 sm:p-8 text-center mb-14 shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-2">
              Deseja Construir ou Adaptar Este Memorial?
            </h2>
            <p className="text-sm text-[#B8B2A7] max-w-xl mx-auto mb-6">
              Adaptamos o partido estrutural e arquitetônico para o seu terreno com orçamento fechado e cronograma garantido em contrato.
            </p>
            <a
              href={whatsappLink(project.whatsappPrompt)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-[#0A2412] font-bold text-base transition-transform active:scale-95 shadow-md shadow-[#25D366]/20"
            >
              <WhatsAppIcon className="w-5 h-5" />
              <span>Conversar com o Engenheiro Responsável</span>
            </a>
          </div>

          {/* Links Internos Relacionados */}
          <section className="pt-8 border-t border-white/10">
            <h2 className="text-lg font-bold text-white mb-4">
              Outros Memoriais de Obras
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {otherProjects.map((p) => (
                <a
                  key={p.slug}
                  href={`/obras/${p.slug}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectProject(p);
                  }}
                  className="bg-[#141312] border border-white/10 rounded-xl p-4 hover:border-[#C89467]/50 transition-colors flex gap-4"
                >
                  <img
                    src={p.img}
                    alt={p.imageAlt}
                    className="w-20 h-20 rounded-lg object-cover shrink-0"
                    loading="lazy"
                  />
                  <div>
                    <span className="text-xs text-[#C89467] font-mono">{p.city}</span>
                    <h3 className="text-sm font-bold text-white line-clamp-1">{p.title}</h3>
                    <p className="text-xs text-[#8A8479] mt-1">{p.type}</p>
                    <span className="text-xs text-[#C89467] font-medium mt-1 inline-block">Ver memorial &rarr;</span>
                  </div>
                </a>
              ))}
            </div>

            <h2 className="text-lg font-bold text-white mb-4">
              Serviços Relacionados a Este Padrão Construtivo
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
              {relatedServices.map((srv) => (
                <a
                  key={srv.slug}
                  href={`/servicos/${srv.slug}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectService(srv);
                  }}
                  className="bg-[#141312] border border-white/10 rounded-lg p-3 hover:border-[#C89467]/50 transition-colors"
                >
                  <div className="text-xs text-[#C89467] font-mono">{srv.category}</div>
                  <div className="text-sm font-semibold text-white mt-1">{srv.title}</div>
                  <div className="text-xs text-[#8A8479] mt-1">Ver página técnica &rarr;</div>
                </a>
              ))}
            </div>

            <h2 className="text-lg font-bold text-white mb-4">
              Guias Práticos Recomendados
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {relatedGuides.map((guide) => (
                <a
                  key={guide.slug}
                  href={`/guias/${guide.slug}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectGuide(guide);
                  }}
                  className="bg-[#141312] border border-white/10 rounded-lg p-3 hover:border-[#C89467]/50 transition-colors"
                >
                  <div className="text-xs text-[#C89467] font-mono">{guide.category}</div>
                  <div className="text-sm font-semibold text-white mt-1">{guide.title}</div>
                  <div className="text-xs text-[#8A8479] mt-1">Ler guia &rarr;</div>
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
