import { Box, Flex, Image } from '@chakra-ui/react'
import { Icons } from '../atoms/Icon'

export const IconButtons = () => (
    <Flex
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
    >
        <Icons icon='/images/homeIcon.png' activeIcon='/images/homeIcon-active.png' href='/' />
        <Icons icon='/images/galleryIcon.png' activeIcon='/images/galleryIcon-active.png' href='/gallery' />
        <Icons icon='/images/contactIcon.png' activeIcon='/images/contactIcon-active.png' href='/contact' />
    </Flex>
)