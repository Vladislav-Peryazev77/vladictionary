import { Box, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { createNeonAnimation } from './animations/createNeonAnimation';
import { observer } from 'mobx-react-lite';
import RegistrationStore from '../../../stores/RegistrationStore/RegistrationStore';

export const Header = observer(() => {
  const { currentUser, handleUserLogOut } = RegistrationStore;

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
          alignItems="center"
        >
          <Box _hover={{ textDecoration: 'underline' }}>
            <Link to="/">Translation</Link>
          </Box>
          {' | '}
          <Box _hover={{ textDecoration: 'underline' }}>
            <Link to="/dictionary">Dictionary</Link>
          </Box>
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
