import {
  QuizWordData,
  SubmitFormArguments,
} from '../../types/adminPanelTypes/adminPanelTypes';
import { makeAutoObservable } from 'mobx';
import Parse from 'parse/dist/parse.min.js';
import { parseInitialize } from '../../parse/parseInitialize.ts';

parseInitialize();

class AdminPanelStore {
  questions: QuizWordData[] = [];
  // quizWordData: QuizWordData | null = null;
  choices: string = '';

  constructor() {
    makeAutoObservable(this);
    this.getQuizWordData();
  }

  setQuestionArray = (question: QuizWordData) => {
    this.questions = [...question];
  };

  getQuizWordData = async () => {
    const parseQuery: Parse.Query = new Parse.Query('QuizTestData');
    try {
      const quizWordData: QuizWordData = await parseQuery.find();

      this.setQuestionArray(quizWordData);
    } catch (error: any) {
      console.log(`Error: ${error}`);
    }
  };

  pushQuizWordData = async (
    translationValue: string,
    choices: string,
    textAreaValue: string,
  ) => {
    const translation: string = translationValue;
    const choicesArray: string[] = choices.split(', ');
    const correctAnswer: string = textAreaValue;
    let QuizTestData: Parse.Object = new Parse.Object('QuizTestData');
    QuizTestData.set('word', translation);
    QuizTestData.set('choices', choicesArray);
    QuizTestData.set('correctAnswer', correctAnswer);
    try {
      await QuizTestData.save();
    } catch (error: any) {
      console.log(`Error! ${error.message}`);
    }
  };

  submitForm = ({
    translationValue,
    choices,
    // wordData,
    textAreaValue,
  }: SubmitFormArguments) => {
    // const choicesArray = choices.split(', ');
    // const phoneticAudio = new Audio(
    //   `https://ssl.gstatic.com/dictionary/static/sounds/20200429/${wordData.word}--_gb_1.mp3`,
    // );
    // this.setQuizWordData({
    //   word: translationValue,
    //   choices: choicesArray,
    //   audio: phoneticAudio,
    //   correctAnswer: textAreaValue,
    // });
    // if (this.quizWordData === null) {
    //   return;
    // }
    //
    // this.setQuestionArray(this.quizWordData);
    this.pushQuizWordData(translationValue, choices, textAreaValue);
  };

  setChoices = (choicesStr: string) => {
    this.choices = choicesStr;
  };
}

export default new AdminPanelStore();
