import axios from 'axios';

export const descriptionIntance = axios.create({
  baseURL: 'https://api.dictionaryapi.dev/api/',
});
