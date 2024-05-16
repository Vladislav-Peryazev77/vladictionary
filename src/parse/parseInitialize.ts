import Parse from 'parse/dist/parse.min.js';

export const parseInitialize = () => {
  Parse.initialize(process.env.PARSE_APPLICATION_ID, process.env.PARSE_JAVASCRIPT_KEY);
  Parse.serverURL = process.env.PARSE_HOST_URL;
}