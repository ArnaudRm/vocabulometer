import {
    FETCH_TEXTS_SUCCESS,
    FETCH_TEXTS,
    FETCH_TEXTS_FAIL,
} from '../actions/types';

const BASE_URL = "http://vocabulometer.herokuapp.com/api";

export const fetchTexts = (userToken = null) => { // TODO get token in redux in component that calls this fetch and pass is as an argument

    return (dispatch) => {
        fetch(`${BASE_URL}/texts` , {
            method: 'get',
            headers: new Headers({
                'Authorization': 'Bearer '+ userToken,
            }),
        })
            .then((res) => {
                dispatch({
                    type: FETCH_TEXTS,
                });
                res.json()
                    .then((data) => {
                        console.log(`sucess get texts`);
                        console.log(data);
                        if(data.status === 200) {
                            dispatch({
                                type: FETCH_TEXTS_SUCCESS,
                                payload: data,
                            });
                        }else{
                            dispatch({
                                type: FETCH_TEXTS_FAIL,
                                payload: 'Erreur',
                            });
                        }
                    })
                    .catch((e) =>{
                        console.log('fail');
                        console.log(e);
                        dispatch({
                            type: FETCH_TEXTS_FAIL,
                            payload: e,
                        });
                    })
            })
            .catch((e) => {
                console.log('fail');
                console.log(e);
                dispatch({
                    type: FETCH_TEXTS_FAIL,
                    payload: e,
                });
            });
    }
};