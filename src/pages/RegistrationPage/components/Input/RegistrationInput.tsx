import { Box, FormLabel, Input } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';

interface RegistrationInputProps {
  text: string;
  onChange: (value: string) => void;
  inputValue: string;
}

export const RegistrationInput = observer(


  ({ text, onChange, inputValue }: RegistrationInputProps) => {

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
          onFocus={onInputFocus}
          onBlur={onInputBlur}
          onChange={(event) => onChange(event.target.value)}
          sx={{
            '&:focus': {
              boxShadow: 'none',
            },
          }}
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
          {labelText}
        </FormLabel>
      </Box>
    );
  },
);
