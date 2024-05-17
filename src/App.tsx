import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import RegistrationStore from './stores/RegistrationStore/RegistrationStore';
import { parseInitialize } from './parse/parseInitialize';

import { Layout } from './pages/Layout';
import { TranslationPage } from './pages/TranslationPage';
import { DictionaryPage } from './pages/DictionaryPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { RegistrationPage } from './pages/RegistrationPage';
import { ProtectedRoute } from './pages/RegistrationPage/components/ProtectedRoute/ProtectedRoute';

parseInitialize();

export const App = () => {
  const { currentUser, getCurrentUser } = RegistrationStore;

  useEffect(() => {
    if (currentUser === null) {
      getCurrentUser();
    }
  }, []);

  return (
    <Layout>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <TranslationPage />
            </ProtectedRoute>
          }
        />
        <Route path="/dictionary" element={<DictionaryPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/login" element={<RegistrationPage />} />
      </Routes>
    </Layout>
  );
};
