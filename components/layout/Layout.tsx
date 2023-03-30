import { Box, Flex, useDisclosure } from '@chakra-ui/react';

import { Header } from './Header';
import { Navigation } from './Navigation';

export default function Layout({ children }: React.PropsWithChildren) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex as="main" h="100vh" w="100vw">
      <Navigation isOpen={isOpen} onClose={onClose} />
      <Box w="100%">
        <Header onOpen={onOpen} />
        <>
          {children}
        </>
      </Box>
    </Flex>
  );
}
