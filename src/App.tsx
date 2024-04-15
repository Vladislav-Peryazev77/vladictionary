import React from 'react';
import { Layout } from './pages/Layout/Layout';
// import './styles/global.css';
import { TranslationBlock } from './components/pagesComponents/TranslationBlock/TranslationBlock';

export const App = () => {
  return (
    <Layout>
      <TranslationBlock />
    </Layout>
  );
};
