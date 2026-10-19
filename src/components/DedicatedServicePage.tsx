import React, { useEffect } from 'react';
import { ServiceItem, SERVICES_LIST } from '../data/servicesData';
import { Article, ARTICLES } from '../data/articles';
import { CONFIG, whatsappLink } from '../../lib/config';
import { VittiLogo } from './VittiLogo';
import { WhatsAppIcon } from './WhatsAppIcon';
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Instagram,
  Facebook,
  ShieldCheck,
  MapPin,
  Sparkles,
  Waves,
} from 'lucide-react';

interface DedicatedServicePageProps {
  service: ServiceItem;
  onBackToHome: () => void;
  onSelectGuide: (art: Article) => void;
  onSelectService: (srv: ServiceItem) => void;
}

export const DedicatedServicePage: React.FC<DedicatedServicePageProps> = ({
  service,
  onBackToHome,
  onSelectGuide,
  onSelectService,
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [service.slug]);

  // Pick 3 related services (excluding current)
  const otherServices = SERVICES_LIST.filter((s) => s.slug !== service.slug)
    .sort((a, b) => (a.category === service.category ? -1 : 1))
    .slice(0, 3);

  // Pick 3 related guides
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

            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                onBackToHome();
              }}
              className="group focus-visible:outline-none"
              aria-label="Grupo Vitti"
            >
              <VittiLogo variant="official-with-subtitle" theme="light" className="h-7 sm:h-8" />
            </a>
          </div>

          <a
            href={whatsappLink(service.whatsappMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-[#0A2412] font-bold text-xs sm:text-sm whitespace-nowrap transition-transform hover:scale-[1.02]"
          >
            <WhatsAppIcon className="w-4 h-4 fill-current shrink-0" />
            <span className="hidden sm:inline">Pedir Orçamento no WhatsApp</span>
            <span className="sm:hidden">Orçamento</span>
          </a>
        </div>
      </header>

      {/* ─── CONTEÚDO PRINCIPAL (DEDICATED FULL-PAGE SERVICE) ─── */}
      <main className="max-w-4xl mx-auto px-5 sm:px-8 py-10 sm:py-16 w-full flex-1">
        {/* Breadcrumbs visíveis */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center flex-wrap gap-2 text-xs font-mono text-[#8A8479]">
            <li>
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  onBackToHome();
                }}
                className="hover:text-white transition-colors"
              >
                Início
              </a>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <a
                href="/#servicos"
                onClick={(e) => {
                  e.preventDefault();
                  onBackToHome();
                  setTimeout(() => {
                    document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="hover:text-white transition-colors"
              >
                Serviços Especializados
              </a>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-[#C89467] font-semibold truncate max-w-[240px] sm:max-w-md">
              {service.title}
            </li>
          </ol>
        </nav>

        <article className="space-y-10">
          {/* Header do Serviço */}
          <header className="space-y-4 pb-8 border-b border-white/10">
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
              <span className="px-3 py-1 rounded-full bg-[#C89467]/15 border border-[#C89467]/30 text-[#E8C29E] font-semibold uppercase tracking-wider">
                {service.category}
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[#C89467] font-bold">
                {service.badge}
              </span>
              <span className="text-[#8A8479] hidden sm:inline">·</span>
              <span className="text-[#8A8479] hidden sm:inline">
                Serviço Nº {service.num} · Grupo Vitti
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
              {service.title}
            </h1>

            <p className="text-base sm:text-xl text-[#B8B2A7] leading-relaxed">
              {service.subtitle}
            </p>
          </header>

          {/* Sumário Executivo */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#141312] border border-[#C89467]/30 space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#C89467] flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Padrão Técnico &amp; Garantia do Grupo Vitti</span>
            </div>
            <p className="text-sm sm:text-base text-[#D8D3C9] leading-relaxed">
              {service.summary}
            </p>
          </div>

          {/* O que está incluso (Entregáveis) */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              O Que Está Incluso no Serviço
            </h2>
            <div className="grid grid-cols-1 gap-3">
              {service.bullets.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/10 text-sm sm:text-base text-[#F5F2EB]"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#C89467] shrink-0 mt-0.5" />
                  <span className="leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Diferenciais contra Maresia */}
          {service.diferenciaisMaresia && service.diferenciaisMaresia.length > 0 && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#C89467]">
                <Waves className="w-4 h-4" />
                <span>Blindagem Contra o Clima do Litoral</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Proteção Específica Contra Maresia &amp; Salinidade
              </h2>
              <div className="grid grid-cols-1 gap-3">
                {service.diferenciaisMaresia.map((dif, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#141312] border border-white/10 text-sm sm:text-base text-[#B8B2A7] leading-relaxed"
                  >
                    <strong className="text-white font-semibold">Técnica {idx + 1}:</strong> {dif}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Informações Operacionais (Cidades & Prazos) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-[#141312] border border-white/10 space-y-3">
              <div className="text-xs font-mono uppercase text-[#C89467] flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Cidades &amp; Bairros Atendidos</span>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {(service.cidadesAtendidas || CONFIG.cidades).map((cidade) => (
                  <span
                    key={cidade}
                    className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-[#D8D3C9]"
                  >
                    {cidade}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#141312] border border-white/10 space-y-3">
              <div className="text-xs font-mono uppercase text-[#C89467] flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Prazo Médio de Atendimento</span>
              </div>
              <div className="text-base font-bold text-white pt-1">
                {service.prazoMedio || 'Conforme agendamento técnico prévio'}
              </div>
              <p className="text-xs text-[#8A8479]">
                Equipes volantes locais para pronto atendimento em urgências e serviços programados.
              </p>
            </div>
          </div>

          {/* Banner de Conversão WhatsApp */}
          <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-[#1C1A18] to-[#121110] border border-[#C89467]/40 text-center space-y-4">
            <h3 className="text-2xl font-bold text-white">
              Solicite um orçamento sem compromisso
            </h3>
            <p className="text-sm sm:text-base text-[#B8B2A7] max-w-xl mx-auto">
              Envie fotos ou uma breve descrição do que você precisa. Nossa equipe responde rapidamente com estimativa de prazo e valor transparente.
            </p>
            <div className="pt-2">
              <a
                href={whatsappLink(service.whatsappMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-[#0A2412] font-bold text-sm sm:text-base transition-all hover:scale-[1.02] shadow-lg"
              >
                <WhatsAppIcon className="w-5 h-5 fill-current shrink-0" />
                <span>Pedir Orçamento no WhatsApp</span>
              </a>
            </div>
          </div>

          {/* ─── LINKS INTERNOS RELACIONADOS (SEO DE FUNDO DE FUNIL) ─── */}
          <section className="pt-10 border-t border-white/10 space-y-8">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-[#C89467] mb-1">
                Outros Serviços do Grupo Vitti
              </div>
              <h2 className="text-2xl font-bold text-white">
                Soluções Complementares para Seu Imóvel
              </h2>
              <p className="text-xs sm:text-sm text-[#8A8479] mt-1">
                Atendemos todas as necessidades da sua casa com equipe coordenada:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {otherServices.map((srv) => (
                <a
                  key={srv.id}
                  href={`/servicos/${srv.slug}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectService(srv);
                  }}
                  className="p-5 rounded-xl bg-[#141312] border border-white/10 hover:border-[#C89467]/60 transition-all group flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#C89467]">
                      {srv.category}
                    </span>
                    <h3 className="text-sm font-bold text-white group-hover:text-[#E8C29E] transition-colors leading-snug">
                      {srv.title}
                    </h3>
                    <p className="text-xs text-[#8A8479] line-clamp-2">
                      {srv.subtitle}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-semibold text-[#E8C29E]">
                    <span>Ver detalhes</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </a>
              ))}
            </div>

            <div className="pt-4">
              <h2 className="text-xl font-bold text-white mb-4">
                Guias Técnicos Relacionados
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {relatedGuides.map((g) => (
                  <a
                    key={g.id}
                    href={`/guias/${g.slug}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onSelectGuide(g);
                    }}
                    className="p-5 rounded-xl bg-[#141312] border border-white/10 hover:border-[#C89467]/60 transition-all group flex flex-col justify-between space-y-3"
                  >
                    <div className="space-y-1.5">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#C89467]">
                        {g.category}
                      </span>
                      <h3 className="text-sm font-bold text-white group-hover:text-[#E8C29E] transition-colors leading-snug">
                        {g.title}
                      </h3>
                      <p className="text-xs text-[#8A8479] line-clamp-2">
                        {g.problemSummary}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 text-xs font-semibold text-[#E8C29E]">
                      <span>Ler guia</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>
        </article>
      </main>

      {/* ─── FOOTER INSTITUCIONAL ─── */}
      <footer className="bg-[#080707] text-[#8A8479] border-t border-white/10 py-10 mt-16">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 space-y-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-white/10">
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

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#666]">
            <div>
              © {new Date().getFullYear()} {CONFIG.siteName}. Todos os direitos reservados.
            </div>
            <div className="text-center sm:text-right">
              Atendimento em Cabo Frio, Tamoios (Unamar), Búzios, Arraial do Cabo, São Pedro da Aldeia, Iguaba Grande e Rio das Ostras.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
