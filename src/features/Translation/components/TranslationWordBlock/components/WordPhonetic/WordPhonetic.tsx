import {
  Phonetic,
  Meaning,
} from '../../../../../../types/translationTypes/translationTypes';
import { Box, Text } from '@chakra-ui/react';

interface WordPhoneticProps {
  phonetics?: Phonetic[];
  meanings?: Meaning[];
  word?: string;
  isOtherMeaings?: boolean;
}

export const WordPhonetic = ({
  phonetics,
  word,
  meanings,
  isOtherMeaings,
}: WordPhoneticProps) => {
  return (
    <>
      {isOtherMeaings ? (
        meanings && meanings.map((meaning) => meaning.partOfSpeech).join(', ')
      ) : (
        <Box>
          {phonetics && (
            <Box display="flex" justifyContent="space-between">
              <Text fontSize="25px" textTransform="capitalize">
                {word}
              </Text>
              <button>
                <img src="src/assets/icons/pronunciation-icon.svg" />
              </button>
            </Box>
          )}
          <Text marginBottom="20px">
            {meanings &&
              meanings.map((meaning) => meaning.partOfSpeech).join(', ')}
            {phonetics && phonetics?.find((phonetic) => phonetic.text)?.text}
          </Text>
        </Box>
      )}
    </>
  );
};
