import { Link as ChakraLink, Button, Input } from '@chakra-ui/react'

import { Container } from './Container'

export const CTA = () => (
  <Container
    bgColor="black"
    flexDirection="row"
    position="fixed"
    bottom={0}
    width="full"
    maxWidth="3xl"
    py={3}
  >
    <Button
      as={ChakraLink}
      isExternal
      href="https://chakra-ui.com"
      variant="customVariant"
      colorScheme="brand"
      mx={2}
      width="full"
    >
      chakra-ui
    </Button>
    <Button
      as={ChakraLink}
      isExternal
      href="https://github.com/vercel/next.js/blob/canary/examples/with-chakra-ui-typescript"
      variant="customVariant"
      mx={2}
      width="full"
    >
      View Repo
    </Button>

    <Input variant="custom" placeholder='Name' />
  </Container>
)
