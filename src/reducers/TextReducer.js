import {
    FETCH_TEXTS_SUCCESS,
    FETCH_TEXTS,
    FETCH_TEXTS_FAIL,
} from '../actions/types';

const INITIAL_STATE = {
    texts: [],
    textsLoading: true,
    errorMessage: '',
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_TEXTS:
            return {...state, textsLoading: true };
        case FETCH_TEXTS_SUCCESS:
            console.log(action.payload);
            return {...state, texts: action.payload, textsLoading: false };
        case FETCH_TEXTS_FAIL:
            return {...state, errorMessage: action.payload , textsLoading: false};
        default:
            return state;
    }
}
