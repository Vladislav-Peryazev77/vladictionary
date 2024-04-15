import { Text } from '@chakra-ui/react';
import React from 'react';

interface WordContextExamplesProps {
  examples: string[];
}

export const WordContextExamples = ({ examples }: WordContextExamplesProps) => {
  return (
    <>
      {examples.map((example, index) => {
        return (
          <Text
            borderLeft="solid 5px #a35beb"
            paddingLeft="15px"
            marginBottom="7px"
            key={index}
          >
            <i>{example}</i>
          </Text>
        );
      })}
    </>
  );
};
