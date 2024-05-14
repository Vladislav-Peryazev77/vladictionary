import { Box, FormLabel, Input } from '@chakra-ui/react';
import React, { useState } from 'react';

interface RegistrationInputProps {
  labelText: string;
}

export const RegistrationInput = ({ labelText }: RegistrationInputProps) => {
  const [inputFocused, setInputFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const onInputFocus = () => {
    setInputFocused(true);
  };

  const onInputBlur = () => {
    setInputFocused((prevState) => !prevState);
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
        onFocus={onInputFocus}
        onBlur={onInputBlur}
        onChange={handleEmailChange}
        sx={{
          '&:focus': {
            boxShadow: 'none',
          },
        }}
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
        {labelText}
      </FormLabel>
    </Box>
  );
};
