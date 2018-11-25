import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import {reducer as form} from "redux-form";
import app from "../reducers/app";
import scanners from "../reducers/scanners";

const rootReducer = combineReducers({
  app,
  form,
  scanners
});


export const configure = (initialState = {}) => {
  return createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );
};