import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { WordPhonetic } from './components/WordPhonetic/WordPhonetic';
import { WordSynonyms } from './components/WordSynonyms/WordSynonyms';
import { WordContextExamples } from './components/WordContextExamples/WordContextExamples';

interface TranslationWordBlock {
  word: string;
  partOfSpeech: string;
  phonetic: string;
  synonyms: string[];
  examples: string[];
}

export const TranslationWordBlock = ({
  word,
  partOfSpeech,
  phonetic,
  synonyms,
  examples,
}: TranslationWordBlock) => {
  return (
    <>
      <WordPhonetic
        word={word}
        partOfSpeech={partOfSpeech}
        phonetic={phonetic}
      />
      <WordSynonyms synonyms={synonyms} />
      <WordContextExamples examples={examples} />
    </>
  );
};
