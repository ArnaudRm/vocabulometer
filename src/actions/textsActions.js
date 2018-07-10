import {
    FETCH_TEXTS_SUCCESS,
    FETCH_TEXTS,
    FETCH_TEXTS_FAIL,
} from '../actions/types';

const BASE_URL = "http://vocabulometer.herokuapp.com/api";

export const fetchTexts = (userToken = null, difficulty = null) => {

    return (dispatch) => {
        fetch(`${BASE_URL}/texts?page=${58}` , { // TODO CHANGE PAGE PARAM DEPENDING ON WHAT ?
            method: 'get',
            headers: new Headers({
                'Authorization': 'Bearer '+ userToken,
            }),
        })
            .then((res) => {
                dispatch({
                    type: FETCH_TEXTS,
                });
                const { status } = res;
                res.json()
                    .then((data) => {
                        console.log(`sucess get texts`);
                        console.log(data.texts);
                        if(status === 200) {
                            dispatch({
                                type: FETCH_TEXTS_SUCCESS,
                                payload: data.texts,
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