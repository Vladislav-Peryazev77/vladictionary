import { observer } from 'mobx-react-lite';
import TranslationStore from '../../stores/TranslationStore/TranslationStore.ts';
import { Box, Button, FormControl, Input, Text } from '@chakra-ui/react';
import { useState } from 'react';
import AdminPanelStore from '../../stores/AdminPanelStore/AdminPanelStore.ts';

export const AdminPanel = observer(() => {
  const { wordData, translationValue } = TranslationStore;
  const { quizWordData, setQuizWordData, setQuestionArray } = AdminPanelStore;

  const [value, setValue] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState('');

  const onSubmit = () => {
    const choicesArray = value.split(', ');
    const phoneticAudio = new Audio(
      `https://ssl.gstatic.com/dictionary/static/sounds/20200429/${wordData.word}--_gb_1.mp3`,
    );
    setQuizWordData({
      word: translationValue,
      choices: choicesArray,
      audio: phoneticAudio,
      correctAnswer: correctAnswer,
    });

    setQuestionArray(quizWordData);
  };
  return (
    <Box
      width="100%"
      maxWidth="600px"
      border="2px solid #ffffff80"
      borderRadius="20px"
      backdropFilter="blur(100px)"
      padding="20px"
      color="#fff"
    >
      <form>
        <FormControl display="flex" flexDirection="column" gap="15px">
          <Text>
            {wordData.word} - {translationValue}
          </Text>
          <Input onChange={(event) => setValue(event.target.value)} />
          <Input onChange={(event) => setCorrectAnswer(event.target.value)} />
          <Button type="button" onClick={onSubmit}>
            Submit
          </Button>
        </FormControl>
      </form>
    </Box>
  );
});
