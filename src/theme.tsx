import { extendTheme } from '@chakra-ui/react'
import { buttonTheme } from './components/atoms/Button'
import { inputTheme } from './components/atoms/InputField'

const fonts = { mono: `'Menlo', monospace` }

const breakpoints = {
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
}

const theme = extendTheme({
  components: {
    Button: buttonTheme,
    Input: inputTheme
  },
  fonts: {
    heading: `'Heading Font', sans-serif`,
    body: `'Body Font', sans-serif`,
  },
  semanticTokens: {
    colors: {
      text: {
        default: 'white',
      },
      heroGradientStart: {
        default: '#7928CA',
      },
      heroGradientEnd: {
        default: '#FF0080',
      },
    },
    radii: {
      button: '12px',
    },
  },
  colors: {
    inputGray: '#2e2e2e',
    black: '#131313',
    customBlue: {
      500: '#10bcdb',
      700: '#0d98b1',
    },
  },
  breakpoints,
})

export default theme
