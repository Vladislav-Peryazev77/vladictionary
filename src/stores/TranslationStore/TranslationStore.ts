import { makeAutoObservable } from 'mobx';
import { getTranslation } from '../../api/requests/getTranslation/getTranslation';
import { getWordDescription } from '../../api/requests/getWordDescription/getWordDescription';
import { WordData } from '../../types/translationTypes/translationTypes';
import axios from 'axios';
class TranslationStore {
  translationValue = '';
  wordData: WordData = {};
  otherMeaningsWordData: WordData[] = [];
  textAreaValue = '';
  isShowOtherMeanings = false;
  translationRequestError: string | boolean = '';
  decriptionRequestError: string | boolean = '';
  isOtherMeanings = true;

  constructor() {
    makeAutoObservable(this);
  }

  getTextTranslation = async (word: string) => {
    try {
      await getTranslation(word).then((translation) => {
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
    try {
      await getWordDescription(word).then((description) => {
        this.setDescriptionRequestError(false);
        this.setWordData(description.data.shift());
        this.setOtherMeaningsWordData(description.data);
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
    this.wordData = data;
  };

  setOtherMeaningsWordData = (data: WordData[]) => {
    data.shift();
    this.otherMeaningsWordData = data.filter((item) =>
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

  handleTextAreaValueChange = (value: string) => {
    this.textAreaValue = value;
  };

  hanldeOtherMeaningsVisibility = () => {
    this.isShowOtherMeanings = !this.isShowOtherMeanings;
  };
}

export default new TranslationStore();
