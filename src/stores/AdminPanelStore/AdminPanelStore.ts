import { QuizWordData } from '../../types/adminPanelTypes/adminPanelTypes.ts';
import { makeAutoObservable, toJS } from 'mobx';

class AdminPanelStore {
  questions: QuizWordData[] = [];
  quizWordData: QuizWordData | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setQuizWordData = (data: QuizWordData) => {
    this.quizWordData = data;
  };

  setQuestionArray = (question: QuizWordData) => {
    if (question !== null) {
      this.questions.push(question);
      console.log(toJS(this.questions));
    }
  };
}

export default new AdminPanelStore();
