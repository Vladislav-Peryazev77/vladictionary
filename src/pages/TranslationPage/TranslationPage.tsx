import { Box } from '@chakra-ui/react';
import { Translation } from '../../features/Translation';

export const TranslationPage = () => {
  return (
    <Box
      padding={['12px', '15px', '20px', '40px']}
      bgColor="#ca9ff5"
      borderRadius="15px"
      w="100%"
      maxWidth="1200px"
      color="#380966"
    >
      <Translation />
    </Box>
  );
};
