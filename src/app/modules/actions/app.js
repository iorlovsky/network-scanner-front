import * as types from "../types";
import {axios} from '../config';
import * as urls from '../urls';

export const signin = data => {
  console.log(data)
  return axios ({
    method: 'post',
    url: urls.USERS,
    data
  })
    .then((res) => {
      return Promise.resolve(res)
    })
};

export const fetchUser = data => ({
  type: types.FETCH_USER,
  payload: {name:'John', last_name:"Connor"}
});