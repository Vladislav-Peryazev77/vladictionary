import { Button, FormControl, Textarea } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';
import TranslationStore from '../../../../stores/TranslationStore/TranslationStore';

export const TranslationForm = observer(() => {
  const { textAreaValue, handleTranslationRequest, handleTextAreaValueChange } =
    TranslationStore;

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleTranslationRequest(textAreaValue);
    // handleTextAreaValueChange('');
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <FormControl display="flex" gap="10px" marginBottom="30px">
        <Textarea
          maxLength={2000}
          onChange={(event) => handleTextAreaValueChange(event.target.value)}
        />
        <Button type="submit">Translate</Button>
      </FormControl>
    </form>
  );
});
