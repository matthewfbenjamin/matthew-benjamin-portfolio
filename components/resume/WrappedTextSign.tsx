import { Flex, Text } from '@chakra-ui/react';

export enum WrappedTextSignTypes {
  Start,
  End,
  Variable,
}
type WrappedTextMapping = {
  [type in WrappedTextSignTypes]: {
    color: string;
    text?: string;
  }
}

const WRAPPED_TEXT_MAPPING: WrappedTextMapping = {
  [WrappedTextSignTypes.Start]: {
    color: 'green',
    text: 'Start'
  },
  [WrappedTextSignTypes.End]: {
    color: 'red',
    text: 'End'
  },
  [WrappedTextSignTypes.Variable]: {
    color: 'green',
  }
}

export const WrappedTextSign = ({ type, text, ...rest }: { type: WrappedTextSignTypes; text?: string }) => (
  <Flex
    h="fit-content"
    paddingX="2"
    paddingY="1"
    background={WRAPPED_TEXT_MAPPING[type].color}
    borderWidth={2}
    borderStyle="solid"
    borderColor="black"
    borderRadius={4}
    justifyContent="center"
    alignItems="center"
    textTransform="uppercase"
    color="white"
    {...rest}
  >
    <Text fontSize={{ base: 'sm', md: 'md' }}>{WRAPPED_TEXT_MAPPING[type].text || text}</Text>
  </Flex>
)