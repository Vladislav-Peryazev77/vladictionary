import { observer } from 'mobx-react-lite';
import { Box, Text } from '@chakra-ui/react';
import QuizTestStore from '../../../../stores/QuizTestStore/QuizTestStore';
import AdminPanelStore from '../../../../stores/AdminPanelStore/AdminPanelStore';

export const QuizResultText = observer(() => {
  const { result } = QuizTestStore;
  const { questions } = AdminPanelStore;

  const quizResultTextArray = [
    { 'Total Question: ': questions.length },
    { 'Total Score: ': result.score },
    { 'Correct Answers: ': result.correctAnswers },
    { 'Wrong Answers: ': result.wrongAnswers },
  ];

  return (
    <Box>
      <Text fontSize="30px" marginBottom="15px">
        Lesson complete!
      </Text>
      <Text marginBottom="5px" fontSize="20px">
        Result
      </Text>
      {quizResultTextArray.map((item) => (
        <Text key={JSON.stringify(item)}>{Object.entries(item)}</Text>
      ))}
    </Box>
  );
});
