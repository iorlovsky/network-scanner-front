import {FETCH_USER} from "../types";

export const fetchUser = data => ({
  type: FETCH_USER,
  payload: {name:'John', last_name:"Connor"}
});