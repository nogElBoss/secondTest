import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Heading Font';
        src: url('./fonts/PPWoodland-Bold.otf');
        font-display: swap;
      }
      @font-face {
        font-family: 'Body Font';
        src: url('./fonts/PPWoodland-Ultralight.otf');
        font-display: swap;
      }
      `}
  />
)

export default Fonts