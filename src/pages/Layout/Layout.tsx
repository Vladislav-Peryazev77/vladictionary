import { PropsWithChildren } from 'react';
import { Box } from '@chakra-ui/react';
import { Header } from '../../components/pagesComponents/Header';
import { Footer } from '../../components/pagesComponents/Footer';

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      height="100dvh"
      fontFamily="Comfortaa"
    >
      <Header />
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexGrow={1}
        bgColor="#000"
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
};
