import {
  Box,
  Text,
  keyframes,
  usePrefersReducedMotion,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { createNeonAnimation } from './animations/createNeonAnimation';

export const Header = () => {
  return (
    <>
      <Box
        color="#fff"
        padding={['5px', '10px', '15px 30px']}
        justifyContent="space-between"
        display="flex"
        fontSize={['15px', '15px', '25px', '30px']}
        alignItems="center"
        zIndex={2}
      >
        <Text animation={createNeonAnimation()}>~vladictionary</Text>
        <Box
          display="flex"
          gap="5px"
          fontSize={['15px', '15px', '20px', '25px']}
        >
          <Box _hover={{ textDecoration: 'underline' }}>
            <Link to="/">Translation</Link>
          </Box>
          {' | '}
          <Box _hover={{ textDecoration: 'underline' }}>
            <Link to="/dictionary">Dictionary</Link>
          </Box>
        </Box>
      </Box>
    </>
  );
};
