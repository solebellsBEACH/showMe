import { ILanguageJSON } from "../interface";
import image from '../assets/perfilImage.jpg'
import { stackAssets } from '../assets/stacks'
const { adonisjs,
    angular,
    express,
    nestjs,
    nextjs,
    nodejs,
    reactjs,
    reactnative,
    typescript, } = stackAssets
export const englishJson: ILanguageJSON = {
    homePage: {
        header: ["Hi Geek", "Welcome🚀"],
        bio: ['Medium Pleno I', 'I have been programming since 2019, when I started my logic classes at Ifes. I am a very communicative person and I find it easy to work in contact with the customer, raising requirements, without difficulties to work in a team. I currently work as a Full Stack developer, focusing on Front-End at AdGrowth Company.', 'During this period I worked on several projects with an extra attention to React Js, TypeScript and NodeJS, I am currently working entirely on a mobile project, working with React Native, which has been my focus in recent months.']
    },
    stacks: {
        stacksDescription: [
            {
                image:reactjs,
                title: 'React Js',
                description: 'React is an open source JavaScript front-end library focused on creating user interfaces on web pages.',
                myXP: "I've worked with this library throughout my developer career,working on several projects of different scopes."
            },
            {
                image:reactnative,
                title: 'React Native',
                description: 'React Native is a Javascript library created by Facebook. It is used to develop apps for Android and iOS systems natively.',
                myXP: "I've worked with this library throughout my developer career,working on several projects of different scopes."
            },
            {
                image:nextjs,
                title: 'NextJS',
                description: 'Next.js is an open source React front-end development web framework created by Vercel that enables functionality such as server-side rendering and static website generation for React-based web applications.',
                myXP: "An excellent technology to use in projects with a large number of renders."
            },
            {
                image:nodejs,
                title: 'NodeJS',
                description: "Node.js is open-source, cross-platform software based on Google's V8 interpreter that allows you to run JavaScript code outside of a web browser.The main feature of Node.js is its asynchronous and event- driven architecture.",
                myXP: "One of the main technologies used for creating Rest APIs, in which I worked mainly with the help of ExpressJS"
            },
            {
                image:angular,
                title: 'AngularJS',
                description: 'AngularJS is an open source JavaScript framework, maintained by Google, which assists in running single-page applications.',
                myXP: "Excellent technology for creating web applications, using an architecture based on modules."
            },
            {
                image:typescript,
                title: 'TypeScript',
                description: 'TypeScript is an open source programming language developed by Microsoft. It is a strict syntactic superset of JavaScript and adds optional static typing to the language.',
                myXP: "Super important technology when used to implement object-oriented principles in your Javascript code."
            },
            {
                image:adonisjs,
                title: 'Adonis JS',
                description: 'AdonisJS is a framerwork Node. js that came up to bring facilities to the developer including project structuring standards.',
                myXP: 'Because of this, Adonis is known to be an opinionated framework, that is, it follows a development pattern and "forces" the developer to follow it.'
            },
            {
                image:express,
                title: 'ExpressJS',
                description: 'Express.js is a framework for Node.js that provides minimal resources for building web servers. It was released as free and open source software under the MIT License.',
                myXP: "It's one of the most popular server frameworks on Node.js"
            },
            {
                image:nestjs,
                title: 'NestJS',
                description: 'NestJS is an open source Node.js framework intended for server-side application development. It was created by Kamil Mysliwiec and released in 2017. Under the hood, by default, NestJS makes use of the Express.js framework and is also compatible with Fastify.',
                myXP: "Its architecture is heavily inspired by Angular."
            },
        ]
    }
}