import { Box } from '@chakra-ui/react';
import { TranslationForm } from './components/TranslationForm';
import { TranslationWordBlock } from './components/TranslationWordBlock';
import { TranslationText } from './components/TranslationText';
import { TranslationLangSwitch } from './components/TranslationLangSwitch';

export const Translation = () => {
  return (
    <>
      <Box
        display="flex"
        border="solid 0.5px white"
        borderRadius="10px"
        marginBottom="15px"
        flexDirection={['column', 'column', 'row']}
      >
        <Box
          borderRight={['none', 'none', 'solid 0.5px white']}
          borderBottom={['solid 0.5px white', 'solid 0.5px white', 0]}
          padding="15px 25px"
          minHeight="350px"
          flexBasis="50%"
        >
          <TranslationForm />
          <TranslationWordBlock
            word="Word"
            partOfSpeech="noun"
            phonetic="wɜːd"
            synonyms={['word', 'word', 'word']}
            examples={[
              'content exapmle with this word',
              'content exapmle with this word',
              'content exapmle with this word',
            ]}
          />
        </Box>
        <TranslationText>Word</TranslationText>
      </Box>
      <TranslationLangSwitch />
    </>
  );
};
