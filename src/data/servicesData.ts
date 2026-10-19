export interface ServiceItem {
  id: string;
  num: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  category: 'Obras & Reformas' | 'Instalações & Reparos' | 'Manutenção & Cuidados' | 'Gestão Imobiliária';
  badge: string;
  summary: string;
  bullets: string[];
  whatsappMsg: string;
}

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'construcao',
    num: '01',
    title: 'Construção Residencial & Comercial',
    shortTitle: 'Construção',
    subtitle: 'Obras completas chave na mão (Turnkey), da fundação ao acabamento com preço fechado.',
    category: 'Obras & Reformas',
    badge: 'Chave na Mão',
    summary: 'Construímos sua casa de praia ou ponto comercial com projeto executivo completo, ensaios de solo e total blindagem contra maresia. Sem surpresas no orçamento.',
    bullets: [
      'Projetos arquitetônicos e aprovação célere nas prefeituras da região',
      'Blindagem de vigas e pilares conforme NBR 6118 (Classe IV Costeira)',
      'Preço fechado em contrato e medição física de cada etapa'
    ],
    whatsappMsg: 'Olá! Gostaria de um orçamento detalhado para construção do zero na Região dos Lagos.'
  },
  {
    id: 'reforma',
    num: '02',
    title: 'Reformas Gerais & Retrofit Litorâneo',
    shortTitle: 'Reforma',
    subtitle: 'Modernização completa de casas, coberturas e pousadas com equipe própria e cronograma fixo.',
    category: 'Obras & Reformas',
    badge: 'Transformação Total',
    summary: 'Revitalizamos seu imóvel com reforço estrutural, eliminação de infiltrações antigas, readequação de plantas e acabamentos modernos de alta durabilidade.',
    bullets: [
      'Demolição e reconstrução limpa com descarte ecológico de entulho',
      'Tratamento profundo de armaduras oxidadas e infiltrações de teto',
      'Retrofit completo de banheiros, cozinhas integradas e áreas gourmet'
    ],
    whatsappMsg: 'Olá! Gostaria de solicitar um orçamento para reforma do meu imóvel na Região dos Lagos.'
  },
  {
    id: 'pintura',
    num: '03',
    title: 'Pintura Profissional & Tratamento de Fachadas',
    shortTitle: 'Pintura',
    subtitle: 'Pintura interna, externa e restauração de fachadas com tintas elastoméricas e selantes anti-maresia.',
    category: 'Instalações & Reparos',
    badge: 'Anti-Maresia & Solidez',
    summary: 'A névoa salina do litoral destrói pinturas comuns em meses. Aplicamos sistemas de pintura emborrachada, tratamento de fissuras e selamento impermeabilizante que duram anos.',
    bullets: [
      'Aplicação de tintas emborrachadas, hidrorrepelentes e fungicidas',
      'Tratamento e calafetação técnica de trincas dinâmicas de fachada',
      'Pintura residencial, predial, muros e portões com acabamento fino'
    ],
    whatsappMsg: 'Olá! Preciso de um orçamento para pintura profissional e tratamento de fachada com o Grupo Vitti.'
  },
  {
    id: 'hidraulica',
    num: '04',
    title: 'Hidráulica & Caça-Vazamentos Especializado',
    shortTitle: 'Hidráulica',
    subtitle: 'Detecção eletrônica não destrutiva, cisternas, bombas pressurizadoras, redes de esgoto e água potável.',
    category: 'Instalações & Reparos',
    badge: 'Pronto Atendimento',
    summary: 'Água na Região dos Lagos é ouro. Se a sua cisterna esvazia misteriosamente ou a bomba não desliga, detectamos o ponto exato do vazamento sem quebrar a casa inteira.',
    bullets: [
      'Geofone eletrônico para localização de vazamentos ocultos subterrâneos',
      'Impermeabilização e vedação de cisternas e reservatórios superiores',
      'Instalação e automação de bombas, boias elétricas e pressurizadores'
    ],
    whatsappMsg: 'Olá! Preciso de socorro hidráulico / caça-vazamento no meu imóvel.'
  },
  {
    id: 'eletrica',
    num: '05',
    title: 'Instalações Elétricas & Padrão de Entrada',
    shortTitle: 'Elétrica',
    subtitle: 'Quadros de distribuição, redimensionamento de carga para verão, DPS anti-raio e iluminação técnica.',
    category: 'Instalações & Reparos',
    badge: 'Segurança NBR 5410',
    summary: 'Evite disjuntores desarmando no pico do verão com chuveiros e ares-condicionados ligados. Adequamos sua instalação para suportar a demanda sem risco de curto-circuito.',
    bullets: [
      'Montagem e balanceamento de quadros com disjuntores DR e DPS',
      'Adequação de padrão de entrada monofásico para bifásico/trifásico Enel',
      'Iluminação cênica em LED, circuitos dedicados e aterramento seguro'
    ],
    whatsappMsg: 'Olá! Gostaria de um orçamento para instalações elétricas / revisão de quadro com o Grupo Vitti.'
  },
  {
    id: 'carpintaria',
    num: '06',
    title: 'Carpintaria, Decks & Pergolados',
    shortTitle: 'Carpintaria',
    subtitle: 'Estruturas nobres em madeira maciça e tratada: decks para piscina, pergolados, telhados e portas.',
    category: 'Obras & Reformas',
    badge: 'Madeira Tratada',
    summary: 'Construção e restauração de áreas de lazer em madeira de lei (Cumaru, Ipê) ou autoclave, com fixadores em aço inox naval e vernizes de filtro solar náutico.',
    bullets: [
      'Decks suspensos e rentes ao piso para áreas de piscina e jardim',
      'Pergolados rústicos ou modernos com cobertura translúcida protetora',
      'Recuperação, lixamento e repintura de decks cinzentos e ressecados'
    ],
    whatsappMsg: 'Olá! Gostaria de um orçamento para deck de madeira / pergolado / carpintaria.'
  },
  {
    id: 'acompanhamento',
    num: '07',
    title: 'Acompanhamento Técnico de Obra & Vistorias',
    shortTitle: 'Acompanhamento',
    subtitle: 'Fiscalização técnica de engenharia, laudos de recebimento de chaves e relatórios digitais para proprietários.',
    category: 'Obras & Reformas',
    badge: 'Engenharia Dedicada',
    summary: 'Se você mora fora da Região dos Lagos e tem uma obra em andamento com terceiros, fiscalizamos a qualidade técnica, consumo de materiais e cumprimento de prazos.',
    bullets: [
      'Vistoria técnica detalhada para compra, venda ou entrega de imóvel novo',
      'Auditoria de traço de concreto, impermeabilizações e instalações',
      'Relatórios fotográficos e vídeos semanais direto no seu WhatsApp'
    ],
    whatsappMsg: 'Olá! Preciso de acompanhamento técnico / vistoria de obra pelo Grupo Vitti.'
  },
  {
    id: 'ladrilheiro',
    num: '08',
    title: 'Ladrilheiro & Porcelanatos Especiais',
    shortTitle: 'Ladrilheiro',
    subtitle: 'Assentamento de grandes formatos, pastilhas de piscina, filetes, nichos esculpidos e calçadas drenantes.',
    category: 'Obras & Reformas',
    badge: 'Acabamento Fino',
    summary: 'O assentamento de porcelanato no litoral exige argamassa colante AC-III e juntas com espaçadores niveladores milimétricos para evitar estufamento e peças ocas.',
    bullets: [
      'Cortes em meia-esquadria (45º) precisos para quinas limpas',
      'Bancadas e nichos esculpidos em porcelanato e mármore sintético',
      'Assentamento de pastilhas em piscinas e pisos atérmicos ao redor'
    ],
    whatsappMsg: 'Olá! Gostaria de orçamento para ladrilheiro / assentamento de porcelanato com o Grupo Vitti.'
  },
  {
    id: 'piscina',
    num: '09',
    title: 'Manutenção & Limpeza de Piscinas',
    shortTitle: 'Piscina',
    subtitle: 'Tratamento químico periódico, controle de alcalinidade/cloro, aspiração, troca de areia e reparo em bombas.',
    category: 'Manutenção & Cuidados',
    badge: 'Água Cristalina',
    summary: 'Mantemos sua piscina cristalina e saudável o ano todo. Cuidamos do combate ao ferro da água de poço, balanceamento de pH e revisão completa do motor e filtro.',
    bullets: [
      'Tratamento preventivo e corretivo de água verde ou turva',
      'Contratos mensais de limpeza e aspiração para casas de veraneio',
      'Troca de areia do filtro, conserto de vazamentos e bombas'
    ],
    whatsappMsg: 'Olá! Gostaria de contratar manutenção / limpeza de piscina para meu imóvel.'
  },
  {
    id: 'ar-condicionado',
    num: '10',
    title: 'Ar-Condicionado & Climatização',
    shortTitle: 'Ar-Condicionado',
    subtitle: 'Instalação técnica padrão inverter, higienização química profunda anti-ácaro e recarga de gás refrigerante.',
    category: 'Instalações & Reparos',
    badge: 'Eficiência Térmica',
    summary: 'Aparelhos instalados com tubulação de cobre e flangeamento estanque, garantindo economia na conta de luz e ar limpo livre de bactérias e mofo costeiro.',
    bullets: [
      'Instalação de splits e multi-splits com suporte anti-corrosão naval',
      'Higienização completa da evaporadora e turbina com desinfecção hospitalar',
      'Teste de estanqueidade com nitrogênio, vácuo e reposição de gás ecológico'
    ],
    whatsappMsg: 'Olá! Preciso de instalação / higienização de ar-condicionado na Região dos Lagos.'
  },
  {
    id: 'jardinagem',
    num: '11',
    title: 'Jardinagem & Paisagismo Litorâneo',
    shortTitle: 'Jardinagem',
    subtitle: 'Implantação de gramados, corte periódico, poda de coqueiros, adubação e projetos verdes tolerantes ao vento salino.',
    category: 'Manutenção & Cuidados',
    badge: 'Área Verde Impecável',
    summary: 'Nem toda planta sobrevive ao sol intenso e vento marítimo. Criamos e mantemos jardins vibrantes com espécies tropicais adaptadas e gramados sempre verdes.',
    bullets: [
      'Corte e nivelamento de grama (Esmeralda, Santo Agostinho e Bermudas)',
      'Poda preventiva de galhos e limpeza de coroas de coqueiros',
      'Contratos de manutenção quinzenal ou mensal para jardins residenciais'
    ],
    whatsappMsg: 'Olá! Gostaria de um orçamento para manutenção de jardim / corte de grama.'
  },
  {
    id: 'limpeza-geral',
    num: '12',
    title: 'Limpeza Geral & Pós-Obra Especializada',
    shortTitle: 'Limpeza Geral',
    subtitle: 'Higienização pesada para remoção de poeira de gesso, cimento, restos de tinta em esquadrias e vidros.',
    category: 'Manutenção & Cuidados',
    badge: 'Pronto para Entrar',
    summary: 'Uma faxina comum não tira a poeira fina nem os respingos de argamassa de uma obra. Usamos maquinário e produtos neutros específicos que deixam tudo impecável sem arranhar nada.',
    bullets: [
      'Remoção de resíduos secos de cimento, rejunte e silicone',
      'Polimento e limpeza cristalina de janelas, blindex e espelhos',
      'Higienização completa de armários, pisos e sanitários para mudança'
    ],
    whatsappMsg: 'Olá! Preciso de uma limpeza pós-obra / faxina pesada para meu imóvel.'
  },
  {
    id: 'gestao-airbnb',
    num: '13',
    title: 'Gestão e Suporte para Airbnb & Casas de Temporada',
    shortTitle: 'Gestão de Airbnb',
    subtitle: 'Manutenção expressa entre hóspedes, vistorias fotográficas pós-check-out e atendimento de urgências 24/7.',
    category: 'Gestão Imobiliária',
    badge: 'Superhost 5 Estrelas',
    summary: 'Chuveiro queimou no sábado à noite? Ar começou a pingar na sala? Resolvemos qualquer emergência técnica rapidamente para você manter sua avaliação máxima sem estresse.',
    bullets: [
      'Socorro técnico rápido para ar-condicionado, eletrodomésticos e água',
      'Vistoria fotográfica pós-checkout com relatório imediato de avarias',
      'Manutenções preventivas programadas para garantir casa impecável em feriadões'
    ],
    whatsappMsg: 'Olá! Sou anfitrião de temporada / Airbnb e quero conhecer o suporte e manutenção do Grupo Vitti.'
  }
];
