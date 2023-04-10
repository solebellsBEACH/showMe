import { IApplicationDuckDuckInitialState } from '../../interface';
import { LanguageCodeEnum } from '../../interface/enums';
import { getLanguageInformation } from '../../languages';

export const Types = {
  SET_LANGUAGE: 'SET_LANGUAGE',
};

const defaultLanguage = LanguageCodeEnum.english

const INITIAL_STATE: IApplicationDuckDuckInitialState = {
  loading: false,
  error: false,
  data: null,
  success: false,
  language: defaultLanguage,
  languageInformation: getLanguageInformation(defaultLanguage),
};

export default function ApplicationDuck(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case Types.SET_LANGUAGE:
      return {
        ...state,
        loading: true,
        error: false,
        language: action.payload.language,
        languageInformation: getLanguageInformation(action.payload.language),
      };
    default:
      return state;
  }
}

export const Creators = {
  setLanguage: (payload: { language: 'pt' | 'en' }) => ({
    type: Types.SET_LANGUAGE,
    payload,
  }),
};
