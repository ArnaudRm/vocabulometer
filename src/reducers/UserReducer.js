import {
    LOGOUT_SUCCESS,
    LOGIN_SUCCESS,
    LOGIN_FAIL
} from '../actions/types';

const INITIAL_STATE = {
    user: {},
    token: null,
    errorMessage: '',
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {...state, token: action.payload.token, user: action.payload.user };
        case LOGIN_FAIL:
            return {...state, errorMessage: action.payload};
        case LOGOUT_SUCCESS:
            return {...state, token: null};
        default:
            return state;
    }
}
