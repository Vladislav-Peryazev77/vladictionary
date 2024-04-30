import {
  Meaning,
  Phonetic,
} from '../../../../../../stores/TranslationStore/TranslationStore';
import { Box, Text } from '@chakra-ui/react';

interface WordPhoneticProps {
  phonetics?: Phonetic[];
  meanings?: Meaning[];
  word?: string;
}

export const WordPhonetic = ({
  phonetics,
  word,
  meanings,
}: WordPhoneticProps) => {
  return (
    <>
      {phonetics && (
        <Box display="flex" justifyContent="space-between">
          <Text fontSize="25px">{`${word?.charAt(0).toUpperCase()}${word?.slice(1)}`}</Text>
          <button>
            <img src="src/assets/icons/pronunciation-icon.svg" />
          </button>
        </Box>
      )}
      <Text marginBottom="20px">
        {meanings && meanings.map((meaning) => meaning.partOfSpeech).join(', ')}{' '}
        {phonetics && phonetics?.find((phonetic) => phonetic.text)?.text}
      </Text>
    </>
  );
};
