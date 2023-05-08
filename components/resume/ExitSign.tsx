import { Box, Flex, Text } from '@chakra-ui/react'
import { TbArrowUp } from 'react-icons/tb'

export const ExitSign = () => (
  <Flex flexDir="column" gap="0.5">
    <Flex
      h="fit-content"
      w="fit-content"
      paddingX="3"
      paddingY="0.5"
      background="green"
      borderWidth={2}
      borderStyle="solid"
      borderColor="black"
      borderRadius={4}
      justifyContent="center"
      alignItems="center"
      textTransform="uppercase"
      color="white"
      flexDir="column"
    >
      <Text fontSize={{ base: 'sm', md: 'md' }}>234A</Text>
    </Flex>
    <Flex
      h="fit-content"
      w="fit-content"
      paddingX="3"
      paddingY="0.5"
      background="green"
      borderWidth={2}
      borderStyle="solid"
      borderColor="black"
      borderRadius={4}
      justifyContent="center"
      alignItems="center"
      textTransform="uppercase"
      color="white"
      flexDir="column"
    >
      <Text fontSize={{ base: 'sm', md: 'md' }}>Exit</Text>
      <Box transform="rotate(45deg)">
        <TbArrowUp />
      </Box>
    </Flex>
  </Flex>
)