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

export const logout = (userToken = null) => { // TODO get token in redux in component that calls this fetch and pass is as an argument

    return (dispatch) => {
        fetch(`${BASE_URL}/users/auth/logout`, {
            method: 'post',
            headers: new Headers({
                'Authorization': 'Bearer ' + userToken,
            }),
        })
            .then((res) => {
                res.json()
                    .then((data) => {
                        console.log(data);
                        if (data.status === 200) {
                            console.log(`sucess logout`);
                            dispatch({
                                type: LOGOUT_SUCCESS,
                                payload: data,
                            });
                        }
                    })
                    .catch((e) => {
                        console.log('fail');
                        console.log(e);
                    })
            })
            .catch((e) => {
                console.log('fail');
                console.log(e);
            });
    }
};

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
                    payload: 'Identifiants incorrects',
                });
            })
    }
};