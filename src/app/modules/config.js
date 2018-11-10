import {default as axiosBase} from 'axios';

export const API_BASE = 'http://localhost:8000/';

export const axios = axiosBase.create({
  baseURL: API_BASE,
  timeout: 60000,
  headers: {
    'Content-Type': 'application/json'
  }
});