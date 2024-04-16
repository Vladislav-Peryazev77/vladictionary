import { Box } from '@chakra-ui/react';
import React from 'react';
import { Header } from '../../components/pagesComponents/Header/Header';
import { Footer } from '../../components/pagesComponents/Footer/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Box display="flex" flexDirection="column" height="100dvh">
      <Header />
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexGrow={1}
        paddingX={[0, 0, '30px']}
        paddingY={['10px', '10px', '30px']}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
};
