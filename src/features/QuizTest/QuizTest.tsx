import { Box, Button, CloseButton, Progress, Text } from '@chakra-ui/react';
import AdminPanelStore from '../../stores/AdminPanelStore/AdminPanelStore.ts';
import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { AnswerVariant } from './components/AnswerVariant';

export const QuizTest = observer(() => {
  const { questions } = AdminPanelStore;
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(5);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  const onClickNext = () => {
    setActiveQuestion((prev) => prev + 1);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : { ...prev, wrongAnswers: prev.wrongAnswers + 1 },
    );
  };

  const onAnswerSelected = (answer: string, index: number) => {
    setSelectedAnswerIndex(index);
    if (answer === questions[activeQuestion].correctAnswer) {
      setSelectedAnswer(true);
    } else {
      setSelectedAnswer(false);
    }
  };

  return (
    <Box
      maxWidth="1100px"
      width="100%"
      border="2px solid #ffffff80"
      borderRadius="20px"
      backdropFilter="blur(150px)"
      padding={['20px', '20px', '30px', '30px']}
      color="#fff"
      display="flex"
      flexDirection="column"
      alignItems="center"
      marginX={['0px', '0px', '20px', '20px']}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        marginBottom={['24px', '24px', '90px', '90px']}
        width="100%"
      >
        <Box display="flex" gap="5px" alignItems="center">
          <img src="src/assets/icons/score-icon.svg" />
          <Text>200</Text>
        </Box>
        <Text fontSize={['18px', '25px']}>Fantasy Quiz #156</Text>
        <CloseButton />
      </Box>
      <Box
        display={['flex', 'flex', 'none', 'none']}
        alignItems="center"
        gap="7px"
        width={['100%', '70%', '70%', '70%']}
        marginBottom="40px"
      >
        <Progress value={25} width="100%" />
        <Text>1/5</Text>
      </Box>

      <Box
        width="100%"
        maxWidth="690px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        textAlign="center"
        fontSize="26px"
        marginBottom="80px"
      >
        <Text
          marginBottom={['60px', '60px', '80px', '80px']}
          fontSize={['22px', '22px', '26px', '26px']}
        >
          {questions[activeQuestion]?.word}
        </Text>
        <Box
          display="flex"
          flexDirection="column"
          gap="15px"
          width="100%"
          maxWidth="500px"
        >
          {questions[activeQuestion]?.choices.map((answer, index) => (
            <AnswerVariant
              answer={answer}
              index={index}
              selectedAnswerIndex={selectedAnswerIndex}
              onClick={onAnswerSelected}
              key={answer}
            />
          ))}
        </Box>
      </Box>
      <Box
        width="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          display="flex"
          justifyContent="space-between"
          width={['100%', '70%', '65%', '65%']}
        >
          <Box
            display={['none', 'none', 'flex', 'flex']}
            alignItems="center"
            gap="7px"
          >
            <Progress value={25} width="200px" />
            <Text>1/5</Text>
          </Box>
          <Button
            width={['100%', '100%', 'unset', 'unset']}
            onClick={onClickNext}
            isDisabled={selectedAnswerIndex === 5}
          >
            {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </Box>
      </Box>
    </Box>
  );
});