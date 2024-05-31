import { makeAutoObservable } from 'mobx';
import { QuizWordData } from '../../types/adminPanelTypes/adminPanelTypes.ts';
import { QuizResult } from '../../types/quizTestTypes/quizTestTypes.ts';

class QuizTestStore {
  activeQuestion: number = 0;
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
    this.setResult();
  }

  setActiveQuestion = () => {
    this.activeQuestion = this.activeQuestion + 1;
  };

  setSelectedAnswer = (answer: boolean) => {
    this.selectedAnswer = answer;
  };

  setSelectedAnswerIndex = (answerIndex: number | null) => {
    this.selectedAnswerIndex = answerIndex;
  };

  setResult = () => {
    this.result = this.selectedAnswer
      ? {
          ...this.result,
          score: this.result.score + 5,
          correctAnswers: this.result.correctAnswers + 1,
        }
      : { ...this.result, wrongAnswers: this.result.wrongAnswers + 1 };
  };

  handleNextQuestionChange = (questions: QuizWordData[]) => {
    if (this.activeQuestion !== questions.length - 1) {
      this.setActiveQuestion();
    }
    this.setResult();
    this.setSelectedAnswerIndex(null);
  };

  handleSelectedAnswerChange = (
    answer: string,
    index: number,
    questions: QuizWordData[],
  ) => {
    this.setSelectedAnswerIndex(index);
    if (answer === questions[this.activeQuestion].correctAnswer) {
      this.setSelectedAnswer(true);
      return;
    }
    this.setSelectedAnswer(false);
  };

  setProgressBarValue = (activeQuestion: number, questions: QuizWordData[]) => {
    this.progressBarValue = ((activeQuestion + 1) / questions.length) * 100;
  };
}

export default new QuizTestStore();
