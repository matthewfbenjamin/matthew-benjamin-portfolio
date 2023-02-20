import { Lato } from '@next/font/google'
import { ChakraProvider } from '@chakra-ui/react'
import { Layout } from '../components'
import '../styles/globals.css'

const lato = Lato({ subsets: ['latin'], weight: '400' })

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Layout>
        <main className={lato.className}>
          <Component {...pageProps} />
        </main>
      </Layout>
    </ChakraProvider>
  )
}
