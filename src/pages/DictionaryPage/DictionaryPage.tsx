import { Box } from '@chakra-ui/react';
import { QuizText } from '../../features/QuizTest';

export const DictionaryPage = () => {
  return (
    <Box
      bgImage="url('src/assets/images/bg-dictionary-test1.jpg')"
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      width="100%"
      height="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <QuizText />
    </Box>
  );
};
