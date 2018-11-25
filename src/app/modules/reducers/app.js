import * as types from "../types";

const initialState = {};


const app = (state=initialState, action) => {
  switch (action.type){
    case types.USER_FETCHED:
      return {...state, user:action.payload};

    default:
      return state;
  }
};

export default app;