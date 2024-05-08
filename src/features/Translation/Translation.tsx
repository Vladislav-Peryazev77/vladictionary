import { observer } from 'mobx-react-lite';
import TranslationStore from '../../stores/TranslationStore/TranslationStore';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
  Text,
} from '@chakra-ui/react';
import { WordData } from '../../types/translationTypes/translationTypes';
import { TranslationForm } from './components/TranslationForm';
import { TranslationWordBlock } from './components/TranslationWordBlock';
import { TranslationText } from './components/TranslationText';
import { TranslationLangSwitch } from './components/TranslationLangSwitch';

export const Translation = observer(() => {
  const {
    translationValue,
    wordData,
    translationRequestError,
    decriptionRequestError,
    otherMeaningsWordData,
    isOtherMeanings,
  } = TranslationStore;

  return (
    <>
      <Box
        display="flex"
        border="solid 0.5px white"
        borderRadius="10px"
        marginBottom="15px"
        flexDirection={['column', 'column', 'row']}
        maxWidth="1200px"
      >
        <Box
          borderRight={['none', 'none', 'solid 0.5px white']}
          borderBottom={['solid 0.5px white', 'solid 0.5px white', 0]}
          padding="15px 25px"
          minHeight="350px"
          flexBasis="50%"
        >
          <TranslationForm />
          {wordData && <TranslationWordBlock data={wordData} />}
          {otherMeaningsWordData.length >= 1 && (
            <Accordion allowMultiple>
              <AccordionItem border="none">
                {({ isExpanded }) => (
                  <>
                    <AccordionPanel pb={4} padding={0}>
                      {otherMeaningsWordData.map((data: WordData) => (
                        <TranslationWordBlock
                          key={data.id}
                          data={data}
                          isOtherMeanings
                        />
                      ))}
                    </AccordionPanel>
                    <Box>
                      <AccordionButton
                        border="none"
                        width="auto"
                        bgColor="white"
                        _hover={{ bg: '#E2E8F0' }}
                        borderRadius="0.375rem"
                      >
                        {isExpanded ? (
                          <Box>Close other meanings ⬆️</Box>
                        ) : (
                          <Box>Show other meanings ⬇️</Box>
                        )}
                      </AccordionButton>
                    </Box>
                  </>
                )}
              </AccordionItem>
            </Accordion>
          )}
          {decriptionRequestError && (
            <Text color="red">{decriptionRequestError}</Text>
          )}
          {translationRequestError && (
            <Text color="red">{translationRequestError}</Text>
          )}
        </Box>
        <TranslationText>{translationValue}</TranslationText>
      </Box>
      <TranslationLangSwitch />
    </>
  );
});
