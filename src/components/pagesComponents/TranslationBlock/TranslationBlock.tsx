import { Box, Select, Text } from '@chakra-ui/react';
import React from 'react';
import { TranslationForm } from './components/TranslationForm/TranslationForm';
import { TranslationWordBlock } from './components/TranslationWordBlock/TranslationWordBlock';
import { TranslationText } from './components/TranslationText/TranslationText';
import { LanguageSwitch } from './components/LanguageSwitch/LanguageSwitch';

export const TranslationBlock = () => {
  return (
    <>
      <Box
        padding="40px"
        bgColor="#ca9ff5"
        borderRadius="15px"
        w="100%"
        maxWidth="1200px"
        color="#380966"
      >
        <Box
          display="flex"
          border="solid 0.5px white"
          borderRadius="10px"
          marginBottom="15px"
        >
          <Box
            borderRight="solid 0.5px white"
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
        <LanguageSwitch />
      </Box>
    </>
  );
};
