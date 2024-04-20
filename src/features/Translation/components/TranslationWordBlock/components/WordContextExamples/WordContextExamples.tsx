import { Text } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';

interface WordContextExamplesProps {
  examples: string[];
}

export const WordContextExamples = ({ examples }: WordContextExamplesProps) => {
  return (
    <>
      {examples.map((example) => {
        return (
          <Text
            borderLeft="solid 5px #a35beb"
            paddingLeft="15px"
            marginBottom="7px"
            key={uuidv4()}
          >
            <i>{example}</i>
          </Text>
        );
      })}
    </>
  );
};
