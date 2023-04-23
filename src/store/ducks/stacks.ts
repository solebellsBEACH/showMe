import { IStackDuckInitialState } from '../../interface';
import { LanguageCodeEnum } from '../../interface/enums';

export const Types = {
  GET_STACKSPAGE_DATA_REQUEST: 'GET_STACKSPAGE_DATA_REQUEST',
  GET_STACKSPAGE_DATA_SUCCESS: 'GET_STACKSPAGE_DATA_SUCCESS',
  GET_STACKSPAGE_DATA_FAIL: 'GET_STACKSPAGE_DATA_FAIL',
};

const INITIAL_STATE: IStackDuckInitialState = {
  loading: false,
  error: false,
  data: null,
  success: false,
};

export default function StackDuck(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case Types.GET_STACKSPAGE_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: false,
      };
    case Types.GET_STACKSPAGE_DATA_FAIL:
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
  getStackPageDataRequest: (payload?: { language: LanguageCodeEnum }) => ({
    type: Types.GET_STACKSPAGE_DATA_REQUEST,
    payload,
  }),
  getStackPageDataSuccess: (payload: any) => ({
    type: Types.GET_STACKSPAGE_DATA_SUCCESS,
    payload,
  }),
  getStackPageDataFail: () => ({
    type: Types.GET_STACKSPAGE_DATA_FAIL,
  }),
};
