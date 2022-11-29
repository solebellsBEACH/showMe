import { IApplicationDuckDuckInitialState } from "../../interface";

export const Types = {
    GET_LANGUAGE: 'GET_LANGUAGE',
    GET_LANGUAGE_SUCCESS: 'GET_LANGUAGE_SUCCESS',
    GET_LANGUAGE_FAIL: 'GET_LANGUAGE_FAIL',
    SET_LANGUAGE: 'SET_LANGUAGE',
    SET_LANGUAGE_SUCCESS: 'SET_LANGUAGE_SUCCESS',
    SET_LANGUAGE_FAIL: 'SET_LANGUAGE_FAIL',
};

const INITIAL_STATE: IApplicationDuckDuckInitialState = {
    loading: false,
    error: false,
    data: null,
    success: false,
    language:'pt'
};

export default function ApplicationDuck(state = INITIAL_STATE, action: any) {
    switch (action.type) {
        case Types.GET_LANGUAGE:
            return {
                ...state,
                loading: true,
                error: false
            };
        case Types.GET_LANGUAGE_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                pokemonData: action.payload
            };
        case Types.GET_LANGUAGE_FAIL:
            return {
                ...state,
                loading: false,
                error: true
            };
        default:
            return state;
    }
}

export const Creators = {
    getLanguage: (payload: { id:string }) => ({
        type: Types.GET_LANGUAGE,
        payload
    }),
    getLanguageSuccess: (payload:any) => ({
        type: Types.GET_LANGUAGE_SUCCESS,
        payload
    }),
    getLanguageFail: () => ({
        type: Types.GET_LANGUAGE_FAIL
    }),
    setLanguage: (payload: { id:string }) => ({
        type: Types.SET_LANGUAGE,
        payload
    }),
    setLanguageSuccess: (payload:any) => ({
        type: Types.SET_LANGUAGE_SUCCESS,
        payload
    }),
    setLanguageFail: () => ({
        type: Types.SET_LANGUAGE_FAIL
    }),
};
