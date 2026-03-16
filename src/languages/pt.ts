import { hobbiesAssets } from '../assets/hobbies';
import { homeAssets } from '../assets/home';
import { stackAssets } from '../assets/stacks';
import { projectAssets } from '../assets/stacks/projects';
import { ILanguageJSON } from '../interface';
import { HowICanHelpYouIconsEnum } from '../interface/enums';

const { surf, guitarra, skate } = hobbiesAssets;
const { perfilImage, frontImage, backImage } = homeAssets;
const { reactjs, nextjs, nodejs, nestjs, typescript, testIcon } = stackAssets;
const { afpesp, azo, kolping, ranking, prevent } = projectAssets;

export const portugueseJson: ILanguageJSON = {
  homePage: {
    moreAboutMyCareer: 'Ver stack e projetos',
    footer: [
      'Vamos construir produtos confiáveis.',
      'Acompanhe meu trabalho no GitHub, LinkedIn e Instagram.',
    ],
    header: ['Lucas Xavier'],
    hero: {
      eyebrow: 'Senior Full Stack Engineer na Questrade Financial Group',
      name: 'Lucas Xavier',
      role:
        'React.js, Web3.js, TypeScript, Node.js, Micro Frontends, acessibilidade e entrega remote-first.',
      description:
        'Engenheiro Full Stack com mais de 5 anos de experiência construindo aplicações web escaláveis para times de produto. Hoje trabalho remotamente de Vila Velha, ajudando a evoluir a plataforma MyQuestrade com arquitetura modular, mais confiabilidade e ganhos reais de performance.',
      badges: [
        'React.js',
        'Angular 17+',
        'TypeScript',
        'Node.js',
        'NestJS',
        'Next.js',
        'Micro Frontends',
        'Web3.js',
        'Accessibility / WCAG',
        'Remote-First',
      ],
      spotlight: [
        { label: 'Experiência', value: '5+ anos construindo produtos web' },
        { label: 'Empresa atual', value: 'Questrade Financial Group' },
        { label: 'Impacto', value: '15% a menos no carregamento crítico' },
        { label: 'Foco', value: 'FinTech, SaaS e times remotos' },
      ],
      quickFacts: [
        { label: 'Localização', value: 'Vila Velha, ES, Brasil' },
        { label: 'Idiomas', value: 'Inglês fluente / Português nativo' },
        { label: 'Nascimento', value: '14 de dezembro de 2002' },
        { label: 'Valor hora', value: 'USD 23/h / BRL 100/h' },
        { label: 'Pretensão CLT', value: 'R$ 14.000/mês' },
        { label: 'Pretensão PJ', value: 'R$ 18.000/mês' },
      ],
      ctaPrimary: 'Explorar minha stack',
      ctaSecondary: 'Ver LinkedIn',
    },
    bio: {
      header: 'Sobre mim',
      eyebrow: 'Engenheiro remote-first',
      primaryText:
        'Sou apaixonado por clean architecture, colaboração entre times globais e construção de produtos que escalam sem perder usabilidade. Meu dia a dia fica na interseção entre arquitetura front-end, integrações back-end e experiência de desenvolvimento.',
      secondaryText:
        'Estou aberto a oportunidades remote-first em FinTech, SaaS e ambientes de produto escaláveis onde acessibilidade, performance e qualidade de engenharia sejam tratadas como base do produto.',
      image_url: perfilImage,
      hasEffect: false,
      tags: ['FinTech', 'SaaS', 'Clean Architecture', 'CI/CD', 'Performance'],
    },
    bios: [
      {
        header: 'Sistemas front-end',
        eyebrow: 'React.js, Angular 17+, Next.js e Micro Frontends',
        primaryText:
          'Projeto interfaces modulares com limites claros de componentes, decisões orientadas à acessibilidade e budgets de performance que se sustentam em produção.',
        secondaryText:
          'Minha experiência cobre React, Angular, Redux, Sass, Next.js e arquiteturas de micro frontends para produtos que precisam de escala, experimentação e velocidade de entrega.',
        image_url: frontImage,
        hasEffect: false,
        tags: ['React.js', 'Angular', 'Micro Frontends', 'WCAG', 'Redux'],
      },
      {
        header: 'Back-end e integrações',
        eyebrow: 'Node.js, NestJS, Spring Boot e camadas de dados',
        primaryText:
          'Construo APIs e integrações com contratos claros, código de fácil manutenção e preocupação constante com observabilidade.',
        secondaryText:
          'Já trabalhei com Node.js, NestJS, Spring Boot, SQL, MongoDB, Docker e integrações com terceiros em projetos que vão de plataformas mais simples a fluxos complexos de negócio.',
        image_url: backImage,
        hasEffect: false,
        tags: ['Node.js', 'NestJS', 'Spring Boot', 'Docker', 'SQL'],
      },
      {
        header: 'Qualidade e entrega',
        eyebrow: 'Testes, analytics e releases confiáveis',
        primaryText:
          'Uso CI/CD, monitoramento e testes automatizados para preservar velocidade sem abrir mão da confiança em cada entrega.',
        secondaryText:
          'Cypress, cobertura E2E, Datadog, Amplitude e colaboração cross-functional me ajudam a transformar trabalho de engenharia em impacto mensurável de produto.',
        image_url: testIcon,
        hasEffect: false,
        tags: ['Cypress', 'Datadog', 'Amplitude', 'CI/CD', 'E2E'],
      },
    ],
    howIHelpYou: {
      label: 'Onde gero mais valor',
      context: [
        {
          header: 'Performance e qualidade de produto',
          text:
            'Trabalho com tecnologias atuais, padrões de acessibilidade e budgets de performance para manter a experiência consistente conforme o produto cresce.',
          icon: HowICanHelpYouIconsEnum.highPerformace,
        },
        {
          header: 'Arquitetura escalável',
          text:
            'Minha base em front-end e back-end me ajuda a desenhar soluções modulares, contratos claros e sistemas que evoluem bem em vez de virarem correções pontuais.',
          icon: HowICanHelpYouIconsEnum.experience,
        },
        {
          header: 'Entrega remota confiável',
          text:
            'Estou acostumado com times distribuídos, rituais ágeis e colaboração assíncrona que mantém a entrega fluindo sem sacrificar qualidade de código.',
          icon: HowICanHelpYouIconsEnum.speed,
        },
      ],
    },
  },
  stacks: {
    bio: [],
    projects: [
      {
        header: 'Questrade Financial Group',
        role: 'Senior Full Stack Engineer',
        period: 'Atual',
        primaryText:
          'Atuando na evolução do MyQuestrade em um contexto FinTech de grande escala, com foco em arquitetura front-end modular, confiabilidade da plataforma e entrega contínua.',
        secondaryText:
          'Trabalhei em performance, acessibilidade e fluxos de integração, ajudando a reduzir em 15% o tempo de carregamento de jornadas críticas em um modelo remoto entre Brasil e Canadá.',
        result: '15% mais velocidade em jornadas críticas',
        image_url: perfilImage,
        hasEffect: false,
        tecnologies: [
          'React.js',
          'Angular 17+',
          'TypeScript',
          'Node.js',
          'Micro Frontends',
          'Datadog',
          'Amplitude',
          'CI/CD',
          'Accessibility',
        ],
      },
      {
        header: 'AFPESP',
        role: 'Full Stack / Mobile Engineer',
        period: 'Plataforma mobile de serviços',
        primaryText:
          'Construí fluxos de serviço de uma aplicação mobile, incluindo CRUD de compra de refeições, cardápio digital e jornadas de ponto de venda.',
        secondaryText:
          'Também implementei autenticação por digital, notificações e features conectadas à operação do dia a dia do produto.',
        result: 'Fluxo mobile do pedido à autenticação',
        image_url: afpesp.logo,
        hasEffect: false,
        tecnologies: [
          'React Native',
          'Styled Components',
          'TypeScript',
          'Expo CLI',
        ],
      },
      {
        header: 'Ranking dos Políticos',
        role: 'Front-end Engineer',
        period: 'Produto cívico',
        primaryText:
          'Atuei na experiência do ranking dos políticos e na camada de conteúdo que publicava notícias e atualizações sobre candidatos.',
        secondaryText:
          'O projeto exigia uma experiência clara para a lógica do ranking, o conteúdo editorial e a navegação pública.',
        result: 'Experiência de ranking e conteúdo editorial',
        image_url: ranking.logo,
        hasEffect: false,
        tecnologies: ['Next.js', 'Redux Saga', 'Styled Components'],
      },
      {
        header: 'Prevent Senior',
        role: 'Front-end Engineer',
        period: 'Portal de monitoramento em saúde',
        primaryText:
          'Entreguei funcionalidades do portal admin onde pacientes e times acessavam dados vitais como batimentos e pressão arterial.',
        secondaryText:
          'O portal consumia APIs alimentadas por smartwatch e sinalizava riscos de saúde para acelerar a ação dos responsáveis.',
        result: 'Features para monitoramento de pacientes',
        image_url: prevent.logo,
        hasEffect: false,
        tecnologies: ['Next.js', 'TypeScript', 'Sass', 'Context API'],
      },
      {
        header: 'Kolping',
        role: 'Back-end Engineer',
        period: 'Pagamentos e permissões',
        primaryText:
          'Atuei no back-end de uma solução com múltiplas integrações de pagamento, incluindo IuguJS.',
        secondaryText:
          'Também implementei fluxos de usuários e um modelo de permissões baseado em enums ligados a uma tabela de roles.',
        result: 'Camada multi-pagamento com controle de acesso',
        image_url: kolping.logo,
        hasEffect: false,
        tecnologies: ['ExpressJS', 'TypeScript', 'PostgreSQL', 'TypeORM'],
      },
      {
        header: 'AZO APP',
        role: 'Front-end Engineer',
        period: 'Operação em saúde',
        primaryText:
          'Criei features administrativas como lista de profissionais, widget de calendário e visualizações filtradas por período e tipo de consulta.',
        secondaryText:
          'Também corrigi um problema na autenticação com Google e melhorei o fluxo para profissionais e administradores.',
        result: 'Experiência de dashboard operacional',
        image_url: azo.logo,
        hasEffect: false,
        tecnologies: [
          'React.js',
          'Bootstrap',
          'Styled Components',
          'Axios',
          'Redux Toolkit',
        ],
      },
    ],
    stackContextText:
      'Minha stack atual combina arquitetura front-end, serviços back-end, acessibilidade, observabilidade e tooling de entrega. Prefiro construir produtos olhando o sistema inteiro: experiência do usuário, contratos de API, métricas e evolução segura em produção.',
    overviewCards: [
      { label: 'Cargo', value: 'Senior Full Stack Engineer' },
      { label: 'Modelo', value: 'Remote-first' },
      { label: 'Especialidades', value: 'Micro Frontends / Acessibilidade' },
      { label: 'Tooling', value: 'Datadog, Amplitude e CI/CD' },
    ],
    experienceTitle: 'Experiência prática ao longo da stack',
    projectsTitle: 'Projetos e produtos em que atuei',
    stackExperience: [
      {
        title: 'React',
        time: '5a 9m',
        context:
          'Interfaces componentizadas, tuning de performance e fluxos de produto escaláveis.',
      },
      {
        title: 'Angular',
        time: '5a 9m',
        context:
          'Interfaces enterprise com arquitetura modular e componentes compartilhados.',
      },
      {
        title: 'Node.js',
        time: '5a 9m',
        context: 'APIs, integrações e desenho de serviços back-end.',
      },
      {
        title: 'TypeScript',
        time: '5a 9m',
        context: 'Codebases front-end e back-end com contratos mais seguros.',
      },
      {
        title: 'Spring Boot',
        time: '5a 9m',
        context:
          'Suporte a back-end e integrações quando o ecossistema Java era necessário.',
      },
      {
        title: 'Docker',
        time: '5a 9m',
        context: 'Ambientes estáveis e releases mais previsíveis entre times.',
      },
      {
        title: 'MongoDB',
        time: '5a 9m',
        context: 'Persistência não relacional e modelagem pragmática de dados.',
      },
      {
        title: 'SQL',
        time: '5a 9m',
        context: 'Modelagem relacional, queries e suporte a APIs.',
      },
      {
        title: 'Redux',
        time: '5a 9m',
        context:
          'Estado global, side effects e fluxos previsíveis no front-end.',
      },
      {
        title: 'Sass',
        time: '5a 9m',
        context: 'Base de estilos escalável em codebases front-end.',
      },
      {
        title: 'NestJS',
        time: 'Produção',
        context:
          'Serviços Node estruturados com padrões modulares sustentáveis.',
      },
      {
        title: 'Micro Frontends',
        time: 'Produção',
        context:
          'Entrega modular de front-end para times maiores e plataformas em evolução.',
      },
    ],
    seeMore: 'Ver mais',
    seeLess: 'Ver menos',
    header: 'Stack, arquitetura e entrega para produtos escaláveis',
    stacksTitle: 'Tecnologias em destaque',
    stacksDescription: [
      {
        image: reactjs,
        title: 'React.js',
        experienceTime: '5a 9m',
        description:
          'Desenvolvimento de interfaces em produção para produtos escaláveis.',
        myXP:
          'Uso React ao longo da minha carreira para arquitetura front-end, design systems reutilizáveis e tuning de performance em aplicações reais.',
        tags: ['Component systems', 'Performance', 'SPA architecture'],
      },
      {
        title: 'Angular 17+',
        experienceTime: '5a 9m',
        description:
          'Interfaces enterprise com boa estrutura e manutenção sustentável.',
        myXP:
          'Tenho conforto em codebases Angular com componentes compartilhados, modularização e entregas paralelas entre times.',
        tags: ['Enterprise UI', 'Modular architecture', 'Type safety'],
      },
      {
        image: typescript,
        title: 'TypeScript',
        experienceTime: '5a 9m',
        description:
          'A linguagem que mantém codebases front-end e back-end mais confiáveis.',
        myXP:
          'TypeScript é central na forma como desenho contratos, reduzo regressões e mantenho projetos grandes de JavaScript mais fáceis de evoluir.',
        tags: ['Type safety', 'DX', 'Refactors'],
      },
      {
        image: nestjs,
        title: 'Node.js & NestJS',
        experienceTime: '5a 9m',
        description:
          'Serviços back-end, regras de negócio e integrações externas.',
        myXP:
          'Usei essa base para construir APIs REST, orquestrar integrações e estruturar serviços com manutenção clara via NestJS e padrões próximos de Express.',
        tags: ['APIs', 'Integrations', 'Service design'],
      },
      {
        image: nextjs,
        title: 'Next.js & Micro Frontends',
        experienceTime: 'Produção',
        description:
          'Escolhas de arquitetura para superfícies rápidas e modulares.',
        myXP:
          'Usei Next.js e padrões de micro frontends para apoiar SEO, ciclos mais rápidos de entrega e módulos front-end que evoluem com independência.',
        tags: ['SSR', 'Scalable teams', 'Modular UI'],
      },
      {
        title: 'Dados e Persistência',
        experienceTime: '5a 9m',
        description:
          'Trabalho com dados relacionais e não relacionais conforme a necessidade do produto.',
        myXP:
          'Tenho experiência modelando dados e sustentando APIs com SQL, MongoDB e PostgreSQL em ambientes operacionais.',
        tags: ['SQL', 'MongoDB', 'PostgreSQL'],
      },
      {
        image: nodejs,
        title: 'Docker & CI/CD',
        experienceTime: '5a 9m',
        description:
          'Suporte de infraestrutura para ambientes estáveis e releases previsíveis.',
        myXP:
          'Docker e pipelines de CI/CD me ajudam a padronizar ambientes, reduzir atrito entre times e entregar com mais confiança.',
        tags: ['Delivery', 'Pipelines', 'Consistency'],
      },
      {
        title: 'Accessibility / WCAG',
        experienceTime: 'Produção',
        description:
          'Acessibilidade faz parte da qualidade do produto, não é checklist tardio.',
        myXP:
          'Levo preocupações de acessibilidade para o desenho de componentes, semântica, navegação por teclado e experiência geral.',
        tags: ['Inclusive UI', 'Semantics', 'Usability'],
      },
      {
        image: testIcon,
        title: 'Observabilidade e Testes',
        experienceTime: 'Toolkit atual',
        description:
          'Dados e monitoramento para conectar código com resultado real de produto.',
        myXP:
          'Uso testes automatizados, observabilidade e analytics para validar releases e entender impacto além da entrega do código.',
        tags: ['Cypress', 'Datadog', 'Amplitude'],
      },
      {
        title: 'Web3.js',
        experienceTime: 'Hands-on',
        description:
          'Exploração de interfaces e integrações orientadas a blockchain.',
        myXP:
          'Web3.js faz parte do meu toolkit para explorar produtos em que fluxos descentralizados ou experiências conectadas a carteira entram no roadmap.',
        tags: ['Wallets', 'Integrations', 'Experiments'],
      },
    ],
  },
  hobbies: {
    header: 'Abaixo está um pouco do que faço quando não estou programando',
    hobbiesDescription: [
      {
        image: surf,
        subject: 'Isso não é um esporte, é um estilo de vida.',
        title: 'Surf',
        description:
          'O surf entrou na minha vida quando saí do interior e vim para o litoral por influência do meu pai, que surfa desde 1989. Comecei para curtir um dia de praia e acabei ficando viciado.',
        myXP:
          'A origem do surfe é disputada entre os povos peruanos e polinésios. A prática de deslizar sobre as ondas já era conhecida pelos povos polinésios, que povoaram grande parte das ilhas do Oceano Pacífico e do litoral pacífico das Américas.',
      },
      {
        image: skate,
        subject: 'O melhor meio de transporte já inventado.',
        title: 'Skate',
        description:
          'Comecei a andar de skate aos 12 anos, influenciado por amigos e pela banda Charlie Brown Jr. O skate apareceu porque eu realmente era muito ruim no futebol.',
        myXP:
          'Não se sabe ao certo de onde surgiu o skate, mas muita gente relaciona sua origem ao surf. No início da década de 1960, surfistas da Califórnia queriam levar para a rua a sensação das manobras feitas na água.',
      },
      {
        image: guitarra,
        subject: 'Ouvir é bom, tocar é melhor ainda.',
        title: 'Guitarra',
        description:
          'Quando tinha 12 anos ganhei um violão simples de nylon e no começo nem me interessei tanto. Isso mudou depois que conheci Rolling Stones e Guns N Roses. A partir daí comecei a estudar horas por dia.',
        myXP:
          'Slash ficou mundialmente conhecido como integrante da formação clássica do Guns N Roses. Yngwie Malmsteen, por sua vez, é um guitarrista virtuoso sueco conhecido pela forte influência de música clássica e pelo metal neoclássico.',
      },
    ],
  },
  sendMeAMessage: {
    title: 'Me envie uma mensagem',
    subject: 'Assunto',
    description: 'Descrição',
    send: 'Enviar',
  },
  textbox: ['Clique para abrir a imagem'],
  drawer: ['Navegue pelas páginas', 'Escolha o idioma'],
};
