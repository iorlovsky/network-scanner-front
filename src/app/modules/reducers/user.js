import {FETCH_USER} from "../types";

const initialState = {};


const user = (state=initialState, action) => {
  switch (action.type){
    case FETCH_USER:
      return {...state, ...action.payload};

    default:
      return state;
  }
};

export default user;