import { ChakraProvider, Flex } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'

import theme from '../theme'
import Fonts from '../components/atoms/Fonts'
import { AppProps } from 'next/app'
import { Navbar } from '../components/organisms/Navbar'

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Flex overflow="hidden" bgColor="black">
        <Navbar />
        <Component {...pageProps} />

      </Flex>

    </ChakraProvider >
  )
}

export default MyApp
