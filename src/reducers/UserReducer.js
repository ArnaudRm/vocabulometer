import {
    LOGIN,
    LOGOUT_SUCCESS,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
} from '../actions/types';

const INITIAL_STATE = {
    user: {},
    loginLoading: false,
    token: null,
    errorMessage: '',
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case LOGIN:
            return {...state, loginLoading: true, errorMessage: '' };
        case LOGIN_SUCCESS:
            return {...state, token: action.payload.token, user: action.payload.user,  loginLoading: false };
        case LOGIN_FAIL:
            console.log(action.payload);
            return {...state, errorMessage: action.payload,  loginLoading: false};
        case LOGOUT_SUCCESS:
            return {...state, token: null};
        default:
            return state;
    }
}
