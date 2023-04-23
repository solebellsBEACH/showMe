import { ILanguageJSON } from '../interface';
import { HowICanHelpYouIconsEnum } from '../interface/enums';

export const portugueseJson: ILanguageJSON = {
  homePage: {
    moreAboutMyCareer: 'Mais sobre minha carreira',
    footer: [
      'Obrigado por ver meu perfil.',
      'Acompanhe meus repositórios e histórias',
    ],
    header: ['Olá Geek, seja bem vindo🚀'],
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
    seeMore: 'Ver mais',
    seeLess: 'Ver menos',
    stackContextText:
      'Ao longo de minha carreira sempre tive uma mente aberta para novas linguagens e experiencias, entendo que se fechar para o mercado e se manter em uma frente de atuação somente é um grande erro quando se trata de tecnologia.',
    header: 'Essas são algumas das tecnologias que tive contato👨🏽‍💻',
    stacksTitle: 'Tecnologias que usei em minha carreira',
  },
  hobbies: {
    header: 'Abaixo está tudo que faço quando não estou programando🏄',
  },
  textbox: ['Clique para abrir imagem'],
  drawer: ['Navegue pelas páginas', 'Escolha o idioma'],
};
