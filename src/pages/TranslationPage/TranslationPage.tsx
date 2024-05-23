import { Box } from '@chakra-ui/react';
import { Translation } from '../../features/Translation';

export const TranslationPage = () => {
  return (
    <Box
      width="100%"
      height="100%"
      bgImage="url('src/assets/images/bg-transl-test.jpg')"
      bgRepeat="no-repeat"
      bgSize="cover"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        padding={['12px', '15px', '20px', '40px']}
        border="2px solid #ffffff80"
        borderRadius="20px"
        backdropFilter="blur(100px)"
        width="100%"
        maxWidth="1200px"
        color="#fff"
        maxHeight="88dvh"
      >
        <Translation />
      </Box>
    </Box>
  );
};
