import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { Layout } from '../components';
import { LayoutProvider } from '../providers';
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

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <LayoutProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </LayoutProvider>
    </ChakraProvider>
  );
}
