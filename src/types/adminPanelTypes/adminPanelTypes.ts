export type QuizWordData = {
  word: string;
  choices: string[];
  audio: object;
  correctAnswer: string;
};

export type SubmitFormArguments = {
  translationValue: string;
  choices: string;
  textAreaValue: string;
};
