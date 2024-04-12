import {
  Box,
  Button,
  FormControl,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import React from "react";

export const TranslationBlock = () => {
  return (
    <>
      <Box
        padding="40px"
        bgColor="#ca9ff5"
        borderRadius="15px"
        w="100%"
        maxWidth="1200px"
        color="#380966"
      >
        <Box
          display="flex"
          border="solid 0.5px white"
          borderRadius="10px"
          marginBottom="15px"
        >
          <Box
            borderRight="solid 0.5px white"
            padding="15px 25px"
            minHeight="350px"
            flexBasis="50%"
          >
            <form>
              <FormControl display="flex" gap="10px" marginBottom="30px">
                <Input />
                <Button>Translate</Button>
              </FormControl>
            </form>
            <Box display="flex" justifyContent="space-between">
              <Text fontSize="25px">Word</Text>
              <button>
                <img
                  width="20px"
                  src="src/assets/icons/pronunciation-icon.svg"
                />
              </button>
            </Box>
            <Text marginBottom="20px">
              noun <i>/wɜːd/</i>
            </Text>
            <Text marginBottom="20px">word, word, word</Text>
            <Text
              borderLeft="solid 5px #a35beb"
              paddingLeft="15px"
              marginBottom="7px"
            >
              <i>sentence with this word</i>
            </Text>
            <Text
              borderLeft="solid 5px #a35beb"
              paddingLeft="15px"
              marginBottom="7px"
            >
              <i>sentence with this word</i>
            </Text>
            <Text
              borderLeft="solid 5px #a35beb"
              paddingLeft="15px"
              marginBottom="7px"
            >
              <i>sentence with this word</i>
            </Text>
          </Box>
          <Text flexBasis="50%" padding="15px">
            Word
          </Text>
        </Box>
        <Box display="flex" justifyContent="center">
          <Box display="flex" gap="40px">
            <Select maxWidth="max-content" variant="unstyled">
              <option value="">English</option>
              <option value="">Russian</option>
            </Select>
            <button>
              <img src="src/assets/icons/swap-icon.svg" />
            </button>
            <Select maxWidth="max-content" variant="unstyled">
              <option value="">Russian</option>
              <option value="">English</option>
            </Select>
          </Box>
        </Box>
      </Box>
    </>
  );
};
