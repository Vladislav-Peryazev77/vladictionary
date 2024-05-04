import { observer } from 'mobx-react-lite';
import TranslationStore from '../../stores/TranslationStore/TranslationStore';
import { WordData } from '../../types/translationTypes/translationTypes';
import { Box, Button, Collapse, Text, useDisclosure } from '@chakra-ui/react';
import { TranslationForm } from './components/TranslationForm';
import { TranslationWordBlock } from './components/TranslationWordBlock';
import { TranslationText } from './components/TranslationText';
import { TranslationLangSwitch } from './components/TranslationLangSwitch';

export const Translation = observer(() => {
  const {
    translationValue,
    wordData,
    isShowOtherMeanings,
    translationRequestError,
    decriptionRequestError,
    otherMeaningsWordData,
    isOtherMeanings,
    hanldeOtherMeaningsVisibility,
  } = TranslationStore;

  const { isOpen, onToggle } = useDisclosure();
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
          {wordData && (
            <TranslationWordBlock
              data={wordData}
              isOtherMeanings={isOtherMeanings}
            />
          )}

          <Collapse in={isOpen} animateOpacity>
            {isShowOtherMeanings &&
              otherMeaningsWordData.map((data: WordData, index: number) => (
                <TranslationWordBlock
                  key={index}
                  data={data}
                  isOtherMeanings={!isOtherMeanings}
                />
              ))}
          </Collapse>
          {otherMeaningsWordData.length >= 1 ? (
            <Button
              onClick={() => {
                hanldeOtherMeaningsVisibility();
                onToggle();
              }}
            >
              {isShowOtherMeanings
                ? 'Close other meanings ⬆️'
                : 'Show other meanings ⬇️'}
            </Button>
          ) : null}
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
