import { Link } from '@chakra-ui/react'

type Icons = {
    icon: string
    activeIcon: string
    href: string
}

export const Icons = ({ icon, href, activeIcon }: Icons) => (
    <Link
        bgImage={icon}
        href={href}
        h={9}
        w={9}
        m={2}
        bgPosition="center"
        bgSize="contain"
        bgRepeat="no-repeat"
        _hover={{
            bgImage: activeIcon,
            cursor: "pointer",
        }}
    />
)