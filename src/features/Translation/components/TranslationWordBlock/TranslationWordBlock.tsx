import { WordData } from '../../../../types/translationTypes/translationTypes';
import { WordPhonetic } from './components/WordPhonetic';
import { WordSynonyms } from './components/WordSynonyms';
import { WordContextExamples } from './components/WordContextExamples';
import { Box } from '@chakra-ui/react';

interface TranslationWordBlockProps {
  data: WordData;
  isOtherMeanings?: boolean;
}

export const TranslationWordBlock = ({
  data,
  isOtherMeanings,
}: TranslationWordBlockProps) => {
  return (
    <Box marginBottom="30px">
      <WordPhonetic
        phonetics={data?.phonetics}
        word={data?.word}
        meanings={data?.meanings}
        isOtherMeaings={isOtherMeanings}
      />
      <WordSynonyms meanings={data?.meanings} />
      <WordContextExamples meanings={data?.meanings} />
    </Box>
  );
};
