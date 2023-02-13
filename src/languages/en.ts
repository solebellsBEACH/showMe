import { hobbiesAssets } from '../assets/hobbies';
import { stackAssets } from '../assets/stacks';
import { ILanguageJSON } from '../interface';

const {
  adonisjs,
  express,
  nestjs,
  nextjs,
  nodejs,
  reactjs,
  reactnative,
  typescript,
} = stackAssets;

const { surf, guitarra, skate } = hobbiesAssets;

export const englishJson: ILanguageJSON = {
  homePage: {
    footer: [
      'Thanks for see my profile👨🏽‍💻',
      'Follow my repositories and stories.',
    ],
    header: ['Hi Geek, welcome🚀'],
    bio: [
      'FullStack Developer',
      'I have been programming since 2019, when I started my logic classes at Ifes. I am a very communicative person and I find it easy to work in contact with the customer, raising requirements, without difficulties to work in a team. I currently work as a Full Stack developer, focusing on Front-End at AdGrowth Company.',
      'During this period I worked on several projects with an extra attention to React Js, TypeScript and NodeJS, I am currently working entirely on a mobile project, working with React Native, which has been my focus in recent months.',
    ],
    howIHelpYou: {
      label: 'Como posso te ajudar?',
      context: [
        {
          header: 'Qualidade e Alta Performance',
          text:
            'Sempre trabalhei com tecnologias atuais, se envolvendo 100% com o projeto e com o resultado final. ',
        },
        {
          header: 'Experiência e Conhecimento',
          text:
            'Ao longo da minha história, trabalhei com diversos segmentos e desenvolvi o know-how necessário para atuar nos mais diversificados projetos.',
        },
        {
          header: 'Agilidade no Desenvolvimento',
          text:
            'Trabalho com metodologias ágeis que contam com processos e ferramentas embarcadas e as skills necessárias.',
        },
      ],
    },
  },
  stacks: {
    header: 'These are some of the technologies I came into contact with',
    stacksDescription:
      [{
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
          'Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web. A principal característica do Node.js é sua arquitetura assíncrona e orientada a eventos.',
        myXP:
          'Uma das principais tecnologias usadas para criação de APIs Rest, na qual trabalhei principalmente com o auxílio do ExpressJS',
      },
      ]

  },
  hobbies: {
    header: "Below is everything I do when I'm not programming🏄",

    hobbiesDescription: [
      {
        image: surf,
        subject: "This is not a sport, it's a lifestyle.",
        title: 'Surf',
        description:
          'Surfing started in my life when I left the countryside and came to the coast under the influence of my father, who had been surfing since 1989. I started 2 years ago to enjoy a day at the beach and ended up becoming addicted.',
        myXP:
          'The origin of surfing is disputed between the Peruvian and Polynesian peoples. The practice of gliding on the waves has long been known by the Polynesian peoples, who populated most of the islands of the Pacific Ocean, in addition to the Pacific coast of the Americas. The first accounts of surfing say that it was introduced in Hawaii by the Polynesian king Tahíto. Written from observing people surfing, it was made by the English navigator James Cook who liked the sport because it was a form of relaxation.',
      },
      {
        image: skate,
        title: 'Skate',
        subject: 'The best form of transportation ever invented.',
        description:
          'I started skateboarding at age 12, influenced by friends and the band Charlie Brown Jr, skateboarding came to me because I was really bad at football.',
        myXP:
          'It is not known for sure what skateboarding came from, but many say that it came from surfing; others of broken skates, which with their parts made a skateboard on a piece of wood. In the early 1960s, California surfers in and around the city of Los Angeles wanted to make surfboards fun on the streets as well, at a time of low and dry tides in the region. Initially, the new "way of surfing" was called sidewalk surfing. In 1965, the first championships appeared, but skateboarding only became more recognized a decade later.',
      },
      {
        image: guitarra,
        title: 'Eletric Guitar',
        subject: 'Listening is good, touching is much better.',
        description:
          'When I was 12 I got a simple nylon guitar, which I wasnt very interested in. Until the day I met the Rolling Stones, after that when I met Guns n Roses, I started studying hours and hours daily and also when I met Yngwie Malmsteen, who studied for the whole day.',
        myXP:
          "Saul Hudson, known by his stage name Slash, is an English-American guitarist who is world famous as a member of the classic lineup of the band Guns N' Roses, with whom he achieved worldwide success in the late 1980s and early 1990s. In his later career, Slash joined some other bands of different styles, mostly successful, and in 2011 he started a solo career, in which he has released five albums so far. Yngwie Malmsteen, stage name of Lars Johan Yngve Lannerbäck is a virtuoso guitarist Swedish, considered one of the best of his style. Influenced by the baroque music of Bach and Vivaldi, Malmsteen is known for being one of the forerunners of the so-called neoclassical metal, which involves heavy metal with elements of classical music.",
      },
    ],
  },
  sendMeAMessage: {
    title: 'Send me a Message',
    subject: 'Subject',
    description: 'Description',
    send: 'Send',
  },
  textbox: ['Click to open image'],
  drawer: ['Browse pages', 'Choose language'],
};
