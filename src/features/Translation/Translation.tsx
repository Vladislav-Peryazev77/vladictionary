import { observer } from 'mobx-react-lite';
import TranslationStore from '../../stores/TranslationStore/TranslationStore';
import { WordData } from '../../stores/TranslationStore/TranslationStore';
import { Box, Button } from '@chakra-ui/react';
import { TranslationForm } from './components/TranslationForm';
import { TranslationWordBlock } from './components/TranslationWordBlock';
import { TranslationText } from './components/TranslationText';
import { TranslationLangSwitch } from './components/TranslationLangSwitch';

export const Translation = observer(() => {
  const {
    translationValue,
    wordData,
    isShowOtherMeanings,
    hanldeOtherMeaningsVisibility,
  } = TranslationStore;

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
              data={wordData?.find(
                (data: WordData, index: number) => index === 0,
              )}
            />
          )}
          {isShowOtherMeanings &&
            wordData.map((data: WordData, index: number) => (
              <TranslationWordBlock data={data} key={index} />
            ))}
          {wordData.length > 1 ? (
            <Button onClick={() => hanldeOtherMeaningsVisibility()}>
              {isShowOtherMeanings
                ? 'Close other meanings ⬆️'
                : 'Show other meanings ⬇️'}
            </Button>
          ) : null}
        </Box>
        <TranslationText>{translationValue}</TranslationText>
      </Box>
      <TranslationLangSwitch />
    </>
  );
});
