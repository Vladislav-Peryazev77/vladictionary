import { Box } from '@chakra-ui/react';

interface PageWrapperProps {
  url: string;
  children: React.ReactNode;
}

export const PageWrapper = ({ url, children }: PageWrapperProps) => {
  return (
    <Box
      width="100%"
      height="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgImage={`url(${url})`}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
    >
      {children}
    </Box>
  );
};
