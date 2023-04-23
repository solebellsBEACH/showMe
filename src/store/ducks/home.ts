import { IHomeDuckInitialState } from '../../interface';
import { LanguageCodeEnum } from '../../interface/enums';

export const Types = {
  GET_HOMEPAGE_DATA_REQUEST: 'GET_HOMEPAGE_DATA_REQUEST',
  GET_HOMEPAGE_DATA_SUCCESS: 'GET_HOMEPAGE_DATA_SUCCESS',
  GET_HOMEPAGE_DATA_FAIL: 'GET_HOMEPAGE_DATA_FAIL',
};

const INITIAL_STATE: IHomeDuckInitialState = {
  loading: false,
  error: false,
  data: null,
  success: false,
};

export default function HomeDuck(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case Types.GET_HOMEPAGE_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: false,
      };
    case Types.GET_HOMEPAGE_DATA_FAIL:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
}

export const Creators = {
  getHomePageDataRequest: (payload?: { language: LanguageCodeEnum }) => ({
    type: Types.GET_HOMEPAGE_DATA_REQUEST,
    payload,
  }),
  getHomePageDataSuccess: (payload: any) => ({
    type: Types.GET_HOMEPAGE_DATA_SUCCESS,
    payload,
  }),
  getHomePageDataFail: () => ({
    type: Types.GET_HOMEPAGE_DATA_FAIL,
  }),
};
