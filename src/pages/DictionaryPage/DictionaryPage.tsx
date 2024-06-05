import { PageWrapper } from '../../components/pagesComponents/PageWrapper';
// import { QuizTest } from '../../features/QuizTest';
import { Dictionary } from '../../features/Dictionary';

export const DictionaryPage = () => {
  return (
    <PageWrapper url="src/assets/images/bg-dictionary-test1.jpg">
      <Dictionary />
      {/*<QuizTest />*/}
    </PageWrapper>
  );
};
