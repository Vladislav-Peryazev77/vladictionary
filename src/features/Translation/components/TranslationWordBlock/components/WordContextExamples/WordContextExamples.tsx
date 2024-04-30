import { Text } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';
import {
  Definition,
  Meaning,
} from '../../../../../../stores/TranslationStore/TranslationStore';

interface WordContextExamplesProps {
  meanings?: Meaning[];
}

export const WordContextExamples = ({ meanings }: WordContextExamplesProps) => {
  return (
    <>
      {/* {examples.map((example) => {
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
      })} */}
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
