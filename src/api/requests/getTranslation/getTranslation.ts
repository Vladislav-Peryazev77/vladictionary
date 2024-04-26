import { intance } from '../../axiosInstances/TranslationAxiousIntance/TranslationAxiosIntance';

export function getTranslation(word: string) {
  return intance.post('translate', {
    q: word,
    source: 'en',
    target: 'ru',
    format: 'text',
  });
}
