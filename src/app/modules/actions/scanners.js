import {axios} from '../config';
import * as urls from '../urls';
import * as types from "../types";

export const fetchNetstat = () => dispatch => {
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

export const fetchIfstat = () => dispatch => {
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

export const fetchCommonNetworkInfo = () => dispatch => {
  return axios({
    method: 'get',
    url: urls.scanners.NETWORK_COMMON_INFO,
  })
    .then((res) => {
      dispatch({
        type: types.NETWORK_COMMON_INFO_FETCHED,
        payload: res.data
      });
      return Promise.resolve(res)
    })
};

export const fetchPacketsInfo = () => dispatch => {
  return axios({
    method: 'get',
    url: urls.scanners.PACKETS_INFO,
  })
    .then((res) => {
      dispatch({
        type: types.PACKETS_INFO_FETCHED,
        payload: res.data
      });
      return Promise.resolve(res)
    })
};