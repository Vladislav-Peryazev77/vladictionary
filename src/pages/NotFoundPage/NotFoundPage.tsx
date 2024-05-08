import { Heading, Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
  return (
    <>
      <Heading display="flex" flexDirection="column">
        404 Not Found
        <Box _hover={{ textDecoration: 'underline' }}>
          <Link to="/">Go to Traslation Page</Link>
        </Box>
      </Heading>
    </>
  );
};
