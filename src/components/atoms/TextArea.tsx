import { defineStyle, defineStyleConfig } from '@chakra-ui/react'


const grayTextarea = defineStyle({
    border: '0px',
    color: "white",
    background: "inputGray",
    borderRadius: '0px',
    fontFamily: "body",
    _placeholder: {
        color: "white",
    }
})

export const textareaTheme = defineStyleConfig({
    variants: { grayTextarea },
})