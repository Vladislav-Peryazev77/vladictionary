import { Meaning } from '../../../../../../types/translationTypes/translationTypes';
import { Text } from '@chakra-ui/react';

interface WordContextExamplesProps {
  meanings?: Meaning[];
}

export const WordContextExamples = ({ meanings }: WordContextExamplesProps) => {
  return (
    <>
      {meanings?.map((meaning) =>
        meaning.definitions.map((definition) =>
          definition.definition && definition.example ? (
            <Text
              borderLeft="solid 5px #fff"
              paddingLeft="15px"
              marginBottom="7px"
              key={definition.id}
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
