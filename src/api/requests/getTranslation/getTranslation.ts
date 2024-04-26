import { intance } from '../../axiosInstance/axiosIntance';

export function getTranslation(word: string) {
  return intance.post('translate', {
    q: word,
    source: 'en',
    target: 'ru',
    format: 'text',
  });
}
