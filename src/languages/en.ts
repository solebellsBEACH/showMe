import { ILanguageJSON } from '../interface';
import { HowICanHelpYouIconsEnum } from '../interface/enums';


export const englishJson: ILanguageJSON = {
  homePage: {
    moreAboutMyCareer: 'More about my career',
    footer: [
      'Thanks for see my profile👨🏽‍💻',
      'Follow my repositories and stories.',
    ],
    header: ['Hi Geek, welcome🚀'],
    howIHelpYou: {
      label: 'How can I help you?',
      context: [
        {
          header: 'Quality and High Performance',
          text:
            "I've always worked with current technologies, getting 100% involved with the project and the end result. ",
          icon: HowICanHelpYouIconsEnum.highPerformace,
        },
        {
          header: 'Experience and Knowledge',
          text:
            "Throughout my history, I've worked with different segments and developed the necessary know- how to work on the most diverse projects.",
          icon: HowICanHelpYouIconsEnum.experience,
        },
        {
          header: 'Agility in Development',
          text:
            'I work with agile methodologies that rely on embedded processes and tools and the necessary skills.',
          icon: HowICanHelpYouIconsEnum.speed,
        },
      ],
    },
  },
  stacks: {
    seeMore: 'See more',
    seeLess: 'See less',
    header: 'These are some of the technologies I came into contact with',
    stacksTitle: "Technologies I've Used in My Career",
    stackContextText:
      "Throughout my career I've always had an open mind for new languages and experiences, I understand that closing yourself off from the market and sticking to a single front is a big mistake when it comes to technology.",
  },
  hobbies: {
    header: "Below is everything I do when I'm not programming🏄"
  },
  textbox: ['Click to open image'],
  drawer: ['Browse pages', 'Choose language'],
};
