import { IHobbiesDuckDuckInitialState } from '../../interface';

export const Types = {
    GET_HOBBIESPAGE_DATA_REQUEST: 'GET_HOBBIESPAGE_DATA_REQUEST',
    GET_HOBBIESPAGE_DATA_SUCCESS: 'GET_HOBBIESPAGE_DATA_SUCCESS',
    GET_HOBBIESPAGE_DATA_FAIL: 'GET_HOBBIESPAGE_DATA_FAIL',
};


const INITIAL_STATE: IHobbiesDuckDuckInitialState = {
    loading: false,
    error: false,
    data: null,
    success: false
};

export default function HobbieDuck(state = INITIAL_STATE, action: any) {
    switch (action.type) {
        case Types.GET_HOBBIESPAGE_DATA_SUCCESS:
            return {
                ...state,
                data: { hobbies: action.payload },
                loading: false,
                error: false,
            };
        case Types.GET_HOBBIESPAGE_DATA_FAIL:
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
    getHobbiesPageDataRequest: () => ({
        type: Types.GET_HOBBIESPAGE_DATA_REQUEST,
    }),
    getHobbiesPageDataSuccess: (payload: any) => ({
        type: Types.GET_HOBBIESPAGE_DATA_SUCCESS,
        payload,
    }),
    getHobbiesPageDataFail: () => ({
        type: Types.GET_HOBBIESPAGE_DATA_FAIL,
    }),
};
