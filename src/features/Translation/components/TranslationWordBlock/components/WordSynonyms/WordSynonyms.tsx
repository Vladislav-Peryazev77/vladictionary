import { Text } from '@chakra-ui/react';
import { Meaning } from '../../../../../../types/translationTypes/translationTypes';

interface WordSynonymsProps {
  meanings?: Meaning[];
}

export const WordSynonyms = ({ meanings }: WordSynonymsProps) => {
  return (
    <Text marginBottom="20px">
      {meanings?.map((meaning) =>
        meaning.synonyms.map((synonym) => synonym).join(', '),
      )}
    </Text>
  );
};
