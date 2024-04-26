import { makeAutoObservable } from 'mobx';
import { getTranslation } from '../../api/requests/getTranslation/getTranslation';

class TranslationStore {
  translationValue = '';
  textAreaValue = '';

  constructor() {
    makeAutoObservable(this);
  }

  getTextTranslation = async (word: string) => {
    try {
      await getTranslation(word).then((translation) =>
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
