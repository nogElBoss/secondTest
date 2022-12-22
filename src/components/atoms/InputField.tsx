import { inputAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
    createMultiStyleConfigHelpers(inputAnatomy.keys)

const pill = definePartsStyle({
    field: {
        border: '0px',
        color: "white",
        background: '#2e2e2e',
        borderRadius: '0px',
        fontFamily: "body",
        _placeholder: {
            color: "white",
        }
    }
})

export const inputTheme = defineMultiStyleConfig({
    variants: { pill },
})