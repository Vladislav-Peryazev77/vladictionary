import { Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <>
      <Box
        bgColor="#ca9ff5"
        color="#9433f5"
        padding={['5px', '10px', '15px 30px']}
        justifyContent="space-between"
        display="flex"
        fontSize={['15px', '15px', '25px', '30px']}
        alignItems="center"
      >
        ~vladictionary
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
