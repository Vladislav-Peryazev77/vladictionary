import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import TranslationStore from '../../../../stores/TranslationStore/TranslationStore';
import { Button, FormControl, Textarea } from '@chakra-ui/react';

export const TranslationForm = observer(() => {
  const [textAreaValue, setTextAreaValue] = useState('');

  const { getTextTranslation, getWordDescription } = TranslationStore;

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    getTextTranslation(textAreaValue);
    getWordDescription(textAreaValue);
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <FormControl display="flex" gap="10px" marginBottom="30px">
        <Textarea
          maxLength={2000}
          onChange={(event) => setTextAreaValue(event.target.value)}
        />
        <Button type="submit">Translate</Button>
      </FormControl>
    </form>
  );
});
