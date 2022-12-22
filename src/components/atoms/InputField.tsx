import { inputAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
    createMultiStyleConfigHelpers(inputAnatomy.keys)

const custom = definePartsStyle({
    field: {
        border: '0px',
        color: "white",
        background: "inputGray",
        borderRadius: '0px',
        fontFamily: "body",
        _placeholder: {
            color: "white",
        }
    }
})

export const inputTheme = defineMultiStyleConfig({
    variants: { custom },
})