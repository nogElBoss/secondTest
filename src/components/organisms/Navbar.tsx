import { Flex, Heading, Box, Image, Spacer } from '@chakra-ui/react'
import { IconButtons } from '../molecules/IconButtons'

export const Navbar = () => (
  <Flex
    zIndex="999"
    position="absolute"
    h="100vh"
    w="60px"
    bgColor="dark_black"
    justifyContent="center"
    flexDirection="column"
  >
    <Box m={3} h={10} w={10}>
      <Image src="/images/logo.png" />
    </Box>
    <Spacer />

    <IconButtons />



    <Spacer />
  </Flex>
)