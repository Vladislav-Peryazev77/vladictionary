import { Box } from '@chakra-ui/react';
import { Translation } from '../../features/Translation';
import { PageWrapper } from '../../components/pagesComponents/PageWrapper';

export const TranslationPage = () => {
  return (
    <PageWrapper url="src/assets/images/bg-transl-test.jpg">
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
    </PageWrapper>
  );
};
