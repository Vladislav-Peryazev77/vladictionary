import { Meaning } from '../../../../../../types/translationTypes/translationTypes';
import { Text } from '@chakra-ui/react';

interface WordContextExamplesProps {
  meanings?: Meaning[];
  id?: string;
}

export const WordContextExamples = ({
  meanings,
  id,
}: WordContextExamplesProps) => {
  return (
    <>
      {meanings?.map((meaning) =>
        meaning?.definitions.map((definition) =>
          definition.definition && definition.example ? (
            <Text
              borderLeft="solid 5px #a35beb"
              paddingLeft="15px"
              marginBottom="7px"
              key={id}
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
