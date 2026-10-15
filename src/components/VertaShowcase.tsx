import React, { useState } from 'react';
import { CONFIG, whatsappLink } from '../../lib/config';
import { ArrowUpRight, Check } from 'lucide-react';

type VertaModuleKey = 'curva-s' | 'suprimentos' | 'diario';

export const VertaShowcase: React.FC = () => {
  const [activeModule, setActiveModule] = useState<VertaModuleKey>('curva-s');
  const [waitlistEmail, setWaitlistEmail] = useState('');
  const [waitlistRole, setWaitlistRole] = useState<'proprietario' | 'arquiteto' | 'engenheiro'>('proprietario');
  const [waitlistSubmitted, setWaitlistSubmitted] = useState(false);

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!waitlistEmail.trim() || !waitlistEmail.includes('@')) return;
    setWaitlistSubmitted(true);
  };

  return (
    <section id="verta" className="py-20 lg:py-28 bg-[#121110] text-[#F8F6F2] border-t border-white/10">
      <div className="max-w-[1240px] mx-auto px-6">
        {/* Top Kicker & Editorial Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-tabular text-[#C89D66] mb-3">
              <span>04 · TECNOLOGIA PROPRIETÁRIA DO GRUPO VITTI</span>
              <span aria-hidden="true">·</span>
              <span>STATUS: {CONFIG.vertaStatus.toUpperCase()}</span>
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-[44px] font-editorial font-medium text-white leading-[1.1] tracking-wide"
              style={{ textWrap: 'balance' }}
            >
              {CONFIG.vertaName}: Inteligência Executiva e Transparência Radical no Canteiro
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <span className="text-xs font-mono-tabular text-[#C89467] border border-[#C89467]/30 px-3 py-1 rounded-full bg-[#C89467]/10">
              Lançamento Oficial em Breve
            </span>
          </div>
        </div>

        {/* Main Split: Narrative & Waitlist (Left 5 cols) + Interactive Console Preview (Right 7 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-12 items-stretch">
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-5">
              <p className="text-base text-[#D8D2C7] leading-relaxed">
                Nascida nos canteiros de obras do <strong className="text-white font-semibold">{CONFIG.siteName}</strong>, a{' '}
                <strong className="text-white font-semibold">{CONFIG.vertaName}</strong> é nossa plataforma digital criada para eliminar a assimetria de informação entre construtora, arquiteto e proprietário.
              </p>
              <p className="text-sm text-[#A8A29A] leading-relaxed">
                Cada etapa medida no canteiro, cada nota fiscal de insumo homologado e cada ensaio tecnológico de concreto ficam disponíveis em uma linha do tempo auditável em tempo real.
              </p>

              <div className="pt-4 space-y-4 border-t border-white/10">
                <div>
                  <div className="text-xs font-mono-tabular text-[#C89D66]">01. MEDIÇÃO FÍSICA AUDITÁVEL</div>
                  <p className="text-xs sm:text-sm text-[#D8D2C7] mt-1">
                    Desembolsos financeiros atrelados a marcos físicos comprovados em campo com registro georreferenciado.
                  </p>
                </div>
                <div>
                  <div className="text-xs font-mono-tabular text-[#C89D66]">02. RASTREABILIDADE DE SUPRIMENTOS</div>
                  <p className="text-xs sm:text-sm text-[#D8D2C7] mt-1">
                    Acesso integral às cotações comparativas, certificados de qualidade do aço/concreto e notas fiscais.
                  </p>
                </div>
                <div>
                  <div className="text-xs font-mono-tabular text-[#C89D66]">03. PORTAL DO PROPRIETÁRIO & ARQUITETO</div>
                  <p className="text-xs sm:text-sm text-[#D8D2C7] mt-1">
                    Revisões de projeto executivo controladas para que o canteiro trabalhe sempre na última revisão vigente.
                  </p>
                </div>
              </div>
            </div>

            {/* Waitlist / Early Access Box */}
            <div className="bg-[#1B1A18] border border-white/10 p-6">
              <div className="text-xs font-mono-tabular text-[#EAE5DC] mb-2">
                ACESSO ANTECIPADO · {CONFIG.vertaName.toUpperCase()} ({CONFIG.vertaStatus.toUpperCase()})
              </div>
              <p className="text-xs text-[#A8A29A] mb-4">
                Clientes do {CONFIG.siteName} já contam com metodologia {CONFIG.vertaName} em suas obras. Cadastre-se na lista VIP para receber o acesso em primeira mão assim que a plataforma for lançada.
              </p>

              {!waitlistSubmitted ? (
                <form onSubmit={handleWaitlistSubmit} className="space-y-3">
                  <div className="grid grid-cols-3 gap-1.5">
                    {(
                      [
                        { id: 'proprietario', label: 'Proprietário' },
                        { id: 'arquiteto', label: 'Arquiteto(a)' },
                        { id: 'engenheiro', label: 'Engenheiro(a)' },
                      ] as const
                    ).map((r) => (
                      <button
                        key={r.id}
                        type="button"
                        onClick={() => setWaitlistRole(r.id)}
                        className={`px-2.5 py-1.5 text-xs font-medium border transition-colors whitespace-nowrap truncate ${
                          waitlistRole === r.id
                            ? 'bg-[#F8F6F2] text-[#141413] border-[#F8F6F2]'
                            : 'bg-transparent text-[#A8A29A] border-white/15 hover:border-white/40'
                        }`}
                      >
                        {r.label}
                      </button>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="email"
                      required
                      value={waitlistEmail}
                      onChange={(e) => setWaitlistEmail(e.target.value)}
                      placeholder="Seu melhor e-mail profissional"
                      className="flex-1 bg-[#121110] border border-white/20 px-3.5 py-2.5 text-xs text-white placeholder-[#7A756E] focus:outline-none focus:border-[#C89D66]"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2.5 bg-[#C89D66] text-[#121110] text-xs font-semibold hover:bg-[#D6AD79] transition-colors whitespace-nowrap shrink-0"
                    >
                      Entrar na Lista
                    </button>
                  </div>
                </form>
              ) : (
                <div className="space-y-3 pt-1">
                  <div className="flex items-center gap-2 text-xs text-[#D8D2C7]">
                    <Check className="w-4 h-4 text-[#C89D66] shrink-0" />
                    <span>
                      Interesse registrado para <strong className="text-white">{waitlistEmail}</strong>.
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={whatsappLink(
                        `Olá! Cadastrei meu e-mail (${waitlistEmail}) na lista VIP para conhecer a plataforma ${CONFIG.vertaName} do ${CONFIG.siteName}.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono-tabular text-[#C89D66] hover:underline"
                    >
                      <span>Solicitar demonstração no WhatsApp</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setWaitlistSubmitted(false);
                        setWaitlistEmail('');
                      }}
                      className="text-xs text-[#8E8880] hover:text-white"
                    >
                      Alterar e-mail
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right 7 Cols: Interactive Preview of Verta Interface */}
          <div className="lg:col-span-7 bg-[#181715] border border-white/15 flex flex-col justify-between">
            {/* Console Header */}
            <div className="px-5 py-4 border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="text-xs font-mono-tabular text-[#A8A29A]">
                  VERTA CONSTRUCTION OS · PAINEL DO PROPRIETÁRIO
                </div>
                <div className="text-sm font-medium text-white mt-0.5">
                  Obra VT-2401 · Residência Mirante da Ferradura (Búzios, RJ)
                </div>
              </div>

              {/* Interactive Module Switcher */}
              <div className="flex items-center gap-1 bg-[#121110] p-1 border border-white/10 self-start sm:self-auto">
                {(
                  [
                    { id: 'curva-s', label: 'Curva S & Finanças' },
                    { id: 'suprimentos', label: 'Insumos & NF-e' },
                    { id: 'diario', label: 'Qualidade & Ensaios' },
                  ] as const
                ).map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveModule(tab.id)}
                    className={`px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                      activeModule === tab.id
                        ? 'bg-[#F8F6F2] text-[#141413]'
                        : 'text-[#A8A29A] hover:text-white'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Console Body */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
              {activeModule === 'curva-s' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="p-4 bg-[#121110] border border-white/10">
                      <div className="text-[11px] font-mono-tabular text-[#A8A29A]">AVANÇO FÍSICO MEDIDO</div>
                      <div className="text-2xl font-mono-tabular font-semibold text-white mt-1">78,4%</div>
                      <div className="text-[11px] font-mono-tabular text-[#C89D66] mt-1">
                        Previsto baseline: 78,0% (+0,4%)
                      </div>
                    </div>
                    <div className="p-4 bg-[#121110] border border-white/10">
                      <div className="text-[11px] font-mono-tabular text-[#A8A29A]">DESEMBOLSO ACUMULADO</div>
                      <div className="text-2xl font-mono-tabular font-semibold text-white mt-1">76,9%</div>
                      <div className="text-[11px] font-mono-tabular text-[#A8A29A] mt-1">
                        Economia acumulada: -1,5% s/ orçado
                      </div>
                    </div>
                    <div className="p-4 bg-[#121110] border border-white/10">
                      <div className="text-[11px] font-mono-tabular text-[#A8A29A]">PRÓXIMA MEDIÇÃO</div>
                      <div className="text-2xl font-mono-tabular font-semibold text-white mt-1">Quinzena 19</div>
                      <div className="text-[11px] font-mono-tabular text-[#A8A29A] mt-1">
                        Esquadrias Navais & Paginação Pedra
                      </div>
                    </div>
                  </div>

                  {/* Stage Execution Table */}
                  <div className="border border-white/10 divide-y divide-white/10 text-xs">
                    <div className="grid grid-cols-12 px-4 py-2.5 bg-[#121110] font-mono-tabular text-[#A8A29A]">
                      <span className="col-span-6">DISCIPLINA EXECUTIVA</span>
                      <span className="col-span-3 text-right">PESO</span>
                      <span className="col-span-3 text-right">EXECUÇÃO</span>
                    </div>
                    {[
                      { name: '01. Fundações Profundas & Contenção Costeira', weight: '16,5%', status: '100,0%' },
                      { name: '02. Superestrutura Concreto Aparente (fck 40 MPa)', weight: '28,0%', status: '100,0%' },
                      { name: '03. Impermeabilização Poliuréia & Alvenarias', weight: '15,0%', status: '100,0%' },
                      { name: '04. Instalações MEP & Automação Cabeada', weight: '17,5%', status: '84,0%' },
                      { name: '05. Brises Cumaru, Esquadrias & Revestimentos', weight: '23,0%', status: '32,5%' },
                    ].map((row) => (
                      <div key={row.name} className="grid grid-cols-12 px-4 py-3 items-center">
                        <span className="col-span-6 text-[#EAE5DC] truncate pr-2">{row.name}</span>
                        <span className="col-span-3 text-right font-mono-tabular text-[#A8A29A]">{row.weight}</span>
                        <span className="col-span-3 text-right font-mono-tabular text-white font-medium">
                          {row.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeModule === 'suprimentos' && (
                <div className="space-y-5">
                  <div className="text-xs text-[#D8D2C7]">
                    Auditoria aberta de compras: todas as aquisições passam por mapa comparativo de no mínimo 3 fornecedores homologados na Região dos Lagos e capital.
                  </div>
                  <div className="border border-white/10 divide-y divide-white/10 text-xs">
                    <div className="grid grid-cols-12 px-4 py-2.5 bg-[#121110] font-mono-tabular text-[#A8A29A]">
                      <span className="col-span-5">LOTE DE SUPRIMENTO</span>
                      <span className="col-span-4">ESPECIFICAÇÃO TÉCNICA</span>
                      <span className="col-span-3 text-right">COMPLIANCE</span>
                    </div>
                    {[
                      {
                        item: 'Concreto Usinado Bombeado',
                        spec: 'fck 40 MPa · Adição Microssílica (CAA IV)',
                        doc: 'Laudo 28d Aprovado',
                      },
                      {
                        item: 'Aço Estrutural CA-50 / CA-60',
                        spec: 'Corte e dobra industrial · Rastreio Corrida',
                        doc: 'Certificado Usina OK',
                      },
                      {
                        item: 'Madeira Cumaru Certificada',
                        spec: 'Secagem em estufa + Autoclave Naval',
                        doc: 'DOF / IBAMA Verificado',
                      },
                      {
                        item: 'Perfis Alumínio Anodizado',
                        spec: 'Linha Minimalista · Fixadores Inox 316',
                        doc: 'Garantia 10 Anos Costeira',
                      },
                    ].map((lot) => (
                      <div key={lot.item} className="grid grid-cols-12 px-4 py-3.5 items-center">
                        <span className="col-span-5 text-white font-medium truncate pr-2">{lot.item}</span>
                        <span className="col-span-4 text-[#A8A29A] truncate pr-2">{lot.spec}</span>
                        <span className="col-span-3 text-right font-mono-tabular text-[#C89D66]">{lot.doc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeModule === 'diario' && (
                <div className="space-y-5">
                  <div className="text-xs text-[#D8D2C7]">
                    Controle tecnológico de qualidade e FVS (Fichas de Verificação de Serviço) assinadas pelo engenheiro residente antes da liberação de cada etapa subsequente.
                  </div>
                  <div className="space-y-3">
                    {[
                      {
                        date: 'FVS-042 · Impermeabilização de Piscina em Balanço',
                        detail: 'Teste de estanqueidade 72h com lâmina d’água concluído sem queda de nível. Liberado para assentamento de pedra Hijau.',
                        resp: 'Eng. Responsável · ART Registrada CREA-RJ',
                      },
                      {
                        date: 'FVS-039 · Rompimento de Corpos de Prova (Laje Nível +6,45m)',
                        detail: 'Resistência média atingida aos 28 dias: 44,8 MPa (superior ao fck 40 MPa especificado em projeto estrutural).',
                        resp: 'Laboratório Tecnológico Homologado',
                      },
                      {
                        date: 'FVS-035 · Conferência de Cobrimento de Armaduras (CAA IV)',
                        detail: 'Verificação com espaçadores plásticos pesados de 50mm em todas as faces expostas à névoa salina antes do fechamento das fôrmas.',
                        resp: 'Engenharia Residente Grupo Vitti',
                      },
                    ].map((log) => (
                      <div key={log.date} className="p-4 bg-[#121110] border border-white/10">
                        <div className="flex items-center justify-between text-xs font-mono-tabular text-[#C89D66]">
                          <span>{log.date}</span>
                          <span>VERIFICADO</span>
                        </div>
                        <p className="text-xs text-[#EAE5DC] mt-1.5 leading-relaxed">{log.detail}</p>
                        <div className="text-[11px] font-mono-tabular text-[#8E8880] mt-2">{log.resp}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Console Footer */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono-tabular text-[#A8A29A]">
                <span>STATUS: LANÇAMENTO EM BREVE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
