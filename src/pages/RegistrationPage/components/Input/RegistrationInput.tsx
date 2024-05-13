import { Box, FormLabel, Input } from '@chakra-ui/react';
import React, { useState } from 'react';

interface RegistrationInputProps {
  text: string;
}

export const RegistrationInput = ({ text }: RegistrationInputProps) => {
  const [inputFocused, setInputFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <Box
      position="relative"
      borderBottom={`2px solid ${inputFocused || inputValue ? '#fff' : '#ffffff80'}`}
    >
      <Input
        background="transparent"
        border="none"
        outline="none"
        paddingX="0"
        color="#fff"
        onFocus={() => setInputFocused(true)}
        onBlur={() => setInputFocused((prevState) => !prevState)}
        onChange={handleEmailChange}
        _focus={{ boxShadow: 'none' }}
      />
      <FormLabel
        position="absolute"
        top={inputFocused || inputValue ? '-15px' : '50%'}
        transform={
          inputFocused || inputValue ? 'translateY(0)' : 'translateY(-50%)'
        }
        color={inputFocused || inputValue ? '#fff' : '#ffffff80'}
        pointerEvents="none"
        transition="all 0.5s ease"
      >
        {text}
      </FormLabel>
    </Box>
  );
};
