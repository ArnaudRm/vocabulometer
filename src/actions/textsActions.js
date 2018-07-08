import {
    FETCH_TEXTS_SUCCESS,
    FETCH_TEXTS,
    FETCH_TEXTS_FAIL,
} from '../actions/types';

const BASE_URL = "http://vocabulometer.herokuapp.com/api";

export const fetchTexts = (userToken = null) => { // TODO get token in redux in component that calls this fetch and pass is as an argument

    return (dispatch) => {
        fetch(`${BASE_URL}/texts` , {
            method: 'post',
            headers: new Headers({
                'Authorization': 'Bearer '+ userToken,
            }),
        })
            .then((res) => {
                dispatch({
                    type: FETCH_TEXTS,
                });
                res.json()
                    .then((texts) => {
                        console.log(`sucess get texts`);
                        console.log(texts);
                        dispatch({
                            type: FETCH_TEXTS_SUCCESS,
                            payload: texts,
                        });
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