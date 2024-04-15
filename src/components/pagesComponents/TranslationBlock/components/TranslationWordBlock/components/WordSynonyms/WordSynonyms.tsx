import { Text } from '@chakra-ui/react';
import React from 'react';

interface WordSynonyms {
  synonyms: string[];
}

export const WordSynonyms = ({ synonyms }: WordSynonyms) => {
  return <Text marginBottom="20px">{synonyms.join(', ')}</Text>;
};
