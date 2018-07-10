import {
    FETCH_TEXTS_SUCCESS,
    FETCH_TEXTS,
    FETCH_TEXTS_FAIL,
} from '../actions/types';

const BASE_URL = "http://vocabulometer.herokuapp.com/api";

export const fetchTexts = (userToken, difficulty, limit = 20) => {

    let apiEndpoint;

    switch(difficulty){
        case 'easy':
            apiEndpoint = `${BASE_URL}/datasets/english/local/recommendation?recommender=easy&limit=${limit}`;
            break;
        case 'hard':
            apiEndpoint = `${BASE_URL}/datasets/english/local/recommendation?recommender=hard&limit=${limit}`;
            break;
        case 'review':
            apiEndpoint = `${BASE_URL}/datasets/english/local/recommendation?recommender=review&limit=${limit}`;
            break;
        default:
            throw new Error ('Miss difficulty argument');
    }

    return (dispatch) => {
        fetch(apiEndpoint , {
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
                                payload: {
                                    texts:data.texts,
                                    level: difficulty
                                },
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