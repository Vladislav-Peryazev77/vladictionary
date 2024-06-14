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
  choices: string = '';

  constructor() {
    makeAutoObservable(this);
    this.getQuizWordData();
  }

  setQuestionArray = (questions: QuizWordData) => {
    this.questions = [...questions];
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

  pushQuizWordData = async ({
    translationValue,
    choices,
    textAreaValue,
  }: SubmitFormArguments) => {
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

  setChoices = (choicesStr: string) => {
    this.choices = choicesStr;
  };
}

export default new AdminPanelStore();
