import { WordPhonetic } from './components/WordPhonetic';
import { WordSynonyms } from './components/WordSynonyms';
import { WordContextExamples } from './components/WordContextExamples';
import { WordData } from '../../../../stores/TranslationStore/TranslationStore';

interface TranslationWordBlockProps {
  data?: WordData;
}

export const TranslationWordBlock = ({ data }: TranslationWordBlockProps) => {
  return (
    <>
      <WordPhonetic
        phonetics={data?.phonetics}
        word={data?.word}
        meanings={data?.meanings}
      />
      <WordSynonyms meanings={data?.meanings} />
      <WordContextExamples meanings={data?.meanings} />
    </>
  );
};
