export interface LocationItem {
  id: string;
  slug: string;
  name: string;
  district?: string;
  title: string;
  subtitle: string;
  metaDescription: string;
  neighborhoods: string;
  neighborhoodsList: string[];
  localChallenges: string;
  technicalDifferentiators: string[];
  faq: {
    question: string;
    answer: string;
  }[];
  whatsappMessage: string;
}

export const LOCATIONS_LIST: LocationItem[] = [
  {
    id: 'cabo-frio',
    slug: 'construtora-reformas-e-manutencao-cabo-frio',
    name: 'Cabo Frio',
    district: '1º Distrito',
    title: 'Construtora, Reformas e Manutenção Residencial em Cabo Frio (RJ)',
    subtitle: 'Soluções completas de engenharia costeira, pintura anti-maresia, hidráulica, elétrica e gestão de obras com preço fechado em Cabo Frio.',
    metaDescription: 'Construtora e reformas em Cabo Frio (RJ). Obras residenciais, reformas, pintura anti-maresia, caça-vazamentos e manutenção expressa no Braga, Peró, Ogiva e Passagem.',
    neighborhoods: 'Braga, Passagem, Ogiva, Peró, Conchas, Foguete, Algodoal, Dunas, Portinho, Novo Portinho, Palmeiras, Jardim Caiçara, São Cristóvão, Centro e Ilha do Japonês',
    neighborhoodsList: [
      'Braga',
      'Passagem',
      'Ogiva',
      'Peró',
      'Praia das Conchas',
      'Foguete',
      'Algodoal',
      'Dunas',
      'Portinho',
      'Novo Portinho',
      'Palmeiras',
      'Jardim Caiçara',
      'São Cristóvão',
      'Centro',
      'Ilha do Japonês',
    ],
    localChallenges:
      'Cabo Frio apresenta uma das maiores taxas de agressividade salina do litoral do RJ, intensificada pelos ventos constantes na orla do Forte, Foguete e Peró (exigindo concreto NBR 6118 Classe IV e esquadrias marinhas). Já nas imediações do Canal do Itajuru e lagoas (Ogiva, Portinho, Palmeiras), o lençol freático raso impõe blindagem absoluta de baldrames e sistemas de drenagem contra umidade ascendente. Além disso, a forte vocação turística gera altíssima demanda por manutenção expressa para imóveis de temporada e Airbnb no Braga, Passagem e Peró.',
    technicalDifferentiators: [
      'Blindagem estrutural conforme ABNT NBR 6118 com cobrimento nominal de 45 a 50mm e ferragens protegidas contra névoa salina',
      'Impermeabilização estanque de baldrames com manta asfáltica e argamassa polimérica contra o lençol freático do Canal do Itajuru',
      'Pintura de fachadas com resinas elastoméricas hidrorrepelentes e proteção anti-mofo resistente ao salitre costeiro',
      'Plantão de manutenção expressa para anfitriões de temporada e condomínios com emissão de nota fiscal e garantia formal',
    ],
    faq: [
      {
        question: 'Vocês atendem chamados de emergência ou reformas rápidas em Cabo Frio?',
        answer:
          'Sim! Dispomos de equipe volante própria em Cabo Frio para atendimento rápido no Braga, Passagem, Ogiva, Peró e Centro, com foco em hidráulica, elétrica, reparo de bombas, pintura e vazamentos.',
      },
      {
        question: 'Como funciona a construção do zero em lotes na Ogiva ou Peró?',
        answer:
          'Realizamos sondagem de solo prévia, ensaios geotécnicos e projeto estrutural calculado para conter o lençol freático e a agressividade marinha. A obra é executada no modelo Chave na Mão (Turnkey) com preço fechado.',
      },
    ],
    whatsappMessage: 'Olá! Gostaria de um orçamento para obra/reforma/manutenção em Cabo Frio.',
  },
  {
    id: 'tamoios-unamar',
    slug: 'construtora-reformas-e-servicos-tamoios-unamar',
    name: 'Tamoios e Unamar (2º Distrito)',
    district: '2º Distrito de Cabo Frio',
    title: 'Construtora, Obras, Pintura e Manutenção em Tamoios e Unamar (Cabo Frio)',
    subtitle: 'Construção segura, reforço estrutural, impermeabilização de baldrames, caça-vazamentos e manutenção em condomínios de Tamoios e Unamar.',
    metaDescription: 'Construtora e serviços em Tamoios e Unamar (Cabo Frio). Obras chave na mão, reformas, piscinas e pintura em condomínios como Orla 500, Verão Vermelho e Alphaville.',
    neighborhoods: 'Unamar, Condomínio Verão Vermelho, Condomínio Orla 500, Terras Alphaville Cabo Frio, Condomínio Santa Margarida, Condomínio Aquarius, Samburá, Santo Antônio, Florestinha e Long Beach',
    neighborhoodsList: [
      'Unamar',
      'Condomínio Verão Vermelho',
      'Condomínio Orla 500',
      'Terras Alphaville Cabo Frio',
      'Condomínio Santa Margarida',
      'Condomínio Aquarius',
      'Samburá',
      'Santo Antônio',
      'Florestinha',
      'Long Beach',
    ],
    localChallenges:
      'O 2º Distrito de Cabo Frio (Tamoios/Unamar) possui características geotécnicas desafiadoras: solo predominantemente arenoso com lençol freático muito próximo à superfície, exigindo projetos de fundação com vigas baldrames 100% envelopadas e impermeabilizadas para evitar a destruição de paredes por umidade ascendente. Outro ponto crítico é o tratamento de água de poço artesiano com excesso de ferro que mancha pisos e danifica tubulações e piscinas. O Grupo Vitti oferece a segurança jurídica e técnica de um CNPJ formalizado, preço fechado em contrato e garantia técnica, eliminando o risco da mão de obra informal que domina a região.',
    technicalDifferentiators: [
      'Protocolo rigoroso de impermeabilização tripla de baldrames e contrapisos para anular infiltrações e eflorescências salinas em Unamar',
      'Fundações e radier dimensionados para solo arenoso litorâneo com controle tecnológico de compactação',
      'Sistemas avançados de decantação e filtragem para poços artesianos ricos em ferro e tratamento de água para piscinas',
      'Contratos formais a preço fechado com cronograma físico-financeiro detalhado, evitando aditivos e paralisações',
    ],
    faq: [
      {
        question: 'O Grupo Vitti atende dentro dos condomínios fechados de Tamoios e Unamar?',
        answer:
          'Sim, temos ampla experiência com as normas construtivas de condomínios como Terras Alphaville, Orla 500, Verão Vermelho, Santa Margarida e Aquarius, cuidando desde a aprovação técnica até a limpeza pós-obra.',
      },
      {
        question: 'Por que não contratar pedreiros informais avulsos em Tamoios?',
        answer:
          'A informalidade em Tamoios frequentemente resulta em obras inacabadas, umidade permanente que sobe do chão e falta de garantia. O Grupo Vitti fornece contrato com CNPJ, ART de engenheiro responsável, prazo fixo e garantia técnica por escrito.',
      },
    ],
    whatsappMessage: 'Olá! Gostaria de um orçamento para obra/reforma em Tamoios / Unamar.',
  },
  {
    id: 'buzios',
    slug: 'construtora-reformas-e-manutencao-buzios',
    name: 'Armação dos Búzios',
    district: 'Península de Búzios',
    title: 'Construtora de Alto Padrão, Reformas e Manutenção em Búzios (RJ)',
    subtitle: 'Engenharia para terrenos em encosta, acabamentos nobres em madeira Cumaru, concreto aparente, inox AISI 316 e suporte 24/7 em Búzios.',
    metaDescription: 'Construtora de alto padrão e reformas em Búzios. Obras turnkey, retrofit de pousadas, fundações em rocha e manutenção na Ferradura, Geribá, Brava e Manguinhos.',
    neighborhoods: 'Geribá, Ferradura, Ferradurinha, Manguinhos, João Fernandes, Brava, Forno, Tartaruga, Rasa, Marina, PortoBello, Baía Formosa, Tucuns, Canto, Ossos e Centro',
    neighborhoodsList: [
      'Geribá',
      'Ferradura',
      'Ferradurinha',
      'Manguinhos',
      'João Fernandes',
      'Praia Brava',
      'Praia do Forno',
      'Tartaruga',
      'Rasa',
      'Marina de Búzios',
      'PortoBello',
      'Baía Formosa',
      'Tucuns',
      'Praia do Canto',
      'Ossos',
      'Centro de Búzios',
    ],
    localChallenges:
      'Em Armação dos Búzios, as obras exigem conhecimento geotécnico apurado para lidar com topografia acidentada e encostas rochosas (Ferradura, João Fernandes, Brava), onde perfurações em rocha sã e cortinas de contenção exigem cálculos estruturais refinados para evitar custos exorbitantes de terraplenagem. A arquitetura buziana valoriza o encontro do concreto aparente com madeiras nobres (Cumaru e Ipê extra) e grandes vãos envidraçados, demandando esquadrias navais pesadas e ferragens em aço inox austenítico AISI 316. Além disso, pousadas e casas de temporada de alto padrão dependem de suporte técnico veloz para manter a operação sem interrupções.',
    technicalDifferentiators: [
      'Engenharia de fundações mistas e ancoragem em rocha para aclives e declives acentuados na península',
      'Aplicação exclusiva de ferragens, chumbadores e parafusos em aço inoxidável AISI 316 (resistência marítima extrema)',
      'Tratamento biocida e hidrofugante para decks e pergolados em Cumaru, resistindo ao sol forte e salitre',
      'Retrofit rápido e modernização de pousadas e residências de temporada sem comprometer os períodos de alta ocupação',
    ],
    faq: [
      {
        question: 'Vocês constroem em terrenos com declive ou rocha na Ferradura ou Brava?',
        answer:
          'Sim. Especializamo-nos em soluções estruturais escalonadas que respeitam o relevo natural, com sapatas ancoradas em rocha sã, reduzindo o volume de corte e valorizando a vista para o mar.',
      },
      {
        question: 'Como funciona a manutenção preventiva para casas de veraneio e Airbnb em Búzios?',
        answer:
          'Oferecemos planos de inspeção periódica e atendimento emergencial para revisão de piscinas, pressurização de redes hidráulicas, climatização e pintura antes da chegada de proprietários e hóspedes.',
      },
    ],
    whatsappMessage: 'Olá! Gostaria de um orçamento para obra de alto padrão / manutenção em Búzios.',
  },
  {
    id: 'arraial-do-cabo',
    slug: 'construtora-reformas-e-manutencao-arraial-do-cabo',
    name: 'Arraial do Cabo',
    district: 'Polo Oceânico',
    title: 'Construtora, Reformas Costeiras e Manutenção em Arraial do Cabo (RJ)',
    subtitle: 'Engenharia costeira para falésias rochosas, resistência a ventos oceânicos de até 100 km/h e reformas completas em Arraial do Cabo.',
    metaDescription: 'Construtora e reformas em Arraial do Cabo. Obras no Pontal do Atalaia, Prainha e Praia Grande. Engenharia para encostas, esquadrias navais e piscinas suspensas.',
    neighborhoods: 'Pontal do Atalaia, Prainha, Praia Grande, Praia dos Anjos, Macedônia, Centro, Monte Alto e Figueira',
    neighborhoodsList: [
      'Pontal do Atalaia',
      'Prainha',
      'Praia Grande',
      'Praia dos Anjos',
      'Macedônia',
      'Centro de Arraial',
      'Monte Alto',
      'Figueira',
    ],
    localChallenges:
      'Arraial do Cabo reúne as condições climáticas e topográficas mais severas da região: ventos oceânicos frontais do quadrante Sudoeste que frequentemente ultrapassam 80 a 100 km/h, exigindo esquadrias navais herméticas dimensionadas pelas normas NBR 10821 e vidros de segurança laminados. No Pontal do Atalaia e Prainha, as encostas íngremes demandam fundações especiais em rocha viva e piscinas suspensas projetadas contra oscilações dinâmicas. Já na faixa de restinga de Monte Alto e Figueira, a névoa salina direta exige cobrimentos de concreto reforçados e proteção de telhados contra destelhamento.',
    technicalDifferentiators: [
      'Cálculo e especificação de esquadrias estruturais resistentes à pressão dinâmica de ventos oceânicos severos',
      'Fundações especiais com tirantes e ancoragens rotativas em maciços rochosos no Pontal do Atalaia',
      'Impermeabilização termoplástica elastomérica contínua para piscinas suspensas com borda infinita',
      'Pintura naval elastomérica com proteção bactericida e anti-algas para fachadas expostas à restinga',
    ],
    faq: [
      {
        question: 'É viável construir piscinas suspensas ou decks sobre rocha no Pontal do Atalaia?',
        answer:
          'Sim! Nosso corpo técnico executa projetos estruturais integrados com ensaios geotécnicos e impermeabilização termoplástica de alta resiliência, garantindo segurança patrimonial total.',
      },
      {
        question: 'Vocês reformam imóveis próximos à Praia dos Anjos e Prainha?',
        answer:
          'Sim, realizamos reformas completas, substituição de telhados antigos, caça-vazamentos, modernização elétrica e hidráulica com descarte correto de resíduos.',
      },
    ],
    whatsappMessage: 'Olá! Gostaria de um orçamento para obra ou reforma em Arraial do Cabo.',
  },
  {
    id: 'sao-pedro-da-aldeia',
    slug: 'construtora-reformas-e-manutencao-sao-pedro-da-aldeia',
    name: 'São Pedro da Aldeia',
    district: 'Polo Condominial & Lagunar',
    title: 'Construtora, Obras em Condomínios e Manutenção em São Pedro da Aldeia',
    subtitle: 'Construção residencial chave na mão em loteamentos fechados, reformas e conforto térmico em São Pedro da Aldeia.',
    metaDescription: 'Construtora em São Pedro da Aldeia para obras em condomínios fechados (Cisne Branco, Blue Garden, Costa do Sol). Construção chave na mão, reformas e manutenção.',
    neighborhoods: 'Condomínio Cisne Branco, Condomínio Blue Garden, Condomínio Costa do Sol, Nova São Pedro, Balneário, Praia Linda, Camerum, Mossoró, Baixo Grande, Ponta do Ambrósio e Centro',
    neighborhoodsList: [
      'Condomínio Cisne Branco',
      'Condomínio Blue Garden',
      'Condomínio Costa do Sol',
      'Nova São Pedro',
      'Balneário',
      'Praia Linda',
      'Camerum',
      'Mossoró',
      'Baixo Grande',
      'Ponta do Ambrósio',
      'Centro',
    ],
    localChallenges:
      'São Pedro da Aldeia consolidou-se como o principal polo de condomínios residenciais horizontais da Região dos Lagos (Cisne Branco, Blue Garden, Costa do Sol, Reviver). As construções demandam rigor no atendimento aos regimentos internos de condomínio, projetos de conforto térmico passivo para mitigar a alta insolação lagunar e instalações elétricas superdimensionadas preparadas para energia solar e sistemas modernos de ar-condicionado. A proximidade da Lagoa de Araruama requer ainda impermeabilização cuidada das vigas baldrames e reservatórios subterrâneos.',
    technicalDifferentiators: [
      'Especialização em aprovação célere de projetos executivos nas comissões técnicas de condomínios fechados',
      'Construção no sistema Turnkey (chave na mão) com preço fechado, sem estresse com gestão de compras e pedreiros',
      'Projetos térmicos com telhados termoacústicos, ventilação cruzada e proteção solar para as fachadas lagunares',
      'Infraestrutura embutida para energia solar fotovoltaica e automação residencial de ponta',
    ],
    faq: [
      {
        question: 'Vocês realizam todo o processo de aprovação no condomínio e na Prefeitura de São Pedro?',
        answer:
          'Sim! Cuidamos de todo o processo burocrático: plantas arquitetônicas, memoriais descritivos, ART de engenharia, habite-se e ligação definitiva de concessionárias.',
      },
      {
        question: 'Qual o prazo médio para construção de uma casa de 180 m² em condomínio?',
        answer:
          'Geralmente entre 7 e 10 meses no modelo Chave na Mão, com cronograma fixo e acompanhamento semanal pelo WhatsApp com fotos e vídeos.',
      },
    ],
    whatsappMessage: 'Olá! Gostaria de um orçamento para construir em condomínio em São Pedro da Aldeia.',
  },
  {
    id: 'iguaba-grande',
    slug: 'construtora-reformas-e-manutencao-iguaba-grande',
    name: 'Iguaba Grande',
    district: 'Orla Lagunar & Veraneio',
    title: 'Construtora, Reformas e Manutenção Residencial em Iguaba Grande (RJ)',
    subtitle: 'Retrofit de residências de veraneio, impermeabilização na orla lagunar, caça-vazamentos, piscinas e pintura anti-mofo em Iguaba Grande.',
    metaDescription: 'Construtora e reformas em Iguaba Grande (RJ). Modernização de casas de praia, caça-vazamentos em cisternas, manutenção de piscinas e pintura na orla da Lagoa.',
    neighborhoods: 'Centro, Cidade Nova, Estação, Canellas City, Ubás, Vila Nova, Sapeatiba Mirim e Orla da Lagoa de Araruama',
    neighborhoodsList: [
      'Centro',
      'Cidade Nova',
      'Estação',
      'Canellas City',
      'Ubás',
      'Vila Nova',
      'Sapeatiba Mirim',
      'Orla da Lagoa de Araruama',
    ],
    localChallenges:
      'Iguaba Grande concentra inúmeras casas de veraneio tradicionais construídas nas décadas passadas que hoje necessitam de retrofit completo: modernização de banheiros, integração de cozinhas americanas com áreas gourmet e substituição de antigas redes hidráulicas de ferro fundido por PVC/PPR. A elevada umidade decorrente da orla da Lagoa de Araruama provoca desplacamento de rebocos e mofo persistente em casas que permanecem fechadas por longos períodos. O Grupo Vitti resolve essas patologias e permite que proprietários residentes no Rio de Janeiro acompanhem cada detalhe por vídeo e relatórios digitais.',
    technicalDifferentiators: [
      'Retrofit estrutural e arquitetônico de casas antigas de veraneio sem necessidade de demolição total',
      'Recuperação de lajes e telhados com infiltração e impermeabilização química cristalizante',
      'Inspeção não destrutiva com geofone eletrônico para detecção exata de vazamentos ocultos em cisternas',
      'Acompanhamento de obra 100% digital com relatórios fotográficos semanais para clientes do Rio e Niterói',
    ],
    faq: [
      {
        question: 'Moro na capital do Rio de Janeiro. Como acompanho a reforma da minha casa em Iguaba?',
        answer:
          'Nosso gestor envia relatórios semanais com fotos, vídeos explicativos e a medição das etapas concluídas. Você só viaja para a Região dos Lagos quando quiser comemorar o resultado!',
      },
      {
        question: 'Vocês fazem manutenção e limpeza de piscinas que ficaram verdes em Iguaba?',
        answer:
          'Sim, temos serviço especializado em revitalização química de água, troca de areia de filtros, reparo de bombas e impermeabilização de vinil ou fibra.',
      },
    ],
    whatsappMessage: 'Olá! Gostaria de um orçamento para reforma ou manutenção da minha casa em Iguaba Grande.',
  },
  {
    id: 'rio-das-ostras',
    slug: 'construtora-reformas-e-manutencao-rio-das-ostras',
    name: 'Rio das Ostras',
    district: 'Polo Comercial & Residencial',
    title: 'Construtora, Reformas e Manutenção Predial em Rio das Ostras (RJ)',
    subtitle: 'Construção residencial de médio e alto padrão, reformas comerciais, manutenção predial e pintura elastomérica em Rio das Ostras.',
    metaDescription: 'Construtora e reformas em Rio das Ostras. Obras no Costazul, Recreio, Mariléa e Alphaville. Construção residencial, galpões comerciais e manutenção predial.',
    neighborhoods: 'Costazul, Recreio, Jardim Mariléa, Alphaville Rio das Ostras, Enseada das Gaivotas, Bosque da Praia, Extensão do Bosque, Ouro Verde, Boca da Barra e Centro',
    neighborhoodsList: [
      'Costazul',
      'Recreio',
      'Jardim Mariléa',
      'Alphaville Rio das Ostras',
      'Enseada das Gaivotas',
      'Bosque da Praia',
      'Extensão do Bosque',
      'Ouro Verde',
      'Boca da Barra',
      'Centro',
    ],
    localChallenges:
      'Com crescimento urbano acelerado, Rio das Ostras mescla construções de alto padrão em bairros nobres litorâneos (Costazul, Recreio, Enseada das Gaivotas) e condomínios fechados (como Alphaville Rio das Ostras) com grande demanda por reformas de lojas e pontos comerciais no Mariléa e Centro. A intensa exposição marítima na orla de Costazul exige revestimentos cerâmicos adequados contra descolamento por choque térmico e tintas de fachada com alta flexibilidade elastomérica. Empresas e famílias da região demandam conformidade técnica com emissão de nota fiscal, conformidade às normas ABNT e garantia de engenharia.',
    technicalDifferentiators: [
      'Projetos completos para novas residências em condomínios e bairros nobres litorâneos',
      'Reformas comerciais rápidas para lojas, escritórios e pousadas com foco em minimizar o tempo de paralisação',
      'Pintura de fachadas e revitalização predial com andaimes certificados e conformidade NR-35 / NR-18',
      'Garantia técnica documentada e emissão de ART/RRT de todos os serviços de engenharia',
    ],
    faq: [
      {
        question: 'O Grupo Vitti constrói no Alphaville Rio das Ostras e arredores?',
        answer:
          'Sim, executamos obras no Alphaville Rio das Ostras e condomínios de toda a região, oferecendo gestão completa desde a sondagem de solo até a entrega do Habite-se.',
      },
      {
        question: 'Vocês emitem Nota Fiscal e ART para serviços condominiais e comerciais em Rio das Ostras?',
        answer:
          'Com certeza. Somos uma empresa formalizada com CNPJ regular, responsabilidade técnica de engenheiro civil e emissão de notas fiscais em todos os serviços.',
      },
    ],
    whatsappMessage: 'Olá! Gostaria de um orçamento para obra ou reforma em Rio das Ostras.',
  },
];
