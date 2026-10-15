import { CONFIG } from '../../lib/config';

export interface ProjectItem {
  id: string;
  code: string;
  title: string;
  city: (typeof CONFIG.cidades)[number];
  neighborhood: string;
  year: string;
  category: 'Residencial Alto Padrão' | 'Estrutural & Fundações' | 'Reformas & Retrofit';
  areaM2: number;
  durationMonths: number;
  structuralSystem: string;
  coastalProtection: string;
  summary: string;
  technicalHighlights: string[];
  metrics: {
    concreteVolumeM3: string;
    steelKg: string;
    scheduleAdherence: string;
  };
  plateType: 'buzios-villa' | 'cabofrio-house' | 'arraial-cliff' | 'spa-condo' | 'iguaba-lake' | 'buzios-retrofit';
}

export interface CapabilityItem {
  index: string;
  id: string;
  category: 'Residencial Alto Padrão' | 'Estrutural & Fundações' | 'Reformas & Retrofit';
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  normativeBase: string;
  outcomeMetric: string;
}

export interface CityEngineeringProfile {
  city: (typeof CONFIG.cidades)[number];
  aggressivenessClass: string;
  soilAndFoundation: string;
  typicalScope: string;
  urbanFocus: string;
  technicalNote: string;
}

export const CAPABILITIES: CapabilityItem[] = [
  {
    index: '01',
    id: 'turnkey-residencial',
    category: 'Residencial Alto Padrão',
    title: '01. Construção Residencial de Alto Padrão (Turnkey)',
    subtitle: 'Execução integral da fundação à entrega das chaves com preço e prazo auditáveis',
    description:
      'Assumimos a responsabilidade única pela materialização de residências autorais na Região dos Lagos. Integramos compatibilização de projetos executivos, suprimentos homologados, mão de obra própria especializada e controle rigoroso de acabamento.',
    deliverables: [
      'Compatibilização executiva entre arquitetura, cálculo estrutural e instalações MEP',
      'Gestão integral de compras com repasse transparente de cotações e notas fiscais',
      'Caderno de encargos com ensaios tecnológicos de concreto (fck ≥ 35 MPa) e impermeabilização',
      'Entrega assistida com manual do proprietário, as-built completo e garantia técnica documentada',
    ],
    normativeBase: 'ABNT NBR 15575 · NBR 6118 · NBR 12721',
    outcomeMetric: 'Redução média de 18% em retrabalhos de obra via compatibilização prévia',
  },
  {
    index: '02',
    id: 'estruturas-fundacoes',
    category: 'Estrutural & Fundações',
    title: '02. Fundações, Concreto Armado & Contenções Costeiras',
    subtitle: 'Engenharia estrutural dimensionada para classe de agressividade marinha CAA III e CAA IV',
    description:
      'Construir próximo ao oceano e às lagunas exige cobrimento nominal rigoroso, traços de concreto com baixa relação água/cimento e proteção catódica ou passivadora das armaduras. Executamos balanços protendidos, cortinas atirantadas e fundações profundas em terrenos de restinga ou rochosos.',
    deliverables: [
      'Sondagem SPT e dimensionamento geotécnico para solos arenosos ou encostas rochosas',
      'Concreto aparente ripado e estruturas mistas aço-concreto com tratamento anticorrosivo epóxi',
      'Muros de arrimo em gabião, concreto armado e contenções de taludes em terrenos em declive',
      'Rastreabilidade de concretagem lote a lote com rompimento de corpos de prova em 7 e 28 dias',
    ],
    normativeBase: 'ABNT NBR 6118 (CAA IV) · NBR 6122 · NBR 11682',
    outcomeMetric: '100% dos lotes estruturais ensaiados com resistência superior ao fck de projeto',
  },
  {
    index: '03',
    id: 'reformas-retrofit',
    category: 'Reformas & Retrofit',
    title: '03. Retrofit Arquitetônico, Reforço Estrutural & Ampliações',
    subtitle: 'Modernização completa de residências costeiras e recuperação de patologias por maresia',
    description:
      'Intervenções técnicas em imóveis existentes que necessitam de atualização espacial, abertura de grandes vãos livres com vigas metálicas ou fibra de carbono, substituição integral de redes hidráulicas/elétricas e tratamento definitivo de infiltrações.',
    deliverables: [
      'Diagnóstico estrutural prévio e escoramento técnico para remoção segura de alvenarias',
      'Recuperação de armaduras oxidadas por névoa salina com argamassa polimérica estrutural',
      'Substituição de coberturas, esquadrias minimalistas de alto desempenho acústico e piscinas',
      'Impermeabilização flexível em poliuretano e manta asfáltica aluminizada em lajes e terraços',
    ],
    normativeBase: 'ABNT NBR 16280 · NBR 9575 · NBR 5410',
    outcomeMetric: 'Aumento de vida útil estrutural superior a 30 anos pós-intervenção',
  },
  {
    index: '04',
    id: 'planejamento-orcamentacao',
    category: 'Residencial Alto Padrão',
    title: '04. Planejamento Executivo, Orçamentação Analítica & Gestão via Verta',
    subtitle: 'Previsibilidade financeira linha a linha antes da mobilização do canteiro',
    description:
      'Eliminamos o improviso financeiro na construção civil. Elaboramos orçamentos paramétricos e executivos com composições próprias da Região dos Lagos, curva ABC de insumos e cronograma físico-financeiro acompanhado em tempo real pela plataforma Verta.',
    deliverables: [
      'Orçamento executivo analítico discriminando cada insumo, serviço e encargo',
      'Cronograma físico-financeiro de desembolso mensal alinhado ao fluxo de caixa do cliente',
      'Relatórios quinzenais auditáveis com avanço físico medido em campo e registro fotográfico',
      'Emissão de ART (Anotação de Responsabilidade Técnica) e suporte em licenciamento municipal',
    ],
    normativeBase: 'SINAPI / TCPO · BDI Analítico · PMBOK Construction',
    outcomeMetric: 'Desvio orçamentário médio mantido abaixo de 3,2% em contratos planejados',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'residencia-ferradura',
    code: 'OBRA VT-2401',
    title: 'Residência Mirante da Ferradura',
    city: 'Búzios',
    neighborhood: 'Ferradura',
    year: '2025',
    category: 'Residencial Alto Padrão',
    areaM2: 540,
    durationMonths: 14,
    structuralSystem: 'Concreto armado aparente ripado com balanço de 6,8m + brises em cumaru certificado',
    coastalProtection: 'Concreto fck 40 MPa com adição de sílica ativa, cobrimento 50mm (CAA IV) e hidrofugante de superfície',
    summary:
      'Implantada em terreno com declive acentuado voltado para a enseada da Ferradura, a obra exigiu contenção escalonada em concreto armado, fundação mista em rocha sã e execução de laje nervurada protendida para vencer o vão principal sem pilares intermediários.',
    technicalHighlights: [
      'Execução de piscina de borda infinita engastada em balanço estrutural com impermeabilização dupla em poliuréia',
      'Sistema de captação pluvial enterrado de 25.000L integrado à irrigação automatizada do paisagismo nativo',
      'Esquadrias minimalistas em alumínio anodizado marítimo com vidros laminados de controle solar',
      'Acompanhamento físico-financeiro integral com 100% das etapas entregues dentro do cronograma contratual',
    ],
    metrics: {
      concreteVolumeM3: '312 m³',
      steelKg: '34.800 kg',
      scheduleAdherence: '100% no prazo',
    },
    plateType: 'buzios-villa',
  },
  {
    id: 'casa-passagem-cabofrio',
    code: 'OBRA VT-2404',
    title: 'Casa Pátio das Dunas & Canal',
    city: 'Cabo Frio',
    neighborhood: 'Ogiva / Peró',
    year: '2025',
    category: 'Residencial Alto Padrão',
    areaM2: 385,
    durationMonths: 11,
    structuralSystem: 'Pórticos em concreto armado e estrutura metálica galvanizada a fogo com fechamento monolítico',
    coastalProtection: 'Rebaixamento temporário de lençol freático na fundação + impermeabilização cristalizante integral nas baldrames',
    summary:
      'Residência contemporânea desenvolvida em lote plano com lençol freático elevado próximo ao Canal do Itajuru. O partido estrutural priorizou ventilação cruzada, pátio central iluminado e isolamento térmico de cobertura com laje impermeabilizada e argila expandida.',
    technicalHighlights: [
      'Fundação em estacas hélice contínua monitorada devido ao perfil geotécnico arenoso saturado',
      'Tratamento termoacústico em todas as suítes e infraestrutura pronta para geração fotovoltaica de 12 kWp',
      'Fachada ventilada com painéis de madeira natural tratada em autoclave e pedra natural serrada',
      'Redução de 22% no consumo energético de climatização através de brises orientados pela carta solar local',
    ],
    metrics: {
      concreteVolumeM3: '218 m³',
      steelKg: '21.400 kg',
      scheduleAdherence: '11 meses',
    },
    plateType: 'cabofrio-house',
  },
  {
    id: 'refugio-pontal-arraial',
    code: 'OBRA VT-2501',
    title: 'Pavilhão Atlântico Pontal do Atalaia',
    city: 'Arraial do Cabo',
    neighborhood: 'Pontal do Atalaia',
    year: '2026',
    category: 'Estrutural & Fundações',
    areaM2: 410,
    durationMonths: 13,
    structuralSystem: 'Fundação ancorada em maciço rochoso + superestrutura em concreto de alto desempenho (CAD)',
    coastalProtection: 'Especificação severa contra névoa salina direta (respingos de maré) e ventos de até 45 m/s (NBR 6123)',
    summary:
      'Projeto de alta complexidade logística e estrutural em encosta costeira de Arraial do Cabo. Toda a estrutura foi calculada para suportar pressões dinâmicas de vento oceânico e agressividade marinha máxima, utilizando fôrmas metálicas modulares e logística enxuta.',
    technicalHighlights: [
      'Ancoragens químicas em rocha granítica com barras de aço inox austenítico nos pontos de transição',
      'Laje de cobertura em balanço duplo atuando como beiral de sombreamento para os panos de vidro',
      'Deck estrutural em madeira cumaru certificada fixada com pinos ocultos em aço inox AISI 316',
      'Zero patologias de fissuração por retração graças à cura úmida controlada por 14 dias contínuos',
    ],
    metrics: {
      concreteVolumeM3: '264 m³',
      steelKg: '29.600 kg',
      scheduleAdherence: '99,4% precisão',
    },
    plateType: 'arraial-cliff',
  },
  {
    id: 'residencia-laguna-spa',
    code: 'OBRA VT-2408',
    title: 'Residência Horizonte da Laguna',
    city: 'São Pedro da Aldeia',
    neighborhood: 'Condomínio Náutico',
    year: '2025',
    category: 'Residencial Alto Padrão',
    areaM2: 320,
    durationMonths: 10,
    structuralSystem: 'Concreto armado convencional otimizado com lajes treliçadas protendidas e vãos livres de 9m',
    coastalProtection: 'Impermeabilização de fundação com manta asfáltica 4mm + pintura betuminosa dupla em vigas baldrame',
    summary:
      'Construção residencial completa em condomínio fechado às margens da Lagoa de Araruama. Integração total entre área social, gourmet e jardim náutico, cumprindo rigorosamente todas as normas de gabarito, recuos e silêncio operacional do condomínio.',
    technicalHighlights: [
      'Canteiro de obras limpo com gestão de resíduos classe A e 100% de conformidade com regimento condominial',
      'Integração de automação residencial cabeada em quadro estruturado (iluminação, áudio, irrigação e segurança)',
      'Pisos em travertino paginado em projeto executivo para corte zero de peças aparentes na sala principal',
      'Entrega antecipada em 12 dias em relação ao cronograma base previsto em contrato',
    ],
    metrics: {
      concreteVolumeM3: '175 m³',
      steelKg: '16.900 kg',
      scheduleAdherence: '-12 dias prazo',
    },
    plateType: 'spa-condo',
  },
  {
    id: 'retrofit-geriba-buzios',
    code: 'OBRA VT-2503',
    title: 'Retrofit Estrutural & Ampliação Geribá',
    city: 'Búzios',
    neighborhood: 'Geribá',
    year: '2026',
    category: 'Reformas & Retrofit',
    areaM2: 460,
    durationMonths: 7,
    structuralSystem: 'Reforço estrutural com perfis metálicos W galvanizados + recomposição de pilares em graute estrutural',
    coastalProtection: 'Passivação completa de armaduras existentes e envelopamento impermeável de terraços descobertos',
    summary:
      'Modernização integral de residência construída na década de 1990 a 250 metros da praia de Geribá. A intervenção eliminou paredes portantes internas através de pórticos metálicos, renovou 100% das instalações hidráulicas e elétricas e criou um novo pavilhão gourmet.',
    technicalHighlights: [
      'Demolição seletiva assistida por escoramento metálico instrumentado sem fissuração nos pavimentos superiores',
      'Recuperação profunda de 14 pilares afetados por cloretos marinhos com inibidores de corrosão migradores',
      'Nova subestação elétrica trifásica subterrânea e central de água quente pressurizada com bombas de calor',
      'Valorização patrimonial estimada em +42% sobre o valor de mercado do imóvel pós-entrega',
    ],
    metrics: {
      concreteVolumeM3: '94 m³ + 8,2t aço',
      steelKg: '8.200 kg perfil W',
      scheduleAdherence: '7 meses exatos',
    },
    plateType: 'buzios-retrofit',
  },
  {
    id: 'vila-enseada-iguaba',
    code: 'OBRA VT-2505',
    title: 'Casa Mirante da Enseada',
    city: 'Iguaba Grande',
    neighborhood: 'Orla Lagunar',
    year: '2026',
    category: 'Residencial Alto Padrão',
    areaM2: 290,
    durationMonths: 9,
    structuralSystem: 'Estrutura aporticada em concreto armado com cobertura termoacústica oculta em platibanda minimalista',
    coastalProtection: 'Barreira química contra umidade ascendente de solo lagunar e esquadrias com ferragens em aço inox 316',
    summary:
      'Arquitetura térrea de linhas horizontais puras implantada em lote amplo em Iguaba Grande. O projeto prioriza acessibilidade plena (desnível zero entre interior e varanda), iluminação zenital nos banheiros e baixíssimo custo de manutenção de fachada.',
    technicalHighlights: [
      'Execução de radier protendido nervurado garantindo distribuição uniforme de cargas no solo lagunar',
      'Revestimentos minerais contínuos e pedras naturais brasileiras resistentes à salinidade da Lagoa de Araruama',
      'Piscina em concreto armado revestida em pedra Hijau com tratamento por ozônio e aquecimento solar',
      'Planejamento executivo auditado semanalmente com zero aditivos de escopo imprevistos',
    ],
    metrics: {
      concreteVolumeM3: '158 m³',
      steelKg: '14.200 kg',
      scheduleAdherence: '100% no prazo',
    },
    plateType: 'iguaba-lake',
  },
];

export const CITY_PROFILES: CityEngineeringProfile[] = [
  {
    city: 'Cabo Frio',
    aggressivenessClass: 'CAA III a CAA IV (Marinha / Canal)',
    soilAndFoundation: 'Solos arenosos quaternários com lençol freático superficial; exige sondagem SPT rigorosa, estacas hélice/raiz ou sapatas associadas com impermeabilização cristalizante.',
    typicalScope: 'Residências de alto padrão (Ogiva, Peró, Braga, Passagem), reformas estruturais e edificações multifamiliares.',
    urbanFocus: 'Controle rigoroso de umidade ascendente, ventilação cruzada e proteção contra ventos quadrante Nordeste.',
    technicalNote: 'Em lotes próximos ao Canal do Itajuru e Praia do Forte, especificamos concreto com relação água/cimento ≤ 0,45 e cobrimento nominal mínimo de 45 mm.',
  },
  {
    city: 'Búzios',
    aggressivenessClass: 'CAA IV (Península Oceânica)',
    soilAndFoundation: 'Topografia acidentada em gnaisse/granito nos morros (Ferradura, João Fernandes, Brava) e areia marinha nas baixadas (Geribá, Manguinhos).',
    typicalScope: 'Villas costeiras em declive, estruturas em balanço, piscinas suspensas em concreto e retrofit de casas de veraneio.',
    urbanFocus: 'Respeito estrito ao gabarito municipal (2 pavimentos), integração paisagística e uso extensivo de madeiras nobres tratadas e concreto aparente.',
    technicalNote: 'Fundações em encosta demandam engastamento mecânico/químico em rocha sã e drenagem subsuperficial de águas pluviais para estabilidade global.',
  },
  {
    city: 'Arraial do Cabo',
    aggressivenessClass: 'CAA IV Severa (Névoa Salina Direta)',
    soilAndFoundation: 'Costões rochosos íngremes (Pontal do Atalaia) e cordões arenosos de restinga com ventos costeiros de alta velocidade.',
    typicalScope: 'Refúgios arquitetônicos com vista oceânica, contenções estruturais de encosta e reforço contra corrosão marinha.',
    urbanFocus: 'Dimensionamento de esquadrias e coberturas para pressões dinâmicas de vento extremo (NBR 6123) e proteção anticorrosiva total.',
    technicalNote: 'Proibição absoluta de metais ferrosos expostos; uso exclusivo de ligas de alumínio naval, aço inox AISI 316 e concreto com adição de microssílica.',
  },
  {
    city: 'São Pedro da Aldeia',
    aggressivenessClass: 'CAA III (Ambiente Lagunar e Continental)',
    soilAndFoundation: 'Solos residuais argilo-arenosos firmes nos platôs e sedimentos lagunares na orla da Lagoa de Araruama.',
    typicalScope: 'Construção residencial turnkey em condomínios fechados e loteamentos náuticos de médio e alto padrão.',
    urbanFocus: 'Otimização do custo por m², rapidez construtiva, logística de canteiro silenciosa e conformidade com códigos de obras condominiais.',
    technicalNote: 'Excelente relação custo-benefício para estruturas aporticadas em concreto com lajes protendidas, permitindo amplos vãos integrados.',
  },
  {
    city: 'Iguaba Grande',
    aggressivenessClass: 'CAA III (Orla da Lagoa de Araruama)',
    soilAndFoundation: 'Topografia suave a plana com presença de sais dissolvidos na franja lagunar; ideal para radier estrutural ou sapatas corridas impermeabilizadas.',
    typicalScope: 'Residências térreas e sobrados contemporâneos de veraneio ou moradia permanente com lazer integrado.',
    urbanFocus: 'Conforto térmico para alta insolação anual, aproveitamento da brisa lagunar e fachadas de baixa manutenção.',
    technicalNote: 'Coberturas com isolamento termoacústico em EPS/lã de rocha e impermeabilização elástica em todas as platibandas e vigas baldrame.',
  },
  {
    city: 'Rio das Ostras',
    aggressivenessClass: 'CAA III / IV (Orla Costeira e Zonas de Expansão)',
    soilAndFoundation: 'Planícies arenosas costeiras e restingas com lençol freático moderado (Costazul, Enseada das Gaivotas e Cantagalo).',
    typicalScope: 'Residências unifamiliares de alto padrão em loteamentos fechados e orla, retrofit estrutural e obras completas chave na mão.',
    urbanFocus: 'Aproveitamento de iluminação natural, especificação rigorosa contra intempéries marinhas e logística de suprimentos ágil pela RJ-106.',
    technicalNote: 'Impermeabilização de baldrame com manta asfáltica elastomérica e recobrimento de armadura mínimo de 35 a 40 mm para vida útil de projeto superior a 50 anos.',
  },
];

export interface TestimonialItem {
  id: string;
  clientName: string;
  clientRole: string;
  projectLocation: string;
  beforeContext: string;
  outcomeStatement: string;
  metricHighlight: string;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'depoimento-1',
    clientName: 'Dr. Henrique Vasconcellos',
    clientRole: 'Proprietário · Residência Unifamiliar (480 m²)',
    projectLocation: 'Armação dos Búzios (RJ)',
    beforeContext:
      'Tínhamos receio de construir à distância em terreno em declive na Ferradura devido ao histórico de atrasos e aditivos sem controle na região.',
    outcomeStatement:
      'O Grupo Vitti entregou o orçamento analítico antes da primeira escavação e cumpriu cada marco do cronograma físico-financeiro. A estrutura em concreto aparente ficou impecável.',
    metricHighlight: '14 meses de obra · 0% de atraso na entrega das chaves',
  },
  {
    id: 'depoimento-2',
    clientName: 'Arq. Mariana Siqueira',
    clientRole: 'Sócia-Diretora · Estúdio MS Arquitetura',
    projectLocation: 'Cabo Frio & Búzios (RJ)',
    beforeContext:
      'Nossos projetos exigem detalhes construtivos complexos — balanços limpos, esquadrias embutidas e paginação milimétrica de pedras naturais.',
    outcomeStatement:
      'A equipe de engenharia do Grupo Vitti lê e compatibiliza o projeto executivo com rigor raro. Não há improvisos de canteiro; cada interferência hidráulica ou estrutural é resolvida antes da concretagem.',
    metricHighlight: '4 residências executadas em parceria técnica',
  },
  {
    id: 'depoimento-3',
    clientName: 'Roberto & Cláudia Mendonça',
    clientRole: 'Proprietários · Retrofit Estrutural (390 m²)',
    projectLocation: 'Cabo Frio (RJ)',
    beforeContext:
      'Nossa casa na Ogiva sofria com infiltrações severas de lençol freático e oxidação de pilares pela maresia do canal.',
    outcomeStatement:
      'O Grupo Vitti executou o reforço estrutural, refez toda a drenagem e impermeabilização e modernizou a fachada no prazo exato de 6 meses, com prestação de contas quinzenal impecável.',
    metricHighlight: 'Orçamento cumprido com variação inferior a 1,8%',
  },
];
