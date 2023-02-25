// eslint-disable-next-line camelcase
import { PT_Serif } from '@next/font/google';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { Layout } from '../components';
import '../styles/globals.css';

const ptSerif = PT_Serif({ subsets: ['latin'], weight: '400' });

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

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <main className={ptSerif.className}>
          <Component {...pageProps} />
        </main>
      </Layout>
    </ChakraProvider>
  );
}
