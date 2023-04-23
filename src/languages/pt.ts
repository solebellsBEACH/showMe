import { hobbiesAssets } from '../assets/hobbies';
import { stackAssets } from '../assets/stacks';
import { homeAssets } from '../assets/home';
import { projectAssets } from '../assets/stacks/projects';
import { ILanguageJSON } from '../interface';
import { HowICanHelpYouIconsEnum } from '../interface/enums';

const {
  adonisjs,
  express,
  nestjs,
  nextjs,
  nodejs,
  reactjs,
  reactnative,
  typescript,
  testIcon,
} = stackAssets;

const { perfilImage, frontImage, backImage } = homeAssets;

const { surf, guitarra, skate } = hobbiesAssets;
const { afpesp, azo, kolping, ranking, prevent } = projectAssets;

export const portugueseJson: ILanguageJSON = {
  homePage: {
    moreAboutMyCareer: 'Mais sobre minha carreira',
    footer: [
      'Obrigado por ver meu perfil.',
      'Acompanhe meus repositórios e histórias',
    ],
    header: ['Olá Geek, seja bem vindo🚀'],
    bio: {
      header: 'FullStack Developer',
      primaryText:
        'Programo desde 2019, onde iniciei minhas aulas de lógica no Ifes. Sou uma pessoa bem comunicativa e tenho facilidade para trabalhar no contato ao cliente levantando requisitos, sem dificuldades para trabalhar em time. Trabalho atualmente de desenvolvedor Full Stack, com foco em Front-End na Empresa AdGrowth. ',
      secondaryText:
        'Durante esse período atuei em diversos projetos com uma atenção a mais em React Js, TypeScript e NodeJS, atualmente estou integralmente em um projeto mobile, trabalhando com React Native, oque tem sido o meu foco nos últimos meses.',
      image_url: perfilImage,
    },
    bios: [
      {
        header: 'Desenvolvimento Front-end',
        primaryText:
          'O profissional desenvolvedor front-end é o responsável por colocar em prática, através de códigos, o design de um site ou interface. Enquanto o web design projeta o visual de um site, o desenvolvimento front-end implementa esse design através de códigos, como HTML, CSS e JavaScript',
        secondaryText:
          'Durante meu periodo como desenvolvedor front-end trabalhei com projetos de diversas naturezas, sempre com foco em ReactJs e frameworks como NextJs',
        image_url: frontImage,
        hasEffect: false,
      },
      {
        header: 'Desenvolvimento Back-end',
        primaryText:
          'Como o nome sugere, o desenvolvedor back-end trabalha na parte de “trás" da aplicação. Ele é o responsável, em termos gerais, pela implementação da regra de negócio. Em uma aplicação web, este desenvolvedor, quando focado, não toca na parte visual da aplicação. ',
        secondaryText:
          'Com desenvolvimento back-end aprendi muito nos primeiros anos de profissão, e por trabalhar em uma fábrica de software atuei em vários projetos, desde os mais comuns com simples CRUDs a projetos com uma complexa regra de negócio e integrações externas',
        image_url: backImage,
        hasEffect: false,
      },
      {
        header: 'Programação orientada a testes',
        primaryText:
          'Ela consiste em um ciclo curto de repetições onde o desenvolvedor escreve casos de testes automatizados que possam tanto validar um requisito quanto implementar uma nova funcionalidade. Utilizando TDD durante o desenvolvimento de um software a rotina adotada pela maioria dos programadores muda um pouco. ',
        secondaryText:
          'Durante minha carreira a necessidade de testes foi muito constante, por trabalhar em diversos projetos os testes automatizados e unitários ajudam a validar fluxos como um formulário com diversos campos por exemplo.',
        image_url: testIcon,
        hasEffect: false,
      },
    ],
    howIHelpYou: {
      label: 'Como posso te ajudar?',
      context: [
        {
          header: 'Qualidade e Alta Performance',
          text:
            'Sempre trabalhei com tecnologias atuais, se envolvendo 100% com o projeto e com o resultado final. ',
          icon: HowICanHelpYouIconsEnum.highPerformace,
        },
        {
          header: 'Experiência e Conhecimento',
          text:
            'Ao longo da minha história, trabalhei com diversos segmentos e desenvolvi o know-how necessário para atuar nos mais diversificados projetos.',
          icon: HowICanHelpYouIconsEnum.experience,
        },
        {
          header: 'Agilidade no Desenvolvimento',
          text:
            'Trabalho com metodologias ágeis que contam com processos e ferramentas embarcadas e as skills necessárias.',
          icon: HowICanHelpYouIconsEnum.speed,
        },
      ],
    },
  },
  stacks: {
    bio: [],
    projects: [
      {
        header: 'AFPESP',
        primaryText:
          'nesse projeto atuei na criação de uma aplicação mobile, nela atuei no fluxo de serviços na qual criei todo crud de compra de refeições, cardápio digital, pontos de venda, além de ter atuado na criação da autenticação via digital e fáceis e na tela de notificações.',
        secondaryText: '',
        image_url: afpesp.logo,
        hasEffect: false,
        tecnologies: [
          'React Native',
          'Styled Components',
          'Typescript ',
          'Expo CLI',
        ],
      },
      {
        header: 'Ranking dos políticos',
        primaryText:
          'Esse foi um projeto muito interessante, na qual se tratava de um ranking de políticos que eram avaliados baseado em seus votos de projetos de lei.',
        secondaryText:
          'Nesse projeto atuei na criação do próprio ranking, além do blog de notícias sobre os candidatos.',
        image_url: ranking.logo,
        hasEffect: false,
        tecnologies: ['NextJs', 'Redux Saga', 'Styled Components '],
      },

      {
        header: 'Prevent Sênior',
        primaryText:
          'Nessa frente, atuei na criação de algumas features do portal admin que o paciente tinha seus dados e informações vitais, como batimentos, pressão arterial, entre outros..',
        secondaryText:
          'Ele comunicava com uma API que era alimentada por um smartwatch que ficava como paciente, e caso tivesse algo de perigoso a saúde do mesmo, alertava seus responsáveis.',
        image_url: prevent.logo,
        hasEffect: false,
        tecnologies: ['NextJs', 'Typescript ', 'SASS', 'Context API'],
      },
      {
        header: 'Kolping',
        primaryText:
          'Nesse projeto atuei no back end de uma solução que contava com muitas integrações de pagamento diferentes.',
        secondaryText:
          'A principal delas era com o IuguJS, além disso, fui o responsável por criar o fluxo de usuários e por configurar todas permissões de cada um, implementando uma solução baseada em enums atrelados a uma tabela de roles.',
        image_url: kolping.logo,
        hasEffect: false,
        tecnologies: ['ExpressJs ', 'Typescript', 'PostgreSQL', 'TypeORM'],
      },
      {
        header: 'AZO APP',
        primaryText:
          'Nesse projeto atuei na criação de uma página na qual o usuário admin podia ver uma lista de profissionais e suas informações, um widget de calendário em que o profissional poderia ver seus horários, um gráfico que filtrava por período e por tipo as consultas daquele profissional e corrigi um bug na autenticação pelo Google.',
        secondaryText: '',
        image_url: azo.logo,
        hasEffect: false,
        tecnologies: [
          'React Js',
          'Bootstrap ',
          'Styled Components',
          'Axios ',
          'Redux toolkit',
        ],
      },
    ],
    seeMore: 'Ver mais',
    seeLess: 'Ver menos',
    stackContextText:
      'Ao longo de minha carreira sempre tive uma mente aberta para novas linguagens e experiencias, entendo que se fechar para o mercado e se manter em uma frente de atuação somente é um grande erro quando se trata de tecnologia.',
    header: 'Essas são algumas das tecnologias que tive contato👨🏽‍💻',
    stacksTitle: 'Tecnologias que usei em minha carreira',

    stacksDescription: [
      {
        image: reactjs,
        title: 'React Js',
        description:
          'O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.',
        myXP:
          'Trabalhei com esta biblioteca ao longo de toda minha carreira de desenvolvedor,trabalhando em vários projetos de escopos diferentes.',
      },
      {
        image: reactnative,
        title: 'React Native',
        description:
          'React Native é uma biblioteca Javascript criada pelo Facebook. É usada para desenvolver aplicativos para os sistemas Android e iOS de forma nativa.',
        myXP:
          'Trabalhei com esta biblioteca ao longo de toda minha carreira de desenvolvedor,trabalhando em vários projetos de escopos diferentes.',
      },
      {
        image: nextjs,
        title: 'NextJS',
        description:
          'Next.js é uma estrutura da web de desenvolvimento front-end React de código aberto criada por Vercel que permite funcionalidades como renderização do lado do servidor e geração de sites estáticos para aplicativos da web baseados em React.',
        myXP:
          'Uma excelente tecnologia para usar em projetos com grande número de renderizações.',
      },
      {
        image: typescript,
        title: 'TypeScript',
        description:
          'TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft. É um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem.',
        myXP:
          'Tecnologia super importante quando utilizada para implementar os princípios de orientação a objetos em seu código Javascript.',
      },
      {
        image: adonisjs,
        title: 'Adonis JS',
        description:
          'O AdonisJS é um framerwork Node. js que surgiu para trazer facilidades ao desenvolvedor incluindo padrões de estruturação do projeto.',
        myXP:
          'Por causa disso, o Adonis é conhecido por ser um framework opinado, isto é, ele segue um padrão de desenvolvimento e "força" o desenvolvedor a segui-lo.',
      },
      {
        image: express,
        title: 'ExpressJS',
        description:
          'Express.js é um framework para Node.js que fornece recursos mínimos para construção de servidores web. Foi lançado como software livre e de código aberto sob a Licença MIT. ',
        myXP: 'É um dos mais populares frameworks para servidores em Node.js',
      },
      {
        image: nestjs,
        title: 'NestJS',
        description:
          'NestJS é um framework Node.js de código aberto destinado ao desenvolvimento de aplicativos do lado do servidor. Foi criado por Kamil Mysliwiec e lançado em 2017. Sob o capô, por padrão, o NestJS faz uso do framework Express.js, sendo também compatível com o Fastify.',
        myXP: 'Sua arquitetura é fortemente inspirada no Angular.',
      },
      {
        image: nodejs,
        title: 'NodeJS',
        description:
          'Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript.',
        myXP:
          'Uma das principais tecnologias usadas para criação de APIs Rest, na qual trabalhei principalmente com o auxílio do ExpressJS',
      },
    ],
  },
  hobbies: {
    header: 'Abaixo está tudo que faço quando não estou programando🏄',
    hobbiesDescription: [
      {
        image: surf,
        subject: 'Isso não é um esporte, é um estilo de vida.',
        title: 'Surf',
        description:
          'O surf começou na minha vida quando saí do interior e vim para o litoral por influência do meu pai, que surfava desde 1989. Comecei a 2 anos para curtir um dia de praia e acabei me viciando. ',
        myXP:
          'A origem do surfe é disputada entre os povos peruanos e polinésios. A prática de deslizar sobre as ondas há muito tempo já era conhecida pelos povos polinésios, que povoaram grande parte das ilhas do Oceano Pacífico, além do litoral pacífico das Américas. Os primeiros relatos do surfe dizem que este foi introduzido no Havaí pelo rei polinésio Tahíto. Outros relatos dão conta de que, muito antes dos havaianos, antigos povos peruanos já utilizavam uma espécie de canoa confeccionada de junco para deslizar sobre as ondas. O primeiro relato escrito da observação de pessoas a fazerem surfe, foi feito pelo navegador inglês James Cook que gostou do esporte por se tratar de uma forma de relaxamento.',
      },
      {
        image: skate,
        subject: 'O melhor meio de transporte já inventado.',
        title: 'Skate',
        description:
          'Comecei andar de skate aos 12 anos, influenciado por amigos e pela banda Charlie Brown Jr, o skate veio pra mim por conta de ser muito ruim no futebol.',
        myXP:
          'Não se sabe ao certo do quê surgiu o skate, mas muitos falam que vieram do surf; outros de patins quebrados, que com suas partes se montavam um skate em um pedaço de madeira. No início da década de 1960, os surfistas da Califórnia mais ou menos na cidade de Los Angeles queriam fazer das pranchas um divertimento também nas ruas, em uma época de marés baixas e secas na região. Inicialmente, a nova "maneira de surfar" foi chamada de sidewalk surfing. Em 1965, surgiram os primeiros campeonatos, mas o skate só ficou mais reconhecido uma década depois.',
      },
      {
        image: guitarra,
        subject: 'Ouvir é bom, tocar é bem melhor.',
        title: 'Guitarra',
        description:
          'Quando tinha 12 anos ganhei um simples violão de nylon, no qual não me interessei muito. Até o dia que conheci o Rolling Stones, depois disso ao conhecer Guns n Roses, comecei estudar horas e horas diariamente e também ao conhecer  Yngwie Malmsteen, que os estudos duravam o dia todo. ',
        myXP:
          "Saul Hudson, conhecido pelo seu nome artístico Slash, é um guitarrista anglo-americano mundialmente famoso como integrante da formação clássica da banda Guns N' Roses, com quem alcançou sucesso mundial no final da década de 1980 e início dos anos 90. Em sua carreira posterior, Slash integrou algumas outras bandas de diversos estilos, bem sucedidas em sua maioria, e em 2011 iniciou uma carreira solo, em que até agora lançou cinco discos. Yngwie Malmsteen, nome artístico de Lars Johan Yngve Lannerbäck é um virtuoso guitarrista sueco, considerado um dos melhores de seu estilo. Influenciado pela música barroca de Bach e Vivaldi, Malmsteen é conhecido por ser um dos precursores do chamado metal neoclássico, que envolve heavy metal com elementos de música clássica.",
      },
    ],
  },
  sendMeAMessage: {
    title: 'Me envie uma Mensagem',
    subject: 'Assunto',
    description: 'Descrição',
    send: 'Enviar',
  },
  textbox: ['Clique para abrir imagem'],
  drawer: ['Navegue pelas páginas', 'Escolha o idioma'],
};
