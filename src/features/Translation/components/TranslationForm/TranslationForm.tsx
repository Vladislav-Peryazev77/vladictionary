import { observer } from 'mobx-react-lite';
import TranslationStore from '../../../../stores/TranslationStore/TranslationStore';
import { Button, FormControl, Textarea } from '@chakra-ui/react';

export const TranslationForm = observer(() => {
  const {
    textAreaValue,
    getTextTranslation,
    getWordDescription,
    handleTextAreaValueChange,
  } = TranslationStore;

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    getTextTranslation(textAreaValue);
    getWordDescription(textAreaValue);
    handleTextAreaValueChange('');
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <FormControl display="flex" gap="10px" marginBottom="30px">
        <Textarea
          value={textAreaValue}
          maxLength={2000}
          onChange={(event) => handleTextAreaValueChange(event.target.value)}
        />
        <Button type="submit">Translate</Button>
      </FormControl>
    </form>
  );
});
