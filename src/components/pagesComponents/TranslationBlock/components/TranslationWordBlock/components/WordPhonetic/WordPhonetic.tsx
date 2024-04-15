import { Box, Text } from '@chakra-ui/react';
import React from 'react';

interface WordPhoneticProps {
  word: string;
  partOfSpeech: string;
  phonetic: string;
}

export const WordPhonetic = ({
  word,
  partOfSpeech,
  phonetic,
}: WordPhoneticProps) => {
  return (
    <>
      <Box display="flex" justifyContent="space-between">
        <Text fontSize="25px">{word}</Text>
        <button>
          <img src="src/assets/icons/pronunciation-icon.svg" />
        </button>
      </Box>
      <Text marginBottom="20px">
        {partOfSpeech} <i>/{phonetic}/</i>
      </Text>
    </>
  );
};
