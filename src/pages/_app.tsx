import { ChakraProvider } from '@chakra-ui/react'

import theme from '../theme'
import Fonts from '../components/atoms/Fonts'
import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider >
  )
}

export default MyApp
