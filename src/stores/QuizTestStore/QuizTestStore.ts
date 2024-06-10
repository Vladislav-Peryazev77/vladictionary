import { makeAutoObservable } from 'mobx';
import { QuizResult } from '../../types/quizTestTypes/quizTestTypes';

class QuizTestStore {
  activeQuestion: number = 1;
  questionNumberCounter: number = 0;
  currentSelectedAnswer: string | null = null;
  isSelectedAnswerRight: boolean = false;
  selectedAnswerIndex: number | null = null;
  result: QuizResult = {
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  };
  progressBarValue: number = 0;
  isShowResultScreen: boolean = false;

  constructor() {
    makeAutoObservable(this);
    this.setIsShowResultScreen(false);
  }

  setQuestionNumberCounter = (questionNumber: number) => {
    this.questionNumberCounter = questionNumber;
  };

  setActiveQuestionNumber = (questionNumber: number) => {
    this.activeQuestion = questionNumber;
  };

  setSelectedAnswer = (answer: boolean) => {
    this.isSelectedAnswerRight = answer;
  };

  setSelectedAnswerIndex = (answerIndex: number | null) => {
    this.selectedAnswerIndex = answerIndex;
  };

  updateResult = () => {
    this.result = this.isSelectedAnswerRight
      ? {
          ...this.result,
          score: this.result.score + 5,
          correctAnswers: this.result.correctAnswers + 1,
        }
      : { ...this.result, wrongAnswers: this.result.wrongAnswers + 1 };
  };

  goToNextQuestion = (questionsLength: number, correctAnswer: string) => {
    if (this.questionNumberCounter !== questionsLength - 1) {
      this.setActiveQuestionNumber(this.activeQuestion + 1);
      this.setProgressBarValue(this.activeQuestion, questionsLength);
    }
    this.setQuestionNumberCounter(this.questionNumberCounter + 1);
    if (this.currentSelectedAnswer !== null) {
      this.checkSelectedAnswer(this.currentSelectedAnswer, correctAnswer);
    }
    this.updateResult();
    this.setSelectedAnswerIndex(null);
    if (this.questionNumberCounter === questionsLength) {
      this.setIsShowResultScreen(true);
    }
  };

  selectAnswer = (answer: string, index: number) => {
    this.setCurrentSelectedAnswer(answer);
    this.setSelectedAnswerIndex(index);
  };

  checkSelectedAnswer = (answer: string, correctAnswer: string) => {
    if (answer === correctAnswer) {
      this.setSelectedAnswer(true);
      return;
    }
    this.setSelectedAnswer(false);
  };

  setProgressBarValue = (activeQuestion: number, questionsLength: number) => {
    this.progressBarValue = (activeQuestion / questionsLength) * 100;
  };

  setCurrentSelectedAnswer = (answer: string) => {
    this.currentSelectedAnswer = answer;
  };

  setIsShowResultScreen = (isShowResultScreen: boolean) => {
    this.isShowResultScreen = isShowResultScreen;
  };
}

export default new QuizTestStore();
