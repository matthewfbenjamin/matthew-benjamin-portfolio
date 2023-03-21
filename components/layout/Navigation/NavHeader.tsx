import { Box, Flex, Text } from '@chakra-ui/react';

const DECORATION_SIZE = 20;

const NavHeader = ({ title }: { title: string }) => {
  return (
    <Flex alignItems="flex-start">
      {/* 36px is the height of 1.5 LineHeight relative to the base font-size */}
      <Flex alignItems="center" marginTop={`${(36 - DECORATION_SIZE) / 2}px`}>
        <Flex
          width={`${DECORATION_SIZE}px`}
          height={`${DECORATION_SIZE}px`}
          background="black"
          position="relative"
          borderRadius="50%"
          alignItems="center"
          justifyContent="center">
          <Box
            width="10px"
            height="10px"
            background="primary"
            position="relative"
            borderRadius="50%"
          />
        </Flex>
        <Box position="relative" left="-2px" width="34px" height="4px" borderY="2px solid black" />
      </Flex>
      <Text
        fontSize="2xl"
        fontWeight="extrabold"
        fontStyle="italic"
        left="-4px"
        position="relative">
        {title.toLocaleUpperCase()}
      </Text>
    </Flex>
  );
};

export default NavHeader;
