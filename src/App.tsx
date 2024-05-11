import { Route, Routes } from 'react-router-dom';
import { Layout } from './pages/Layout';
import { TranslationPage } from './pages/TranslationPage';
import { DictionaryPage } from './pages/DictionaryPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { PersonComponent } from './pages/TestPage';
import Parse from 'parse/dist/parse.min.js';

const PARSE_APPLICATION_ID = 'nO6xzt06z9UGj3hAyecHBIZu8YniuzMTGu5js1mx';
const PARSE_HOST_URL = 'https://parseapi.back4app.com/';
const PARSE_JAVASCRIPT_KEY = 'B96U6NR5ZFXdctL8XH1uR82sfWC5KkjVLFREqUJz';
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;

export const App = () => {
  return (
    // <Layout>
    //   <Routes>
    //     <Route path="/" element={<TranslationPage />} />
    //     <Route path="/dictionary" element={<DictionaryPage />} />
    //     <Route path="*" element={<NotFoundPage />} />
    //   </Routes>
    // </Layout>
    // <DictionaryPage />
    <PersonComponent />
  );
};
