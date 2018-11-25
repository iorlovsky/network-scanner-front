import {axios, getAuthHeader} from '../config';
import * as urls from '../urls';
import * as types from "../types";

export const fetchNetstat = data => dispatch => {
  return axios({
    // headers: getAuthHeader(data.email, data.password),
    method: 'get',
    url: urls.SCANNERS,
  })
    .then((res) => {
      dispatch({
        type: types.NETSTAT_FETCHED,
        payload: res.data.netstat
      });
      return Promise.resolve(res)
    })
};