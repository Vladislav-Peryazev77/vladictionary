import { observer } from 'mobx-react-lite';
import { Button, FormControl, Textarea } from '@chakra-ui/react';
import TranslationStore from '../../../../stores/TranslationStore/TranslationStore';

export const TranslationForm = observer(() => {
  const {
    getTextTranslation,
    getWordDescription,
    textAreaValue,
    handleTextAreaValueChange,
  } = TranslationStore;

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
          maxHeight="200px"
          value={textAreaValue}
          onChange={(event) => handleTextAreaValueChange(event.target.value)}
          sx={{
            '&:focus': {
              boxShadow: '0 0 0 1px rgba(255, 255, 255, 0.5)',
              borderColor: '#fff',
            },
          }}
        />
        <Button type="submit">Translate</Button>
      </FormControl>
    </form>
  );
});
