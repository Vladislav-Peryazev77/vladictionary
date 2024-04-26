import { MyAxiosInstance } from '../../axiosInstances/TranslationAxiousIntance/TranslationAxiosIntance';

export function getWordTranlstion(word: string) {
  return MyAxiosInstance.post('', {
    q: `${word}`,
    source: 'en',
    target: 'ru',
    format: 'text',
  });
}
