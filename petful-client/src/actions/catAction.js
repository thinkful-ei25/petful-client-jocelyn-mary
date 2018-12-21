import { API_BASE_URL } from '../config.js';
//fetch cats
export const FETCH_CAT_SUCCESS = "FETCH_CAT_SUCCESS";
export const fetchCatSuccess = cat =>({
    type: FETCH_CAT_SUCCESS,
    cat
});

export const FETCH_CAT_FAIL = "FETCH_CAT_FAIL";
const fetchCatFail = error => ({
    type: FETCH_CAT_FAIL,
    error
});

export const fetchCatRequest = () => (dispatch) => {
    return fetch(`${API_BASE_URL}/api/cat`)
    .then(res=> res.json())
    .then((cat) =>{
        dispatch(fetchCatSuccess(cat))
    })
    .catch(error=> {
        dispatch(fetchCatFail(error))
    })
}

export const ADOPT_CAT_SUCCESS = "ADOPT_CAT_SUCCESS"; 
const adoptCatSuccess = () => ({
    type: ADOPT_CAT_SUCCESS
});

export const ADOPT_CAT_ERROR = "ADOPT_CAT_ERROR";
const adoptCatError = (error)=>({
    type: ADOPT_CAT_ERROR,
    error
});

export const adoptCatRequest = () => (dispatch) => {
    return fetch(`${API_BASE_URL}/api/cat`, {
      method: 'DELETE'
    })
      .then(()=>dispatch(adoptCatSuccess()))
      .then(()=>dispatch(fetchCatRequest()))
      .catch(error=>{
          dispatch(adoptCatError(error))
      });
  };