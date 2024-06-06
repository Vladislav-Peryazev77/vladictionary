import { observer } from 'mobx-react-lite';
import TranslationStore from '../../stores/TranslationStore/TranslationStore';
import { Box, Button, FormControl, Input, Text } from '@chakra-ui/react';
import AdminPanelStore from '../../stores/AdminPanelStore/AdminPanelStore';

export const AdminPanel = observer(() => {
  const { wordData, translationValue, textAreaValue } = TranslationStore;
  const { setChoices, submitForm, choices } = AdminPanelStore;

  const handleSubmitForm = () => {
    submitForm({
      translationValue,
      choices,
      wordData,
      textAreaValue,
    });
  };

  const handleChoicesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChoices(event.target.value);
  };
  return (
    <Box
      width="100%"
      maxWidth="600px"
      border="2px solid #ffffff80"
      borderRadius="20px"
      backdropFilter="blur(100px)"
      padding="20px"
      color="#fff"
    >
      <FormControl display="flex" flexDirection="column" gap="15px">
        <Text>
          {wordData.word} - {translationValue}
        </Text>
        <Input onChange={handleChoicesChange} />
        <Button type="button" onClick={handleSubmitForm}>
          Submit
        </Button>
      </FormControl>
    </Box>
  );
});
