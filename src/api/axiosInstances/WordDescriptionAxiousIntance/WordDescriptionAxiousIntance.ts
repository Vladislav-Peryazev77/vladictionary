import axios from 'axios';

export const MyAxiosInstance = axios.create({
  baseURL: 'https://api.dictionaryapi.dev/api/v2/entries/en/',
});
