import { Box, Text } from '@chakra-ui/react';

export const Dictionary = () => {
  return (
    <Box
      display="flex"
      maxWidth="1200px"
      width="100%"
      color="#fff"
      flexDirection="column"
      maxHeight="80dvh"
    >
      <Box
        display="flex"
        justifyContent="space-between"
        width="100%"
        marginBottom="30px"
      >
        <Box
          display="flex"
          flexDirection="column"
          maxWidth="270px"
          width="100%"
          padding="20px"
          gap="5px"
          border="2px solid #ffffff80"
          borderRadius="20px"
          backdropFilter="blur(100px)"
        >
          <Text marginBottom="10px">Menu</Text>
          <Text
            _hover={{
              bgColor: '#656271',
              borderRight: '5px solid #e9effd',
            }}
            padding="10px"
          >
            Profile
          </Text>
          <Text
            _hover={{
              bgColor: '#656271',
              borderRight: '5px solid #e9effd',
            }}
            padding="10px"
          >
            My Courses
          </Text>
          <Text
            _hover={{
              bgColor: '#656271',
              borderRight: '5px solid #e9effd',
            }}
            padding="10px"
          >
            Setting
          </Text>
          <Text _hover={{ color: 'red' }} padding="10px">
            Log out
          </Text>
        </Box>
        <Box width="100%" maxWidth="800px" padding="20px">
          <Text marginBottom="15px">My Courses</Text>
          <Box display="flex" gap="20px">
            <Box
              padding="15px"
              width="100%"
              border="0.1px solid #ffffff80"
              borderRadius="10px"
              backdropFilter="blur(50px)"
            >
              <Text>Lorem</Text>
              <Text>Lorem</Text>
              <Text>Lorem</Text>
              <Text>Lorem</Text>
              <Text>Lorem</Text>
            </Box>
            <Box
              padding="15px"
              width="100%"
              border="0.1px solid #ffffff80"
              borderRadius="10px"
              backdropFilter="blur(50px)"
            >
              <Text>Lorem</Text>
              <Text>Lorem</Text>
              <Text>Lorem</Text>
              <Text>Lorem</Text>
              <Text>Lorem</Text>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        display="flex"
        width="100%"
        flexWrap="wrap"
        gap="20px"
        overflow="auto"
      >
        <Box
          padding="15px"
          flexBasis="49%"
          border="0.1px solid #ffffff80"
          borderRadius="10px"
          backdropFilter="blur(50px)"
        >
          <Text>Lorem</Text>
          <Text>Lorem</Text>
          <Text>Lorem</Text>
          <Text>Lorem</Text>
          <Text>Lorem</Text>
          <Text>Lorem</Text>
          <Text>Lorem</Text>
          <Text>Lorem</Text>
        </Box>
        <Box
          padding="15px"
          flexBasis="49%"
          border="0.1px solid #ffffff80"
          borderRadius="10px"
          backdropFilter="blur(50px)"
        >
          <Text>Lorem</Text>
          <Text>Lorem</Text>
          <Text>Lorem</Text>
          <Text>Lorem</Text>
          <Text>Lorem</Text>
          <Text>Lorem</Text>
          <Text>Lorem</Text>
          <Text>Lorem</Text>
        </Box>
        <Box
          padding="15px"
          flexBasis="49%"
          border="0.1px solid #ffffff80"
          borderRadius="10px"
          backdropFilter="blur(50px)"
        >
          <Text>Lorem</Text>
          <Text>Lorem</Text>
          <Text>Lorem</Text>
          <Text>Lorem</Text>
          <Text>Lorem</Text>
          <Text>Lorem</Text>
          <Text>Lorem</Text>
          <Text>Lorem</Text>
        </Box>
        <Box
          padding="15px"
          flexBasis="49%"
          border="0.1px solid #ffffff80"
          borderRadius="10px"
          backdropFilter="blur(50px)"
        >
          <Text>Lorem</Text>
          <Text>Lorem</Text>
          <Text>Lorem</Text>
          <Text>Lorem</Text>
          <Text>Lorem</Text>
          <Text>Lorem</Text>
          <Text>Lorem</Text>
          <Text>Lorem</Text>
        </Box>
      </Box>
    </Box>
  );
};
