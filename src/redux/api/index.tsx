import axios from 'axios';

export const base = 'https://api-develop.wedigit.tech/v1';

export const baseApi = axios.create({
  baseURL: base + ``,
});
