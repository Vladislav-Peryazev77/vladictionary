import { v4 as uuidv4 } from 'uuid';
import { Meaning } from '../../../../../../types/translationTypes/translationTypes';
import { Text } from '@chakra-ui/react';

interface WordContextExamplesProps {
  meanings?: Meaning[];
}

export const WordContextExamples = ({ meanings }: WordContextExamplesProps) => {
  return (
    <>
      {meanings?.map((meaning) =>
        meaning?.definitions.map((definition) =>
          definition.definition && definition.example ? (
            <Text
              borderLeft="solid 5px #a35beb"
              paddingLeft="15px"
              marginBottom="7px"
              key={uuidv4()}
            >
              <i>{definition.example}</i>
              <br />
              {`Definition - ${definition.definition}`}
            </Text>
          ) : null,
        ),
      )}
    </>
  );
};
