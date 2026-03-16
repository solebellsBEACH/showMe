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

export const englishJson: ILanguageJSON = {
  homePage: {
    moreAboutMyCareer: 'See stack and projects',
    footer: [
      "Let's build reliable products.",
      'Follow my work on GitHub, LinkedIn and Instagram.',
    ],
    header: ['Lucas Xavier'],
    hero: {
      eyebrow: 'Senior Full Stack Engineer at Questrade Financial Group',
      name: 'Lucas Xavier',
      role:
        'React.js, Web3.js, TypeScript, Node.js, Micro Frontends, Accessibility and remote-first delivery.',
      description:
        'Full Stack Engineer with over 5 years of experience building scalable web applications for product teams. I currently work remotely from Vila Velha, Brazil, helping evolve the MyQuestrade platform with modular architecture, stronger reliability and measurable performance gains.',
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
        { label: 'Experience', value: '5+ years building web products' },
        { label: 'Current company', value: 'Questrade Financial Group' },
        { label: 'Impact', value: '15% faster critical journeys' },
        { label: 'Focus', value: 'FinTech, SaaS and remote-first teams' },
      ],
      quickFacts: [
        { label: 'Location', value: 'Vila Velha, ES, Brazil' },
        { label: 'Languages', value: 'English fluent / Portuguese native' },
        { label: 'Born', value: 'December 14, 2002' },
        { label: 'Rates', value: 'USD 23/h / BRL 100/h' },
        { label: 'Brazil full-time', value: 'BRL 14,000/month' },
        { label: 'Brazil contractor', value: 'BRL 18,000/month' },
      ],
      ctaPrimary: 'Explore my stack',
      ctaSecondary: 'View LinkedIn',
    },
    bio: {
      header: 'About me',
      eyebrow: 'Remote-first engineer',
      primaryText:
        "I'm passionate about clean architecture, collaboration across global teams and building products that scale without losing usability. My day-to-day sits at the intersection of front-end architecture, back-end integrations and developer experience.",
      secondaryText:
        'I am open to remote-first opportunities in FinTech, SaaS and scalable product environments where accessibility, performance and engineering quality are treated as product fundamentals.',
      image_url: perfilImage,
      hasEffect: false,
      tags: ['FinTech', 'SaaS', 'Clean Architecture', 'CI/CD', 'Performance'],
    },
    bios: [
      {
        header: 'Front-end systems',
        eyebrow: 'React.js, Angular 17+, Next.js and Micro Frontends',
        primaryText:
          'I design modular interfaces with strong component boundaries, accessibility-first decisions and performance budgets that hold up in production.',
        secondaryText:
          'My experience covers React, Angular, Redux, Sass, Next.js and micro frontend architectures for products that need scale, experimentation and fast delivery.',
        image_url: frontImage,
        hasEffect: false,
        tags: ['React.js', 'Angular', 'Micro Frontends', 'WCAG', 'Redux'],
      },
      {
        header: 'Back-end and integrations',
        eyebrow: 'Node.js, NestJS, Spring Boot and data layers',
        primaryText:
          'I build APIs and service integrations with clear contracts, maintainable code and a bias for observability.',
        secondaryText:
          "I've worked with Node.js, NestJS, Spring Boot, SQL, MongoDB, Docker and third-party integrations in projects ranging from CRUD-heavy platforms to complex business flows.",
        image_url: backImage,
        hasEffect: false,
        tags: ['Node.js', 'NestJS', 'Spring Boot', 'Docker', 'SQL'],
      },
      {
        header: 'Quality and delivery',
        eyebrow: 'Testing, analytics and reliable releases',
        primaryText:
          'I use CI/CD, monitoring and automated testing to protect velocity while improving confidence in every release.',
        secondaryText:
          'Cypress, E2E coverage, Datadog, Amplitude and cross-functional collaboration help me turn engineering work into measurable product outcomes.',
        image_url: testIcon,
        hasEffect: false,
        tags: ['Cypress', 'Datadog', 'Amplitude', 'CI/CD', 'E2E'],
      },
    ],
    howIHelpYou: {
      label: 'Where I bring the most value',
      context: [
        {
          header: 'Performance and product quality',
          text:
            'I work with current technologies, accessibility standards and performance budgets to keep the product experience consistent as the codebase grows.',
          icon: HowICanHelpYouIconsEnum.highPerformace,
        },
        {
          header: 'Scalable architecture',
          text:
            'My background across front-end and back-end helps me design modular solutions, clear contracts and systems that evolve cleanly instead of becoming one-off fixes.',
          icon: HowICanHelpYouIconsEnum.experience,
        },
        {
          header: 'Reliable remote delivery',
          text:
            'I am used to distributed teams, agile rituals and asynchronous collaboration that keeps delivery moving without sacrificing code quality.',
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
        period: 'Current',
        primaryText:
          'Improving MyQuestrade in a large-scale FinTech environment with focus on modular front-end architecture, platform reliability and continuous delivery.',
        secondaryText:
          'Worked across performance, accessibility and integration flows, helping reduce critical page load time by 15% while collaborating remotely with teams in Canada and Brazil.',
        result: '15% faster critical journeys',
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
        period: 'Mobile services platform',
        primaryText:
          'Built service flows for a mobile application, including meal purchase CRUD, digital menu and point-of-sale journeys.',
        secondaryText:
          'Also implemented fingerprint authentication, notifications and features connected to day-to-day operations in the product.',
        result: 'Mobile flow from ordering to authentication',
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
        header: 'Ranking dos Politicos',
        role: 'Front-end Engineer',
        period: 'Civic-tech product',
        primaryText:
          'Worked on the politician ranking experience and the content layer that published news and updates about candidates.',
        secondaryText:
          'The project required a clear user experience for ranking logic, editorial content and public-facing navigation.',
        result: 'Ranking and editorial experience',
        image_url: ranking.logo,
        hasEffect: false,
        tecnologies: ['Next.js', 'Redux Saga', 'Styled Components'],
      },
      {
        header: 'Prevent Senior',
        role: 'Front-end Engineer',
        period: 'Health monitoring portal',
        primaryText:
          'Delivered admin portal features where patients and teams could access vital data such as heart rate and blood pressure.',
        secondaryText:
          'The portal consumed smartwatch-fed APIs and highlighted potential health risks so responsible teams could react faster.',
        result: 'Patient monitoring features',
        image_url: prevent.logo,
        hasEffect: false,
        tecnologies: ['Next.js', 'TypeScript', 'Sass', 'Context API'],
      },
      {
        header: 'Kolping',
        role: 'Back-end Engineer',
        period: 'Payments and permissions',
        primaryText:
          'Worked on the back-end of a solution with multiple payment integrations, including IuguJS.',
        secondaryText:
          'Also implemented user flows and a permission model based on enums connected to a roles table.',
        result: 'Multi-payment integration layer',
        image_url: kolping.logo,
        hasEffect: false,
        tecnologies: ['ExpressJS', 'TypeScript', 'PostgreSQL', 'TypeORM'],
      },
      {
        header: 'AZO APP',
        role: 'Front-end Engineer',
        period: 'Healthcare operations',
        primaryText:
          'Built admin features such as professional lists, calendar widgets and data visualizations filtered by period and consultation type.',
        secondaryText:
          'Also fixed a Google authentication issue and improved the workflow for professionals and administrators.',
        result: 'Operational dashboard experience',
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
      'My current stack combines front-end architecture, back-end services, accessibility, observability and delivery tooling. I prefer building products by looking at the full system: user experience, API contracts, metrics and safe evolution in production.',
    overviewCards: [
      { label: 'Role', value: 'Senior Full Stack Engineer' },
      { label: 'Delivery model', value: 'Remote-first' },
      { label: 'Specialties', value: 'Micro Frontends / Accessibility' },
      { label: 'Tooling', value: 'Datadog, Amplitude and CI/CD' },
    ],
    experienceTitle: 'Hands-on experience across the stack',
    projectsTitle: 'Selected projects and product contributions',
    stackExperience: [
      {
        title: 'React',
        time: '5y 9m',
        context:
          'Component-driven UIs, performance tuning and scalable product flows.',
      },
      {
        title: 'Angular',
        time: '5y 9m',
        context:
          'Enterprise interfaces with modular architecture and shared components.',
      },
      {
        title: 'Node.js',
        time: '5y 9m',
        context: 'APIs, integrations and back-end service design.',
      },
      {
        title: 'TypeScript',
        time: '5y 9m',
        context:
          'Type-safe front-end and back-end codebases with cleaner contracts.',
      },
      {
        title: 'Spring Boot',
        time: '5y 9m',
        context:
          'Back-end support and service integrations where Java ecosystems were needed.',
      },
      {
        title: 'Docker',
        time: '5y 9m',
        context:
          'Stable local environments and release consistency across teams.',
      },
      {
        title: 'MongoDB',
        time: '5y 9m',
        context: 'Non-relational persistence and pragmatic data modeling.',
      },
      {
        title: 'SQL',
        time: '5y 9m',
        context: 'Relational modeling, queries and API support.',
      },
      {
        title: 'Redux',
        time: '5y 9m',
        context:
          'Application state, side effects and predictable front-end flows.',
      },
      {
        title: 'Sass',
        time: '5y 9m',
        context: 'Scalable styling foundations in front-end codebases.',
      },
      {
        title: 'NestJS',
        time: 'Production',
        context: 'Structured Node services with maintainable modular patterns.',
      },
      {
        title: 'Micro Frontends',
        time: 'Production',
        context:
          'Modular front-end delivery for larger teams and evolving platforms.',
      },
    ],
    seeMore: 'See more',
    seeLess: 'See less',
    header: 'Stack, architecture and delivery for scalable products',
    stacksTitle: 'Technology spotlights',
    stacksDescription: [
      {
        image: reactjs,
        title: 'React.js',
        experienceTime: '5y 9m',
        description:
          'Production UI development for scalable product experiences.',
        myXP:
          'Used across my career for front-end architecture, reusable design systems and performance tuning in live applications.',
        tags: ['Component systems', 'Performance', 'SPA architecture'],
      },
      {
        title: 'Angular 17+',
        experienceTime: '5y 9m',
        description:
          'Enterprise-grade interfaces with strong structure and maintainability.',
        myXP:
          'Comfortable working in Angular codebases with shared components, modularization and parallel team delivery.',
        tags: ['Enterprise UI', 'Modular architecture', 'Type safety'],
      },
      {
        image: typescript,
        title: 'TypeScript',
        experienceTime: '5y 9m',
        description:
          'The language that keeps front-end and back-end codebases reliable.',
        myXP:
          'TypeScript is central to how I design contracts, reduce regressions and keep large JavaScript projects easy to evolve.',
        tags: ['Type safety', 'DX', 'Refactors'],
      },
      {
        image: nestjs,
        title: 'Node.js & NestJS',
        experienceTime: '5y 9m',
        description:
          'Back-end services, business rules and external integrations.',
        myXP:
          'Used to build REST APIs, orchestrate integrations and structure maintainable services with NestJS and Express-style patterns.',
        tags: ['APIs', 'Integrations', 'Service design'],
      },
      {
        image: nextjs,
        title: 'Next.js & Micro Frontends',
        experienceTime: 'Production',
        description: 'Architecture choices for fast, modular product surfaces.',
        myXP:
          "I've used Next.js and micro frontend patterns to support better SEO, faster delivery cycles and independently evolving front-end modules.",
        tags: ['SSR', 'Scalable teams', 'Modular UI'],
      },
      {
        title: 'Data & Persistence',
        experienceTime: '5y 9m',
        description:
          'Working with relational and non-relational data depending on product needs.',
        myXP:
          'Experience modeling data and supporting APIs with SQL, MongoDB and PostgreSQL in operational product environments.',
        tags: ['SQL', 'MongoDB', 'PostgreSQL'],
      },
      {
        image: nodejs,
        title: 'Docker & CI/CD',
        experienceTime: '5y 9m',
        description:
          'Infrastructure support for stable local environments and predictable releases.',
        myXP:
          'Docker and CI/CD pipelines help me standardize environments, reduce friction between teams and ship with more confidence.',
        tags: ['Delivery', 'Pipelines', 'Consistency'],
      },
      {
        title: 'Accessibility / WCAG',
        experienceTime: 'Production',
        description:
          'Accessibility is part of product quality, not a late checklist.',
        myXP:
          'I bring accessibility concerns into component design, semantics, keyboard flows and overall user experience.',
        tags: ['Inclusive UI', 'Semantics', 'Usability'],
      },
      {
        image: testIcon,
        title: 'Observability & Testing',
        experienceTime: 'Current toolkit',
        description:
          'Data and monitoring to connect code changes with real product outcomes.',
        myXP:
          'I use automated tests, observability and analytics to validate releases and understand impact beyond code completion.',
        tags: ['Cypress', 'Datadog', 'Amplitude'],
      },
      {
        title: 'Web3.js',
        experienceTime: 'Hands-on',
        description:
          'Blockchain-driven interfaces and integration exploration.',
        myXP:
          'Web3.js sits in my toolkit for product exploration when decentralized flows or wallet-connected experiences are part of the roadmap.',
        tags: ['Wallets', 'Integrations', 'Experiments'],
      },
    ],
  },
  hobbies: {
    header: "Below is everything I do when I'm not programming",
    hobbiesDescription: [
      {
        image: surf,
        subject: "This is not a sport, it's a lifestyle.",
        title: 'Surf',
        description:
          'Surfing started in my life when I left the countryside and came to the coast under the influence of my father, who had been surfing since 1989. I started 2 years ago to enjoy a day at the beach and ended up becoming addicted.',
        myXP:
          'The origin of surfing is disputed between the Peruvian and Polynesian peoples. The practice of gliding on the waves has long been known by the Polynesian peoples, who populated most of the islands of the Pacific Ocean, in addition to the Pacific coast of the Americas. The first accounts of surfing say that it was introduced in Hawaii by the Polynesian king Tahito. Written from observing people surfing, it was made by the English navigator James Cook who liked the sport because it was a form of relaxation.',
      },
      {
        image: skate,
        title: 'Skate',
        subject: 'The best form of transportation ever invented.',
        description:
          'I started skateboarding at age 12, influenced by friends and the band Charlie Brown Jr, skateboarding came to me because I was really bad at football.',
        myXP:
          'It is not known for sure what skateboarding came from, but many say that it came from surfing; others of broken skates, which with their parts made a skateboard on a piece of wood. In the early 1960s, California surfers in and around the city of Los Angeles wanted to make surfboards fun on the streets as well, at a time of low and dry tides in the region. Initially, the new way of surfing was called sidewalk surfing. In 1965, the first championships appeared, but skateboarding only became more recognized a decade later.',
      },
      {
        image: guitarra,
        title: 'Electric Guitar',
        subject: 'Listening is good, playing is much better.',
        description:
          "When I was 12 I got a simple nylon guitar, which I wasn't very interested in. Until the day I met the Rolling Stones, and then Guns N' Roses. After that I started studying for hours every day, especially after discovering Yngwie Malmsteen.",
        myXP:
          "Saul Hudson, known by his stage name Slash, is an English-American guitarist who is world famous as a member of the classic lineup of the band Guns N' Roses, with whom he achieved worldwide success in the late 1980s and early 1990s. In his later career, Slash joined other bands of different styles, mostly successful, and in 2011 he started a solo career. Yngwie Malmsteen, stage name of Lars Johan Yngve Lannerback, is a Swedish virtuoso guitarist, considered one of the best of his style.",
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
