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

export const portugueseJson: ILanguageJSON = {
  homePage: {
    footer: [
      'Obrigado por ver meu perfil.',
      'Acompanhe meus repositórios e histórias',
    ],
    header: ['Olá Geek, seja bem vindo🚀'],
    bio: [
      'FullStack Developer',
      'Programo desde 2019, onde iniciei minhas aulas de lógica no Ifes. Sou uma pessoa bem comunicativa e tenho facilidade para trabalhar no contato ao cliente levantando requisitos, sem dificuldades para trabalhar em time. Trabalho atualmente de desenvolvedor Full Stack, com foco em Front-End na Empresa AdGrowth. ',
      'Durante esse período atuei em diversos projetos com uma atenção a mais em React Js, TypeScript e NodeJS, atualmente estou integralmente em um projeto mobile, trabalhando com React Native, oque tem sido o meu foco nos últimos meses.',
    ],
    howIHelpYou: ['Como posso te ajudar?']
  },
  stacks: {
    header: 'Essas são algumas das tecnologias que tive contato👨🏽‍💻',
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
    ]
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
