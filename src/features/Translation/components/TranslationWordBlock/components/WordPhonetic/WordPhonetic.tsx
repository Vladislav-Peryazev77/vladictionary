import { Box, Text } from '@chakra-ui/react';
import TranslationStore from '../../../../../../stores/TranslationStore/TranslationStore';
import { toJS } from 'mobx';

// interface WordPhoneticProps {
//   word: string;
//   partOfSpeech: string;
//   phonetic: string;
// }

export const WordPhonetic = () =>
  //   {
  //   word,
  //   partOfSpeech,
  //   phonetic,
  // }: WordPhoneticProps
  {
    const { textAreaValue, wordData } = TranslationStore;
    return (
      <>
        <Box display="flex" justifyContent="space-between">
          {/* <Text fontSize="25px">Word</Text> */}
          <Text fontSize="25px">{`${textAreaValue.charAt(0).toUpperCase()}${textAreaValue.slice(1)}`}</Text>
          <button>
            <img src="src/assets/icons/pronunciation-icon.svg" />
          </button>
        </Box>
        <Text marginBottom="20px">
          {/* {partOfSpeech} <i>/{phonetic}/</i> */}
          {wordData.length > 0 && wordData[0].meanings[0].partOfSpeech}{' '}
          <i>
            /
            {wordData.length > 0 &&
              wordData[0].meanings[0].definitions[0].definition}
            /
          </i>
        </Text>
      </>
    );
  };
