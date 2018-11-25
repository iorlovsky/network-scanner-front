import {axios, getAuthHeader} from '../config';
import * as urls from '../urls';
import * as types from "../types";

export const signin = data => dispatch => {
    return axios({
      headers: getAuthHeader(data.email, data.password),
      method: 'post',
      url: urls.LOGIN,
    })
      .then((res) => {
        dispatch({
          type: types.USER_FETCHED,
          payload: res.data
        });
        return Promise.resolve(res)
      })
};
