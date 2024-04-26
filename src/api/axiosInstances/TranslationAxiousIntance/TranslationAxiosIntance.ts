import axios from 'axios';

export const MyAxiosInstance = axios.create({
  baseURL: 'https://trans.zillyhuhn.com/translate',
});
