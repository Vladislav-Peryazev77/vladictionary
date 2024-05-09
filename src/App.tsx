import { Route, Routes } from 'react-router-dom';
import { Layout } from './pages/Layout';
import { TranslationPage } from './pages/TranslationPage';
import { DictionaryPage } from './pages/DictionaryPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<TranslationPage />} />
        <Route path="/dictionary" element={<DictionaryPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
};
