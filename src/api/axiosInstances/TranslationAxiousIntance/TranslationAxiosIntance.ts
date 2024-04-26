import axios from 'axios';

export const intance = axios.create({
  baseURL: 'https://trans.zillyhuhn.com/',
});
