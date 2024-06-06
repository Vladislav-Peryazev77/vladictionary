import { observer } from 'mobx-react-lite';
import { Box, Button, FormControl, Text } from '@chakra-ui/react';
import RegistrationStore from '../../stores/RegistrationStore/RegistrationStore';
import { useNavigate } from 'react-router-dom';

import { RegistrationInput } from './components/Input';
import { useEffect } from 'react';
import { PageWrapper } from '../../components/pagesComponents/PageWrapper';

export const RegistrationPage = observer(() => {
  const {
    username,
    password,
    setUserNameValue,
    setPasswordValue,
    logIn,
    currentUser,
  } = RegistrationStore;

  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser !== null) {
      navigate('/');
    }
  }, [currentUser]);

  // const handleUserNameValueChange = (
  //   event: React.ChangeEvent<HTMLInputElement>,
  // ) => {
  //   setUserNameValue(event);
  // };
  //
  // const handlePasswordValueChange = (
  //   event: React.ChangeEvent<HTMLInputElement>,
  // ) => {
  //   setPasswordValue(event);
  // };

  const handleUserLogIn = () => {
    logIn();
  };

  return (
    <PageWrapper url="src/assets/images/bg-registration-page.jpg">
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
          marginX="10px"
        >
          <Box width="100%">
            <form action="">
              <FormControl display="flex" flexDirection="column" gap="40px">
                <Text fontSize="35px" textAlign="center" color="#FFF">
                  Login
                </Text>
                <RegistrationInput
                  labelText="UserName"
                  onChange={setUserNameValue}
                  inputValue={username}
                />
                <RegistrationInput
                  labelText="Password"
                  onChange={setPasswordValue}
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
    </PageWrapper>
  );
});
