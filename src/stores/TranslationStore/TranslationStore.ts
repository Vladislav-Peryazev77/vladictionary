import { makeAutoObservable } from 'mobx';
import { getWordTranlstion } from '../../api/requests/getWordTranslation/getWordTranslation';

class TranslationStore {
  translationValue = '';
  textAreaValue = '';

  constructor() {
    makeAutoObservable(this);
  }

  handleTranslationRequest = async (word: string) => {
    try {
      await getWordTranlstion(word).then((translation) =>
        this.setTranslationValue(translation.data.translatedText),
      );
    } catch (error) {
      console.error('Error fetching translation:', error);
    }
  };

  setTranslationValue = (value: string) => {
    this.translationValue = value;
  };

  handleTextAreaValueChange = (value: string) => {
    this.textAreaValue = value;
  };
}

export default new TranslationStore();
