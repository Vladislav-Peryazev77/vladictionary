import { Box, Button, FormControl, Text } from '@chakra-ui/react';
import { RegistrationInput } from './components/Input';
import { useState } from 'react';
// const Parse = require('parse/dist/parse.min.js');
import Parse from 'parse/dist/parse.min.js';

export const RegistrationPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUserRegistration = async function (): Promise<boolean> {
    const emailValue: string = email;
    const passwordValue: string = password;
    try {
      const createdUser: Parse.User = await Parse.User.signUp(
        emailValue,
        passwordValue,
      );
      alert(
        `Success! User ${createdUser.getUsername()} was successfully created!`,
      );
      return true;
    } catch (error: any) {
      alert(`Error! ${error}`);
      return false;
    }
  };

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
          <form action="" onSubmit={() => handleUserRegistration()}>
            <FormControl display="flex" flexDirection="column" gap="40px">
              <Text fontSize="35px" textAlign="center" color="#FFF">
                Login
              </Text>
              <RegistrationInput text="Email" />
              <RegistrationInput text="Password" />
              <Button type="submit">Submit</Button>
            </FormControl>
          </form>
        </Box>
      </Box>
    </Box>
  );
};
