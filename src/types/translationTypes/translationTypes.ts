export type Phonetic = {
  text: string;
  audio: string;
};

export type Definition = {
  definition: string;
  example: string;
  synonyms: string[];
  antonyms: string[];
  id: string;
};

export type Meaning = {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms: string[];
};

export type WordData = {
  word: string;
  phonetic: string;
  phonetics: Phonetic[];
  origin: string;
  meanings: Meaning[];
  id: string;
};
