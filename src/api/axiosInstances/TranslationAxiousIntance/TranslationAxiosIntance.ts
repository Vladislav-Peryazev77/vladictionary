import axios from 'axios';

export const translationIntance = axios.create({
  baseURL: 'https://trans.zillyhuhn.com/',
});
