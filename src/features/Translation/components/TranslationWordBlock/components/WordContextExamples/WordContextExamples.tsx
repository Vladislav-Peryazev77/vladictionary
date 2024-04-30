import { v4 as uuidv4 } from 'uuid';
import { Meaning } from '../../../../../../stores/TranslationStore/TranslationStore';
import { Text } from '@chakra-ui/react';

interface WordContextExamplesProps {
  meanings?: Meaning[];
}

export const WordContextExamples = ({ meanings }: WordContextExamplesProps) => {
  return (
    <>
      {meanings?.map((meaning) =>
        meaning?.definitions.map((definition) => (
          <Text
            borderLeft="solid 5px #a35beb"
            paddingLeft="15px"
            marginBottom="7px"
            key={uuidv4()}
          >
            <i>{definition.example}</i>
          </Text>
        )),
      )}
    </>
  );
};
