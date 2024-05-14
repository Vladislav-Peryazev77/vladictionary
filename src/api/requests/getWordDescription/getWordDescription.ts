import { descriptionIntance } from '../../axiosInstances/WordDescriptionAxiousIntance/WordDescriptionAxiousIntance';
import { createWordDescriptionApiUrlAgrs } from './createWordDescriptionApiUrlArgs';

interface GetWordDescriptionConfig {
  version?: string;
  language?: string;
}

export const getWordDescription = (
  word: string,
  config?: GetWordDescriptionConfig,
) => {
  return descriptionIntance.get(
    createWordDescriptionApiUrlAgrs({
      word,
      language: config?.language || 'en',
      version: config?.version || 'v2',
    }),
  );
};
