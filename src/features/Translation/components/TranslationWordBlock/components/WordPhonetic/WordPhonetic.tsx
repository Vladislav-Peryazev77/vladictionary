import { Box, Text } from '@chakra-ui/react';
import TranslationStore, {
  Meaning,
  Phonetic,
} from '../../../../../../stores/TranslationStore/TranslationStore';

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
  // const { textAreaValue, wordData } = TranslationStore;
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
        {/* {meanings && meanings[0].partOfSpeech}{' '} */}
        {phonetics && phonetics?.find((phonetic) => phonetic.text)?.text}
      </Text>
    </>
  );
};
