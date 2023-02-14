export interface IApplicationDuckDuckInitialState {
  loading: boolean;
  error: boolean;
  data: null;
  success: boolean;
  language: 'pt' | 'en';
  languageInformation: ILanguageJSON;
}
export interface IReduxState {
  application: IApplicationDuckDuckInitialState;
}

export interface ILanguageJSON {
  homePage: {
    footer: string[];
    header: string[];
    bio: string[];
    howIHelpYou: { label: string; context: { header: string; text: string }[] };
  };
  stacks: {
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
