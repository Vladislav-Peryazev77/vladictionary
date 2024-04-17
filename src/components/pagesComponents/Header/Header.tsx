import { Text } from '@chakra-ui/react';

export const Header = () => {
  return (
    <>
      <Text
        bgColor="#ca9ff5"
        color="#9433f5"
        padding="15px 30px"
        justifyContent="space-between"
        display="flex"
        fontSize="30px"
      >
        ~vladictionary
        <button>
          <img width="35px" src="src/assets/icons/navbar-icon.svg" />
        </button>
      </Text>
    </>
  );
};
