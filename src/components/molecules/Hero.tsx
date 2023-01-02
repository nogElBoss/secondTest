import { Flex, Heading, Box, Image } from '@chakra-ui/react'

export const Hero = () => (
  <Flex
    justifyContent="center"
    alignItems="center"
    height="100vh"
  >
    <Box m={50} w={300}>
      <Image src="/images/logo.png" alt='Dan Abramov' />
    </Box>
    <Flex
      flexDirection="column"
      justifyContent="center"
      color="white"
    >
      <Heading fontSize={110} mb={-3}>Gonçalo</Heading>
      <Heading fontSize={110} mt={-3}>Nogueira</Heading>
    </Flex>
  </Flex >
)