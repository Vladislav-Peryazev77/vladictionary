import { observer } from 'mobx-react-lite';
import { Box, Select } from '@chakra-ui/react';
import TranslationStore from '../../../../stores/TranslationStore/TranslationStore';

interface Language {
  code: string;
  name: string;
}

export const TranslationLangSwitch = observer(() => {
  const {
    originalLanguage,
    translatedLanguage,
    setOriginalLanguage,
    setTranslatedLanguage,
  } = TranslationStore;

  const languages: Language[] = [
    { code: 'en', name: 'English' },
    { code: 'ru', name: 'Russian' },
  ];

  const handleSwitchLanguages = () => {
    setOriginalLanguage(translatedLanguage);
    setTranslatedLanguage(originalLanguage);
  };

  return (
    <Box display="flex" justifyContent="center" gap="40px">
      <Select
        maxWidth="max-content"
        variant="unstyled"
        value={originalLanguage}
        onChange={(event) => setOriginalLanguage(event.target.value)}
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </Select>
      <button onClick={handleSwitchLanguages}>
        <img src="src/assets/icons/swap-icon.svg" alt="Swap" />
      </button>
      <Select
        maxWidth="max-content"
        variant="unstyled"
        value={translatedLanguage}
        onChange={(event) => setTranslatedLanguage(event.target.value)}
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </Select>
    </Box>
  );
});
