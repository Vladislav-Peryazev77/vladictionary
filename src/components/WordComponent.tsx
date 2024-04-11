import React from "react";

interface Phonetic {
  text: string;
  audio?: string;
}

interface Definition {
  definition: string;
  example: string;
  synonyms: string[];
  antonyms: string[];
}

interface Meaning {
  partOfSpeech: string;
  definitions: Definition[];
}

interface WordData {
  word: string;
  phonetic: string;
  phonetics: Phonetic[];
  origin: string;
  meanings: Meaning[];
}

interface WordComponentProps {
  wordData: WordData;
}

export const WordComponent = ({ wordData }: WordComponentProps) => {
  return (
    <div>
      <p>Phonetic: {wordData.phonetic}</p>
      <h2>Meanings:</h2>
      {wordData.meanings.map((meaning, index) => (
        <div key={index}>
          <h3>{meaning.partOfSpeech}</h3>
          <ul>
            {meaning.definitions.map((definition, index) => (
              <li key={index}>
                <p>Definition: {definition.definition}</p>
                <p>Example: {definition.example}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default WordComponent;
