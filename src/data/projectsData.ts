export interface ProjectMemorial {
  id: string;
  city: string;
  title: string;
  type: string;
  tag: string;
  img: string;
  regionalContext: string;
  idealTerrain: string;
  engineeringSpecs: {
    fck: string;
    concreteNorm: string;
    cobrimento: string;
    waterproofing: string;
    framesAndInox: string;
    structuralHighlights: string[];
  };
  metragemFlexibility: string;
  metragensRange: string;
  timelinePhases: {
    phase: string;
    duration: string;
    description: string;
  }[];
  estimatedDuration: string;
  whatsappPrompt: string;
}

export const PROJECTS_MEMORIAL: ProjectMemorial[] = [
  {
    id: 'mirante-da-ferradura',
    city: 'Búzios',
    title: 'Residência Mirante da Ferradura',
    type: 'Construção Turnkey · 540 m²',
    tag: 'Concreto Aparente & Madeira Cumaru',
    img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    regionalContext: 'Armação dos Búzios (Ferradura, Geribá, Brava, Rasa, João Fernandes) e encostas litorâneas.',
    idealTerrain:
      'Lotes em aclive, declive acentuado ou platôs rochosos característicos da península de Búzios. O partido arquitetônico e estrutural é planejado para acompanhar a topografia natural, eliminando a necessidade de movimentações massivas de terra e reduzindo em até 30% os custos de corte e bota-fora.',
    engineeringSpecs: {
      fck: 'Fck ≥ 35 MPa a 40 MPa',
      concreteNorm: 'NBR 6118 (Classe de Agressividade Ambiental Marinha CAA IV)',
      cobrimento: 'Cobrimento nominal rigoroso de 50 mm com espaçadores industriais',
      waterproofing:
        'Sistema duplo estanque: argamassa polimérica cristalizante nos baldrames e cortinas de contenção + manta asfáltica termossoldada de 4 mm elastomérica com proteção mecânica estruturada contra lençol freático e infiltrações de encosta.',
      framesAndInox:
        'Esquadrias de alumínio minimalistas com anodização marítima profunda de 25 micras. Ferragens, parafusos, fixadores e chumbadores especificados exclusivamente em Aço Inox Austenítico AISI 316 (resistência total ao névoa salina sem oxidação precoce).',
      structuralHighlights: [
        'Concreto usinado com cimento CP-III/CP-IV resistente a sulfatos e relação água/cimento ≤ 0,42',
        'Grandes vãos livres estruturais com vigas protendidas e balanços sobre a topografia natural',
        'Madeira Cumaru extra certificada com tratamento hidrofugante e proteção contra radiação UV marítima',
        'Piscina com borda infinita moldada in loco e impermeabilização termoplástica contínua em dupla camada',
      ],
    },
    metragensRange: '160 m² a 550 m²+',
    metragemFlexibility:
      'A metodologia construtiva do Grupo Vitti para este padrão é 100% modular e flexível: atende com a mesma precisão de acabamento desde residências térreas compactas e bem integradas em condomínios (160 m² a 240 m²) até residências de alto padrão de grande porte em múltiplos níveis escalonados (380 m² a 550 m²+).',
    estimatedDuration: '10 a 14 meses (Chave na mão / Preço fechado)',
    timelinePhases: [
      {
        phase: 'Fundações & Contenções',
        duration: 'Meses 1 e 2',
        description: 'Sondagem mista SPT/rotativa, perfuração em rocha sã, blocos/sapatas e cortinas impermeabilizadas.',
      },
      {
        phase: 'Superestrutura de Concreto',
        duration: 'Meses 3 a 5',
        description: 'Pilares, vigas e lajes maciças com cura química protegida e controle tecnológico de corpos de prova.',
      },
      {
        phase: 'Vedações & Instalações Integradas',
        duration: 'Meses 6 e 7',
        description: 'Alvenaria de precisão, tubulações hidráulicas pressurizadas e eletrodutos de alta performance.',
      },
      {
        phase: 'Acabamentos Nobres & Entrega',
        duration: 'Meses 8 a 12',
        description: 'Instalação de esquadrias navais, pisos de grande formato, marcenaria planejada, testes finais e limpeza fina.',
      },
    ],
    whatsappPrompt:
      'Olá! Gostaria de conversar sobre um projeto no padrão da Residência Mirante da Ferradura (Búzios). Tenho um terreno na Região dos Lagos e quero entender a viabilidade e memorial técnico.',
  },
  {
    id: 'casa-patio-das-dunas',
    city: 'Cabo Frio & Tamoios',
    title: 'Casa Pátio das Dunas',
    type: 'Residência Unifamiliar · 385 m²',
    tag: 'Esquadrias Navais & Piso Travertino',
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    regionalContext:
      'Cabo Frio 1º Distrito (Ogiva, Peró, Passagem, Braga, Foguete), Tamoios / 2º Distrito de Cabo Frio (Unamar, Verão Vermelho, Orla 500, Terras Alphaville) e condomínios de São Pedro da Aldeia.',
    idealTerrain:
      'Lotes planos e arenosos com alta taxa de insolação e proximidade da praia ou da laguna. Projeto horizontal com pátio central e jardins internos que criam um microclima de conforto térmico, garantindo ventilação cruzada permanente e privacidade total mesmo em lotes de meio de quadra.',
    engineeringSpecs: {
      fck: 'Fck ≥ 35 MPa com cura estendida',
      concreteNorm: 'NBR 6118 e NBR 9575 (Blindagem contra lençol freático raso)',
      cobrimento: 'Cobrimento de 45 a 50 mm em todas as faces de vigas baldrames e sapatas',
      waterproofing:
        'Protocolo de Estanqueidade Zero: envelopamento integral de vigas baldrames e contrapiso com manta asfáltica termossoldada e argamassa polimérica cristalizante. Adição de aditivo hidrofugante nas massas de assentamento das 3 primeiras fiadas de tijolos para eliminar para sempre qualquer risco de umidade ascendente por capilaridade.',
      framesAndInox:
        'Esquadrias de alumínio naval linha pesada com fechos multiponto, amortecimento acústico e trilhos de dreno oculto para escoamento rápido de tempestades costeiras. Parafusos e guarnições 100% aço inoxidável AISI 316.',
      structuralHighlights: [
        'Fundação dimensionada para solos arenosos com verificação rigorosa do nível do lençol freático',
        'Piso em Mármore Travertino levigado atérmico e antiderrapante para integração total interior-exterior',
        'Platibandas modernas com rufos em chapa naval galvanizada e calhas embutidas superdimensionadas',
        'Tubulações elétricas e cabeamento 100% antichama com infraestrutura pronta para energia solar fotovoltaica',
      ],
    },
    metragensRange: '140 m² a 450 m²',
    metragemFlexibility:
      'Ideal tanto para projetos térreos compactos e eficientes em loteamentos fechados (140 m² a 220 m² com 3 suítes) quanto para residências térreas ou assobradadas expansivas com 4 a 5 suítes e ala gourmet integrada (300 m² a 450 m²).',
    estimatedDuration: '9 a 12 meses (Chave na mão / Preço fechado)',
    timelinePhases: [
      {
        phase: 'Fundações & Baldrame Blindado',
        duration: 'Meses 1 e 2',
        description: 'Rebaixamento de lençol freático se necessário, escavação, armação e envelopamento estanque dos baldrames.',
      },
      {
        phase: 'Estrutura & Laje Termoisolada',
        duration: 'Meses 3 e 4',
        description: 'Concretagem com lajes impermeabilizadas e isolamento térmico contra insolação intensa do litoral.',
      },
      {
        phase: 'Instalações & Contrapiso',
        duration: 'Meses 5 e 6',
        description: 'Passagem das redes hidráulicas e elétricas, drenagem de pátios e assentamento de alvenarias.',
      },
      {
        phase: 'Pisos Travertino & Fechamento',
        duration: 'Meses 7 a 10',
        description: 'Colocação de revestimentos, esquadrias navais, louças de alta linha, pintura elastomérica e entrega formal.',
      },
    ],
    whatsappPrompt:
      'Olá! Gostaria de conversar sobre um projeto no padrão da Casa Pátio das Dunas (Cabo Frio / Tamoios). Tenho um terreno na Região dos Lagos e quero conhecer o padrão construtivo.',
  },
  {
    id: 'pavilhao-costeiro-pontal',
    city: 'Arraial do Cabo',
    title: 'Pavilhão Costeiro Pontal',
    type: 'Estrutura em Encosta · 410 m²',
    tag: 'Fundação em Rocha & Piscina Suspensa',
    img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    regionalContext: 'Arraial do Cabo (Pontal do Atalaia, Prainha), Búzios (Ferradura / Forno) e falésias rochosas da costa.',
    idealTerrain:
      'Terrenos em encosta íngreme ou sobre maciços rochosos com vista panorâmica frontal para o mar aberto. A engenharia atua com pilares esbeltos e balanços arrojados que pousam sobre a rocha com mínima intervenção no solo natural, garantindo leveza visual e estabilidade sísmica/geotécnica permanente.',
    engineeringSpecs: {
      fck: 'Fck ≥ 40 MPa de alta compacidade',
      concreteNorm: 'NBR 6118 (Agressividade Extrema / Névoa Salina Direta)',
      cobrimento: 'Cobrimento nominal de 50 mm a 55 mm com verificação por pacometria digital',
      waterproofing:
        'Impermeabilização de piscina suspensa em concreto armado com sistema flexível bicomponente de base acrílica-polimérica e manta termoplástica contínua, suportando as movimentações diferenciais da estrutura sem qualquer ponto de infiltração.',
      framesAndInox:
        'Esquadrias estruturais especiais dimensionadas para sucção e pressão dinâmica de ventos de até 100 km/h (NBR 10821 e NBR 7199), com vidros laminados temperados de segurança 10+10 mm e perfis estruturais de alumínio naval.',
      structuralHighlights: [
        'Ancoragem de fundação com tirantes em rocha sã e lajes nervuradas de alta rigidez',
        'Piscina com balanço estrutural projetada como elemento arquitetônico integrado à sala principal',
        'Pintura externa com resinas elastoméricas com resistência a névoa salina e proteção contra fungos e algas marinhas',
        'Sistemas hidráulicos com bombas de pressurização redundantes e cisternas com captação pluvial',
      ],
    },
    metragensRange: '180 m² a 520 m²+',
    metragemFlexibility:
      'Conceito estrutural aplicável desde residências de lazer compactas suspensas (180 m² a 260 m² com 3 suítes) até vilas imponentes de encosta em múltiplos pavimentos (350 m² a 520 m²+ com elevador panorâmico e deck suspenso).',
    estimatedDuration: '11 a 15 meses (Chave na mão / Preço fechado)',
    timelinePhases: [
      {
        phase: 'Geotecnia & Ancoragem em Rocha',
        duration: 'Meses 1 e 3',
        description: 'Perfurações rotativas, ancoragens com chumbadores químicos de alta resistência e blocos de coroamento.',
      },
      {
        phase: 'Estrutura Suspensa & Piscina',
        duration: 'Meses 4 a 7',
        description: 'Montagem de escoramentos especiais de encosta, concretagem dos pilares esbeltos e cuba da piscina suspensa.',
      },
      {
        phase: 'Envoltória, Vidros & Esquadrias',
        duration: 'Meses 8 e 9',
        description: 'Instalação das esquadrias navais pesadas, vidros laminados temperados e vedações herméticas.',
      },
      {
        phase: 'Revestimentos, Decks & Entrega',
        duration: 'Meses 10 a 14',
        description: 'Decks de cumaru, porcelanatos antiderrapantes, iluminação cênica, comissionamento e entrega das chaves.',
      },
    ],
    whatsappPrompt:
      'Olá! Gostaria de saber mais sobre a viabilidade técnica e orçamento de uma obra no padrão do Pavilhão Costeiro Pontal (Arraial do Cabo / Búzios).',
  },
];
