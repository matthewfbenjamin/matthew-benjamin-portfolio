import { Box, Flex, useDisclosure } from '@chakra-ui/react';

// eslint-disable-next-line camelcase
import { PT_Serif } from '@next/font/google';

import { Header } from './Header';
import { Navigation } from './Navigation';


const ptSerif = PT_Serif({ subsets: ['latin'], weight: '400' });

export default function Layout({ children }: React.PropsWithChildren) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex as="main" h="100vh" w="100vw">
      <Navigation isOpen={isOpen} onClose={onClose} />
      <Box w="100%" className={ptSerif.className}>
        <Header onOpen={onOpen} />
        <>
          {children}
        </>
      </Box>
    </Flex>
  );
}
