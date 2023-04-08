import { ChakraProvider, extendTheme, useDisclosure } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { Layout } from '../components';
import '../styles/globals.css';

const theme = extendTheme({
  colors: {
    primary: '#a00303',
    secondary: '#cf6e12',
    tertiary: '#ffcc33',
  },
  fonts: {
    body: 'sans-serif, system-ui, pt_serif',
    heading: 'motel, sans-serif',
  },
});

export type AppComponentProps = { navOnOpen: () => void }

export default function MyApp({ Component, pageProps }: AppProps) {
  const { isOpen: navIsOpen, onOpen: navOnOpen, onClose: navOnClose } = useDisclosure();
  return (
    <ChakraProvider theme={theme}>
      <Layout navIsOpen={navIsOpen} navOnClose={navOnClose}>
        <Component navOnOpen={navOnOpen} {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
