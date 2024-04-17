import { WordPhonetic } from './components/WordPhonetic';
import { WordSynonyms } from './components/WordSynonyms';
import { WordContextExamples } from './components/WordContextExamples';

interface TranslationWordBlockProps {
  word: string;
  partOfSpeech: string;
  phonetic: string;
  synonyms: string[];
  examples: string[];
}

export const TranslationWordBlock = ({
  word,
  partOfSpeech,
  phonetic,
  synonyms,
  examples,
}: TranslationWordBlockProps) => {
  return (
    <>
      <WordPhonetic
        word={word}
        partOfSpeech={partOfSpeech}
        phonetic={phonetic}
      />
      <WordSynonyms synonyms={synonyms} />
      <WordContextExamples examples={examples} />
    </>
  );
};
