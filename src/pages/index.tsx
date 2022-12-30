import { Flex, Spacer } from '@chakra-ui/react'
import { Hero } from '../components/molecules/Hero'
import { Navbar } from '../components/organisms/Navbar'

const Index = () => (
  <Flex>
    <Navbar />
    <Flex
      bgColor="black"
      height="100vh"
      width="100vw"
      justifyContent="center"
    >
      <Hero />
    </Flex>
  </Flex>
  
)

export default Index
