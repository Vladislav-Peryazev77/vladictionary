import { Text } from '@chakra-ui/react';
import React, { ReactElement } from 'react';

interface TranslationText {
  children: React.ReactNode;
}

export const TranslationText = ({ children }: TranslationText) => {
  return (
    <Text flexBasis="50%" padding="15px">
      {children}
    </Text>
  );
};
