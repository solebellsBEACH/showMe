import { HowICanHelpYouIconsEnum, LanguageCodeEnum, Page } from './enums';

export interface IHomeDuckInitialState {
  loading: boolean;
  error: boolean;
  data: HomePageData | null;
  success: boolean;
}

export interface IApplicationDuckInitialState {
  language: LanguageCodeEnum;
  languageInformation: ILanguageJSON;
}
export interface IStackDuckInitialState {
  loading: boolean;
  error: boolean;
  data: StacksPageData | null;
  success: boolean;
}
export interface IHobbiesDuckInitialState {
  loading: boolean;
  error: boolean;
  data: HobbiesPageData | null;
  success: boolean;
}
export interface IReduxState {
  home: IHomeDuckInitialState;
  stacks: IStackDuckInitialState;
  hobbies: IHobbiesDuckInitialState;
  application: IApplicationDuckInitialState;
}

export type Project = {
  tecnologies: string[];
  header: string;
  primary_text: string;
  secondary_text: string;
  image_url: string;
  has_effect?: boolean;
  is_personal_bio?: boolean;
};
export interface Document {
  page: Page;
  header: string;
  primary_text: string;
  secondary_text?: string;
  image_url: string;
  has_effect: boolean;
  is_personal_bio: boolean;
  subtitle?: string;
}

export type HomePageData = {
  bios: Document[];
  bio: Document;
};

export type StacksPageData = {
  projects: Project[];
  stacks: Stack[];
};

export type HobbiesPageData = {
  hobbies: Document[];
};

export interface ILanguageJSON {
  homePage: {
    moreAboutMyCareer: string;
    footer: string[];
    header: string[];
    howIHelpYou: {
      label: string;
      context: {
        header: string;
        text: string;
        icon: HowICanHelpYouIconsEnum;
      }[];
    };
  };
  stacks: {
    stackContextText: string;
    seeMore: string;
    seeLess: string;
    header: string;
    stacksTitle: string;
  };
  hobbies: {
    header: string;
  };
  textbox: string[];
  drawer: string[];
}
export interface ILinks {
  linkedin: string;
  instagram: string;
  github: string;
}

export type Stack = {
  title: string;
  description: string;
  my_xp: string;
  image_url: string;
};

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
