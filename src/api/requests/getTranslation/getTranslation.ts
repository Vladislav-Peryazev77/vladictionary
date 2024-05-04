import { translationIntance } from '../../axiosInstances/TranslationAxiousIntance/TranslationAxiosIntance';

export function getTranslation(word: string) {
  return translationIntance.post('translate', {
    q: word,
    source: 'en',
    target: 'ru',
    format: 'text',
  });
}
