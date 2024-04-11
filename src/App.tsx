import { FormControl, Input, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import WordComponent from "./components/WordComponent";

export const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [translation, setTranslation] = useState("");
  const [wordData, setWordData] = useState([]);

  const handleRequest = async (word: string) => {
    return Promise.all([
      axios.post("https://trans.zillyhuhn.com/translate", {
        q: `${word}`,
        source: "en",
        target: "ru",
        format: "text",
      }),
      axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`),
    ]).then(([translation, description]) => {
      setTranslation(translation.data.translatedText);
      setWordData(description.data);
    });
    // return axios
    //   .post("https://trans.zillyhuhn.com/translate", {
    //     q: `${word}`,
    //     source: "ru",
    //     target: "en",
    //     format: "text",
    //   })
    //   .then((translation) => setTranslation(translation.data.translatedText));
  };

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleRequest(inputValue);
    setInputValue("");
  };

  return (
    <>
      <form onSubmit={handleSubmitForm}>
        <FormControl display="flex">
          <label>
            Text
            <Input
              value={inputValue}
              type="text"
              size="s"
              onChange={(event) => setInputValue(event.target.value)}
            />
          </label>
        </FormControl>
      </form>
      <Text>Перевод: {translation}</Text>
      {wordData.map((word, index) => (
        <WordComponent key={index} wordData={word} />
      ))}
      <button onClick={() => console.log(wordData)}>+++ </button>
    </>
  );
};
