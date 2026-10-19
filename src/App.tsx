/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CONFIG, whatsappLink } from '../lib/config';
import { VittiLogo } from './components/VittiLogo';
import { ARTICLES, Article } from './data/articles';
import { ArticleModal } from './components/ArticleModal';
import { PROJECTS_MEMORIAL, ProjectMemorial } from './data/projectsData';
import { ProjectMemorialModal } from './components/ProjectMemorialModal';
import { WhatsAppIcon } from './components/WhatsAppIcon';
import { ArchitecturalIntro } from './components/ArchitecturalIntro';
import { SERVICES_LIST } from './data/servicesData';
import {
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  BookOpen,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  ExternalLink,
  Layers,
  Home,
  Hammer,
  FileCheck,
  ChevronRight,
  Send,
  Instagram,
  Facebook,
  HelpCircle,
  ChevronDown,
  Paintbrush,
  Droplets,
  Zap,
  Trees,
  Grid,
  Waves,
  Wind,
  Flower2,
  KeyRound,
  Check,
} from 'lucide-react';

const SERVICE_ICONS: Record<string, React.ElementType> = {
  construcao: Home,
  reforma: Hammer,
  pintura: Paintbrush,
  hidraulica: Droplets,
  eletrica: Zap,
  carpintaria: Trees,
  acompanhamento: FileCheck,
  ladrilheiro: Grid,
  piscina: Waves,
  'ar-condicionado': Wind,
  jardinagem: Flower2,
  'limpeza-geral': Sparkles,
  'gestao-airbnb': KeyRound,
};

const FAQ_ITEMS = [
  {
    question: 'Vocês realizam serviços rápidos e manutenção emergencial (como elétrica, hidráulica e pintura)?',
    answer:
      'Sim. Dispomos de equipes volantes para atendimento ágil em Cabo Frio, Tamoios (Unamar), Búzios, Arraial do Cabo e cidades vizinhas. Realizamos desde reparos urgentes no mesmo dia até serviços programados com pontualidade, nota fiscal e garantia técnica.',
  },
  {
    question: 'Como funciona o suporte de manutenção para Airbnb e casas de temporada?',
    answer:
      'Atendemos anfitriões com suporte técnico expresso entre check-outs e check-ins: conserto de ar-condicionado, chuveiros elétricos, bombas de piscina, desentupimentos e vistorias fotográficas de avarias para que seu imóvel mantenha a avaliação 5 estrelas sem você precisar se deslocar.',
  },
  {
    question: 'Vocês realizam obras do zero e reformas em Cabo Frio, Tamoios (Unamar) e Búzios?',
    answer:
      'Sim. Atendemos toda a Região dos Lagos com equipes locais, incluindo Cabo Frio (centro, Ogiva, Peró e 2º Distrito em Tamoios/Unamar), Armação dos Búzios, Arraial do Cabo, São Pedro da Aldeia, Iguaba Grande e Rio das Ostras.',
  },
  {
    question: 'Como funciona o contrato a preço fechado do Grupo Vitti?',
    answer:
      'Elaboramos o orçamento executivo detalhado antes do início do serviço ou da obra, com escopo e prazos definidos. Assim você sabe exatamente quanto vai investir, sem surpresas nem aditivos arbitrários.',
  },
  {
    question: 'Moro fora da Região dos Lagos. Como faço para acompanhar meu serviço ou obra à distância?',
    answer:
      'Você recebe relatórios diretamente no seu WhatsApp com fotos em alta resolução, vídeos e medição real do avanço de cada serviço, sem precisar viajar todo fim de semana.',
  },
  {
    question: 'Qual o diferencial técnico contra a maresia da Região dos Lagos?',
    answer:
      'Aplicamos materiais e técnicas adequadas para o litoral: tintas elastoméricas hidrorrepelentes, ferragens protegidas conforme NBR 6118, inox naval AISI 316 e quadros elétricos vedados contra a corrosão salina.',
  },
];

export default function App() {
  const [introFinished, setIntroFinished] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectMemorial | null>(null);
  const [articleCategory, setArticleCategory] = useState<string>('all');

  // Quick WhatsApp Lead Form
  const [clientName, setClientName] = useState('');
  const [clientCity, setClientCity] = useState<(typeof CONFIG.cidades)[number]>('Cabo Frio');
  const [clientScope, setClientScope] = useState('Pintura Especializada & Anti-Maresia');
  const [clientMessage, setClientMessage] = useState('');

  // Sincronização dinâmica de URL para os 15 Guias Práticos (SEO e navegação direta)
  useEffect(() => {
    const handleUrlRoute = () => {
      const path = window.location.pathname;
      if (path.startsWith('/guias/')) {
        const slug = path.replace('/guias/', '').replace(/\/$/, '');
        const found = ARTICLES.find((a) => a.slug === slug);
        if (found) {
          setSelectedArticle(found);
          document.title = `${found.title} — ${CONFIG.siteName}`;
          const metaDesc = document.querySelector('meta[name="description"]');
          if (metaDesc) metaDesc.setAttribute('content', found.subtitle);
          const canonical = document.querySelector('link[rel="canonical"]');
          if (canonical) canonical.setAttribute('href', `https://vitticonstrucoes.com.br/guias/${found.slug}`);
          return;
        }
      }
      setSelectedArticle(null);
    };

    handleUrlRoute();
    window.addEventListener('popstate', handleUrlRoute);
    return () => window.removeEventListener('popstate', handleUrlRoute);
  }, []);

  const handleOpenArticle = (art: Article) => {
    setSelectedArticle(art);
    window.history.pushState({ articleSlug: art.slug }, '', `/guias/${art.slug}`);
    document.title = `${art.title} — ${CONFIG.siteName}`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', art.subtitle);
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', `https://vitticonstrucoes.com.br/guias/${art.slug}`);
  };

  const handleCloseArticle = () => {
    setSelectedArticle(null);
    if (window.location.pathname.startsWith('/guias/')) {
      window.history.pushState(null, '', '/');
    }
    document.title = 'Grupo Vitti — Construção, Reformas & 13 Serviços na Região dos Lagos';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Empresa de construção, reformas e 13 serviços especializados em Cabo Frio, Tamoios (Unamar), Búzios e Região dos Lagos. Da manutenção emergencial à chave na mão.'
      );
    }
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', 'https://vitticonstrucoes.com.br');
  };

  const [serviceCategory, setServiceCategory] = useState<string>('all');

  const filteredServices = SERVICES_LIST.filter((srv) => {
    return serviceCategory === 'all' || srv.category === serviceCategory;
  });

  const serviceCategories = [
    { id: 'all', label: 'Todos os 13 Serviços' },
    { id: 'Instalações & Reparos', label: 'Instalações & Reparos' },
    { id: 'Manutenção & Cuidados', label: 'Manutenção Periódica' },
    { id: 'Gestão Imobiliária', label: 'Airbnb & Temporada' },
    { id: 'Obras & Reformas', label: 'Obras & Reformas' },
  ];

  const filteredArticles = ARTICLES.filter((art) => {
    return articleCategory === 'all' || art.category === articleCategory;
  });

  const categories = [
    { id: 'all', label: 'Todos os 15 Guias' },
    { id: 'Serviços & Manutenção', label: 'Serviços & Manutenção' },
    { id: 'Airbnb & Temporada', label: 'Airbnb & Temporada' },
    { id: 'Estrutura & Maresia', label: 'Estrutura & Maresia' },
    { id: 'Custos & Orçamento', label: 'Custos & Orçamento' },
    { id: 'Contratação & Segurança', label: 'Segurança & Contrato' },
    { id: 'Gestão de Obras', label: 'Gestão & Distância' },
    { id: 'Projetos & Terrenos', label: 'Terrenos & Projetos' },
    { id: 'Vantagens', label: 'Vantagens Reais' },
  ];

  const handleSendLeadWhatsapp = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá, vim pelo site do ${CONFIG.siteName}.
- Meu nome: ${clientName || 'Não informado'}
- Cidade da Obra: ${clientCity}
- Tipo de Serviço/Projeto: ${clientScope}
${clientMessage ? `- Detalhes: ${clientMessage}` : ''}
Gostaria de tirar algumas dúvidas e pedir um orçamento.`;
    window.open(whatsappLink(text), '_blank');
  };



  return (
    <div className="min-h-screen bg-[#0D0C0B] text-[#F5F2EB] selection:bg-[#C89467] selection:text-[#0D0C0B] font-sans antialiased">
      {/* ─── ENTRADA ARQUITETÔNICA ULTRA-PREMIUM (CORTINA + ASSINATURA VETORIAL) ─── */}
      {!introFinished && <ArchitecturalIntro onComplete={() => setIntroFinished(true)} />}

      {/* ═══════════════════════════════════════════════════════════════════
          NAVBAR: Modern, Clean, Impactful Luxury Navigation
         ═══════════════════════════════════════════════════════════════════ */}
      <header className="sticky top-0 z-40 bg-[#0D0C0B]/90 backdrop-blur-md border-b border-white/10 transition-colors pt-[env(safe-area-inset-top,0px)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-18 sm:h-20 flex items-center justify-between gap-3 sm:gap-4">
          {/* Logo Lockup Oficial */}
          <div className="flex-1 flex items-center justify-start">
            <a
              href="#"
              className="flex items-center group focus-visible:outline-none"
              aria-label="Grupo Vitti — Construção, Reforma e Tecnologia"
            >
              <VittiLogo
                variant="official-with-subtitle"
                theme="light"
                className="transition-transform group-hover:scale-[1.02]"
              />
            </a>
          </div>

          {/* Nav Links - Mathematically Centered */}
          <nav
            aria-label="Navegação Principal"
            className="hidden lg:flex items-center justify-center gap-8 text-sm font-medium text-[#B8B2A7]"
          >
            <a href="#sobre" className="hover:text-white transition-colors">
              Sobre Nós
            </a>
            <a href="#servicos" className="hover:text-white transition-colors">
              13 Serviços
            </a>
            <a href="#obras" className="hover:text-white transition-colors">
              Conceito & Obras
            </a>
            <a
              href="#artigos"
              className="text-[#C89467] hover:text-[#E2B185] transition-colors flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>15 Guias Práticos</span>
            </a>
            <a href="#faq" className="hover:text-white transition-colors">
              FAQ
            </a>
            <a href="#contato" className="hover:text-white transition-colors">
              Contato
            </a>
          </nav>

          {/* WhatsApp Direct Action */}
          <div className="flex-1 flex items-center justify-end">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Conversar no WhatsApp"
              className="relative overflow-hidden inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-[#0A2412] font-bold text-xs sm:text-sm whitespace-nowrap whatsapp-pulse-btn transition-colors"
            >
              {/* Efeito de brilho passando periodicamente */}
              <span
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none overflow-hidden rounded-full"
              >
                <span className="absolute inset-0 w-3/4 h-full bg-gradient-to-r from-transparent via-white/70 to-transparent whatsapp-shimmer-sweep" />
              </span>

              <WhatsAppIcon className="w-4 h-4 fill-current shrink-0 relative z-10" />
              <span className="relative z-10">WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Mobile & Tablet Apparent Quick-Navigation Strip with Visible Scrollbar */}
        <div className="lg:hidden border-t border-white/10 bg-[#0D0C0B]/95 px-4 pt-2 pb-2.5 menu-scrollbar">
          <nav aria-label="Navegação Rápida" className="flex items-center gap-1.5 sm:gap-2 min-w-max md:min-w-0 md:justify-center pb-1">
            <a
              href="#sobre"
              className="px-3 py-1.5 rounded-lg text-xs font-medium text-[#B8B2A7] hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 transition-all"
            >
              Sobre Nós
            </a>
            <a
              href="#servicos"
              className="px-3 py-1.5 rounded-lg text-xs font-medium text-[#B8B2A7] hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 transition-all"
            >
              13 Serviços
            </a>
            <a
              href="#obras"
              className="px-3 py-1.5 rounded-lg text-xs font-medium text-[#B8B2A7] hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 transition-all"
            >
              Conceito & Obras
            </a>
            <a
              href="#artigos"
              className="px-3 py-1.5 rounded-lg text-xs font-medium text-[#E8C29E] bg-[#C89467]/10 border border-[#C89467]/25 hover:bg-[#C89467]/20 transition-all flex items-center gap-1"
            >
              <Sparkles className="w-3 h-3 text-[#C89467]" />
              <span>15 Guias</span>
            </a>
            <a
              href="#faq"
              className="px-3 py-1.5 rounded-lg text-xs font-medium text-[#B8B2A7] hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 transition-all"
            >
              FAQ
            </a>
            <a
              href="#contato"
              className="px-3 py-1.5 rounded-lg text-xs font-medium text-[#B8B2A7] hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 transition-all"
            >
              Contato
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* ═══════════════════════════════════════════════════════════════════
            HERO: High-Impact Entrance Animation with Direct Reassurance
           ═══════════════════════════════════════════════════════════════════ */}
        <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 overflow-hidden">
          {/* Subtle architectural ambient backdrop */}
          <div className="absolute inset-0 pointer-events-none opacity-30">
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-b from-[#C89467]/25 to-transparent blur-[120px] rounded-full" />
          </div>

          <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-4xl mx-auto text-center space-y-6"
            >
              {/* Region Pill Badge */}
              <div className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] sm:text-xs text-[#C89467] font-mono tracking-wider uppercase max-w-full text-center leading-relaxed">
                <MapPin className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate sm:whitespace-normal">
                  {CONFIG.regiao} · Cabo Frio · Búzios · Arraial · São Pedro · Iguaba · Rio das Ostras
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                Do reparo urgente à obra completa:{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8C29E] via-[#C89467] to-[#A86F3D]">
                  o ecossistema de serviços da Região dos Lagos.
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-xl text-[#B8B2A7] max-w-3xl mx-auto leading-relaxed">
                Pintura anti-maresia, elétrica, hidráulica, piscinas, ar-condicionado, reformas e suporte para Airbnb.
                Atendimento rápido com preço fechado, garantia técnica e relatórios digitais no seu celular.
              </p>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="#servicos"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-sm sm:text-base font-semibold text-white transition-all"
                >
                  <span>Explorar os 13 Serviços</span>
                </a>

                <a
                  href="#artigos"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#C89467]/15 hover:bg-[#C89467]/25 border border-[#C89467]/40 text-sm sm:text-base font-semibold text-[#E8C29E] transition-all"
                >
                  <BookOpen className="w-4 h-4 text-[#C89467]" />
                  <span>Ler os 15 Guias Práticos de Obra</span>
                </a>
              </div>

              {/* Vantagens Diretas para o Cliente */}
              <div className="pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-center flex flex-col items-center justify-center">
                  <div className="text-xs font-mono text-[#C89467] font-semibold">PRONTO ATENDIMENTO</div>
                  <div className="text-xs text-[#8A8479] mt-1">Equipes locais ágeis para socorro e manutenções</div>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-center flex flex-col items-center justify-center">
                  <div className="text-xs font-mono text-[#C89467] font-semibold">PREÇO FECHADO</div>
                  <div className="text-xs text-[#8A8479] mt-1">Orçamento claro sem surpresas nem aditivos</div>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-center flex flex-col items-center justify-center">
                  <div className="text-xs font-mono text-[#C89467] font-semibold">ANTI-MARESIA</div>
                  <div className="text-xs text-[#8A8479] mt-1">Materiais e técnicas que resistem ao salitre costeiro</div>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-center flex flex-col items-center justify-center">
                  <div className="text-xs font-mono text-[#C89467] font-semibold">ACOMPANHE DE LONGE</div>
                  <div className="text-xs text-[#8A8479] mt-1">Fotos e vídeos semanais direto no seu celular</div>
                </div>
              </div>
            </motion.div>

            {/* Impactful Architectural Showcase Banner */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-14 relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl aspect-[16/9] sm:aspect-[21/9]"
            >
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80"
                alt="Construção de casas de alto padrão resistentes à maresia em Cabo Frio, Búzios e Região dos Lagos - Grupo Vitti"
                width={1600}
                height={686}
                decoding="async"
                fetchPriority="high"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback to stylized dark architectural pattern if external CDN fails
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0C0B] via-[#0D0C0B]/40 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#C89467]">
                    Padrão Construtivo Grupo Vitti
                  </span>
                  <div className="text-lg sm:text-2xl font-bold text-white">
                    Casas contemporâneas projetadas para o clima e salinidade do litoral.
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href="#servicos"
                    className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-xs font-semibold text-white transition-all whitespace-nowrap"
                  >
                    Conhecer Serviços
                  </a>
                  <a
                    href="#obras"
                    className="px-4 py-2 rounded-lg bg-white text-[#0D0C0B] text-xs font-semibold hover:bg-[#EAE5DC] transition-all whitespace-nowrap"
                  >
                    Ver Acervo
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SOBRE NÓS: Clear, Human, Direct Story & Real Trust
           ═══════════════════════════════════════════════════════════════════ */}
        <section id="sobre" className="py-20 bg-[#141312] border-t border-white/10">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left 6 cols: Narrative */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-[#C89467]">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Sobre o Grupo Vitti</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
                  Construir no litoral não pode ser sinônimo de dor de cabeça e improviso.
                </h2>

                <div className="space-y-4 text-sm sm:text-base text-[#B8B2A7] leading-relaxed">
                  <p>
                    Fundamos o <strong className="text-white font-semibold">Grupo Vitti</strong> ao
                    perceber a maior reclamação de quem constrói na Região dos Lagos: obras que
                    começam com um orçamento e terminam com o dobro, mestres de obras que somem e
                    casas novas apresentando trincas e infiltrações antes mesmo do primeiro ano.
                  </p>
                  <p>
                    Nosso trabalho é unir o que há de melhor em técnicas construtivas para o litoral com
                    uma postura de respeito absoluto pelo dinheiro e pelo tempo do cliente. Cada
                    obra tem contrato formal, garantia e uma equipe dedicada que
                    combina seriedade no canteiro com tecnologia de ponta.
                  </p>
                </div>

                {/* 3 Value Pillars */}
                <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                    <div className="text-sm font-bold text-white mb-1">Obra Sem Gambiarra</div>
                    <div className="text-xs text-[#8A8479]">
                      Estrutura reforçada e impermeabilização correta contra a maresia severa.
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                    <div className="text-sm font-bold text-white mb-1">Preço Fechado</div>
                    <div className="text-xs text-[#8A8479]">
                      Orçamento detalhado antes de quebrar o primeiro tijolo.
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                    <div className="text-sm font-bold text-white mb-1">Presença Local</div>
                    <div className="text-xs text-[#8A8479]">
                      Equipes e fornecedores locais em todos os municípios da região.
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-[#8A8479] font-mono">
                  <span>CNPJ: {CONFIG.cnpj}</span>
                  <span>·</span>
                  <span>{CONFIG.regiao}</span>
                  <span>·</span>
                  <span>{CONFIG.email}</span>
                </div>
              </div>

              {/* Right 6 cols: Visual Presentation */}
              <div className="lg:col-span-6 relative">
                <div className="relative rounded-2xl overflow-hidden border border-white/15 aspect-[4/3] shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                    alt="Acompanhamento de obra e engenharia civil de alto padrão na Região dos Lagos - Grupo Vitti"
                    width={1200}
                    height={900}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/15 text-xs text-[#E5E0D5]">
                    <div className="font-semibold text-white text-sm mb-1">
                      Você no controle, mesmo morando fora.
                    </div>
                    Receba fotos em alta resolução, vídeos de ensaios e medições semanais pelo celular
                    sem precisar enfrentar a estrada todo sábado.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SERVIÇOS: 13 Serviços Especializados do Grupo Vitti
           ═══════════════════════════════════════════════════════════════════ */}
        <section id="servicos" className="py-20 sm:py-28 bg-[#0D0C0B] border-t border-white/10">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C89467]/10 border border-[#C89467]/20 text-xs font-mono tracking-wider uppercase text-[#C89467]">
                Ecossistema de Soluções
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                13 Serviços Especializados para Sua Casa ou Pousada.
              </h2>
              <p className="text-base text-[#B8B2A7] max-w-2xl mx-auto leading-relaxed">
                Do socorro emergencial e manutenção periódica à reforma e construção completa. Equipes locais qualificadas, nota fiscal, garantia e atendimento com padrão de engenharia em toda a Região dos Lagos.
              </p>
            </div>

            {/* Category Filter Tabs */}
            <div className="mb-10">
              <div className="menu-scrollbar pb-3 sm:pb-0 -mx-5 px-5 sm:mx-0 sm:px-0">
                <div className="flex items-center gap-2 min-w-max sm:min-w-0 sm:flex-wrap sm:justify-center pb-1.5 sm:pb-0">
                  {serviceCategories.map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setServiceCategory(cat.id)}
                      className={`shrink-0 whitespace-nowrap px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer ${
                        serviceCategory === cat.id
                          ? 'bg-white text-[#0D0C0B] font-semibold shadow-md'
                          : 'bg-white/5 text-[#A8A29A] hover:bg-white/10 hover:text-white border border-white/10'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* 13 Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((srv) => {
                const IconComponent = SERVICE_ICONS[srv.id] || Sparkles;
                return (
                  <div
                    key={srv.id}
                    className="p-6 sm:p-7 rounded-2xl bg-[#141312] border border-white/10 hover:border-[#C89467]/60 transition-all flex flex-col justify-between group hover:-translate-y-1 duration-200 space-y-6"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#C89467] group-hover:scale-110 transition-transform">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="px-2.5 py-1 rounded-md bg-[#C89467]/10 border border-[#C89467]/20 text-[10px] font-mono font-bold uppercase text-[#E8C29E]">
                            {srv.badge}
                          </span>
                          <span className="text-xs font-mono text-[#7A756E] font-bold">
                            {srv.num}
                          </span>
                        </div>
                      </div>

                      <div>
                        <div className="text-[11px] font-mono uppercase tracking-wider text-[#C89467] mb-1">
                          {srv.category}
                        </div>
                        <h3 className="text-xl font-bold text-white group-hover:text-[#E8C29E] transition-colors leading-snug">
                          {srv.title}
                        </h3>
                      </div>

                      <p className="text-xs text-[#C89467] font-medium leading-relaxed">
                        {srv.subtitle}
                      </p>

                      <p className="text-xs sm:text-sm text-[#A8A29A] leading-relaxed">
                        {srv.summary}
                      </p>

                      <div className="pt-3 space-y-2 border-t border-white/10">
                        {srv.bullets.map((pt, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-[#D8D3C9]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#C89467] shrink-0 mt-0.5" />
                            <span>{pt}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/10">
                      <a
                        href={whatsappLink(srv.whatsappMsg)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/5 hover:bg-[#25D366] text-white hover:text-[#0A2412] font-semibold text-xs sm:text-sm transition-all border border-white/10 hover:border-[#25D366]"
                      >
                        <span>Pedir Orçamento no WhatsApp</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            OBRAS & CONCEITO: Visual Showcase in Região dos Lagos
           ═══════════════════════════════════════════════════════════════════ */}
        <section id="obras" className="py-20 bg-[#141312] border-t border-white/10">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C89467]/10 border border-[#C89467]/20 text-xs font-mono tracking-wider uppercase text-[#C89467]">
                Acervo & Conceito Visual
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Arquitetura costeira contemporânea e solidez construtiva.
              </h2>
              <p className="text-base text-[#B8B2A7] max-w-2xl mx-auto leading-relaxed">
                Projetos que dialogam com a luz natural e a brisa da Região dos Lagos com materiais
                nobres e duráveis: concreto aparente, pedras locais e cumaru certificado.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {PROJECTS_MEMORIAL.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedProject(item)}
                  className="rounded-2xl overflow-hidden border border-white/10 bg-[#0D0C0B] flex flex-col group hover:border-[#C89467]/60 hover:shadow-xl hover:shadow-[#C89467]/5 transition-all cursor-pointer hover:-translate-y-1 duration-200"
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={item.img}
                      alt={item.imageAlt || item.title}
                      width={800}
                      height={600}
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[11px] font-mono font-semibold text-white border border-white/15">
                      {item.city}
                    </div>
                    <div className="absolute top-4 right-4 px-2.5 py-1 rounded-md bg-[#C89467]/90 backdrop-blur-sm text-[10px] font-mono font-bold uppercase text-white shadow-sm">
                      Ficha Técnica
                    </div>
                  </div>

                  <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="text-xs font-mono text-[#C89467]">{item.type}</div>
                      <h3 className="text-lg font-bold text-white group-hover:text-[#E8C29E] transition-colors mt-1 leading-snug">
                        {item.title}
                      </h3>
                      <div className="text-xs text-[#8A8479] mt-1.5">{item.tag}</div>
                    </div>

                    <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-[#E8C29E] group-hover:text-white transition-colors">
                      <span>Ver Memorial & Especificações Técnicas</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            OS 15 ARTIGOS: DORES REAIS DE CONSTRUIR E REFORMAR
           ═══════════════════════════════════════════════════════════════════ */}
        <section id="artigos" className="py-20 sm:py-28 bg-[#0D0C0B] border-t border-white/10">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            {/* Section Header */}
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C89467]/10 border border-[#C89467]/20 text-xs font-mono tracking-wider uppercase text-[#C89467]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Biblioteca Prática para Quem Constrói ou Reforma</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                15 Guias Práticos: As Dores e Armadilhas de Construir e Reformar
              </h2>
              <p className="text-base sm:text-lg text-[#B8B2A7] leading-relaxed max-w-2xl mx-auto">
                Escrevemos estes 15 artigos detalhados para te proteger dos maiores erros e prejuízos
                que acontecem em obras no litoral. Conhecimento técnico direto, sem rodeios.
              </p>
            </div>

            {/* Category Pills with Visible Scrollbar on Mobile */}
            <div className="mb-10">
              <div className="menu-scrollbar pb-3 sm:pb-0 -mx-5 px-5 sm:mx-0 sm:px-0">
                <div className="flex items-center gap-2 min-w-max sm:min-w-0 sm:flex-wrap sm:justify-center pb-1.5 sm:pb-0">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setArticleCategory(cat.id)}
                      className={`shrink-0 whitespace-nowrap px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer ${
                        articleCategory === cat.id
                          ? 'bg-white text-[#0D0C0B] font-semibold shadow-md'
                          : 'bg-white/5 text-[#A8A29A] hover:bg-white/10 hover:text-white border border-white/10'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* 10 Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((art) => (
                <article
                  key={art.id}
                  onClick={() => handleOpenArticle(art)}
                  className="p-6 rounded-2xl bg-[#141312] border border-white/10 hover:border-[#C89467]/60 transition-all cursor-pointer flex flex-col justify-between group hover:-translate-y-1 duration-200"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs font-mono text-[#8A8479]">
                      <span className="text-[#C89467] font-semibold">{art.category}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {art.readTime}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#E8C29E] transition-colors leading-snug">
                      <a
                        href={`/guias/${art.slug}`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleOpenArticle(art);
                        }}
                        className="hover:underline focus-visible:outline-none"
                      >
                        {art.title}
                      </a>
                    </h3>

                    <p className="text-xs sm:text-sm text-[#A8A29A] leading-relaxed line-clamp-3">
                      {art.problemSummary}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between text-xs font-semibold text-white group-hover:text-[#C89467] transition-colors">
                    <span>Ler Guia Completo</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </article>
              ))}
            </div>

            {filteredArticles.length === 0 && (
              <div className="p-12 text-center rounded-2xl bg-white/[0.02] border border-white/10 text-sm text-[#8A8479]">
                Nenhum guia encontrado para os termos pesquisados.
              </div>
            )}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            PERGUNTAS FREQUENTES (FAQ)
           ═══════════════════════════════════════════════════════════════════ */}
        <section id="faq" className="py-20 sm:py-28 bg-[#141312] border-t border-white/10">
          <div className="max-w-4xl mx-auto px-5 sm:px-8">
            <div className="text-center space-y-4 mb-14">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C89467]/10 border border-[#C89467]/20 text-xs font-mono tracking-wider uppercase text-[#C89467]">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Dúvidas Frequentes</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Perguntas Frequentes Sobre Obras no Litoral
              </h2>
              <p className="text-base text-[#B8B2A7] max-w-2xl mx-auto leading-relaxed">
                Respostas diretas da nossa equipe de engenharia para as principais dúvidas sobre construção, contratos de preço fechado e blindagem contra maresia na Região dos Lagos.
              </p>
            </div>

            <div className="space-y-4">
              {FAQ_ITEMS.map((item, idx) => (
                <details
                  key={idx}
                  className="group rounded-2xl bg-[#0D0C0B] border border-white/10 hover:border-[#C89467]/50 transition-all p-6 open:border-[#C89467]/60 open:shadow-lg open:shadow-[#C89467]/5"
                >
                  <summary className="flex items-center justify-between cursor-pointer list-none font-semibold text-base sm:text-lg text-white group-hover:text-[#E8C29E] transition-colors gap-4">
                    <span>{item.question}</span>
                    <ChevronDown className="w-5 h-5 text-[#C89467] shrink-0 transition-transform duration-300 group-open:rotate-180" />
                  </summary>
                  <div className="mt-4 pt-4 border-t border-white/10 text-sm sm:text-base text-[#A8A29A] leading-relaxed">
                    {item.answer}
                  </div>
                </details>
              ))}
            </div>

            <div className="mt-10 p-6 rounded-2xl bg-white/[0.02] border border-white/10 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-sm text-[#B8B2A7] text-center sm:text-left">
                Tem uma dúvida específica sobre o solo ou topografia do seu terreno?
              </div>
              <a
                href={whatsappLink('Olá! Li o FAQ no site e gostaria de tirar uma dúvida técnica sobre meu terreno na Região dos Lagos.')}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] text-[#0A2412] font-semibold text-xs sm:text-sm hover:brightness-110 transition-all"
              >
                <span>Tirar Dúvida no WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            CONTATO RÁPIDO & WHATSAPP DIRETO
           ═══════════════════════════════════════════════════════════════════ */}
        <section id="contato" className="py-20 sm:py-28 bg-[#0D0C0B] border-t border-white/10">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Left 5 cols: Direct Information */}
              <div className="lg:col-span-5 space-y-6">
                <div className="text-xs font-mono tracking-wider uppercase text-[#C89467]">
                  Fale Conosco
                </div>

                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
                  Tire seu projeto do papel com quem entende de litoral.
                </h2>

                <p className="text-sm text-[#B8B2A7] leading-relaxed">
                  Envie sua mensagem ou chame direto no WhatsApp para tirar dúvidas,
                  combinar uma conversa sobre o terreno ou pedir um orçamento direto comigo.
                </p>

                <div className="space-y-4 pt-4 border-t border-white/10">
                  <a
                    href={whatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#25D366] transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#25D366]/10 text-[#25D366] flex items-center justify-center shrink-0">
                      <WhatsAppIcon className="w-5 h-5 fill-current" />
                    </div>
                    <div>
                      <div className="text-xs text-[#8A8479]">WhatsApp & Telefone</div>
                      <div className="text-sm font-bold text-white group-hover:text-[#25D366] transition-colors font-mono">
                        {CONFIG.whatsappDisplay}
                      </div>
                    </div>
                  </a>

                  <a
                    href={`mailto:${CONFIG.email}`}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/30 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white/10 text-white flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-[#8A8479]">E-mail Corporativo</div>
                      <div className="text-sm font-bold text-white font-mono">{CONFIG.email}</div>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/10">
                    <div className="w-10 h-10 rounded-lg bg-white/10 text-[#C89467] flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-[#8A8479]">Base Operacional</div>
                      <div className="text-sm font-bold text-white">{CONFIG.regiao}</div>
                      <div className="text-xs text-[#8A8479] mt-0.5 leading-relaxed">
                        Cabo Frio (Braga, Peró, Ogiva) · Tamoios e Unamar (2º Distrito) · Búzios (Ferradura, Geribá, Manguinhos) · Arraial do Cabo (Pontal do Atalaia) · São Pedro da Aldeia · Iguaba Grande · Rio das Ostras
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right 7 cols: Fast WhatsApp Estimator Form */}
              <div className="lg:col-span-7 bg-[#141312] border border-white/10 rounded-2xl p-6 sm:p-10 space-y-6">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-white">
                    Fale Direto Comigo
                  </h3>
                  <p className="text-xs sm:text-sm text-[#8A8479]">
                    Preencha os campos abaixo para conversar comigo no WhatsApp sem compromisso.
                  </p>
                </div>

                <form onSubmit={handleSendLeadWhatsapp} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-[#A8A29A] mb-1.5">
                        Seu Nome Completo
                      </label>
                      <input
                        type="text"
                        required
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        placeholder="Ex.: Marcelo Souza"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-[#666] focus:outline-none focus:border-[#C89467]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-[#A8A29A] mb-1.5">
                        Cidade da Obra
                      </label>
                      <select
                        value={clientCity}
                        onChange={(e) =>
                          setClientCity(e.target.value as (typeof CONFIG.cidades)[number])
                        }
                        className="w-full px-4 py-3 rounded-xl bg-[#1C1A18] border border-white/10 text-sm text-white focus:outline-none focus:border-[#C89467]"
                      >
                        {CONFIG.cidades.map((c) => (
                          <option key={c} value={c}>
                            {c} (RJ)
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#A8A29A] mb-1.5">
                      Qual serviço ou projeto você precisa?
                    </label>
                    <select
                      value={clientScope}
                      onChange={(e) => setClientScope(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#1C1A18] border border-white/10 text-sm text-white focus:outline-none focus:border-[#C89467]"
                    >
                      <optgroup label="Reparos & Instalações Rápidas">
                        <option value="Pintura Especializada & Anti-Maresia">
                          Pintura Especializada & Proteção Anti-Maresia
                        </option>
                        <option value="Hidráulica & Caça-Vazamentos">
                          Hidráulica & Caça-Vazamentos
                        </option>
                        <option value="Elétrica Residencial & Náutica">
                          Elétrica Residencial & Náutica
                        </option>
                        <option value="Instalação & Manutenção de Ar-Condicionado">
                          Instalação & Manutenção de Ar-Condicionado
                        </option>
                        <option value="Ladrilheiro, Porcelanatos & Revestimentos">
                          Ladrilheiro, Porcelanatos & Revestimentos
                        </option>
                        <option value="Carpintaria, Telhados & Decks">
                          Carpintaria, Telhados & Decks
                        </option>
                      </optgroup>
                      <optgroup label="Manutenção Periódica & Lazer">
                        <option value="Limpeza & Tratamento de Piscina">
                          Limpeza & Tratamento de Piscina
                        </option>
                        <option value="Jardinagem & Paisagismo Litorâneo">
                          Jardinagem & Paisagismo Litorâneo
                        </option>
                        <option value="Limpeza Geral Pós-Obra & Faxina Técnica">
                          Limpeza Geral Pós-Obra & Faxina Técnica
                        </option>
                      </optgroup>
                      <optgroup label="Airbnb & Casas de Temporada">
                        <option value="Gestão de Airbnb & Manutenção Preventiva Expressa">
                          Gestão de Airbnb & Manutenção Preventiva Expressa
                        </option>
                      </optgroup>
                      <optgroup label="Obras & Reformas">
                        <option value="Construção Residencial Completa (Chave na Mão)">
                          Construção Residencial Completa (Chave na Mão)
                        </option>
                        <option value="Reforma Geral & Retrofit">
                          Reforma Geral & Retrofit
                        </option>
                        <option value="Acompanhamento Técnico & Vistoria de Obras">
                          Acompanhamento Técnico & Vistoria de Obras
                        </option>
                        <option value="Outro Serviço ou Projeto Especial">
                          Outro Serviço ou Projeto Especial
                        </option>
                      </optgroup>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#A8A29A] mb-1.5">
                      Conte um pouco sobre sua ideia (opcional)
                    </label>
                    <textarea
                      rows={3}
                      value={clientMessage}
                      onChange={(e) => setClientMessage(e.target.value)}
                      placeholder="Ex.: Tenho terreno de 400m² em condomínio e gostaria de uma estimativa de prazo e etapas..."
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-[#666] focus:outline-none focus:border-[#C89467]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-5 py-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-[#0A2412] font-bold text-sm sm:text-base transition-all hover:scale-[1.01] shadow-lg flex items-center justify-center gap-2.5 cursor-pointer"
                  >
                    <WhatsAppIcon className="w-5 h-5 fill-current shrink-0" />
                    <span className="flex flex-wrap items-center justify-center gap-x-1.5 leading-snug text-center">
                      <span>Chamar no WhatsApp</span>
                      <span className="font-mono text-xs sm:text-sm font-semibold opacity-95 whitespace-nowrap">
                        {CONFIG.whatsappDisplay}
                      </span>
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ═══════════════════════════════════════════════════════════════════
          FOOTER: Clean, Sophisticated, Complete
         ═══════════════════════════════════════════════════════════════════ */}
      <footer className="bg-[#080707] text-[#8A8479] border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 space-y-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-white/10">
            <div className="flex flex-col items-start gap-1">
              <a
                href="#"
                className="flex items-center group focus-visible:outline-none"
                aria-label="Grupo Vitti — Construção, Reforma e Tecnologia"
              >
                <VittiLogo variant="official-with-subtitle" theme="light" />
              </a>
              <div className="text-xs text-[#888] font-mono mt-1 flex flex-wrap items-center gap-x-2 gap-y-0.5">
                <span className="whitespace-nowrap">CNPJ {CONFIG.cnpj}</span>
                <span className="hidden sm:inline text-white/20">·</span>
                <span className="whitespace-nowrap">{CONFIG.regiao}</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-[#B8B2A7]">
              <a
                href={CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/[0.03] border border-white/10 hover:border-[#C89467]/50 hover:bg-white/[0.06] hover:text-white transition-all group"
                aria-label={`Instagram @${CONFIG.instagram}`}
              >
                <Instagram className="w-4 h-4 text-[#C89467] group-hover:scale-110 transition-transform" />
                <span className="font-medium">@{CONFIG.instagram}</span>
              </a>

              <a
                href={CONFIG.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/[0.03] border border-white/10 hover:border-[#C89467]/50 hover:bg-white/[0.06] hover:text-white transition-all group"
                aria-label="Facebook Grupo Vitti"
              >
                <Facebook className="w-4 h-4 text-[#C89467] group-hover:scale-110 transition-transform" />
                <span className="font-medium">Facebook</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#666]">
            <div>
              © {new Date().getFullYear()} {CONFIG.siteName}. Todos os direitos reservados.
            </div>
            <div className="text-center sm:text-right">
              Atendimento em Cabo Frio (Braga, Peró, Ogiva) · Tamoios e Unamar (2º Distrito) · Búzios (Ferradura, Geribá, Manguinhos) · Arraial do Cabo (Pontal do Atalaia) · São Pedro da Aldeia · Iguaba Grande · Rio das Ostras
            </div>
          </div>
        </div>
      </footer>

      {/* Interactive Article Reading Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <ArticleModal
            article={selectedArticle}
            onClose={handleCloseArticle}
          />
        )}
      </AnimatePresence>

      {/* Interactive Project Memorial Technical Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectMemorialModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
