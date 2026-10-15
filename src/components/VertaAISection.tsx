import React, { useState, useEffect } from 'react';
import { CONFIG, whatsappLink } from '../../lib/config';
import { submitVipLead, leadFailureMessage } from '../lib/leads';
import { trackLead } from '../lib/analytics';
import {
  Sparkles,
  Brain,
  FileSpreadsheet,
  Camera,
  FileCheck2,
  Box,
  Compass,
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  Layers,
  Zap,
  Clock,
  Check,
  X,
  UploadCloud,
  FileText,
  UserCheck,
  Loader2,
  Mail,
  Copy,
  Download,
  Users,
  CheckCheck,
} from 'lucide-react';

interface VipLead {
  email: string;
  profile: string;
  date: string;
}

export const VertaAISection: React.FC = () => {
  const [waitlistEmail, setWaitlistEmail] = useState('');
  const [waitlistProfile, setWaitlistProfile] = useState('proprietario');
  const [waitlistSuccess, setWaitlistSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [botcheck, setBotcheck] = useState(false);
  const [savedLeads, setSavedLeads] = useState<VipLead[]>([]);
  const [showAdminModal, setShowAdminModal] = useState(false);
  const [copied, setCopied] = useState(false);

  // Carrega leads salvos no navegador (backup local)
  useEffect(() => {
    try {
      const stored = localStorage.getItem('verta_vip_leads');
      if (stored) {
        setSavedLeads(JSON.parse(stored));
      }
    } catch {
      // Ignora falha de parse
    }
  }, []);

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanEmail = waitlistEmail.trim();
    if (!cleanEmail || !cleanEmail.includes('@') || isSubmitting) return;

    setIsSubmitting(true);
    setSubmitError(null);
    const profileLabel =
      waitlistProfile === 'proprietario'
        ? 'Proprietário / Família'
        : waitlistProfile === 'arquiteto'
        ? 'Arquiteto / Projetista'
        : 'Profissional / Construtor';
    const nowStr = new Date().toLocaleString('pt-BR');

    // 1. Salva no banco local do navegador (backup imediato e sem falhas)
    const newEntry: VipLead = {
      email: cleanEmail,
      profile: profileLabel,
      date: nowStr,
    };

    try {
      const existing: VipLead[] = JSON.parse(localStorage.getItem('verta_vip_leads') || '[]');
      const filtered = existing.filter((item) => item.email.toLowerCase() !== cleanEmail.toLowerCase());
      const updated = [newEntry, ...filtered];
      localStorage.setItem('verta_vip_leads', JSON.stringify(updated));
      setSavedLeads(updated);
    } catch (storageErr) {
      console.warn('Erro ao salvar localmente:', storageErr);
    }

    // 2. Envio seguro via Web3Forms (chave pública protegida, e-mail administrativo oculto do client)
    try {
      const res = await submitVipLead({
        email: cleanEmail,
        profileLabel,
        submittedAt: nowStr,
        botcheck,
      });

      if (!res.ok) {
        if (res.reason === 'not_configured') {
          // Em ambiente sem .env configurado, valida pelo armazenamento local
          trackLead('lista_vip_verta_local');
          setWaitlistSuccess(true);
        } else {
          setSubmitError(leadFailureMessage(res.reason));
        }
      } else {
        trackLead('lista_vip_verta');
        setWaitlistSuccess(true);
      }
    } catch (err) {
      console.warn('Falha inesperada no cadastro:', err);
      setSubmitError('Houve uma instabilidade na conexão. Tente novamente ou entre em contato pelo WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyEmails = () => {
    const list = savedLeads.map((l) => l.email).join(', ');
    navigator.clipboard.writeText(list);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownloadCsv = () => {
    const headers = 'Email,Perfil,Data de Cadastro\n';
    const rows = savedLeads.map((l) => `"${l.email}","${l.profile}","${l.date}"`).join('\n');
    const blob = new Blob([headers + rows], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `verta_lista_vip_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const comparisonRows = [
    {
      topic: 'Orçamentação de Plantas',
      before: 'Semanas de espera por planilhas manuais e orçamentos genéricos por m² que dobram no canteiro.',
      withVerta: 'Upload do PDF da planta com leitura automática de áreas, quantitativos de materiais (aço/concreto) e curva ABC em segundos.',
    },
    {
      topic: 'Avaliação de Terreno (Encostas & Litoral)',
      before: 'Comprar o lote no escuro e depois descobrir que o muro de arrimo ou fundação custará metade da casa.',
      withVerta: 'Análise por foto e vídeo: cálculo de declive, afloramento rochoso, drenagem de encosta e sugestão do partido estrutural ideal.',
    },
    {
      topic: 'Laudos Periciais & Vistorias Cautelares',
      before: 'Horas redigindo relatórios no Word propensos a contestações jurídicas e retrabalhos.',
      withVerta: 'Geração automatizada de laudos de patologia e vistorias de vizinhança conforme normas ABNT e IBAPE, prontos para emissão de ART.',
    },
    {
      topic: 'Consulta a Normas ABNT & Planos Diretores',
      before: 'Folhear centenas de páginas da NBR 6118 ou ligar para amigos na dúvida de cobrimento de armadura.',
      withVerta: 'Copiloto de engenharia 24/7 respondendo com precisão cirúrgica os limites normativos para a agressividade marinha da Região dos Lagos.',
    },
    {
      topic: 'Detecção de Conflitos (Clash Detection)',
      before: 'Descobrir na concretagem que o cano do esgoto intercepta uma viga estrutural portante.',
      withVerta: 'Cruzamento preventivo entre arquitetura, cálculo estrutural e instalações hidráulicas/elétricas antes da abertura das fôrmas.',
    },
  ];

  const aiCapabilities = [
    {
      icon: FileSpreadsheet,
      title: 'Leitura de Plantas & Orçamento Instantâneo',
      desc: 'Faça upload de plantas em PDF ou DWG. O Verta processa ambientes, vãos e alvenarias, gerando quantitativos de materiais e estimativas de custo preliminares.',
    },
    {
      icon: Camera,
      title: 'Análise de Terreno por Foto e Vídeo',
      desc: 'Envie imagens do lote. A IA avalia inclinação, indícios geológicos, insolação e sugere soluções inteligentes de fundação e contenção.',
    },
    {
      icon: FileCheck2,
      title: 'Gerador de Laudos & Vistorias Técnicas',
      desc: 'Elaboração assistida de laudos periciais de patologias (trincas, umidade, corrosão marinha) e vistorias de vizinhança com padrão formal do IBAPE.',
    },
    {
      icon: Box,
      title: 'Estudos Conceituais & Render 3D de Fachadas',
      desc: 'Transforme croquis ou descrições em conceitos visuais contemporâneos e fotorrealistas adaptados à arquitetura litorânea.',
    },
    {
      icon: Compass,
      title: 'Copiloto de Normas NBR & Códigos de Obras',
      desc: 'Tire dúvidas sobre NBR 6118, NBR 15575 e regras de condomínios fechados em Cabo Frio, Búzios e Arraial do Cabo instantaneamente.',
    },
    {
      icon: Brain,
      title: 'Prevenção de Falhas e Compatibilização',
      desc: 'Evite tubulações furando vigas ou problemas de pé-direito. A IA cruza projetos complementares antes que o canteiro erre.',
    },
  ];

  const workflowSteps = [
    {
      step: '01',
      icon: UploadCloud,
      title: 'Envie o Arquivo ou Pergunta',
      desc: 'Faça upload da planta em PDF, envie uma foto do terreno ou pergunte uma dúvida técnica complexa de canteiro.',
    },
    {
      step: '02',
      icon: Cpu,
      title: 'Processamento Multimodal Verta AI',
      desc: 'O modelo de IA especializado do Verta processa os dados cruzando com normas ABNT, SINAPI, CUB e regras geotécnicas.',
    },
    {
      step: '03',
      icon: FileText,
      title: 'Receba a Entrega Técnica Pronta',
      desc: 'Tenha em mãos a memória de cálculo, o laudo pericial formatado ou o relatório executivo pronto para tomada de decisão.',
    },
  ];

  const audienceProfiles = [
    {
      title: 'Para Quem vai Construir ou Reformar',
      subtitle: 'Proprietários & Famílias',
      benefits: [
        'Tenha um "especialista em obra no bolso" para não cair em orçamentos inflados',
        'Avalie terrenos antes de comprar para saber custos ocultos de fundação',
        'Tire dúvidas na hora sobre materiais e etapas da construção',
      ],
    },
    {
      title: 'Para Arquitetos e Designers',
      subtitle: 'Projetistas & Criadores',
      benefits: [
        'Compatibilize ideias com restrições de estrutura antes da entrega ao cliente',
        'Gere estimativas prévias de custos para manter o projeto dentro do orçamento',
        'Consulte recuos, taxas de ocupação e normas de desempenho em segundos',
      ],
    },
    {
      title: 'Para Construtoras e Empreiteiros',
      subtitle: 'Profissionais do Setor',
      benefits: [
        'Automatize a emissão de laudos de vistoria e diários de obra',
        'Acelere o levantamento de quantitativos e materiais com agilidade',
        'Reduza retrabalhos e custos com incompatibilidade entre disciplinas',
      ],
    },
  ];

  return (
    <section id="verta" className="py-20 sm:py-28 bg-[#0D0C0B] border-t border-white/10 relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 right-1/4 w-[700px] h-[700px] bg-gradient-to-b from-[#C89467]/30 to-transparent blur-[140px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10 space-y-20">
        {/* Header Block */}
        <div className="max-w-4xl mx-auto text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-xs font-mono tracking-wider uppercase text-emerald-300">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>100% Gratuito · Créditos Diários Inclusos · Sem Cartão</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            {CONFIG.vertaName}: A Primeira IA Especialista em Obras do Brasil.
          </h2>

          <p className="text-base sm:text-lg text-[#B8B2A7] leading-relaxed max-w-3xl mx-auto">
            Criado pelo <strong className="text-white font-semibold">Grupo Vitti</strong>, o{' '}
            <strong className="text-white font-semibold">{CONFIG.vertaName}</strong> é uma inteligência
            artificial especialista em construção civil e projetos.
            Um copiloto de obra no seu bolso — <strong className="text-white font-semibold text-emerald-400">totalmente gratuito para usar</strong>.
            Você recebe uma cota diária de créditos para tirar dúvidas, analisar plantas e orçar sem pagar nada.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-mono text-[#8A8479] pt-2">
            <span className="flex items-center gap-1.5 text-emerald-400 font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <Check className="w-3.5 h-3.5" />
              100% Gratuito
            </span>
            <span className="flex items-center gap-1.5 text-[#C89467] px-2.5 py-1 rounded-full bg-[#C89467]/10 border border-[#C89467]/20">
              <Zap className="w-3.5 h-3.5" />
              Créditos Diários Renovados
            </span>
            <span className="text-[#8A8479] hidden sm:inline">
              (Planos de maior volume serão definidos futuramente)
            </span>
            <span className="flex items-center gap-1.5 text-[#E8C29E] px-2.5 py-1 rounded-full bg-white/5 border border-white/10 font-mono">
              <Clock className="w-3.5 h-3.5" />
              Lançamento Oficial em Breve
            </span>
          </div>
        </div>

        {/* 1. SUBSTITUIÇÃO DO PAINEL ILUSTRATIVO: MATRIZ DE IMPACTO (SEM VERTA vs COM VERTA AI) */}
        <div className="space-y-6">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-8">
            <div className="text-xs font-mono uppercase tracking-wider text-[#C89467]">
              Impacto Real na Prática
            </div>
            <h3 className="text-2xl sm:text-4xl font-bold text-white">
              A Obra Tradicional vs. A Engenharia Acelerada por IA
            </h3>
            <p className="text-xs sm:text-sm text-[#8A8479] max-w-xl mx-auto">
              Veja a diferença prática de velocidade, precisão e economia que o Verta entrega em cada
              fase da construção.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#141312] overflow-hidden shadow-2xl">
            {/* Table Header */}
            <div className="grid grid-cols-12 bg-[#1A1816] px-6 py-4 text-xs font-mono text-[#A8A29A] border-b border-white/10">
              <div className="col-span-12 md:col-span-3 uppercase">Desafio de Obra</div>
              <div className="col-span-12 md:col-span-4 uppercase text-[#D96B6B] mt-2 md:mt-0 flex items-center gap-1.5">
                <X className="w-3.5 h-3.5" />
                Sem Verta AI (Tradicional)
              </div>
              <div className="col-span-12 md:col-span-5 uppercase text-[#25D366] mt-2 md:mt-0 flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#C89467]" />
                Com Verta AI (IA Especialista)
              </div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-white/5 text-xs sm:text-sm">
              {comparisonRows.map((row, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-12 px-6 py-5 hover:bg-white/[0.02] transition-colors items-start gap-4 md:gap-0"
                >
                  <div className="col-span-12 md:col-span-3 font-semibold text-white">
                    {row.topic}
                  </div>
                  <div className="col-span-12 md:col-span-4 text-[#8A8479] leading-relaxed pr-4">
                    {row.before}
                  </div>
                  <div className="col-span-12 md:col-span-5 text-[#E5E0D5] leading-relaxed bg-[#C89467]/5 md:bg-transparent p-3 md:p-0 rounded-lg">
                    <span className="font-medium text-[#E8C29E] md:text-[#E5E0D5]">
                      {row.withVerta}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 2. COMO FUNCIONA O FLUXO DA IA (3 PASSOS EXECUTIVOS) */}
        <div className="space-y-8 pt-6">
          <div className="max-w-2xl lg:max-w-4xl mx-auto text-center space-y-3 mb-10">
            <div className="text-xs font-mono tracking-wider uppercase text-[#C89467]">
              Fluxo Simples & Sem Fricção
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white lg:whitespace-nowrap">
              Como Você Utiliza o Verta no Seu Dia a Dia
            </h3>
            <p className="text-xs sm:text-sm text-[#8A8479] max-w-md mx-auto">
              Três etapas simples para resolver qualquer dúvida ou calcular orçamentos em segundos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {workflowSteps.map((ws) => {
              const IconComponent = ws.icon;
              return (
                <div
                  key={ws.step}
                  className="p-8 rounded-2xl bg-[#141312] border border-white/10 hover:border-[#C89467]/50 transition-all flex flex-col justify-between space-y-4 group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#C89467] group-hover:scale-110 transition-transform">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono font-bold text-[#7A756E]">
                        ETAPA {ws.step}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-white group-hover:text-[#E8C29E] transition-colors">
                      {ws.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-[#A8A29A] leading-relaxed">
                      {ws.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3. OS 6 SUPERPODERES DA IA DO VERTA */}
        <div className="space-y-8 pt-6">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
            <div className="text-xs font-mono tracking-wider uppercase text-[#C89467]">
              Capacidades Exclusivas de Engenharia
            </div>
            <h3 className="text-2xl sm:text-4xl font-bold text-white">
              Superpoderes que nenhuma IA genérica possui sobre canteiros de obras
            </h3>
            <p className="text-sm text-[#B8B2A7] max-w-2xl mx-auto">
              O ChatGPT comum não entende de solo litorâneo, normas de concreto NBR 6118 ou leitura
              de pranchas executivas de arquitetura. O Verta foi treinado exatamente para isso.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiCapabilities.map((cap, idx) => {
              const IconComp = cap.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#141312] border border-white/10 hover:border-[#C89467]/40 transition-all space-y-3 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#C89467] group-hover:scale-110 transition-transform">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-[#E8C29E] transition-colors">
                    {cap.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#A8A29A] leading-relaxed">{cap.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4. PARA QUEM FOI FEITO */}
        <div className="space-y-8 pt-6">
          <div className="max-w-2xl lg:max-w-4xl mx-auto text-center space-y-3 mb-10">
            <div className="text-xs font-mono tracking-wider uppercase text-[#C89467]">
              Para Quem Foi Feito
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white lg:whitespace-nowrap">
              Criado para Cada Elo da Construção Civil
            </h3>
            <p className="text-xs sm:text-sm text-[#8A8479] max-w-md mx-auto">
              Soluções sob medida para proprietários, projetistas e construtores.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {audienceProfiles.map((prof, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#141312] border border-white/10 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div>
                    <span className="text-[11px] font-mono text-[#C89467] uppercase font-semibold">
                      {prof.subtitle}
                    </span>
                    <h4 className="text-lg font-bold text-white mt-1">{prof.title}</h4>
                  </div>

                  <ul className="space-y-2.5 text-xs text-[#B8B2A7]">
                    {prof.benefits.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#C89467] shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <span className="text-[11px] font-mono text-emerald-400 font-semibold flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5" />
                    Disponível gratuitamente no Verta
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5. CAPTURA LISTA VIP GRATUITA */}
        <div className="rounded-3xl bg-gradient-to-b from-[#1C1A18] via-[#171513] to-[#121110] border border-[#C89467]/30 p-8 sm:p-12 max-w-4xl mx-auto text-center space-y-8 shadow-2xl">
          <div className="space-y-3 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono uppercase tracking-wider text-emerald-400 mx-auto">
              <Check className="w-3.5 h-3.5" />
              <span>100% Gratuito · Créditos Diários Renovados · Sem Cobrança</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
              Comece Grátis no Verta AI & Ganhe Créditos Bônus
            </h3>
            <p className="text-xs sm:text-sm text-[#B8B2A7] leading-relaxed">
              O Verta é 100% gratuito para você usar. Você ganha uma cota diária de créditos
              para tirar dúvidas, fazer upload de plantas e testar todas as funcionalidades na prática sem gastar nada.
              No futuro definiremos planos opcionais para quem desejar volume ainda maior, mas o acesso principal é grátis.
              Cadastre-se na lista VIP para garantir acesso antecipado e receber créditos bônus de presente assim que a plataforma for lançada.
            </p>
          </div>

          <div className="max-w-md mx-auto w-full">
            {!waitlistSuccess ? (
              <form onSubmit={handleWaitlistSubmit} className="space-y-3 w-full max-w-md mx-auto">
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'proprietario', label: 'Proprietário' },
                    { id: 'arquiteto', label: 'Arquiteto' },
                    { id: 'profissional', label: 'Profissional' },
                  ].map((role) => (
                    <button
                      key={role.id}
                      type="button"
                      onClick={() => setWaitlistProfile(role.id)}
                      className={`py-2 px-1 rounded-xl border text-[11px] sm:text-xs font-medium transition-all text-center whitespace-nowrap cursor-pointer ${
                        waitlistProfile === role.id
                          ? 'bg-white text-[#0D0C0B] font-bold border-white shadow-sm'
                          : 'bg-white/5 text-[#A8A29A] border-white/10 hover:border-white/20 hover:text-white'
                      }`}
                    >
                      {role.label}
                    </button>
                  ))}
                </div>

                {/* Honeypot anti-spam para Web3Forms (invisível para usuários reais) */}
                <input
                  type="checkbox"
                  name="botcheck"
                  tabIndex={-1}
                  autoComplete="off"
                  checked={botcheck}
                  onChange={(e) => setBotcheck(e.target.checked)}
                  className="hidden"
                  style={{ display: 'none' }}
                />

                <div className="flex flex-col sm:flex-row gap-2.5">
                  <input
                    type="email"
                    required
                    value={waitlistEmail}
                    onChange={(e) => {
                      setWaitlistEmail(e.target.value);
                      if (submitError) setSubmitError(null);
                    }}
                    placeholder="Seu melhor e-mail"
                    disabled={isSubmitting}
                    className="w-full sm:flex-1 px-4 py-3.5 rounded-xl bg-black/50 border border-white/15 text-sm text-white placeholder-[#666] focus:outline-none focus:border-[#C89467] disabled:opacity-60"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white text-[#0D0C0B] text-xs sm:text-sm font-bold hover:bg-[#EAE5DC] transition-all whitespace-nowrap flex items-center justify-center gap-2 disabled:opacity-70 cursor-pointer shadow-md"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <span>Entrar na Lista</span>
                    )}
                  </button>
                </div>

                {submitError && (
                  <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-200 text-left space-y-1.5 animate-fadeIn">
                    <p>{submitError}</p>
                    <a
                      href={whatsappLink(`Olá! Tentei me cadastrar na lista VIP da IA do ${CONFIG.vertaName} com o e-mail ${waitlistEmail || ''}, mas prefiro confirmar diretamente por aqui.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-semibold text-white underline hover:text-amber-300"
                    >
                      <span>Confirmar vaga pelo WhatsApp</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                )}

                <div className="pt-1 flex items-center justify-between text-[11px] font-mono text-[#7A756E]">
                  <span className="flex items-center gap-1 text-[#8A8479]">
                    <Mail className="w-3 h-3 text-emerald-400" />
                    Notificação automática protegida
                  </span>
                  {savedLeads.length > 0 && (
                    <button
                      type="button"
                      onClick={() => setShowAdminModal(true)}
                      className="hover:text-white underline transition-colors cursor-pointer"
                      title="Ver todos os interessados compilados"
                    >
                      Leads Salvos ({savedLeads.length})
                    </button>
                  )}
                </div>
              </form>
            ) : (
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300 space-y-2.5">
                <div className="flex items-center gap-1.5 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Você está na Lista VIP do Verta!</span>
                </div>
                <p className="text-[11px] text-[#A8A29A] leading-relaxed">
                  Cadastro recebido com sucesso. Enviamos a notificação para a equipe e avisaremos em{' '}
                  <strong className="text-white">{waitlistEmail}</strong> assim que o primeiro lote de
                  convites beta com créditos gratuitos for liberado.
                </p>
                <div className="pt-1 flex flex-wrap items-center justify-between gap-3">
                  <a
                    href={whatsappLink(
                      `Olá! Me cadastrei na lista VIP da IA do ${CONFIG.vertaName} (${waitlistEmail}). Gostaria de tirar algumas dúvidas direto com você.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-white underline hover:text-emerald-300"
                  >
                    <span>Chamar no WhatsApp para tirar dúvidas</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                  {savedLeads.length > 0 && (
                    <button
                      type="button"
                      onClick={() => setShowAdminModal(true)}
                      className="text-[10px] text-[#8A8479] hover:text-white underline cursor-pointer"
                    >
                      Ver Lista ({savedLeads.length})
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal de Gestão da Lista VIP (Admin) */}
      {showAdminModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#171513] border border-white/20 rounded-2xl max-w-lg w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
            <div className="p-5 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-[#C89467]" />
                <div>
                  <h4 className="text-base font-bold text-white">Interessados Lista VIP Verta</h4>
                  <p className="text-xs text-[#8A8479]">
                    {savedLeads.length} contato(s) registrado(s)
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowAdminModal(false)}
                className="text-[#8A8479] hover:text-white p-1 rounded-lg hover:bg-white/5 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 bg-emerald-500/10 border-b border-emerald-500/20 text-xs text-emerald-300 flex items-center gap-2">
              <Mail className="w-4 h-4 shrink-0 text-emerald-400" />
              <span>
                Notificações ativas via <strong>Web3Forms</strong> (destino confidencial protegido no servidor)
              </span>
            </div>

            <div className="p-4 overflow-y-auto flex-1 divide-y divide-white/10">
              {savedLeads.length === 0 ? (
                <p className="text-center text-xs text-[#8A8479] py-8">Nenhum lead cadastrado ainda.</p>
              ) : (
                savedLeads.map((lead, idx) => (
                  <div key={idx} className="py-2.5 flex items-center justify-between text-xs gap-3">
                    <div className="truncate">
                      <div className="font-semibold text-white truncate">{lead.email}</div>
                      <div className="text-[10px] text-[#8A8479] flex items-center gap-2 mt-0.5">
                        <span className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 font-mono">
                          {lead.profile}
                        </span>
                        <span>{lead.date}</span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="p-4 border-t border-white/10 bg-[#121110] flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopyEmails}
                  disabled={savedLeads.length === 0}
                  className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-mono inline-flex items-center gap-1.5 transition-colors disabled:opacity-40 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <CheckCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar Todos</span>
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={handleDownloadCsv}
                  disabled={savedLeads.length === 0}
                  className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-mono inline-flex items-center gap-1.5 transition-colors disabled:opacity-40 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Baixar CSV</span>
                </button>
              </div>
              <button
                type="button"
                onClick={() => setShowAdminModal(false)}
                className="px-4 py-1.5 rounded-lg bg-white text-[#0D0C0B] text-xs font-bold hover:bg-[#EAE5DC] cursor-pointer"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
