import { IHomeDuckDuckInitialState } from '../../interface';
import { LanguageCodeEnum } from '../../interface/enums';
import { getLanguageInformation } from '../../languages';

export const Types = {
  SET_LANGUAGE: 'SET_LANGUAGE',

  GET_HOMEPAGE_DATA_REQUEST: 'GET_HOMEPAGE_DATA_REQUEST',
  GET_HOMEPAGE_DATA_SUCCESS: 'GET_HOMEPAGE_DATA_SUCCESS',
  GET_HOMEPAGE_DATA_FAIL: 'GET_HOMEPAGE_DATA_FAIL',

};

const defaultLanguage = LanguageCodeEnum.english

const INITIAL_STATE: IHomeDuckDuckInitialState = {
  loading: false,
  error: false,
  data: null,
  success: false,
  language: defaultLanguage,
  languageInformation: getLanguageInformation(defaultLanguage),
};

export default function HomeDuck(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case Types.SET_LANGUAGE:
      return {
        ...state,
        loading: true,
        error: false,
        language: action.payload.language,
        languageInformation: getLanguageInformation(action.payload.language),
      };
    case Types.GET_HOMEPAGE_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: false,
      }
    case Types.GET_HOMEPAGE_DATA_FAIL:
      return {
        ...state,
        loading: false,
        error: true,
      }
    default:
      return state;
  }
}

export const Creators = {
  setLanguage: (payload: { language: LanguageCodeEnum }) => ({
    type: Types.SET_LANGUAGE,
    payload,
  }),
  getHomePageDataRequest: () => ({
    type: Types.GET_HOMEPAGE_DATA_REQUEST,
  }),
  getHomePageDataSuccess: (payload: any) => ({
    type: Types.GET_HOMEPAGE_DATA_SUCCESS,
    payload
  }),
  getHomePageDataFail: () => ({
    type: Types.GET_HOMEPAGE_DATA_FAIL,
  }),

};
