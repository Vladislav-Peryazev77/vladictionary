import { observer } from 'mobx-react-lite';
// import Parse from 'parse/dist/parse.min.js';
import { Box, Button, FormControl, Text } from '@chakra-ui/react';
import RegistrationStore from '../../stores/RegistrationStore/RegistrationStore';

import { RegistrationInput } from './components/Input';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const RegistrationPage = observer(() => {
  // const [currentUser, setCurrentUser] = useState<Parse.Object | null>(null);

  const {
    username,
    password,
    handleUserNameValueChange,
    handlePasswordValueChange,
    handleUserLogIn,
    handleUserLogOut,
    currentUser,
  } = RegistrationStore;

  const navigate = useNavigate();

  // const handleUserLogIn = async function (
  //   event: React.FormEvent<HTMLFormElement>,
  // ): Promise<boolean> {
  //   event.preventDefault();
  //   try {
  //     const loggedInUser: Parse.User = await Parse.User.logIn(
  //       username,
  //       password,
  //     );
  //     alert(
  //       `Success! User ${loggedInUser.get('username')} has successfully signed in!`,
  //     );

  //     // const currentUser: Parse.User = await Parse.User.current();

  //     handleUserNameValueChange('');
  //     handlePasswordValueChange('');

  //     getCurrentUser();
  //     // navigate('/');
  //     return true;
  //   } catch (error: any) {
  //     alert(`Error! ${error.message}`);
  //     return false;
  //   }
  // };

  // const getCurrentUser = async function (): Promise<Parse.User | null> {
  //   const currentUser: Parse.User | null = await Parse.User.current();

  //   setCurrentUser(currentUser);
  //   return currentUser;
  // };

  // const handleUserLogOut = async function (): Promise<boolean> {
  //   try {
  //     await Parse.User.logOut();

  //     const currentUser: Parse.User = await Parse.User.current();
  //     if (currentUser === null) {
  //       alert('Success! No user is logged in anymore!');
  //     }

  //     getCurrentUser();
  //     return true;
  //   } catch (error: any) {
  //     alert(`Error! ${error.message}`);
  //     return false;
  //   }
  // };

  // оставил, чтобы ты чисто код доки глянул, я хз . . . .
  // const handleUserRegistration = async function (
  //   event: React.FormEvent<HTMLFormElement>,
  // ): Promise<boolean> {
  //   event.preventDefault();
  //   try {
  //     const createdUser: Parse.User = await Parse.User.signUp(
  //       username,
  //       password,
  //     );
  //     alert(
  //       `Success! User ${createdUser.getUsername()} was successfully created!`,
  //     );
  //     return true;
  //   } catch (error: any) {
  //     alert(`Error! ${error}`);
  //     return false;
  //   }
  // };

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
                  text="UserName"
                  onChange={handleUserNameValueChange}
                  inputValue={username}
                />
                <RegistrationInput
                  text="Password"
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
