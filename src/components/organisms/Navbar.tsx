import { Flex, Heading, Box, Image} from '@chakra-ui/react'

export const Navbar = () => (
  <Flex
    h="100vh"
    w="60px"
    bgColor="dark_black"
    justifyContent="center"
  >
    <Box m={3} h={100} w={100}>
      <Image src="/images/logo.png" alt='Dan Abramov' />
    </Box>
  </Flex>
)