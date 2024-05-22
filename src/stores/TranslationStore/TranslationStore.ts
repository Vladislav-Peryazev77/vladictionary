import { makeAutoObservable } from 'mobx';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { getTranslation } from '../../api/requests/getTranslation/getTranslation';
import { getWordDescription } from '../../api/requests/getWordDescription/getWordDescription';
import {
  Meaning,
  WordData,
} from '../../types/translationTypes/translationTypes';

class TranslationStore {
  translationValue = '';
  wordData: WordData = {} as WordData;
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
      this.setWordData({} as WordData);
      this.setOtherMeaningsWordData([]);
      this.setDescriptionRequestError(false);
      return null;
    }
    try {
      await getWordDescription(word).then((description) => {
        this.setDescriptionRequestError(false);
        this.setWordData(description.data[0]);
        this.setOtherMeaningsWordData(description.data);
      });
    } catch (error) {
      this.setWordData({} as WordData);
      this.setOtherMeaningsWordData([]);
      if (axios.isAxiosError(error)) {
        const errorText = error.response?.data.message
          ? error.response?.data.message
          : 'Something went wrong, please try later';
        this.setDescriptionRequestError(errorText);
      }
    }
  };

  setTranslationValue = (value: string) => {
    this.translationValue = value;
  };

  setWordData = (data: WordData) => {
    const dataWithDefinitionIds = {
      ...data,
      meanings: data.meanings?.map((meaning: any) => ({
        ...meaning,
        definitions: meaning.definitions.map((definition: any) => ({
          ...definition,
          id: uuidv4(),
        })),
      })),
    };
    this.wordData = dataWithDefinitionIds;
  };

  setOtherMeaningsWordData = (data: WordData[]) => {
    const meaningsWithoutFirst = data.slice(1).map((dataObj: any) => ({
      ...dataObj,
      id: uuidv4(),
      meanings: dataObj.meanings.map((meaning: any) => ({
        ...meaning,
        definitions: meaning.definitions.map((definition: any) => ({
          ...definition,
          id: uuidv4(),
        })),
      })),
    }));

    this.otherMeaningsWordData = meaningsWithoutFirst.filter((item) =>
      item.meanings?.some((meaning: Meaning) =>
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

  handleIsOtherMeaning = () => {
    this.isOtherMeanings = false;
  };
}

export default new TranslationStore();
