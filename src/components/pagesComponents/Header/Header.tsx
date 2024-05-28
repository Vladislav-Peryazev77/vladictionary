import { Box, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { createNeonAnimation } from './animations/createNeonAnimation';
import { observer } from 'mobx-react-lite';
import RegistrationStore from '../../../stores/RegistrationStore/RegistrationStore';
import { useEffect } from 'react';

export const Header = observer(() => {
  const { currentUser, handleUserLogOut, currentUserId, getCurrentUser } =
    RegistrationStore;
  useEffect(() => {
    if (currentUser === null) {
      getCurrentUser();
    }
  }, []);
  return (
    <>
      <Box
        color="#fff"
        padding={['5px', '10px', '15px 30px']}
        justifyContent="space-between"
        display="flex"
        fontSize={['15px', '15px', '25px', '30px']}
        alignItems="center"
        position="absolute"
        width="100%"
      >
        <Text animation={createNeonAnimation()}>~vladictionary</Text>
        <Box
          display="flex"
          gap="5px"
          fontSize={['15px', '15px', '20px', '25px']}
          alignItems="center"
        >
          <Box _hover={{ textDecoration: 'underline' }}>
            <Link to="/">Translation</Link>
          </Box>
          {' | '}
          <Box _hover={{ textDecoration: 'underline' }}>
            <Link to="/dictionary">Dictionary</Link>
          </Box>
          {currentUserId === 'aZ08EgqfHC' && (
            <>
              {' | '}
              <Link to={'/admin-panel'}>A</Link>
            </>
          )}
          {currentUser && (
            <>
              {' | '}
              <button onClick={handleUserLogOut}>
                <img src="src/assets/icons/logout-icon.svg" />
              </button>
            </>
          )}
        </Box>
      </Box>
    </>
  );
});
