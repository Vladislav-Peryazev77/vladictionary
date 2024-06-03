import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Box, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { createNeonAnimation } from './animations/createNeonAnimation';
import { createNavLinks } from './routes/routes';
import RegistrationStore from '../../../stores/RegistrationStore/RegistrationStore';

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
          {createNavLinks(currentUserId).map((navLink, index, array) => (
            <Box display="flex" gap="5px" alignItems="center" key={navLink.id}>
              <Box _hover={{ textDecoration: 'underline' }}>
                <Link to={navLink.url}>{navLink.title}</Link>
              </Box>
              {index < array.length - 1 && ' | '}
            </Box>
          ))}

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
