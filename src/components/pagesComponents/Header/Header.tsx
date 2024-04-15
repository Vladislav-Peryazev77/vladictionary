import { Heading } from '@chakra-ui/react';
import React from 'react';

export const Header = () => {
  return (
    <>
      <Heading
        bgColor="#ca9ff5"
        color="#9433f5"
        padding="15px 30px"
        fontFamily="Comfortaa"
        justifyContent="space-between"
        display="flex"
      >
        ~vladictionary
        <button>
          <img width="35px" src="src/assets/icons/navbar-icon.svg" />
        </button>
      </Heading>
    </>
  );
};
