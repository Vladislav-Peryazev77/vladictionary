import { Box, Button, FormControl, Text } from '@chakra-ui/react';
import { RegistrationInput } from './components/Input';

export const RegistrationPage = () => {
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
          <form action="">
            <FormControl display="flex" flexDirection="column" gap="40px">
              <Text fontSize="35px" textAlign="center" color="#FFF">
                Login
              </Text>
              <RegistrationInput labelText="Email" />
              <RegistrationInput labelText="Password" />
              <Button>Submit</Button>
            </FormControl>
          </form>
        </Box>
      </Box>
    </Box>
  );
};
