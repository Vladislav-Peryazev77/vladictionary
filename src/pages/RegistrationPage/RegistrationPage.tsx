import { observer } from 'mobx-react-lite';
import { Box, Button, FormControl, Text } from '@chakra-ui/react';
import RegistrationStore from '../../stores/RegistrationStore/RegistrationStore';
import { useNavigate } from 'react-router-dom';

import { RegistrationInput } from './components/Input';
import { useEffect } from 'react';

export const RegistrationPage = observer(() => {
  const {
    username,
    password,
    handleUserNameValueChange,
    handlePasswordValueChange,
    handleUserLogIn,
    currentUser,
  } = RegistrationStore;

  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser !== null) {
      navigate('/');
    }
  }, [currentUser]);

  return (
    <Box
      position="absolute"
      top="0px"
      bgImage="url('src/assets/images/bg-registration-page.jpg')"
      width="100%"
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      height="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      {currentUser === null && (
        <Box
          position="relative"
          maxWidth="420px"
          width="100%"
          minHeight="450px"
          display="flex"
          padding="40px 20px"
          justifyContent="center"
          alignItems="center"
          border="2px solid #ffffff80"
          borderRadius="20px"
          backdropFilter="blur(8px)"
        >
          <Box width="100%">
            <form action="">
              <FormControl display="flex" flexDirection="column" gap="40px">
                <Text fontSize="35px" textAlign="center" color="#FFF">
                  Login
                </Text>
                <RegistrationInput
                  labelText="UserName"
                  onChange={handleUserNameValueChange}
                  inputValue={username}
                />
                <RegistrationInput
                  labelText="Password"
                  onChange={handlePasswordValueChange}
                  inputValue={password}
                />
                <Button type="button" onClick={handleUserLogIn}>
                  Submit
                </Button>
              </FormControl>
            </form>
          </Box>
        </Box>
      )}
    </Box>
  );
});
