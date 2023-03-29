import { ChakraProvider, extendTheme } from '@chakra-ui/react';
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
    body: 'pt_serif, system-ui, sans-serif',
    heading: 'motel, sans-serif',
  },
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
