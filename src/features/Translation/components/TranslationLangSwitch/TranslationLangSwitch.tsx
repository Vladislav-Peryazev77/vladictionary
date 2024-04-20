import { Box, Select } from '@chakra-ui/react';

export const TranslationLangSwitch = () => {
  return (
    <Box display="flex" justifyContent="center" gap="40px">
      <Select maxWidth="max-content" variant="unstyled">
        <option value="">English</option>
        <option value="">Russian</option>
      </Select>
      <button>
        <img src="src/assets/icons/swap-icon.svg" />
      </button>
      <Select maxWidth="max-content" variant="unstyled">
        <option value="">Russian</option>
        <option value="">English</option>
      </Select>
    </Box>
  );
};
