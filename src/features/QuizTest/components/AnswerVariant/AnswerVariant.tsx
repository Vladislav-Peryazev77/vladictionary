import { Button } from '@chakra-ui/react';

interface AnswerVariantProps {
  onClick: () => void;
  isSelected: boolean;
  children: React.ReactNode;
}

export const AnswerVariant = ({
  onClick,
  isSelected,
  children,
}: AnswerVariantProps) => {
  const handleAnswerClick = () => {
    onClick();
  };
  return (
    <Button
      fontSize={['16px', '16px', '20px', '20px']}
      onClick={handleAnswerClick}
      bgColor={isSelected ? 'grey' : 'none'}
      _hover={{ bgColor: 'none' }}
    >
      {children}
    </Button>
  );
};
