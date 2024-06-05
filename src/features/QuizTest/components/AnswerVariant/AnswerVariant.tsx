import { Button } from '@chakra-ui/react';

interface AnswerVariantProps {
  answer: string;
  index: number;
  selectedAnswerIndex: number | null;
  onClick: (answer: string, index: number) => void;
}

export const AnswerVariant = ({
  answer,
  onClick,
  index,
  selectedAnswerIndex,
}: AnswerVariantProps) => {
  const handleAnswerClick = () => {
    onClick(answer, index);
  };
  return (
    <Button
      fontSize={['16px', '16px', '20px', '20px']}
      onClick={handleAnswerClick}
      bgColor={selectedAnswerIndex == index ? 'grey' : 'none'}
      _hover={{ bgColor: 'none' }}
    >
      {answer}
    </Button>
  );
};
