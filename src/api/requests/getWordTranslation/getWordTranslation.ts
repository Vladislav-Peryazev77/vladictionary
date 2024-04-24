import { MyAxiosInstance } from '../../axiosInstance/axiosIntance';

export function getWordTranlstion(word: any) {
  return MyAxiosInstance.post('', {
    q: `${word}`,
    source: 'en',
    target: 'ru',
    format: 'text',
  });
}
