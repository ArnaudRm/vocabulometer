import {
    LOGOUT_SUCCESS,
    LOGIN_FAIL,
    LOGIN,
    LOGIN_SUCCESS,
} from '../actions/types';
import {NavigationActions} from 'react-navigation';

const BASE_URL = "http://vocabulometer.herokuapp.com/api";

const navigateToHome =
    NavigationActions.navigate({
        routeName: 'Main',
    });

const redirectLogin =
    NavigationActions.navigate({
        routeName: 'Login',
    });

export const login = ({username, password}) => { // TODO get token in redux in component that calls this fetch and pass is as an argument

    const credentials = {
        username,
        password,
    };

    return (dispatch) => {
        dispatch({
            type: LOGIN,
        });

        fetch(`${BASE_URL}/users/auth/local`, {
            method: 'post',
            body: JSON.stringify(credentials),
            headers: {'content-type': 'application/json'}
        })
            .then((res) => {
                if (res.status !== 200) {
                    dispatch(redirectLogin);
                    console.log('ici 200');
                    dispatch({
                        type: LOGIN_FAIL,
                        payload: 'Identifiants incorrects',
                    });
                    //throw new Error ('coucou');
                } else {
                    return res.json();
                }
            })
            .then((data) => {
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: {
                        user: data.user,
                        token: data.token,
                    },
                });
                dispatch(navigateToHome);
            })
            .catch((e) => {
                console.log(e);
                dispatch({
                    type: LOGIN_FAIL,
                    payload: 'Mauvais mot de passe',
                });
            })
    }
};

export const logout = (userToken) => {
    return (dispatch) => {

        fetch(`${BASE_URL}/users/auth/logout`, {
            method: 'post',
            headers: new Headers({
                'Authorization': 'Bearer ' + userToken,
            }),
        })
            .then((res) => {
                if (res.status === 200) {
                    dispatch(redirectLogin);
                    dispatch({
                        type: LOGOUT_SUCCESS,
                    });
                }
            })
            .catch(e => console.log(e));
    };
};

export const sendWordsRead = (userToken, words) => {
    return (dispatch) => {

       // console.log(words);
        fetch(`${BASE_URL}/users/current/word`, {
            method: 'post',
            headers: new Headers({
                'Authorization': 'Bearer ' + userToken,
                'content-type': 'application/json'
            }),
            body: JSON.stringify({words:words, language:'english'}),
        })
            .then((res) => res.json())
            .then(res => {
                console.log(res);
            })
            .catch(e => console.log(e))
    };
};