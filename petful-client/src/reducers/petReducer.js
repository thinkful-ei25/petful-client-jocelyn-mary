import {
  FETCH_CAT_SUCCESS, 
  FETCH_CAT_FAIL, 
} from '../actions/catAction'; 
import { FETCH_DOG_FAIL,FETCH_DOG_SUCCESS } from "../actions/dogAction";

const initialState = {
  error: null,
  cat:[], 
  dog:[]
}; 

export default function petsReducer(state = initialState, action) {
  if(action.type === FETCH_CAT_SUCCESS){
    return {
      ...state, cat: action.cat
    }
  }else if(action.type===FETCH_CAT_FAIL){
    return {
      ...state, error: action.error
    }
  }else if(action.type ===FETCH_DOG_FAIL){
    return {
      ...state, error: action.error
    }
  }else if(action.type ===FETCH_DOG_SUCCESS){
    return{
      ...state, dog: action.dog
    }
  }
  return state; 
}