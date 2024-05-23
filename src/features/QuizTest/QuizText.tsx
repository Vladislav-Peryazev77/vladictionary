import { Box, Button, CloseButton, Progress, Text } from '@chakra-ui/react';
import { AnswerVariant } from './components/AnswerVariant';

export const QuizText = () => {
  return (
    <Box
      maxWidth="1100px"
      width="100%"
      border="2px solid #ffffff80"
      borderRadius="20px"
      backdropFilter="blur(150px)"
      padding={['20px', '20px', '30px', '30px']}
      color="#fff"
      display="flex"
      flexDirection="column"
      alignItems="center"
      marginX={['0px', '0px', '20px', '20px']}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        marginBottom={['24px', '24px', '90px', '90px']}
        width="100%"
      >
        <Box display="flex" gap="5px" alignItems="center">
          <img src="src/assets/icons/score-icon.svg" />
          <Text>200</Text>
        </Box>
        <Text fontSize={['18px', '25px']}>Fantasy Quiz #156</Text>
        <CloseButton />
      </Box>
      <Box
        display={['flex', 'flex', 'none', 'none']}
        alignItems="center"
        gap="7px"
        width={['100%', '70%', '70%', '70%']}
        marginBottom="40px"
      >
        <Progress value={25} width="100%" />
        <Text>1/5</Text>
      </Box>

      <Box
        width="100%"
        maxWidth="690px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        textAlign="center"
        fontSize="26px"
        marginBottom="80px"
      >
        <Text
          marginBottom={['60px', '60px', '80px', '80px']}
          fontSize={['22px', '22px', '26px', '26px']}
        >
          PREDICT THE TOP LOSER (for tomorrow) across these indices
        </Text>
        <Box
          display="flex"
          flexDirection="column"
          gap="15px"
          width="100%"
          maxWidth="500px"
        >
          <AnswerVariant />
          <AnswerVariant />
          <AnswerVariant />
          <AnswerVariant />
        </Box>
      </Box>
      <Box
        width="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          display="flex"
          justifyContent="space-between"
          width={['100%', '70%', '65%', '65%']}
        >
          <Box
            display={['none', 'none', 'flex', 'flex']}
            alignItems="center"
            gap="7px"
          >
            <Progress value={25} width="200px" />
            <Text>1/5</Text>
          </Box>
          <Button width={['100%', '100%', 'unset', 'unset']}>Continue</Button>
        </Box>
      </Box>
    </Box>
  );
};
