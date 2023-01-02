import { Flex } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Form } from '../components/organisms/ContactForm'

const Contact = () => (
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
            alignItems="center"
        >
            <Form />
        </Flex>
    </motion.div>


)

export default Contact
