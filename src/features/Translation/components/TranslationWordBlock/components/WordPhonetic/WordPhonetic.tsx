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
  const phoneticAudio = new Audio(
    `https://ssl.gstatic.com/dictionary/static/sounds/20200429/${word}--_gb_1.mp3`,
  );

  if (isOtherMeaings) {
    return (
      <>
        {meanings && meanings.map((meaning) => meaning.partOfSpeech).join(', ')}
      </>
    );
  }
  return (
    <Box>
      {phonetics && (
        <Box display="flex" justifyContent="space-between">
          <Text fontSize="25px" textTransform="capitalize">
            {word}
          </Text>
          <button onClick={() => phoneticAudio.play()}>
            <img src="src/assets/icons/pronunciation-icon.svg" />
          </button>
        </Box>
      )}
      <Text marginBottom="20px">
        {meanings && meanings.map((meaning) => meaning.partOfSpeech).join(', ')}
        {phonetics && phonetics?.find((phonetic) => phonetic.text)?.text}
      </Text>
    </Box>
  );
};
