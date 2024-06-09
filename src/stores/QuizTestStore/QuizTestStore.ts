import { makeAutoObservable } from 'mobx';
import { QuizResult } from '../../types/quizTestTypes/quizTestTypes';

class QuizTestStore {
  activeQuestion: number = 1;
  questionNumberCounter: number = 0;
  selectedAnswer: boolean = false;
  selectedAnswerIndex: number | null = null;
  result: QuizResult = {
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  };
  progressBarValue: number = 0;

  constructor() {
    makeAutoObservable(this);
  }

  setQuestionNumberCounter = (questionNumber: number) => {
    this.questionNumberCounter = questionNumber;
  };

  setActiveQuestionNumber = (questionNumber: number) => {
    this.activeQuestion = questionNumber;
  };

  setSelectedAnswer = (answer: boolean) => {
    this.selectedAnswer = answer;
  };

  setSelectedAnswerIndex = (answerIndex: number | null) => {
    this.selectedAnswerIndex = answerIndex;
  };

  updateResult = () => {
    this.result = this.selectedAnswer
      ? {
          ...this.result,
          score: this.result.score + 5,
          correctAnswers: this.result.correctAnswers + 1,
        }
      : { ...this.result, wrongAnswers: this.result.wrongAnswers + 1 };
  };

  goToNextQuestion = (questionsLength: number) => {
    if (this.questionNumberCounter !== questionsLength - 1) {
      this.setActiveQuestionNumber(this.activeQuestion + 1);
      this.setProgressBarValue(this.activeQuestion, questionsLength);
      this.setQuestionNumberCounter(this.questionNumberCounter + 1);
    }
    this.updateResult();
    this.setSelectedAnswerIndex(null);
  };

  selectAnswer = (answer: string, index: number, correctAnswer: string) => {
    this.checkSelectedAnswer(answer, correctAnswer);
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
}

export default new QuizTestStore();
