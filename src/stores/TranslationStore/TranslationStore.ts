import { makeAutoObservable, toJS } from 'mobx';
import { getTranslation } from '../../api/requests/getTranslation/getTranslation';
import { getWordDescription } from '../../api/requests/getWordDescription/getWordDescription';

interface Phonetic {
  text: string;
  audio?: string;
}

interface Definition {
  definition: string;
  example: string;
  synonyms: string[];
  antonyms: string[];
}

interface Meaning {
  partOfSpeech: string;
  definitions: Definition[];
}

interface WordData {
  word: string;
  phonetic?: string;
  phonetics?: Phonetic[];
  origin?: string;
  meanings: Meaning[];
}

class TranslationStore {
  translationValue = '';
  wordData: WordData[] = [];
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

  setWordData = (data: WordData[]) => {
    this.wordData = data;
  };

  handleTextAreaValueChange = (value: string) => {
    this.textAreaValue = value;
  };
}

export default new TranslationStore();
