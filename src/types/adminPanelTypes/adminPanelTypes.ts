import { WordData } from '../translationTypes/translationTypes';

export type QuizWordData = {
  word: string;
  choices: string[];
  audio?: object;
  correctAnswer: string;
};

export type SubmitFormArguments = {
  translationValue: string;
  choices: string;
  wordData: WordData;
  textAreaValue: string;
};
