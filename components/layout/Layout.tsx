import { Box, Flex } from '@chakra-ui/react';

import { Navigation } from './Navigation';

export default function Layout({ navIsOpen, navOnClose, children }: React.PropsWithChildren<{ navIsOpen: boolean, navOnClose: () => void }>) {
  return (
    <Flex as="main" h="100vh" w="100vw">
      <Navigation isOpen={navIsOpen} onClose={navOnClose} />
      <Box w="100%">
        {children}
      </Box>
    </Flex>
  );
}
