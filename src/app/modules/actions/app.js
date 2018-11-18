import {axios, getAuthHeader} from '../config';
import * as urls from '../urls';

export const signin = data => {
  return axios ({
    headers: getAuthHeader(data.email, data.password),
    method: 'post',
    url: urls.LOGIN,
  })
    .then((res) => {
      return Promise.resolve(res)
    })
};
