import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import user from "../reducers/user";

const rootReducer = combineReducers({
  user,
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

// export default configure;