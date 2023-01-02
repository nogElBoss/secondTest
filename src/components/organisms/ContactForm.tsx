import { Button, Flex, Input, Textarea } from "@chakra-ui/react"

export const Form = () => (
    <Flex
        w={500}
        h="100vh"
        alignItems="center"
    >
        <form>
            <Flex
                flexDirection="column"
                alignItems="end"
            >
                <Flex
                >
                    <Input variant="grayInput" placeholder="Name" type='text' mr={2} />
                    <Input variant="grayInput" placeholder="Email" type="email" ml={2} />
                </Flex>
                <Input variant="grayInput" w="full" placeholder="Subject" type="text" mt={3} />
                <Textarea variant="grayTextarea" w="full" h={100} placeholder="Message" mt={3} />
                <Button variant="fullBlueButton" width="60%" placeholder="Send Message" mt={3}>
                    Send Message
                </Button>
            </Flex>
        </form>
    </Flex>

)
