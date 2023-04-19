import { HowICanHelpYouIconsEnum, LanguageCodeEnum } from "./enums";

export interface IHomeDuckDuckInitialState {
  loading: boolean;
  error: boolean;
  data: null;
  success: boolean;
  language: LanguageCodeEnum;
  languageInformation: ILanguageJSON;
}
export interface IReduxState {
  home: IHomeDuckDuckInitialState;
}

export interface IBio {
  header: string;
  primaryText: string;
  secondaryText: string;
  image_url: string;
  hasEffect?: boolean;
}
export interface IProject {
  header: string;
  primaryText: string;
  secondaryText: string;
  image_url: string;
  hasEffect?: boolean;
  tecnologies?: string[]
}
export interface ILanguageJSON {
  homePage: {
    moreAboutMyCareer: string;
    footer: string[];
    header: string[];
    bios: IBio[];
    bio: IBio;
    howIHelpYou: { label: string; context: { header: string; text: string, icon: HowICanHelpYouIconsEnum }[], };
  };
  stacks: {
    bio: IBio[];
    projects: IProject[];
    stackContextText: string;
    seeMore: string;
    seeLess: string;
    header: string;
    stacksTitle: string;
    stacksDescription: IListItems[];
  };
  hobbies: {
    header: string;
    hobbiesDescription: {
      title: string;
      description: string;
      myXP: string;
      image: string;
      subject: string;
    }[];
  };
  sendMeAMessage: {
    title: string;
    subject: string;
    description: string;
    send: string;
  };
  textbox: string[];
  drawer: string[];
}
export interface ILinks {
  linkedin: string;
  instagram: string;
  github: string;
}

export interface IListItems {
  title: string;
  description: string;
  myXP: string;
  image: string;
}

export interface ISendMeAMessageForm {
  subject: string;
  description: string;
}

export interface ITheme {
  templateColor1: string;
  templateColor2: string;
  templateColor3: string;
  templateColor4: string;
  templateColor5: string;
  danger: string;
  alert: string;
  success: string;
  white: string;
  black: string;
  gray1: string;
  gray2: string;
  gray3: string;
  gray4: string;
  background: string;
}


export interface IProjectAssets {
  afpesp: {
    logo: string;
    assets: string[];
  };
  ranking: {
    logo: string;
    assets: string[];
  };
  azo: {
    logo: string;
    assets: string[];
  };
  prevent: {
    logo: string;
    assets: string[];
  };
  kolping: {
    logo: string;
    assets: string[];
  };
}