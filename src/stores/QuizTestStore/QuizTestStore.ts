import { makeAutoObservable } from 'mobx';
import { QuizWordData } from '../../types/adminPanelTypes/adminPanelTypes';
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

  goToNextQuestionNumberCounter = () => {
    this.questionNumberCounter = this.questionNumberCounter + 1;
  };

  goToNextQuestion = () => {
    this.activeQuestion = this.activeQuestion + 1;
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

  handleNextQuestionChange = (questions: QuizWordData[]) => {
    if (this.questionNumberCounter !== questions.length - 1) {
      this.goToNextQuestion();
      this.goToNextQuestionNumberCounter();
    }
    this.updateResult();
    this.setSelectedAnswerIndex(null);
  };

  handleSelectedAnswerChange = (
    answer: string,
    index: number,
    questions: QuizWordData[],
  ) => {
    this.setSelectedAnswerIndex(index);
    if (answer === questions[this.questionNumberCounter].correctAnswer) {
      this.setSelectedAnswer(true);
      return;
    }
    this.setSelectedAnswer(false);
  };

  setProgressBarValue = (activeQuestion: number, questions: QuizWordData[]) => {
    this.progressBarValue = (activeQuestion / questions.length) * 100;
  };
}

export default new QuizTestStore();
