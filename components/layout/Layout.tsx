import { Box, Flex } from '@chakra-ui/react';

import { Navigation } from './Navigation';

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <Flex as="main" minH="100vh" w="100vw">
      <Navigation />
      <Box w="100%">
        {children}
      </Box>
    </Flex>
  );
}
