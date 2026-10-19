export interface ServiceItem {
  id: string;
  slug: string;
  num: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  category: 'Obras & Reformas' | 'Instalações & Reparos' | 'Manutenção & Cuidados' | 'Gestão Imobiliária';
  badge: string;
  summary: string;
  bullets: string[];
  whatsappMsg: string;
  cidadesAtendidas?: string[];
  diferenciaisMaresia?: string[];
  prazoMedio?: string;
}

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'construcao',
    slug: 'construcao-residencial-e-comercial-regiao-dos-lagos',
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
    whatsappMsg: 'Olá! Gostaria de um orçamento detalhado para construção do zero na Região dos Lagos.',
    cidadesAtendidas: ['Cabo Frio', 'Tamoios (Unamar)', 'Armação dos Búzios', 'Arraial do Cabo', 'São Pedro da Aldeia', 'Iguaba Grande', 'Rio das Ostras'],
    diferenciaisMaresia: [
      'Cobrimento de armadura de 4,0cm a 5,0cm em concreto usinado fck ≥ 30 MPa',
      'Ferragens e estribos com pintura epóxi protetiva contra íons cloreto',
      'Impermeabilização tripla de baldrame e sapatas contra umidade ascendente'
    ],
    prazoMedio: '6 a 12 meses (conforme memorial)'
  },
  {
    id: 'reforma',
    slug: 'reformas-e-retrofit-cabo-frio-buzios',
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
    whatsappMsg: 'Olá! Gostaria de solicitar um orçamento para reforma do meu imóvel na Região dos Lagos.',
    cidadesAtendidas: ['Cabo Frio', 'Tamoios (Unamar)', 'Armação dos Búzios', 'Arraial do Cabo', 'São Pedro da Aldeia'],
    diferenciaisMaresia: [
      'Passivação química de armaduras de aço com zarcão/primer convertedor de ferrugem',
      'Argamassa polimérica estrutural tixotrópica para recomposição de concreto',
      'Substituição de esquadrias antigas por alumínio Linha Gold anodizado ou PVC naval'
    ],
    prazoMedio: '15 a 60 dias'
  },
  {
    id: 'pintura',
    slug: 'pintura-profissional-anti-maresia-cabo-frio',
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
    whatsappMsg: 'Olá! Preciso de um orçamento para pintura profissional e tratamento de fachada com o Grupo Vitti.',
    cidadesAtendidas: ['Cabo Frio', 'Tamoios (Unamar)', 'Armação dos Búzios', 'Arraial do Cabo', 'São Pedro da Aldeia', 'Iguaba Grande', 'Rio das Ostras'],
    diferenciaisMaresia: [
      'Fundo preparador impermeabilizante de alta penetração em alvenaria',
      'Membrana elastomérica com memória elástica para absorver dilatação térmica litorânea',
      'Pigmentos com proteção UV superior contra desbotamento por radiação solar direta'
    ],
    prazoMedio: '3 a 15 dias'
  },
  {
    id: 'hidraulica',
    slug: 'hidraulica-e-caca-vazamentos-regiao-dos-lagos',
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
    whatsappMsg: 'Olá! Preciso de socorro hidráulico / caça-vazamento no meu imóvel.',
    cidadesAtendidas: ['Cabo Frio', 'Tamoios (Unamar)', 'Armação dos Búzios', 'Arraial do Cabo', 'São Pedro da Aldeia'],
    diferenciaisMaresia: [
      'Válvulas e registros em bronze ou latão forjado imunes à corrosão galvânica',
      'Tubulações em PPR ou PVC soldado de alta espessura com proteção mecânica',
      'Quadro de comando para bombas com vedação IP65 anti-salinidade'
    ],
    prazoMedio: 'Atendimento no mesmo dia para emergências'
  },
  {
    id: 'eletrica',
    slug: 'eletricista-e-instalacoes-eletricas-cabo-frio',
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
    whatsappMsg: 'Olá! Gostaria de um orçamento para instalações elétricas / revisão de quadro com o Grupo Vitti.',
    cidadesAtendidas: ['Cabo Frio', 'Tamoios (Unamar)', 'Armação dos Búzios', 'Arraial do Cabo', 'São Pedro da Aldeia'],
    diferenciaisMaresia: [
      'Barramentos tipo pente de cobre estanhado com graxa condutiva anti-zinabre',
      'Disjuntores termomagnéticos com certificação INMETRO e proteção diferencial residual',
      'Conexões seladas com fita de autofusão e caixas de passagem estanques'
    ],
    prazoMedio: '1 a 5 dias'
  },
  {
    id: 'carpintaria',
    slug: 'carpintaria-decks-e-pergolados-madeira',
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
    whatsappMsg: 'Olá! Gostaria de um orçamento para deck de madeira / pergolado / carpintaria.',
    cidadesAtendidas: ['Cabo Frio', 'Armação dos Búzios', 'Arraial do Cabo', 'Tamoios (Unamar)', 'São Pedro da Aldeia'],
    diferenciaisMaresia: [
      'Parafusos e conectores estruturais exclusivamente em Aço Inox AISI 304 ou 316',
      'Madeira nobre tratada em estufa com imunização contra brocas e fungos apodrecedores',
      'Acabamento com stain hidrorrepelente não formador de filme que não descasca'
    ],
    prazoMedio: '5 a 20 dias'
  },
  {
    id: 'acompanhamento',
    slug: 'acompanhamento-tecnico-e-vistoria-de-obras',
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
    whatsappMsg: 'Olá! Preciso de acompanhamento técnico / vistoria de obra pelo Grupo Vitti.',
    cidadesAtendidas: ['Cabo Frio', 'Armação dos Búzios', 'Arraial do Cabo', 'Tamoios (Unamar)', 'São Pedro da Aldeia', 'Iguaba Grande', 'Rio das Ostras'],
    diferenciaisMaresia: [
      'Controle tecnológico de armaduras expostas e ensaio de esclerometria',
      'Verificação de descolamento de impermeabilização e vedações de telhado',
      'Medição técnica imparcial antes de você liberar pagamentos a terceiros'
    ],
    prazoMedio: 'Acompanhamento semanal ou laudo pontual em 48h'
  },
  {
    id: 'ladrilheiro',
    slug: 'ladrilheiro-e-assentamento-de-porcelanato',
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
    whatsappMsg: 'Olá! Gostaria de orçamento para ladrilheiro / assentamento de porcelanato com o Grupo Vitti.',
    cidadesAtendidas: ['Cabo Frio', 'Armação dos Búzios', 'Arraial do Cabo', 'Tamoios (Unamar)', 'São Pedro da Aldeia'],
    diferenciaisMaresia: [
      'Dupla colagem obrigatória para peças acima de 30x30cm conforme norma ABNT',
      'Argamassa AC-III flexível resistente à amplitude térmica de beira-mar',
      'Rejunte resinado ou epóxi 100% impermeável que não acumula limo'
    ],
    prazoMedio: '3 a 12 dias'
  },
  {
    id: 'piscina',
    slug: 'manutencao-e-limpeza-de-piscinas-cabo-frio-buzios',
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
    whatsappMsg: 'Olá! Gostaria de contratar manutenção / limpeza de piscina para meu imóvel.',
    cidadesAtendidas: ['Cabo Frio', 'Armação dos Búzios', 'Arraial do Cabo', 'Tamoios (Unamar)', 'São Pedro da Aldeia'],
    diferenciaisMaresia: [
      'Sequestrante de metais pesados específico para poços artesianos ferruginosos de Tamoios e Búzios',
      'Revisão preventiva de rotores e rolamentos de bombas contra salinidade',
      'Controle biológico seguro sem excesso de cloro que resseca a pele'
    ],
    prazoMedio: 'Visitas semanais ou socorro pontual em 24h'
  },
  {
    id: 'ar-condicionado',
    slug: 'instalacao-e-manutencao-ar-condicionado',
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
    whatsappMsg: 'Olá! Preciso de instalação / higienização de ar-condicionado na Região dos Lagos.',
    cidadesAtendidas: ['Cabo Frio', 'Armação dos Búzios', 'Arraial do Cabo', 'Tamoios (Unamar)', 'São Pedro da Aldeia'],
    diferenciaisMaresia: [
      'Serpentinas com banho de verniz de proteção blue fin / gold fin contra salinidade',
      'Suportes de condensadora em alumínio naval ou fibra de vidro (não enferrujam)',
      'Tubulação 100% cobre com espessura mínima de parede conforme manual do fabricante'
    ],
    prazoMedio: 'Instalação ou higienização em poucas horas'
  },
  {
    id: 'jardinagem',
    slug: 'jardinagem-e-paisagismo-litoraneo',
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
    whatsappMsg: 'Olá! Gostaria de um orçamento para manutenção de jardim / corte de grama.',
    cidadesAtendidas: ['Cabo Frio', 'Armação dos Búzios', 'Arraial do Cabo', 'Tamoios (Unamar)', 'São Pedro da Aldeia'],
    diferenciaisMaresia: [
      'Espécies nativas halófitas resistentes ao vento forte e solo arenoso',
      'Correção de pH do solo com matéria orgânica e retenção hídrica inteligente',
      'Controle biológico de pragas e adubação foliar rica em potássio e silício'
    ],
    prazoMedio: 'Serviço pontual ou contrato mensal'
  },
  {
    id: 'limpeza-geral',
    slug: 'limpeza-pos-obra-e-faxina-pesada',
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
    whatsappMsg: 'Olá! Preciso de uma limpeza pós-obra / faxina pesada para meu imóvel.',
    cidadesAtendidas: ['Cabo Frio', 'Armação dos Búzios', 'Arraial do Cabo', 'Tamoios (Unamar)', 'São Pedro da Aldeia', 'Rio das Ostras'],
    diferenciaisMaresia: [
      'Desincrustantes com inibidores de corrosão que não mancham esquadrias de alumínio',
      'Aspiradores industriais de filtro HEPA que retêm 99,9% da poeira ultrafina de gesso',
      'Desinfecção bactericida e fungicida contra o cheiro de mofo de casas fechadas'
    ],
    prazoMedio: '1 a 3 dias úteis'
  },
  {
    id: 'gestao-airbnb',
    slug: 'manutencao-e-suporte-airbnb-regiao-dos-lagos',
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
    whatsappMsg: 'Olá! Sou anfitrião de temporada / Airbnb e quero conhecer o suporte e manutenção do Grupo Vitti.',
    cidadesAtendidas: ['Cabo Frio', 'Armação dos Búzios', 'Arraial do Cabo', 'Tamoios (Unamar)'],
    diferenciaisMaresia: [
      'Plantão de atendimento prioritário aos finais de semana e feriados',
      'Peças de reposição imediata em estoque volante (resistências, disjuntores, boias)',
      'Laudo fotográfico com carimbo de data e hora para contestação no Airbnb'
    ],
    prazoMedio: 'Atendimento emergencial em até 2h'
  }
];
