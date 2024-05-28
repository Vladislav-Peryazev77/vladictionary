import { Button } from '@chakra-ui/react';

interface AnswerVariantProps {
  answer: string;
  index: number;
  selectedAnswerIndex: number;
  onClick: (answer: string, index: number) => void;
}

export const AnswerVariant = ({
  answer,
  onClick,
  index,
  selectedAnswerIndex,
}: AnswerVariantProps) => {
  return (
    <Button
      fontSize={['16px', '16px', '20px', '20px']}
      onClick={() => onClick(answer, index)}
      bgColor={`${selectedAnswerIndex == index ? 'grey' : 'none'}`}
      _hover={{ bgColor: 'none' }}
    >
      {answer}
    </Button>
  );
};
