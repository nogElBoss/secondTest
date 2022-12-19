import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const customVariant = defineStyle((props) => {
    return {
        border: '4px',
        borderColor: `customBlue.500`,
        borderRadius: 0,
        fontWeight: 'semibold',
        color: 'white',
        _hover: {
            bg: `customBlue.500`,
        },

        _active: {
            bg: `customBlue.700`,
            borderColor: `customBlue.700`,
            transform: "scale(1, 1)",
        },
    }
})

export const buttonTheme = defineStyleConfig({
    variants: { customVariant },
})