import React from 'react';
import { Button, FormControl, Textarea } from '@chakra-ui/react';

export const TranslationForm = () => {
  return (
    <form>
      <FormControl display="flex" gap="10px" marginBottom="30px">
        <Textarea maxLength={2000} />
        <Button>Translate</Button>
      </FormControl>
    </form>
  );
};
