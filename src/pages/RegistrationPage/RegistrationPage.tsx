import { observer } from 'mobx-react-lite';
import { Box, Button, FormControl, Text } from '@chakra-ui/react';
import RegistrationStore from '../../stores/RegistrationStore/RegistrationStore';

import { RegistrationInput } from './components/Input';

export const RegistrationPage = observer(() => {
  const {
    username,
    password,
    handleUserNameValueChange,
    handlePasswordValueChange,
    handleUserLogIn,
    handleUserLogOut,
    currentUser,
  } = RegistrationStore;

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
            <form action="" onSubmit={(event) => handleUserLogIn(event)}>
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
                <Button type="submit">Submit</Button>
              </FormControl>
            </form>
          </Box>
        </Box>
      )}
      {currentUser !== null && (
        <Box display="flex" flexDirection="column" gap="20px">
          <Text
            color="#fff"
            fontSize="30px"
          >{`Hello ${currentUser.get('username')}!`}</Text>
          <Button onClick={() => handleUserLogOut()}>Log Out</Button>
        </Box>
      )}
    </Box>
  );
});
