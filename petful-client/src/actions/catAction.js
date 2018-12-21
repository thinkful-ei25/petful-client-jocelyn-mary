import API_BASE_URL from '..config.js';
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
