import {
  QuizWordData,
  SubmitFormArguments,
} from '../../types/adminPanelTypes/adminPanelTypes';
import { makeAutoObservable } from 'mobx';

class AdminPanelStore {
  questions: QuizWordData[] = [];
  quizWordData: QuizWordData | null = null;
  choices: string = '';

  constructor() {
    makeAutoObservable(this);
  }

  setQuizWordData = (data: QuizWordData) => {
    this.quizWordData = data;
  };

  setQuestionArray = (question: QuizWordData) => {
    if (question !== null) {
      this.questions.push(question);
    }
  };

  handleFormSubmit = ({
    translationValue,
    choices,
    wordData,
    textAreaValue,
  }: SubmitFormArguments) => {
    const choicesArray = choices.split(', ');
    const phoneticAudio = new Audio(
      `https://ssl.gstatic.com/dictionary/static/sounds/20200429/${wordData.word}--_gb_1.mp3`,
    );
    this.setQuizWordData({
      word: translationValue,
      choices: choicesArray,
      audio: phoneticAudio,
      correctAnswer: textAreaValue,
    });
    if (this.quizWordData !== null) {
      this.setQuestionArray(this.quizWordData);
    }
  };

  handleChoiceChange = (choicesStr: string) => {
    this.choices = choicesStr;
  };
}

export default new AdminPanelStore();
