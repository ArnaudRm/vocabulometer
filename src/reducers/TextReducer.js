import {
    FETCH_TEXTS_SUCCESS,
    FETCH_TEXTS,
    FETCH_TEXTS_FAIL,
} from '../actions/types';

const INITIAL_STATE = {
    easyTexts: [],
    hardTexts: [],
    recommendedTexts: [],

    easyTextsLoading: true,
    hardTextsLoading: true,
    recommendedTextsLoading: true,

    errorMessage: '',
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_TEXTS:
            return {...state, textsLoading: true };
        case FETCH_TEXTS_SUCCESS:
            console.log(action.payload.texts);
            console.log(action.payload.level);
            switch(action.payload.level){
                case 'easy':
                    return {...state, easyTexts: action.payload.texts, easyTextsLoading: false };
                case 'hard':
                    return {...state, hardTexts: action.payload.texts, hardTextsLoading: false };
                case 'review':
                    return {...state, recommendedTexts: action.payload.texts, recommendedTextsLoading: false };
                default:
                    return { ...state };
            }
        case FETCH_TEXTS_FAIL:
            return {...state, errorMessage: action.payload , textsLoading: false};
        default:
            return state;
    }
}
