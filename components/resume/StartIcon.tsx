import { Flex, Text } from '@chakra-ui/react'

export const StartIcon = () => (
  <Flex
    h="fit-content"
    w="fit-content"
    paddingX="2"
    paddingY="1"
    background="green"
    borderWidth={2}
    borderStyle="solid"
    borderColor="black"
    borderRadius={4}
    justifyContent="center"
    alignItems="center"
    textTransform="uppercase"
    color="white"
  >
    <Text fontSize={{ base: 'sm', md: 'md' }}>Start</Text>
  </Flex>
)