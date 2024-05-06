import { makeAutoObservable, toJS } from 'mobx';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { getTranslation } from '../../api/requests/getTranslation/getTranslation';
import { getWordDescription } from '../../api/requests/getWordDescription/getWordDescription';
import { WordData } from '../../types/translationTypes/translationTypes';
class TranslationStore {
  translationValue = '';
  wordData: WordData = {};
  otherMeaningsWordData: WordData[] = [];
  translationRequestError: string | boolean = '';
  decriptionRequestError: string | boolean = '';
  isOtherMeanings = true;
  originalLanguage: string = 'en';
  translatedLanguage: string = 'ru';

  constructor() {
    makeAutoObservable(this);
  }

  getTextTranslation = async (word: string) => {
    try {
      await getTranslation(
        word,
        this.originalLanguage,
        this.translatedLanguage,
      ).then((translation) => {
        this.setTranslationValue(translation.data.translatedText);
        this.setTranslationRequestError(false);
      });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        this.setTranslationRequestError(error.response?.data.error);
      }
    }
  };

  getWordDescription = async (word: string) => {
    if (this.originalLanguage != 'en') {
      this.setWordData({});
      this.setOtherMeaningsWordData([]);
      return null;
    }
    try {
      await getWordDescription(word).then((description) => {
        this.setDescriptionRequestError(false);
        this.setWordData(description.data[0]);
        this.setOtherMeaningsWordData(description.data);
        console.log(toJS(this.wordData));
        console.log(toJS(this.otherMeaningsWordData));
      });
    } catch (error) {
      this.setWordData({});
      if (axios.isAxiosError(error)) {
        this.setDescriptionRequestError(error.response?.data.message);
      }
    }
  };

  setTranslationValue = (value: string) => {
    this.translationValue = value;
  };

  setWordData = (data: WordData) => {
    this.wordData = { id: uuidv4(), ...data };
  };

  setOtherMeaningsWordData = (data: WordData[]) => {
    const meaningsWithoutFirst = data.slice(1).map((item) => ({
      id: uuidv4(),
      ...item,
    }));
    this.otherMeaningsWordData = meaningsWithoutFirst.filter((item) =>
      item.meanings?.some((meaning) =>
        meaning.definitions.some((definition) => definition.example),
      ),
    );
  };

  setTranslationRequestError = (error: string | boolean) => {
    this.translationRequestError = error;
  };

  setDescriptionRequestError = (error: string | boolean) => {
    this.decriptionRequestError = error;
  };

  setOriginalLanguage = (language: string) => {
    this.originalLanguage = language;
  };

  setTranslatedLanguage = (language: string) => {
    this.translatedLanguage = language;
  };
}

export default new TranslationStore();
