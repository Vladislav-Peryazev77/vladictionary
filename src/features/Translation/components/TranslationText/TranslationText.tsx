import { PropsWithChildren } from 'react';
import { Text } from '@chakra-ui/react';

export const TranslationText = ({ children }: PropsWithChildren) => {
  return (
    <Text flexBasis="50%" padding="15px">
      {children}
    </Text>
  );
};
