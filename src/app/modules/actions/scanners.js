import {axios} from '../config';
import * as urls from '../urls';
import * as types from "../types";

export const fetchNetstat = data => dispatch => {
  return axios({
    method: 'get',
    url: urls.scanners.NETSTAT,
  })
    .then((res) => {
      dispatch({
        type: types.NETSTAT_FETCHED,
        payload: res.data
      });
      return Promise.resolve(res)
    })
};

export const fetchIfstat = data => dispatch => {
  return axios({
    method: 'get',
    url: urls.scanners.IFSTAT,
  })
    .then((res) => {
      dispatch({
        type: types.IFSTAT_FETCHED,
        payload: res.data
      });
      return Promise.resolve(res)
    })
};