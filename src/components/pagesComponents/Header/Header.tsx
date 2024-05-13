import {
  Box,
  Text,
  keyframes,
  usePrefersReducedMotion,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const Header = () => {
  const neonEffect = keyframes`
  from { text-shadow: none; }
  to { text-shadow: 0 0 6px rgba(202, 228, 225, 0.98), 0 0 30px rgba(202, 228, 225, 0.42), 0 0 12px rgba(191, 226, 255, 0.58), 0 0 22px rgba(191, 226, 255, 0.84), 0 0 38px rgba(191, 226, 255, 0.88), 0 0 60px #FFF }
`;
  const logoAnimation = () => {
    const prefersReducedMotion = usePrefersReducedMotion();
    const animation = prefersReducedMotion
      ? undefined
      : `${neonEffect} 4s ease-in-out infinite alternate`;
    return <Text animation={animation}>~vladictionary</Text>;
  };
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
        sx={{}}
      >
        {logoAnimation()}
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
