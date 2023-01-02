import { Flex } from '@chakra-ui/react'
import { Hero } from '../components/molecules/Hero'
import { motion } from 'framer-motion'

const Index = () => (
  <motion.div
    initial={{ x: "100%" }}
    animate={{ x: "0%" }}
    transition={{ duration: 1, ease: "easeOut" }}
  >
    <Flex
      bgColor="black"
      height="100vh"
      width="100vw"
      justifyContent="center"
    >
      <Hero />
    </Flex>
  </motion.div>


)

export default Index