import { Box, FormLabel, Input } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';

interface RegistrationInputProps {
  text: string;
  onChange: (value: string) => void;
  inputValue: string;
}

export const RegistrationInput = ({ labelText }: RegistrationInputProps) => {

  text: string;
  value: string;
  onChange: () => void;
}

export const RegistrationInput = ({
  text,
  value,
  onChange,
}: RegistrationInputProps) => {
>>>>>>> 1c11f68 (initial commit)
    const [inputFocused, setInputFocused] = useState(false);

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
          onChange={(event) => onChange(event.target.value)}
          _focus={{ boxShadow: 'none' }}
          value={inputValue}
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
  },
);
