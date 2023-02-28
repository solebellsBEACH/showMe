import { hobbiesAssets } from '../assets/hobbies';
import { stackAssets } from '../assets/stacks';
import { ILanguageJSON } from '../interface';
import { homeAssets } from '../assets/home';
import { projectAssets } from '../assets/stacks/projects';

const {
  adonisjs,
  express,
  nestjs,
  nextjs,
  nodejs,
  reactjs,
  reactnative,
  typescript,
  testIcon
} = stackAssets;

const { surf, guitarra, skate } = hobbiesAssets;
const { perfilImage, frontImage, backImage } = homeAssets;
const { afpesp, azo, kolping, ranking, prevent } = projectAssets

export const englishJson: ILanguageJSON = {
  homePage: {
    moreAboutMyCareer: 'More about my career',
    footer: [
      'Thanks for see my profile👨🏽‍💻',
      'Follow my repositories and stories.',
    ],
    header: ['Hi Geek, welcome🚀'],
    bio: {
      header: 'FullStack Developer',
      primaryText:
        'I have been programming since 2019, when I started my logic classes at Ifes. I am a very communicative person and I find it easy to work in contact with the customer, raising requirements, without difficulties to work in a team. I currently work as a Full Stack developer, focusing on Front-End at AdGrowth Company.',
      secondaryText:
        'During this period I worked on several projects with an extra attention to React Js, TypeScript and NodeJS, I am currently working entirely on a mobile project, working with React Native, which has been my focus in recent months.',
      image_url: perfilImage,
    },
    bios: [
      {
        header: 'Front-end Development',
        primaryText:
          'The professional front-end developer is responsible for putting into practice, through codes, the design of a website or interface. While web design designs the look of a website, front-end development implements that design through code such as HTML, CSS and JavaScript',
        secondaryText:
          'During my period as a front-end developer I worked with projects of different natures, always focusing on ReactJs and frameworks like NextJs',
        image_url: frontImage,
        hasEffect: false,
      },
      {
        header: 'Back-end Development',
        primaryText:
          'As the name suggests, the back-end developer works at the “back” of the application. He is responsible, in general terms, for the implementation of the business rule. In a web application, this developer, when focused, does not touch the visual part of the application. ',
        secondaryText:
          'With back-end development I learned a lot in the first years of the profession, and because I worked in a software factory I worked on several projects, from the most common ones with simple CRUDs to projects with a complex business rule and external integrations',
        image_url: backImage,
        hasEffect: false,
      },
      {
        header: 'Test driven programming',
        primaryText:
          'It consists of a short cycle of repetitions where the developer writes automated test cases that can both validate a requirement and implement a new functionality. Using TDD during software development, the routine adopted by most programmers changes a little. ',
        secondaryText:
          'During my career the need for testing was very constant, as I work on several projects, automated and unit tests help to validate flows such as a form with several fields for example',
        image_url: testIcon,
        hasEffect: false,
      },
    ],
    howIHelpYou: {
      label: 'How can I help you?',
      context: [
        {
          header: 'Quality and High Performance',
          text:
            "I've always worked with current technologies, getting 100% involved with the project and the end result. ",
        },
        {
          header: 'Experience and Knowledge',
          text:
            "Throughout my history, I've worked with different segments and developed the necessary know- how to work on the most diverse projects.",
        },
        {
          header: 'Agility in Development',
          text:
            'I work with agile methodologies that rely on embedded processes and tools and the necessary skills.',
        },
      ],
    },
  },
  stacks: {
    bio: [],
    projects: [
      {
        header: 'AFPESP',
        primaryText: 'in this project I worked on the creation of a mobile application, in which I worked on the flow of services in which I created all the crud for purchasing meals, digital menu, points of sale, in addition to having worked on creating authentication via digital and easy and on notification screen.',
        secondaryText: "",
        image_url: afpesp.logo,
        hasEffect: false,
        tecnologies: ["React Native",
          "Styled Components",
          "Typescript ",
          "Expo CLI",]
      },
      {
        header: 'Ranking dos Políticos',
        primaryText: 'This was a very interesting project, in which it was a ranking of politicians who were evaluated based on their votes for bills.',
        secondaryText: "In this project I worked on the creation of the ranking itself, in addition to the blog with news about the candidates.",
        image_url: ranking.logo,
        hasEffect: false,
        tecnologies: ["NextJs",
          "Redux Saga",
          "Styled Components ",]
      },

      {
        header: 'Prevent Senior',
        primaryText: 'On this front, I worked on creating some features of the admin portal that the patient had his data and vital information, such as heartbeats, blood pressure, among others...',
        secondaryText: "It communicated with an API that was powered by a smartwatch that stayed as a patient, and if there was something dangerous to the patient's health, it would alert those responsible.",
        image_url: prevent.logo,
        hasEffect: false,
      },
      {
        header: 'Kolping',
        primaryText: 'In this project I worked on the back end of a solution that had many different payment integrations.',
        secondaryText: "The main one was with IuguJS, in addition, I was responsible for creating the user flow and for configuring all permissions for each one, implementing a solution based on enums linked to a table of roles.",
        image_url: kolping.logo,
        hasEffect: false,
        tecnologies: ["NextJs",
          "Typescript ",
          "SASS",
          "Context API",]
      },
      {
        header: 'AZO APP',
        primaryText: 'In this project I worked on creating a page where the admin user could see a list of professionals and their information, a calendar widget where the professional could see their schedules, a graph that filtered consultations by period and type from that professional and fixed a bug in Google authentication.',
        secondaryText: "",
        image_url: azo.logo,
        hasEffect: false,
        tecnologies: ["ExpressJs ",
          "Typescript",
          "PostgreSQL",
          "TypeORM",]
      },
    ],
    seeMore: 'See more',
    seeLess: 'See less',
    header: 'These are some of the technologies I came into contact with',
    stacksTitle: "Technologies I've Used in My Career",
    stackContextText:
      "Throughout my career I've always had an open mind for new languages and experiences, I understand that closing yourself off from the market and sticking to a single front is a big mistake when it comes to technology.",
    stacksDescription: [
      {
        image: reactjs,
        title: 'React Js',
        description:
          'React is an open source JavaScript front-end library focused on creating user interfaces on web pages.',
        myXP:
          "I've worked with this library throughout my developer career,working on several projects of different scopes.",
      },
      {
        image: reactnative,
        title: 'React Native',
        description:
          'React Native is a Javascript library created by Facebook. It is used to develop apps for Android and iOS systems natively.',
        myXP:
          "I've worked with this library throughout my developer career,working on several projects of different scopes.",
      },
      {
        image: nextjs,
        title: 'NextJS',
        description:
          'Next.js is an open source React front-end development web framework created by Vercel that enables functionality such as server-side rendering and static website generation for React-based web applications.',
        myXP:
          'An excellent technology to use in projects with a large number of renders.',
      },
      {
        image: nodejs,
        title: 'NodeJS',
        description:
          "Node.js is open-source, cross-platform software based on Google's V8 interpreter that allows you to run JavaScript code outside of a web browser.The main feature of Node.js is its asynchronous and event- driven architecture.",
        myXP:
          'One of the main technologies used for creating Rest APIs, in which I worked mainly with the help of ExpressJS',
      },
      {
        image: typescript,
        title: 'TypeScript',
        description:
          'TypeScript is an open source programming language developed by Microsoft. It is a strict syntactic superset of JavaScript and adds optional static typing to the language.',
        myXP:
          'Super important technology when used to implement object-oriented principles in your Javascript code.',
      },
      {
        image: adonisjs,
        title: 'Adonis JS',
        description:
          'AdonisJS is a framerwork Node. js that came up to bring facilities to the developer including project structuring standards.',
        myXP:
          'Because of this, Adonis is known to be an opinionated framework, that is, it follows a development pattern and "forces" the developer to follow it.',
      },
      {
        image: express,
        title: 'ExpressJS',
        description:
          'Express.js is a framework for Node.js that provides minimal resources for building web servers. It was released as free and open source software under the MIT License.',
        myXP: "It's one of the most popular server frameworks on Node.js",
      },
      {
        image: nestjs,
        title: 'NestJS',
        description:
          'NestJS is an open source Node.js framework intended for server-side application development. It was created by Kamil Mysliwiec and released in 2017. Under the hood, by default, NestJS makes use of the Express.js framework and is also compatible with Fastify.',
        myXP: 'Its architecture is heavily inspired by Angular.',
      },
    ],
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
