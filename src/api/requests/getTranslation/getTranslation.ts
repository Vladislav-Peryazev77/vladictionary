import { translationIntance } from '../../axiosInstances/TranslationAxiousIntance/TranslationAxiosIntance';

export function getTranslation(word: string, source: string, target: string) {
  return translationIntance.post('translate', {
    q: word,
    source: source,
    target: target,
    format: 'text',
  });
}
