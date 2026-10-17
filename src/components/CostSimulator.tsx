import React, { useMemo, useState } from 'react';
import { CONFIG, whatsappLink } from '../../lib/config';
import { ArrowUpRight, SlidersHorizontal } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

type InterventionScope = 'turnkey' | 'estrutural_cinza' | 'retrofit';
type FinishStandard = 'essencial' | 'alto_padrao' | 'monolitico_costeiro';
type TerrainCondition = 'plano' | 'declive_encosta' | 'frente_mar';

export const CostSimulator: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<(typeof CONFIG.cidades)[number]>('Cabo Frio');
  const [scope, setScope] = useState<InterventionScope>('turnkey');
  const [standard, setStandard] = useState<FinishStandard>('alto_padrao');
  const [terrain, setTerrain] = useState<TerrainCondition>('plano');
  const [areaM2, setAreaM2] = useState<number>(320);

  const calculation = useMemo(() => {
    const basePerSqm: Record<FinishStandard, number> = {
      essencial: 4150,
      alto_padrao: 5850,
      monolitico_costeiro: 7600,
    };

    const scopeMultiplier: Record<InterventionScope, number> = {
      turnkey: 1.0,
      estrutural_cinza: 0.48,
      retrofit: 0.64,
    };

    const cityFactor: Record<(typeof CONFIG.cidades)[number], number> = {
      'Cabo Frio': 1.02,
      'Tamoios / Cabo Frio': 1.00,
      'Búzios': 1.08,
      'Arraial do Cabo': 1.07,
      'São Pedro da Aldeia': 0.96,
      'Iguaba Grande': 0.95,
      'Rio das Ostras': 1.01,
    };

    const terrainMultiplier: Record<TerrainCondition, number> = {
      plano: 1.0,
      declive_encosta: 1.14,
      frente_mar: 1.11,
    };

    const unitCost = Math.round(
      basePerSqm[standard] *
        scopeMultiplier[scope] *
        cityFactor[selectedCity] *
        terrainMultiplier[terrain]
    );

    const totalEstimated = unitCost * areaM2;

    const baseMonths =
      scope === 'retrofit'
        ? Math.max(4, Math.round(areaM2 / 65) + 2)
        : scope === 'estrutural_cinza'
        ? Math.max(5, Math.round(areaM2 / 60) + 2)
        : Math.max(8, Math.round(areaM2 / 45) + 4);

    const terrainExtraMonths = terrain === 'declive_encosta' ? 2 : terrain === 'frente_mar' ? 1 : 0;
    const durationMonths = baseMonths + terrainExtraMonths;

    const stages = [
      {
        label: '01. Sondagem, Fundação & Movimento de Terra',
        pct: terrain === 'declive_encosta' ? 18 : 13,
      },
      {
        label: '02. Superestrutura em Concreto Armado (CAA III/IV)',
        pct: 26,
      },
      {
        label: '03. Vedação, Cobertura & Impermeabilização Costeira',
        pct: 17,
      },
      {
        label: '04. Instalações Elétricas, Hidráulicas & Climatização',
        pct: 16,
      },
      {
        label: '05. Revestimentos, Esquadrias Navais & Acabamentos',
        pct: terrain === 'declive_encosta' ? 23 : 28,
      },
    ];

    return {
      unitCost,
      totalEstimated,
      minRange: Math.round(totalEstimated * 0.94),
      maxRange: Math.round(totalEstimated * 1.06),
      durationMonths,
      stages: stages.map((st) => ({
        ...st,
        amount: Math.round((totalEstimated * st.pct) / 100),
      })),
    };
  }, [selectedCity, scope, standard, terrain, areaM2]);

  const formatBRL = (val: number) =>
    new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0,
    }).format(val);

  const scopeLabels: Record<InterventionScope, string> = {
    turnkey: 'Construção Integral (Turnkey)',
    estrutural_cinza: 'Fase Cinza (Fundação + Estrutura + Alvenaria)',
    retrofit: 'Retrofit Estrutural & Reforma de Alto Padrão',
  };

  const standardLabels: Record<FinishStandard, string> = {
    essencial: 'Contemporâneo Essencial',
    alto_padrao: 'Alto Padrão Editorial',
    monolitico_costeiro: 'Monolítico Costeiro (Concreto Aparente / Balanços)',
  };

  const terrainLabels: Record<TerrainCondition, string> = {
    plano: 'Lote Plano / Condomínio',
    declive_encosta: 'Aclive ou Declive Rochoso (Contenção)',
    frente_mar: 'Frente-Mar / Canal (Agressividade CAA IV)',
  };

  const customWhatsappMessage = `Olá, vim pelo site do ${CONFIG.siteName}. Realizei uma simulação paramétrica de obra:
- Cidade: ${selectedCity}
- Modalidade: ${scopeLabels[scope]}
- Padrão Construtivo: ${standardLabels[standard]}
- Topografia/Exposição: ${terrainLabels[terrain]}
- Área Estimada: ${areaM2} m²
- Estimativa Preliminar: ${formatBRL(calculation.totalEstimated)} (Prazo est.: ${calculation.durationMonths} meses)
Gostaria de agendar uma análise técnica executiva.`;

  return (
    <section id="simulador" className="py-20 lg:py-28 border-t border-[#E2DDD5] bg-[#EFECE6]">
      <div className="max-w-[1240px] mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-[#D8D2C7]">
          <div>
            <div className="text-xs font-mono-tabular text-[#6E6A63] mb-3">
              03 · ENGENHARIA DE CUSTOS & PREVISIBILIDADE FÍSICO-FINANCEIRA
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-[42px] font-editorial font-semibold text-[#171614] leading-[1.12]"
              style={{ textWrap: 'balance' }}
            >
              Simulador Paramétrico de Investimento e Prazo
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#524E48] max-w-md leading-relaxed">
            Calibrado com índices regionais de insumos, logística e exigências normativas da{' '}
            <strong className="font-semibold text-[#171614]">{CONFIG.regiao}</strong>.
          </p>
        </div>

        {/* Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-10 items-stretch">
          {/* Left Column: Parametric Controls (7 cols) */}
          <div className="lg:col-span-7 bg-[#F8F6F2] border border-[#DCD6CB] p-6 sm:p-8 flex flex-col justify-between gap-8">
            <div className="space-y-7">
              {/* 1. City Selector */}
              <div>
                <label className="block text-xs font-mono-tabular text-[#524E48] mb-3">
                  1. MUNICÍPIO DE IMPLANTAÇÃO ({CONFIG.regiao.toUpperCase()})
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {CONFIG.cidades.map((city) => {
                    const active = selectedCity === city;
                    return (
                      <button
                        key={city}
                        type="button"
                        onClick={() => setSelectedCity(city)}
                        className={`px-3.5 py-2.5 text-xs font-medium text-left border transition-colors whitespace-nowrap truncate ${
                          active
                            ? 'bg-[#171614] text-[#F8F6F2] border-[#171614]'
                            : 'bg-white text-[#3B3834] border-[#DCD6CB] hover:border-[#171614]'
                        }`}
                      >
                        {city}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. Intervention Scope */}
              <div>
                <label className="block text-xs font-mono-tabular text-[#524E48] mb-3">
                  2. MODALIDADE DE EXECUÇÃO
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {(
                    [
                      { id: 'turnkey', label: 'Obra Turnkey (Chave na Mão)' },
                      { id: 'estrutural_cinza', label: 'Fundação & Estrutura Cinza' },
                      { id: 'retrofit', label: 'Retrofit & Reforma Estrutural' },
                    ] as const
                  ).map((item) => {
                    const active = scope === item.id;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setScope(item.id)}
                        className={`px-3.5 py-2.5 text-xs font-medium text-left border transition-colors whitespace-nowrap truncate ${
                          active
                            ? 'bg-[#171614] text-[#F8F6F2] border-[#171614]'
                            : 'bg-white text-[#3B3834] border-[#DCD6CB] hover:border-[#171614]'
                        }`}
                      >
                        {item.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 3. Architectural & Structural Standard */}
              <div>
                <label className="block text-xs font-mono-tabular text-[#524E48] mb-3">
                  3. ESPECIFICAÇÃO ARQUITETÔNICA E ESTRUTURAL
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {(
                    [
                      { id: 'essencial', label: 'Contemporâneo Essencial' },
                      { id: 'alto_padrao', label: 'Alto Padrão Editorial' },
                      { id: 'monolitico_costeiro', label: 'Monolítico & Grandes Vãos' },
                    ] as const
                  ).map((item) => {
                    const active = standard === item.id;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setStandard(item.id)}
                        className={`px-3.5 py-2.5 text-xs font-medium text-left border transition-colors whitespace-nowrap truncate ${
                          active
                            ? 'bg-[#171614] text-[#F8F6F2] border-[#171614]'
                            : 'bg-white text-[#3B3834] border-[#DCD6CB] hover:border-[#171614]'
                        }`}
                      >
                        {item.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 4. Topography & Marine Exposure */}
              <div>
                <label className="block text-xs font-mono-tabular text-[#524E48] mb-3">
                  4. TOPOGRAFIA E EXPOSIÇÃO MARINHA (NBR 6118)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {(
                    [
                      { id: 'plano', label: 'Lote Plano / Condomínio' },
                      { id: 'declive_encosta', label: 'Declive / Encosta Rochosa' },
                      { id: 'frente_mar', label: 'Frente-Mar / Canal (CAA IV)' },
                    ] as const
                  ).map((item) => {
                    const active = terrain === item.id;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setTerrain(item.id)}
                        className={`px-3.5 py-2.5 text-xs font-medium text-left border transition-colors whitespace-nowrap truncate ${
                          active
                            ? 'bg-[#171614] text-[#F8F6F2] border-[#171614]'
                            : 'bg-white text-[#3B3834] border-[#DCD6CB] hover:border-[#171614]'
                        }`}
                      >
                        {item.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 5. Area Slider */}
              <div className="pt-2">
                <div className="flex items-center justify-between mb-2">
                  <label
                    htmlFor="area-slider"
                    className="text-xs font-mono-tabular text-[#524E48] flex items-center gap-2"
                  >
                    <SlidersHorizontal className="w-3.5 h-3.5" />
                    <span>5. ÁREA CONSTRUÍDA ESTIMADA</span>
                  </label>
                  <span className="text-lg font-mono-tabular font-semibold text-[#171614]">
                    {areaM2} m²
                  </span>
                </div>
                <input
                  id="area-slider"
                  type="range"
                  min={90}
                  max={850}
                  step={10}
                  value={areaM2}
                  onChange={(e) => setAreaM2(Number(e.target.value))}
                  className="w-full h-1.5 bg-[#D8D2C7] appearance-none cursor-pointer accent-[#171614]"
                />
                <div className="flex justify-between text-[11px] font-mono-tabular text-[#6E6A63] mt-1.5">
                  <span>90 m²</span>
                  <span>250 m²</span>
                  <span>450 m²</span>
                  <span>650 m²</span>
                  <span>850 m²</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E2DDD5] text-xs text-[#6E6A63] leading-relaxed">
              Nota técnica: Estimativa paramétrica preliminar baseada em histórico de obras do{' '}
              {CONFIG.siteName} na {CONFIG.regiao}. O orçamento executivo definitivo é emitido após
              análise de projetos e sondagem SPT.
            </div>
          </div>

          {/* Right Column: Live Analytical Output (5 cols) */}
          <div className="lg:col-span-5 bg-[#171614] text-[#F8F6F2] p-6 sm:p-8 flex flex-col justify-between border border-[#171614]">
            <div>
              <div className="flex items-center justify-between text-xs font-mono-tabular text-[#A8A29A] pb-4 border-b border-white/10">
                <span>MEMORIAL PARAMÉTRICO PRELIMINAR</span>
                <span>{selectedCity.toUpperCase()}</span>
              </div>

              <div className="py-6 border-b border-white/10">
                <div className="text-xs text-[#A8A29A] mb-1">
                  Investimento Global Estimado ({areaM2} m²)
                </div>
                <div className="text-3xl sm:text-4xl font-mono-tabular font-semibold tracking-tight text-white">
                  {formatBRL(calculation.totalEstimated)}
                </div>
                <div className="text-xs font-mono-tabular text-[#A8A29A] mt-2">
                  Faixa de precisão (-6% / +6%): {formatBRL(calculation.minRange)} —{' '}
                  {formatBRL(calculation.maxRange)}
                </div>

                <div className="grid grid-cols-2 gap-4 mt-6 pt-5 border-t border-white/10">
                  <div>
                    <div className="text-[11px] font-mono-tabular text-[#A8A29A]">
                      CUSTO MÉDIO / M²
                    </div>
                    <div className="text-base font-mono-tabular font-medium text-[#EAE5DC] mt-0.5">
                      {formatBRL(calculation.unitCost)} / m²
                    </div>
                  </div>
                  <div>
                    <div className="text-[11px] font-mono-tabular text-[#A8A29A]">
                      PRAZO FÍSICO ESTIMADO
                    </div>
                    <div className="text-base font-mono-tabular font-medium text-[#EAE5DC] mt-0.5">
                      {calculation.durationMonths} meses
                    </div>
                  </div>
                </div>
              </div>

              {/* Macro-Stage Breakdown */}
              <div className="py-5 space-y-3.5">
                <div className="text-xs font-mono-tabular text-[#A8A29A]">
                  DISTRIBUIÇÃO POR ETAPA EXECUTIVA
                </div>
                {calculation.stages.map((st) => (
                  <div key={st.label} className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[#D8D2C7] truncate pr-2">{st.label}</span>
                      <span className="font-mono-tabular text-[#F8F6F2] shrink-0">
                        {st.pct}% · {formatBRL(st.amount)}
                      </span>
                    </div>
                    <div className="w-full h-1 bg-white/10 overflow-hidden">
                      <div
                        className="h-full bg-[#C89D66]"
                        style={{ width: `${st.pct * 3}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 space-y-3">
              <a
                href={whatsappLink(customWhatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-3.5 bg-[#F8F6F2] text-[#171614] text-xs sm:text-sm font-semibold hover:bg-[#EAE5DC] transition-colors text-center sm:whitespace-nowrap"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366] shrink-0" />
                <span>Validar Simulação com Engenheiro no WhatsApp</span>
                <ArrowUpRight className="w-4 h-4 shrink-0" />
              </a>
              <div className="text-[11px] font-mono-tabular text-center text-[#9E9890]">
                Atendimento direto de engenharia · {CONFIG.whatsappDisplay}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
