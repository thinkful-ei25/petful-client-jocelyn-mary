
import { API_BASE_URL } from '../config.js';
//fetch dog
export const FETCH_DOG_SUCCESS = "FETCH_DOG_SUCCESS";
export const fetchDogSuccess = dog =>({
    type: FETCH_DOG_SUCCESS,
    dog
});
export const FETCH_DOG_FAIL = "FETCH_DOG_FAIL";
const fetchDogFail = error => ({
    type: FETCH_DOG_FAIL,
    error
});
export const fetchDogRequest = () => (dispatch) => {
    return fetch(`${API_BASE_URL}/api/dog`)
    .then(res=> res.json())
    .then((dog) =>{
        console.log(dog);
        dispatch(fetchDogSuccess(dog))
    })
    .catch(error=> {
        dispatch(fetchDogFail(error))
    })
}
