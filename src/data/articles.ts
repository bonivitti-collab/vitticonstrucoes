export interface Article {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category:
    | 'Estrutura & Maresia'
    | 'Custos & Orçamento'
    | 'Contratação & Segurança'
    | 'Gestão de Obras'
    | 'Projetos & Terrenos'
    | 'Vantagens'
    | 'Serviços & Manutenção'
    | 'Airbnb & Temporada';
  readTime: string;
  problemSummary: string;
  highlights: string[];
  content: {
    sectionTitle: string;
    paragraphs: string[];
  }[];
  practicalTips: string[];
  whatsappPrompt: string;
}

export const ARTICLES: Article[] = [
  {
    id: '1',
    slug: 'maresia-e-corrosao-regiao-dos-lagos',
    title: 'Maresia e Corrosão na Região dos Lagos: Como Evitar que a Casa Estoure Pilares em 5 Anos',
    subtitle: 'O litoral do RJ tem uma das névoas salinas mais agressivas do Brasil. Entenda o que a engenharia faz para sua estrutura durar décadas.',
    category: 'Estrutura & Maresia',
    readTime: '6 min de leitura',
    problemSummary: 'Muitos proprietários em Cabo Frio, Búzios e Arraial descobrem ferragens oxidadas e concreto esfarelando poucos anos após a entrega por falta de respeito às normas de agressividade marinha.',
    highlights: [
      'Classe de agressividade ambiental marinha (CAA IV) exige cobrimento de armadura mínimo de 45 a 50mm.',
      'Uso de cimento adequado (CP-III ou CP-IV) e relação água/cimento rigorosamente baixa (≤ 0,45).',
      'Aço aparente ou cobrimento insuficiente é a causa número um de trincas estruturais no litoral.',
      'A corrosão aumenta o volume da ferragem em até 8 vezes, rachando o concreto de dentro para fora.',
    ],
    content: [
      {
        sectionTitle: 'O inimigo invisível: Íons de cloro e a brisa do oceano',
        paragraphs: [
          'A Região dos Lagos possui ventos fortes e constantes e umidade salina intensa. Quando a brisa do mar carrega microgotículas carregadas de íons de cloreto, elas se depositam nas superfícies. Se o concreto for poroso ou a armadura estiver muito próxima da casca, esses íons migram até o aço.',
          'Quando o cloreto alcança a ferragem, ocorre a despassivação do metal. A reação de oxidação faz com que o aço aumente seu volume em até oito vezes. O resultado físico inevitável: o concreto racha, trinca e lasca ("estoura"), expondo a armadura que passa a se desintegrar em ritmo acelerado.',
        ],
      },
      {
        sectionTitle: 'A diferença entre a obra amadora e a engenharia costeira',
        paragraphs: [
          'No canteiro tradicional sem acompanhamento de engenharia, os pedreiros costumam adicionar água extra no caminhão betoneira para facilitar o espalhamento do concreto. Esse é o maior veneno possível: cada gota extra de água evapora e deixa microporos abertos, criando verdadeiras autoestradas para a maresia penetrar.',
          'No Grupo Vitti, aplicamos estritamente a NBR 6118 para Classe de Agressividade Ambiental CAA IV. Usamos plastificantes para manter o concreto fluido sem excesso de água, espaçadores industriais garantindo cobrimento mínimo de 50mm, e quando necessário, adição de microssílica para fechar qualquer poro residual.',
        ],
      },
      {
        sectionTitle: 'Acessórios e esquadrias: o aço inoxidável certo',
        paragraphs: [
          'Não basta proteger os pilares e vigas. Portões, trilhos, parafusos e fixadores precisam ser especificados em aço inox austenítico AISI 316. O inox comum (AISI 304), amplamente vendido em lojas gerais, oxida e mancha pisos claros em menos de um ano na praia de Geribá ou na Ogiva.',
        ],
      },
    ],
    practicalTips: [
      'Exija o ensaio de corpos de prova (fck) comprovando que o concreto usinado atingiu a resistência prevista (geralmente fck ≥ 35 a 40 MPa).',
      'Nunca permita que a ferragem encoste nas tábuas de madeira da fôrma durante a concretagem (exija espaçadores de plástico ou argamassa).',
      'Em reformas com armaduras já expostas, faça a escovação mecânica, aplicação de convertedor/inibidor de corrosão e recomposição com graute estrutural polimérico.',
    ],
    whatsappPrompt: 'Olá! Li o artigo sobre maresia e corrosão na Região dos Lagos. Gostaria de entender como vocês tratam a proteção da estrutura no meu projeto.',
  },
  {
    id: '2',
    slug: 'orcamento-de-obra-fechado-sem-aditivos',
    title: 'O Pesadelo do Orçamento que Dobra: Por Que Obras Estouram e Como Ter Custo Fixo Real',
    subtitle: 'Entenda os 5 ralos invisíveis de dinheiro em construções residenciais e a metodologia que garante previsibilidade financeira.',
    category: 'Custos & Orçamento',
    readTime: '7 min de leitura',
    problemSummary: 'Começar uma obra estimada em R$ 600 mil e terminar gastando R$ 1,2 milhão não é azar: é fruto de orçamentos fictícios por metro quadrado sem compatibilização executiva.',
    highlights: [
      'Orçamento por "m² genérico" (CUB puro) não prevê topografia, fundação, esquadrias e acabamentos específicos.',
      'Falta de compatibilização entre arquitetura e engenharia gera retrabalho que consome 15% a 25% da verba.',
      'A Curva ABC revela que 20% dos itens representam 80% do custo total da sua casa.',
      'Contratos de empreitada global com caderno de encargos detalhado eliminam surpresas quinzenais.',
    ],
    content: [
      {
        sectionTitle: 'A armadilha da ilusão inicial: O preço baixo para "fechar logo"',
        paragraphs: [
          'É comum receber orçamentos milagrosos que parecem 30% mais baratos que os demais. Na grande maioria das vezes, quem orçou simplesmente "esqueceu" itens fundamentais: drenagem do terreno, caixa de gordura e esgoto, impermeabilização de baldrames, padrão de entrada de energia, aterro e caçambas de descarte.',
          'Quando a obra chega na metade e o proprietário já investiu todo o capital disponível, o construtor apresenta aditivos semanais. O cliente se vê encurralado: ou paga o aditivo ou fica com a casa incompleta e o dinheiro esgotado.',
        ],
      },
      {
        sectionTitle: 'Como a engenharia de precisão blinda seu bolso',
        paragraphs: [
          'Um orçamento sério é construído com Composição de Custos Unitários e Curva ABC. Antes de bater um prego no lote, cada saco de cimento, cada metro linear de cabo de cobre e cada hora de equipe especializada já foram tabulados e cotados em fornecedores reais da Região dos Lagos.',
          'Nós dividimos o cronograma em entregas físicas comprovadas. O cliente não adianta dinheiro para etapas futuras sem a medição e aprovação da etapa anterior.',
        ],
      },
    ],
    practicalTips: [
      'Nunca inicie uma construção apenas com a planta humanizada de prefeitura. Exija projeto estrutural, elétrico e hidrossanitário compatibilizados.',
      'Peça a planilha analítica de quantitativos com especificação de marcas e modelos de acabamentos.',
      'Reserve uma contingência técnica real de 5% a 8%, e nunca de 30% como dizem quem trabalha no improviso.',
    ],
    whatsappPrompt: 'Olá! Li o artigo sobre orçamento que dobra. Quero construir na Região dos Lagos e preciso de um planejamento orçamentário transparente e auditável.',
  },
  {
    id: '3',
    slug: 'empreiteiro-avulso-vs-construtora',
    title: 'Empreiteiro Avulso vs. Construtora Séria: O Barato que Custa um Processo Trabalhista',
    subtitle: 'Responsabilidade civil, riscos trabalhistas e a diferença crucial de ter um contrato formal respondendo pela sua segurança.',
    category: 'Contratação & Segurança',
    readTime: '5 min de leitura',
    problemSummary: 'Contratar pedreiro ou mestre de obras avulso por diária parece econômico no primeiro mês, até surgir um acidente de trabalho, uma trinca na laje ou uma ação na Justiça do Trabalho.',
    highlights: [
      'O proprietário que contrata trabalhadores informais responde de forma solidária por acidentes e encargos trabalhistas.',
      'A ART e o contrato formal com o Grupo Vitti garantem estabilidade do imóvel e sua proteção patrimonial.',
      'Seguro de obra e recolhimento previdenciário evitam qualquer dor de cabeça na entrega.',
      'A coordenação técnica garante que o pedreiro não decida sozinho onde cortar um pilar para passar um cano.',
    ],
    content: [
      {
        sectionTitle: 'O risco jurídico que ninguém te conta',
        paragraphs: [
          'No Brasil, a jurisprudência trabalhista é clara: o dono da obra que contrata profissionais sem registro ou empresa constituída pode ser responsabilizado diretamente por verbas rescisórias, horas extras e, no pior dos cenários, indenizações pesadas em caso de queda de andaime ou acidente no canteiro.',
          'Uma construtora formalizada como o Grupo Vitti assume integralmente os funcionários, fornecendo EPIs certificados, treinamento de segurança e proteção jurídica total para o contratante.',
        ],
      },
      {
        sectionTitle: 'Quem responde se a laje trincar em 3 anos?',
        paragraphs: [
          'O empreiteiro informal muda de telefone, viaja para outra cidade ou diz que "o material que o cliente comprou era ruim". Já uma construtora formalizada como o Grupo Vitti possui CNPJ, contrato com garantias legais e histórico de obras que zela pelo próprio nome.',
        ],
      },
    ],
    practicalTips: [
      'Exija sempre contrato formal e comprovante de ART antes do início das escavações.',
      'Verifique se a construtora possui CNPJ ativo e certidões negativas regulares.',
      'Nunca faça pagamentos em dinheiro vivo ou Pix para contas de terceiros sem recibo discriminado de medição.',
    ],
    whatsappPrompt: 'Olá! Gostaria de conversar sobre a segurança e garantia de construir minha casa com o Grupo Vitti com contrato formal.',
  },
  {
    id: '4',
    slug: 'construindo-a-distancia-na-regiao-dos-lagos',
    title: 'Construindo à Distância: Como Fazer sua Casa de Praia sem Virar Refém do WhatsApp',
    subtitle: 'Mora na capital do Rio, em São Paulo ou em Minas? Conheça o protocolo para acompanhar sua obra com transparência total sem ter que descer a serra todo fim de semana.',
    category: 'Gestão de Obras',
    readTime: '6 min de leitura',
    problemSummary: 'Proprietários que constroem casa de lazer à distância frequentemente sofrem com fotos maquiadas, dias sem resposta e a surpresa desagradável de chegar no sábado e ver a obra parada.',
    highlights: [
      'Relatórios fotográficos geolocalizados e diário de obra digital com medição real.',
      'Reuniões quinzenais remotas com pauta objetiva e comparativo entre planejado vs. executado.',
      'Relatórios transparentes com notas fiscais, fotos em alta resolução e o avanço físico direto no seu celular.',
      'Eliminação da necessidade de perder sextas e segundas-feiras no trânsito da Ponte Rio-Niterói e Via Lagos.',
    ],
    content: [
      {
        sectionTitle: 'A ilusão do "vou lá no sábado dar uma olhada"',
        paragraphs: [
          'A maioria dos clientes do Grupo Vitti reside na cidade do Rio de Janeiro, em Niterói, em Belo Horizonte ou em São Paulo. O sonho de construir na Região dos Lagos costuma se desgastar quando o proprietário se vê obrigado a gastar horas na estrada para resolver se a tomada da suíte fica a 30cm ou 1m do chão.',
          'Pior ainda: no sábado o canteiro está vazio. Olhar tijolos em pé não diz se a impermeabilização foi feita com duas demãos cruzadas ou se o aço foi posicionado com o espaçamento correto.',
        ],
      },
      {
        sectionTitle: 'O modelo de gestão transparente',
        paragraphs: [
          'Trabalhamos com um sistema onde você acompanha o canteiro como se estivesse lá dentro. Cada etapa concluída possui registro em alta resolução, testes de tubulação pressurizada filmados e relatórios executivos com a Curva S da obra.',
        ],
      },
    ],
    practicalTips: [
      'Defina todas as escolhas de louças, metais e paginação de piso ainda na fase de projeto executivo, antes de abrir o canteiro.',
      'Estabeleça um canal único oficial de comunicação para decisões técnicas (evite áudios soltos que se perdem no histórico).',
      'Venha à Região dos Lagos para visitar as praias e curtir a cidade, e não para descarregar saco de argamassa no porta-malas.',
    ],
    whatsappPrompt: 'Olá! Moro fora da Região dos Lagos e quero construir minha casa de veraneio com tranquilidade e relatórios detalhados. Como funciona o atendimento à distância?',
  },
  {
    id: '5',
    slug: 'terrenos-em-declive-encosta-buzios-arraial',
    title: 'Terrenos em Declive e Encosta (Búzios e Arraial): Como Evitar que a Fundação Custe Metade da Casa',
    subtitle: 'Vistas deslumbrantes para o mar costumam vir acompanhadas de maciços rochosos e encostas íngremes. Veja como a engenharia geotécnica otimiza o corte e contenção.',
    category: 'Projetos & Terrenos',
    readTime: '7 min de leitura',
    problemSummary: 'Comprar um lote na Ferradura, Geribá ou Pontal do Atalaia sem sondagem prévia pode exigir muros de contenção caríssimos ou corte em rocha que atrasam a obra em 6 meses.',
    highlights: [
      'Sondagem a percussão (SPT) ou mista com ensaio rotativo antes de fechar a compra do terreno.',
      'Projetos arquitetônicos inteligentes que se adaptam aos níveis naturais do relevo em vez de mover montanhas de terra.',
      'Muros de arrimo em concreto armado vs. gabião: quando cada solução é financeiramente viável.',
      'Drenagem de águas pluviais de encosta: o elemento que garante que o morro não exerça pressão hidrostática na sua casa.',
    ],
    content: [
      {
        sectionTitle: 'A beleza e o desafio das cotas elevadas',
        paragraphs: [
          'Os terrenos mais cobiçados de Armação dos Búzios e de Arraial do Cabo são justamente aqueles que proporcionam vista panorâmica para as baías e enseadas. No entanto, terrenos com inclinação superior a 20% demandam estudos de contenção de encosta e estabilidade de taludes.',
          'Um erro comum é contratar um projeto de arquitetura genérico desenhado para um lote plano. Quando o cálculo estrutural entra em ação, descobre-se que serão necessárias dezenas de toneladas de aço e concreto apenas para criar um platô artificial.',
        ],
      },
      {
        sectionTitle: 'Aproveitando o desnível a favor da arquitetura',
        paragraphs: [
          'A melhor engenharia é aquela que trabalha com a topografia: pavimentos escalonados, áreas sociais no nível intermediário, garagens aproveitando a cota da rua e balanços estruturais elegantes ancorados na rocha sã. Isso reduz o volume de bota-fora e custos com máquinas pesadas.',
        ],
      },
    ],
    practicalTips: [
      'Antes de assinar a escritura de um lote em aclive/declive, contrate um engenheiro para fazer a visita técnica de viabilidade.',
      'Exija projeto de drenagem superficial e profunda: a água da chuva que desce a encosta precisa ser desviada antes de atingir a estrutura.',
      'Verifique as regras do condomínio e da prefeitura local quanto ao percentual máximo de corte de terreno e altura de muros de contenção.',
    ],
    whatsappPrompt: 'Olá! Estou avaliando um terreno em declive/encosta na Região dos Lagos e gostaria de um apoio de engenharia antes de definir o projeto.',
  },
  {
    id: '6',
    slug: 'lencol-freatico-alto-e-umidade-cabo-frio-tamoios',
    title: 'Lençol Freático Alto e Umidade em Cabo Frio e Tamoios: O Fim das Paredes Descascando e Mofo',
    subtitle: 'Bairros como Tamoios (Unamar, Verão Vermelho, Orla 500), Ogiva, Peró, Passagem e Braga têm água a menos de 1 metro de profundidade. Aprenda o segredo da impermeabilização definitiva.',
    category: 'Estrutura & Maresia',
    readTime: '6 min de leitura',
    problemSummary: 'Pintura nova que borbulha, rodapés que apodrecem e cheiro constante de mofo na casa de praia são causados por capilaridade do solo úmido que sobe pelas vigas de fundação — um desafio crítico comum em Tamoios (2º Distrito de Cabo Frio) e áreas litorâneas planas.',
    highlights: [
      'A umidade ascendente por capilaridade sobe pelos poros microscópicos do concreto se o baldrame não estiver 100% blindado.',
      'Pintura asfáltica simples ("tinta preta diluída") não é suficiente em áreas com lençol freático alto.',
      'Argamassas poliméricas cristalizantes e mantas asfálticas termossoldadas criam barreira física intransponível.',
      'Drenagem perimetral e brita graduada rompem a coluna d’água sob o contrapiso.',
    ],
    content: [
      {
        sectionTitle: 'Por que a umidade sobe pelas paredes?',
        paragraphs: [
          'Em cidades litorâneas e lagunares planas como Cabo Frio, Tamoios (Unamar, Verão Vermelho, Orla 500), São Pedro da Aldeia, Iguaba Grande e Rio das Ostras, o lençol freático costuma ser encontrado a pouquíssimos metros — ou até centímetros — do nível do solo, especialmente nas épocas de maré alta ou chuvas intensas.',
          'O concreto e a argamassa agem exatamente como um torrão de açúcar encostado no café: a água é sugada para cima por capilaridade. Ao atingir as primeiras fiadas de tijolo, a água evapora nas paredes internas, trazendo os sais dissolvidos que estouram a massa corrida e a pintura.',
        ],
      },
      {
        sectionTitle: 'O protocolo de estanqueidade zero do Grupo Vitti',
        paragraphs: [
          'A impermeabilização da fundação deve ser contínua e envelopar a viga baldrame por cima e pelas laterais, subindo pelo menos 30 a 50cm na primeira fiada de alvenaria. Além disso, adicionamos hidrofugante na massa de assentamento das primeiras três fiadas de tijolos.',
        ],
      },
    ],
    practicalTips: [
      'Nunca aceite cobrir parede úmida com gesso ou placa de drywall para "esconder" o problema; isso apenas alimenta fungos e colônias de mofo.',
      'Em construções novas em Tamoios e Cabo Frio, exija rebaixamento temporário de lençol freático com ponteiras filtrantes durante a concretagem das sapatas.',
      'Aplique manta asfáltica dupla ou polímero cristalizante antes de executar o contrapiso de regularização.',
    ],
    whatsappPrompt: 'Olá! Sofro com umidade ou estou planejando construir em área com lençol freático alto em Cabo Frio, Tamoios ou Região dos Lagos. Como vocês tratam isso?',
  },
  {
    id: '7',
    slug: 'reforma-e-retrofit-sem-derrubar-pilar',
    title: 'Reformar Casa Antiga no Litoral: Como Modernizar Ambientes com Segurança Estrutural',
    subtitle: 'Abrir salas integradas, aumentar vãos para iluminação natural e criar áreas gourmet sem colocar o imóvel em risco de colapso.',
    category: 'Projetos & Terrenos',
    readTime: '6 min de leitura',
    problemSummary: 'Muitos compradores adquirem casas dos anos 80/90 na Região dos Lagos cheias de cômodos fechados e contratam demolições sem projeto, arriscando derrubar alvenarias estruturais.',
    highlights: [
      'Casas antigas frequentemente utilizavam paredes como apoio de lajes (alvenaria autoportante) sem vigas evidentes.',
      'Uso de vigas metálicas discretas e reforço com fibra de carbono para criar grandes vãos livres contemporâneos.',
      'Troca completa das redes elétricas antigas para suportar ar-condicionado inverter em todos os quartos e chuveiros modernos.',
      'Revisão dos telhados coloniais para embutir platibandas modernas ou manter a estética rústica com isolamento térmico.',
    ],
    content: [
      {
        sectionTitle: 'A tentação perigosa do "é só uma parede de tijolo"',
        paragraphs: [
          'É tentador entrar numa casa antiga e pedir para o pedreiro marretar a parede entre a cozinha e a sala para criar um espaço gourmet integrado. Porém, nas construções litorâneas mais antigas, muitas lajes foram apoiadas diretamente sobre alvenarias de tijolo maciço ou blocos cerâmicos.',
          'Remover uma parede dessas sem escoramento prévio e instalação de um reforço metálico (perfil W) ou viga de concreto calculada pode provocar flechas imediatas na laje superior, trincas nas paredes vizinhas ou até desabamento parcial.',
        ],
      },
      {
        sectionTitle: 'Retrofit inteligente: valorização patrimonial de até 40%',
        paragraphs: [
          'Uma reforma planejada transforma completamente a liquidez e o valor de uma casa em Búzios ou Cabo Frio. Modernizar as esquadrias, instalar porcelanatos de grande formato e renovar a fachada com concreto aparente e madeira cumaru reposiciona o imóvel no mercado de alto padrão com custo muito inferior ao de construir do zero.',
        ],
      },
    ],
    practicalTips: [
      'Exija sempre a emissão de laudo técnico de reforma e ART assinado por engenheiro antes de qualquer marretada.',
      'Substitua 100% da fiação antiga: fios antigos ressecados com isolamento de pano ou plástico rígido são a maior causa de incêndios em imóveis de veraneio.',
      'Verifique o estado das caixas d’água e troque registros de gaveta antigos por modelos com esfera metálica de alta vedação.',
    ],
    whatsappPrompt: 'Olá! Tenho uma casa para reformar/fazer retrofit na Região dos Lagos e preciso de um projeto com segurança estrutural.',
  },
  {
    id: '8',
    slug: 'esquadrias-e-vidros-contra-ventos-costeiros',
    title: 'Esquadrias e Vidros Contra Ventanias Costeiras: Por Que Entra Água na Sua Sala Durante Tempestades',
    subtitle: 'A pressão dinâmica do vento oceânico empurra a chuva contra os vidros. Saiba como escolher perfis e vedações que resistem a ventos de 80 km/h.',
    category: 'Estrutura & Maresia',
    readTime: '5 min de leitura',
    problemSummary: 'Comprar esquadrias comuns de alumínio fino resulta em vidros que vibram alto em noites de ventania, trilhos que transbordam água de chuva para dentro da sala e roldanas emperradas em poucos meses.',
    highlights: [
      'A NBR 10821 estabelece ensaios rigorosos de permeabilidade ao ar e estanqueidade à água para esquadrias externas.',
      'Em orlas e morros, as rajadas de vento exercem sucção e pressão que exigem vidros laminados ou temperados dimensionados pela NBR 7199.',
      'Drenagem nos trilhos com válvulas de retorno impede que a água da calha transborde para dentro da residência.',
      'Anodização marítima mínima de 20 a 25 micras ou pintura eletrostática especial para conter a corrosão do alumínio.',
    ],
    content: [
      {
        sectionTitle: 'O teste da tempestade de sudoeste',
        paragraphs: [
          'Na Região dos Lagos, a entrada de frentes frias vem acompanhada de ventos de quadrante Sudoeste que atingem facilmente velocidades de 60 a 90 km/h. Quando a chuva é lançada horizontalmente contra a fachada, a pressão positiva na face externa empurra a água por qualquer microfresta de esquadria.',
          'Janelas e portas de correr baratas possuem trilhos com caixas de dreno insuficientes. A água se acumula mais rápido do que consegue escoar, transbordando por cima da guia para dentro de salas e quartos, estragando pisos e rodapés.',
        ],
      },
      {
        sectionTitle: 'O que faz uma esquadria ser verdadeiramente costeira',
        paragraphs: [
          'Linhas minimalistas de alto padrão para o litoral contam com câmaras de descompressão, borrachas em EPDM de alta densidade e parafusos de fixação exclusivamente em inox 316. Os vidros laminados garantem além da resistência mecânica, um excelente isolamento acústico para que o som do vento não tire o sono da família.',
        ],
      },
    ],
    practicalTips: [
      'Nunca use perfis de linhas leves (como Linha 25 comum) em vãos maiores que 2 metros com vista frontal para a praia.',
      'Certifique-se de que o silicone usado na vedação perimetral seja neutro estrutural de cura neutra específico para esquadrias.',
      'Prefira portas com trilhos embutidos no piso apenas quando houver sistema de calha de drenagem oculta interligada à rede pluvial.',
    ],
    whatsappPrompt: 'Olá! Estou definindo as esquadrias e vidros para minha obra no litoral e gostaria da orientação técnica do Grupo Vitti.',
  },
  {
    id: '9',
    slug: 'prazos-de-obra-e-chuvas-de-verao',
    title: 'Prazos de Obra e Chuvas de Verão: O Segredo de um Cronograma Físico-Financeiro que Funciona',
    subtitle: 'Como o planejamento executivo profissional antecipa o período chuvoso e as paralisações de fim de ano sem atrasar a entrega das chaves.',
    category: 'Gestão de Obras',
    readTime: '5 min de leitura',
    problemSummary: 'A desculpa clássica do construtor informal para atrasar uma obra em 6 meses é culpar a chuva, a falta de material na loja ou os feriados de alta temporada na Região dos Lagos.',
    highlights: [
      'Histórico pluviométrico regional integrado ao cronograma de fundações e terraplenagem.',
      'Fechamento rápido de cobertura antes dos meses de tempestades fortes (novembro a janeiro).',
      'Logística antecipada de compras para evitar a paralisação de trânsito e escassez de caminhões durante o verão.',
      'Curva S com linha de base (baseline) para identificar atrasos críticos logo na primeira semana.',
    ],
    content: [
      {
        sectionTitle: 'Por que a maioria das obras atrasa no litoral?',
        paragraphs: [
          'A Região dos Lagos tem dinâmicas muito particulares: durante o pico do verão (dezembro a fevereiro), o fluxo de veículos na Via Lagos e no centro de Cabo Frio quadruplica. Entregas de concreto usinado e carretas de aço enfrentam restrições de trânsito em determinadas vias urbanas.',
          'Além disso, o final de ano coincide com pancadas de chuva de verão. Se a casa ainda estiver na fase de fundação aberta ou alvenaria sem laje, cada dia de chuva pode significar três dias de paralisação para esgotamento de água e secagem de valas.',
        ],
      },
      {
        sectionTitle: 'Engenharia de cronograma com proteção climática',
        paragraphs: [
          'Nosso planejamento estratégico busca sempre concluir as etapas enterradas e a estrutura de concreto nos meses mais secos do ano (outono/inverno). Quando o verão chega, a residência já está com laje de cobertura impermeabilizada, permitindo que as equipes trabalhem a pleno vapor nos acabamentos internos, faça chuva ou sol.',
        ],
      },
    ],
    practicalTips: [
      'Exija um cronograma com gráfico de Gantt mostrando o caminho crítico de cada serviço.',
      'Tenha compras de revestimentos especiais feitas com pelo menos 45 dias de antecedência para não depender de estoques de fábrica no final do ano.',
      'Contrate com cláusula de marcos contratuais: pagamentos liberados por etapa física entregue, e não por mês corrido.',
    ],
    whatsappPrompt: 'Olá! Gostaria de entender como o Grupo Vitti gerencia os prazos e cronogramas de obra na Região dos Lagos.',
  },
  {
    id: '10',
    slug: 'vantagens-construir-com-a-gente-vs-por-conta-propria',
    title: 'As 7 Grandes Vantagens de Construir com a Gente em Vez de Fazer Obra por Conta Própria',
    subtitle: 'Por que tentar administrar pedreiro avulso e comprar material sozinho quase sempre sai mais caro e vira dor de cabeça.',
    category: 'Vantagens',
    readTime: '6 min de leitura',
    problemSummary: 'Achar que fazer obra por conta própria economiza dinheiro é a maior ilusão de quem constrói no litoral. O desperdício de material, a falta de compromisso com prazo e os retrabalhos custam muito mais caro.',
    highlights: [
      'Preço fechado antes de iniciar: você sabe exatamente o valor final sem aditivos semanais surpresa.',
      'Desconto direto de construtora na compra de materiais no atacado repassado para você.',
      'Equipe de confiança no canteiro: zero dor de cabeça com abandono de obra ou pedreiro que não aparece.',
      'Acompanhamento semanal por fotos e vídeos no WhatsApp: você não precisa pegar estrada todo fim de semana.',
      'Estrutura reforçada de verdade com proteção anti-maresia para a casa durar décadas.',
      'Garantia pós-obra e atendimento direto com o responsável: olho no olho e compromisso.',
      'Suporte técnico e esclarecimento de dúvidas para análise de plantas e especificações da sua obra.',
    ],
    content: [
      {
        sectionTitle: 'A ilusão de "economizar" administrando a obra sozinho',
        paragraphs: [
          'Muitos proprietários acreditam que contratar equipes avulsas e passar os sábados comprando cimento e areia vai gerar economia. O que acontece na realidade é o oposto: no varejo, você paga os preços mais caros de balcão, arca com fretes fragmentados e perde seus finais de semana e momentos em família em lojas de material.',
          'Além disso, sem um responsável único, se uma parede ficar torta ou um ralo vazar, o pedreiro culpa o eletricista, que culpa o encanador. Ninguém assume a responsabilidade e o prejuízo sai sempre do bolso do cliente.',
        ],
      },
      {
        sectionTitle: 'A vantagem do Preço Fechado: paz mental e controle',
        paragraphs: [
          'Quando você constrói com o Grupo Vitti, o orçamento é fechado linha por linha antes do primeiro passo. Se o saco de cimento aumentar na distribuidora ou a obra exigir mais horas, o risco não é repassado para você. Você tem tranquilidade financeira do início ao fim.',
          'Compramos insumos pesados direto de usinas e grandes distribuidoras com tabela de pessoa jurídica e construtora, repassando esse ganho para a viabilidade do seu projeto.',
        ],
      },
      {
        sectionTitle: 'Acompanhe de longe sem perder o sono',
        paragraphs: [
          'A maioria dos nossos clientes mora na capital ou em outros municípios e constrói para veraneio ou investimento. Nossa rotina inclui fotos em alta definição, vídeos e relatórios objetivos direto no seu WhatsApp toda semana.',
          'Você não precisa enfrentar o trânsito da ponte Rio-Niterói ou da Via Lagos todo fim de semana apenas para conferir se a parede foi levantada. Você recebe tudo na palma da mão.',
        ],
      },
      {
        sectionTitle: 'Contato direto e atendimento humanizado',
        paragraphs: [
          'Aqui você conversa direto comigo. Sem intermediários ou termos difíceis para te enrolar. Falamos a língua da clareza, transparência e respeito pelo seu sonho.',
        ],
      },
    ],
    practicalTips: [
      'Coloque na ponta do lápis os custos ocultos de fazer sozinho: combustível, tempo, desperdício de material e retrabalho.',
      'Exija contrato claro com cronograma de etapas e preço previamente acordado.',
      'Chame no WhatsApp para tirar dúvidas sobre o seu lote ou projeto antes de tomar qualquer decisão.',
    ],
    whatsappPrompt: 'Olá! Li o guia sobre as vantagens de construir com preço fechado com o Grupo Vitti. Quero conversar no WhatsApp sobre meu projeto.',
  },
  {
    id: '11',
    slug: 'tinta-anti-maresia-pintura-litoral-cabo-frio-unamar',
    title: 'Tinta Anti-Maresia em Cabo Frio e Unamar: Como Pintar a Casa de Praia Sem Mofo e Descascamento',
    subtitle: 'A névoa salina e os ventos fortes da Região dos Lagos pulverizam tintas comuns em 6 meses. Conheça as tintas elastoméricas, emborrachadas e o preparo ideal de parede.',
    category: 'Serviços & Manutenção',
    readTime: '5 min de leitura',
    problemSummary: 'Paredes externas com bolhas, descascando, manchas de mofo verde/escuro e pó branco (salitre) são o pesadelo de quem pinta a casa no litoral com produtos e técnicas inadequadas.',
    highlights: [
      'Tintas acrílicas comuns não suportam a dilatação térmica do litoral: a camada racha e a maresia penetra.',
      'O uso de tinta emborrachada elastomérica cria uma membrana flexível que acompanha as microfissuras da alvenaria.',
      'A lavagem prévia com cloro ou fungicida é obrigatória para neutralizar os esporos antes de aplicar qualquer selador.',
      'Aplicação de fundo preparador de paredes em vez de selador comum para aglutinar partículas soltas de areia e cal.',
    ],
    content: [
      {
        sectionTitle: 'Por que a pintura descasca tão rápido no litoral?',
        paragraphs: [
          'Em cidades como Cabo Frio, Arraial do Cabo e o distrito de Tamoios (Unamar), a combinação de sol escaldante durante o dia, vento frio à noite e umidade marítima constante submete a alvenaria a ciclos severos de contração e dilatação. Uma tinta rígida convencional não tem elasticidade para acompanhar essa movimentação milimétrica, gerando microfissuras.',
          'Além disso, o salitre transportado pela brisa marinha penetra nas menores aberturas e cristaliza no interior do reboco. Ao cristalizar, o sal aumenta de volume e empurra a película de tinta de dentro para fora, provocando bolhas e o clássico esfarelamento.',
        ],
      },
      {
        sectionTitle: 'O segredo da tinta emborrachada e hidrorrepelente',
        paragraphs: [
          'A solução técnica recomendada pelo Grupo Vitti é o sistema elastomérico de pintura. Trata-se de uma tinta com resina acrílica especial que forma uma membrana impermeável, capaz de se esticar em até 300% sem se romper. Isso sela completamente a fachada contra a névoa salina e chuvas de vento.',
          'Para muros e fachadas com batida forte de sol poente, utilizamos cores com pigmentos inorgânicos com proteção UV de alta performance, que evitam o desbotamento precoce comum nos tons de areia, terracota e cinza no litoral.',
        ],
      },
      {
        sectionTitle: 'O passo a passo da preparação profissional da superfície',
        paragraphs: [
          'Nenhuma tinta faz milagre se aplicada sobre uma base contaminada. Nossa equipe executa lavagem com hidrojateamento e solução anti-fungo, raspagem manual de partes soltas, calafetação de trincas com selante poliuretano (PU) flexível e aplicação de fundo preparador para uniformizar a absorção.',
        ],
      },
    ],
    practicalTips: [
      'Nunca pinte paredes externas em dias com ventos muito fortes ou umidade relativa acima de 85%, comuns no inverno litorâneo.',
      'Em rodapés externos com umidade ascendente, faça a raspagem total do reboco até 1 metro e aplique argamassa polimérica antes da massa e tinta.',
      'Contrate profissionais que usem lixamento com aspiração para evitar que a poeira fina contamine os cômodos internos.',
    ],
    whatsappPrompt: 'Olá! Li o guia de pintura anti-maresia e gostaria de um orçamento para pintar meu imóvel com o Grupo Vitti.',
  },
  {
    id: '12',
    slug: 'checklist-manutencao-expressa-airbnb-regiao-dos-lagos',
    title: 'Checklist de Manutenção Expressa para Airbnb na Região dos Lagos: Como Proteger Sua Nota 5 Estrelas',
    subtitle: 'Chuveiro queimado no sábado, ar-condicionado pingando e vaso entupido custam avaliações e cancelamentos. Veja como manter seu imóvel 100% blindado para hóspedes.',
    category: 'Airbnb & Temporada',
    readTime: '6 min de leitura',
    problemSummary: 'Anfitriões que moram fora da Região dos Lagos sofrem com a falta de mão de obra de confiança para reparos rápidos entre o check-out das 11h e o check-in das 15h em Cabo Frio e Búzios.',
    highlights: [
      'Falhas no ar-condicionado e chuveiro elétrico são responsáveis por mais de 70% das queixas de hóspedes no verão.',
      'A janela de 3 a 4 horas entre saída e entrada de reservas exige equipe local de pronto atendimento e vistorias padronizadas.',
      'Uma avaliação negativa de 1 estrela derruba o anúncio nos algoritmos da plataforma por semanas.',
      'Contratos de manutenção preventiva preventiva custam uma fração do prejuízo de reembolsar uma diária de réveillon.',
    ],
    content: [
      {
        sectionTitle: 'O pesadelo do anfitrião que mora longe',
        paragraphs: [
          'Você alugou sua casa em Búzios, Cabo Frio ou Unamar para o feriadão. O hóspede chega cansado da viagem com a família às 16h e manda uma mensagem: "O ar-condicionado da suíte só venta ar quente e o chuveiro está dando choque". Se você está no Rio de Janeiro ou em Minas Gerais, o desespero começa.',
          'Procurar um eletricista ou técnico de ar-condicionado em pleno sábado à tarde na Região dos Lagos resulta em diárias superfaturadas ou no temido "só posso ir na segunda-feira". O hóspede reclama no suporte da plataforma, pede reembolso de 50% e deixa uma avaliação terrível.',
        ],
      },
      {
        sectionTitle: 'O serviço de suporte e gestão de manutenção do Grupo Vitti',
        paragraphs: [
          'O Grupo Vitti criou uma divisão especializada de socorro e manutenção preventiva para anfitriões de temporada. Cobrimos desde a revisão de rotina (teste de pressão de torneiras, limpeza de filtros de ar, troca de resistência de chuveiro e verificação de lâmpadas) até vistorias fotográficas pós-saída.',
          'Se o hóspede quebrar uma maçaneta, entupir o vaso ou houver pane elétrica, nossa equipe local atua com urgência para resolver o problema sem que o anfitrião precise sair de casa.',
        ],
      },
      {
        sectionTitle: 'Prevenção antes da alta temporada',
        paragraphs: [
          'Antes dos meses de dezembro e janeiro, executamos o checklist preventivo completo: recarga de gás e higienização dos splits, limpeza e cloração da cisterna, reaperto dos bornes do quadro de disjuntores e lubrificação com spray náutico em todas as fechaduras e esquadrias de alumínio.',
        ],
      },
    ],
    practicalTips: [
      'Deixe sempre uma resistência reserva para cada chuveiro da casa guardada no armário de suprimentos.',
      'Instale protetores contra surtos de tensão (DPS) no quadro para que oscilações da rede elétrica não queimem os aparelhos de ar inverter.',
      'Tenha o contato de uma empresa com CNPJ e equipe local pronta para intervir antes de aceitar reservas de alto valor.',
    ],
    whatsappPrompt: 'Olá! Sou anfitrião de temporada / Airbnb na Região dos Lagos e gostaria de conhecer os planos de suporte e manutenção expressa do Grupo Vitti.',
  },
  {
    id: '13',
    slug: 'piscina-agua-ferro-poco-artesiano-tamoios-buzios',
    title: 'Água de Poço com Ferro e Piscina Verde em Tamoios e Búzios: O Guia Definitivo de Tratamento e Bombas',
    subtitle: 'Em Unamar, Tamoios e áreas de praia, encher a piscina com água de poço costuma deixá-la marrom ou verde na hora. Entenda a oxidação do ferro e o manejo de filtros.',
    category: 'Serviços & Manutenção',
    readTime: '5 min de leitura',
    problemSummary: 'O choque de cloro em água rica em metais pesados e ferro faz o líquido escurecer instantaneamente, manchando o vinil, a fibra e assustando quem acabou de encher a piscina.',
    highlights: [
      'A água de poço artesiano na faixa litorânea costuma conter alto teor de ferro e manganês dissolvidos.',
      'Adicionar cloro tradicional oxida o ferro solúvel em óxido férrico insolúvel (cor marrom/ferrugem ou verde-escuro).',
      'Uso de sequestrante de metais e floculante correto é o único caminho para decantar o mineral sem manchar a piscina.',
      'A troca periódica da areia do filtro e a vedação do motor garantem água cristalina e sem desperdício de energia.',
    ],
    content: [
      {
        sectionTitle: 'Por que a água da piscina ficou marrom ao colocar cloro?',
        paragraphs: [
          'Em muitas localidades de Cabo Frio, especialmente no 2º Distrito (Tamoios e Unamar), a rede pública não chega a todas as ruas, exigindo poços artesianos. Quando a água do poço entra em contato com o ar ou recebe cloro, os íons de ferro (que estavam invisíveis na forma ferrosa) oxidam para a forma férrica. O resultado é assustador: a água límpida vira um chá marrom ou verde escuro em menos de 1 hora.',
          'Se o proprietário insistir em jogar mais cloro ou esfregar sem o produto correto, o óxido de ferro adere às paredes de fibra ou vinil, gerando manchas amareladas que não saem facilmente.',
        ],
      },
      {
        sectionTitle: 'A metodologia de tratamento profissional do Grupo Vitti',
        paragraphs: [
          'Aplicamos sequestrantes de metais quelantes antes da desinfecção. Eles encapsulam os íons metálicos, impedindo que oxidem e manchem o revestimento. Em seguida, procedemos com decantação controlada via sulfato de alumínio ou polímeros líquidos, aspirando o resíduo direto para o esgoto ("dreno").',
          'Também oferecemos contratos regulares de piscineiro profissional: monitoramento semanal de pH, alcalinidade total e cloro livre, aspiração de fundo, escovação de bordas e checagem preventiva de ruídos nos rolamentos da bomba.',
        ],
      },
      {
        sectionTitle: 'Cuidados com a casa de máquinas e bombas',
        paragraphs: [
          'A umidade subterrânea da casa de máquinas no litoral corrói tampas de ferro fundido e queima os capacitores dos motores. Nossa equipe técnica executa ventilação adequada, troca de selos mecânicos para evitar gotejamentos e substituição da areia do filtro a cada 2 anos.',
        ],
      },
    ],
    practicalTips: [
      'Se sua água é de poço, nunca faça cloração de choque sem antes aplicar um inibidor/sequestrante de metais específicos para piscinas.',
      'Evite aspirar água ferrosa decantada na posição "Filtrar", pois a sujeira fina volta imediatamente pelos bicos de retorno.',
      'Contrate manutenção periódica profissional para ter a piscina sempre azul sem gastar fortunas em produtos químicos por tentativa e erro.',
    ],
    whatsappPrompt: 'Olá! Li o guia sobre tratamento de piscinas com água de poço e gostaria de um orçamento de manutenção com o Grupo Vitti.',
  },
  {
    id: '14',
    slug: 'eletrica-costeira-disjuntor-caindo-verao-casa-praia',
    title: 'Disjuntor Desarmando no Verão: Como Redimensionar a Elétrica da Casa de Praia e Evitar Riscos',
    subtitle: 'Dezembro a março: 3 ares-condicionados ligados, chuveiro elétrico, geladeiras e bomba da piscina. O que fazer quando o padrão de energia não aguenta e cheira a queimado.',
    category: 'Serviços & Manutenção',
    readTime: '5 min de leitura',
    problemSummary: 'Casas de praia antigas na Região dos Lagos foram projetadas com padrão monofásico de 40A. No calor intenso, os fios esquentam, a conta de luz explode e o disjuntor cai a cada 20 minutos.',
    highlights: [
      'O disjuntor desarma pelo efeito térmico bimetálico: quando a corrente ultrapassa o limite seguro do condutor.',
      'Trocar o disjuntor por um de amperagem maior sem trocar os fios é a principal causa de incêndios em casas de praia.',
      'A maresia corrói os barramentos de cobre dentro dos quadros, aumentando a resistência elétrica e o consumo de energia.',
      'A modernização para bifásico ou trifásico com disjuntores DIN e DPS protege aparelhos caros contra oscilações da Enel.',
    ],
    content: [
      {
        sectionTitle: 'O perigo invisível do "disjuntor que cai direto"',
        paragraphs: [
          'Quando você reúne a família no verão e liga os ares-condicionados, a churrasqueira elétrica e alguém entra no chuveiro, a casa fica às escuras. O instinto leigo é chamar um curioso para "colocar um disjuntor mais forte de 50A ou 60A". Esse é um erro gravíssimo.',
          'O disjuntor existe justamente para proteger o fio de derreter. Se você instala um disjuntor maior em fios finos de 2,5mm² ou 4mm², o disjuntor não desarma, mas a fiação esquenta por dentro das paredes, resseca a capa isolante e inicia focos de incêndio.',
        ],
      },
      {
        sectionTitle: 'Revisão técnica de quadros e balanceamento de fases',
        paragraphs: [
          'O Grupo Vitti realiza o diagnóstico termográfico e dimensionamento elétrico conforme a NBR 5410. Calculamos a demanda real de carga simultânea, separamos circuitos dedicados para chuveiros e ar-condicionado, e distribuímos o consumo equilibradamente entre as fases.',
          'Instalamos também o Dispositivo Protetor contra Surtos (DPS) e o Interruptor Diferencial Residual (DR), obrigatório por lei para evitar que crianças ou adultos tomem choques fatais em áreas molhadas como piscina e banheiros.',
        ],
      },
      {
        sectionTitle: 'Proteção dos contatos elétricos contra o salitre',
        paragraphs: [
          'Em cidades litorâneas, o cobre e os parafusos do quadro elétrico sofrem com o zinabre (oxidação esverdeada). Usamos terminais tubulares banhados, pasta anti-óxido e quadros herméticos com grau de proteção IP65 para impedir a entrada de vapor salino.',
        ],
      },
    ],
    practicalTips: [
      'Se o disjuntor desarma frequentemente, nunca tente travá-lo nem aumente a amperagem sem que um eletricista qualificado meça a bitola dos condutores.',
      'Solicite à concessionária (Enel) o aumento de carga se você instalou novos condicionadores de ar split na residência.',
      'Faça o reaperto dos parafusos do quadro geral a cada 12 meses: a vibração e os ciclos de calor afrouxam os bornes e aumentam o consumo de energia.',
    ],
    whatsappPrompt: 'Olá! Li o guia de elétrica costeira e gostaria de agendar uma revisão de quadro / instalações com o Grupo Vitti.',
  },
  {
    id: '15',
    slug: 'caca-vazamentos-cisterna-infiltracoes-litoral',
    title: 'Cisterna Esvaziando Sozinha? Como Identificar Vazamentos Ocultos na Região dos Lagos',
    subtitle: 'Em locais onde a água depende de caminhão-pipa ou abastecimento intermitente, perder milhares de litros por fissuras na cisterna ou canos furados é prejuízo dobrado.',
    category: 'Serviços & Manutenção',
    readTime: '5 min de leitura',
    problemSummary: 'Rachaduras causadas por movimentação do solo arenoso e lençol freático raso na Região dos Lagos quebram a impermeabilização de cisternas enterradas sem deixar poça visível na superfície.',
    highlights: [
      'A perda de 1 gota por segundo em uma válvula ou conexão subterrânea desperdiça mais de 1.300 litros de água por mês.',
      'Cisternas enterradas em áreas de areia sofrem pressão hidrostática externa quando a maré sobe ou chove muito.',
      'Geofone eletrônico e testes de estanqueidade manométrica localizam o ponto sem quebra-quebra destrutivo.',
      'Impermeabilização com argamassas poliméricas flexíveis e manta asfáltica garante retenção de água sem contaminação do lençol.',
    ],
    content: [
      {
        sectionTitle: 'O drama da água que some na casa de praia',
        paragraphs: [
          'Você paga R$ 250 a R$ 400 em um caminhão-pipa para abastecer sua cisterna de 10.000 litros. Poucos dias depois, mesmo com a casa vazia, você nota que o nível da água baixou pela metade. O que aconteceu? Em terrenos arenosos de Cabo Frio, Búzios e Tamoios, a água que vaza no subsolo é absorvida instantaneamente pelo solo, sem nunca aflorar na grama ou no quintal.',
          'Além do prejuízo financeiro com água comprada, o vazamento pode criar bolsões de ar sob o piso e recalcar fundações de muros e garagens.',
        ],
      },
      {
        sectionTitle: 'Caça-vazamentos eletrônico não destrutivo',
        paragraphs: [
          'O Grupo Vitti conta com equipamentos de ponta para caça-vazamentos: geofones eletrônicos ultrassensíveis que escutam o ruído característico da água sob pressão vazando em tubulações enterradas, além de câmeras endoscópicas para inspeção de esgotos e ralos.',
          'Assim que o ponto é identificado com precisão cirúrgica de centímetros, abrimos apenas uma única pedra de piso para efetuar a solda ou troca da tubulação danificada, minimizando poeira e custos de reposição de piso.',
        ],
      },
      {
        sectionTitle: 'Restauração e impermeabilização de cisternas',
        paragraphs: [
          'Se a perda estiver na própria estrutura de alvenaria ou concreto da cisterna, executamos o esvaziamento, lavagem técnica com hipoclorito, tratamento de trincas com graute epóxi e aplicação de impermeabilizante bi-componente flexível, próprio para água potável.',
        ],
      },
    ],
    practicalTips: [
      'Faça o teste da boia: encha a caixa d’água ou cisterna até o nível máximo, amarre a boia para cima para fechar a entrada, marque o nível com fita adesiva e verifique se baixou após 12 horas sem uso.',
      'Se a bomba pressurizadora dá pequenos "estalos" ou liga sozinha por 2 segundos a cada 10 minutos, você certamente tem um vazamento ou válvula de descarga descalibrada.',
      'Chame profissionais com equipamento adequado antes de sair quebrando o quintal aleatoriamente à procura do cano furado.',
    ],
    whatsappPrompt: 'Olá! Li o guia sobre caça-vazamentos e cisternas. Preciso de um diagnóstico hidráulico no meu imóvel com o Grupo Vitti.',
  },
];
