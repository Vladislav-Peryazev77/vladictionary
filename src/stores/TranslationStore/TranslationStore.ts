import { makeAutoObservable, toJS } from 'mobx';
import { getTranslation } from '../../api/requests/getTranslation/getTranslation';
import { getWordDescription } from '../../api/requests/getWordDescription/getWordDescription';

export interface Phonetic {
  text: string;
  audio?: string;
}

export interface Definition {
  definition: string;
  example: string;
  synonyms: string[];
  antonyms: string[];
}

export interface Meaning {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms: string[];
}

export interface WordData {
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
  isShowOtherMeanings = false;

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

  getWordDescription = async (word: string) => {
    try {
      await getWordDescription(word).then((description) => {
        this.setWordData(description.data);
        console.log(toJS(this.wordData));
      });
    } catch (error) {
      console.error('Error fetching word description', error);
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

  hanldeOtherMeaningsVisibility = () => {
    this.isShowOtherMeanings = !this.isShowOtherMeanings;
  };
}

export default new TranslationStore();
