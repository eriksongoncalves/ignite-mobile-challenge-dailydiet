import { css } from 'styled-components/native'

export default {
  fonts: {
    family: {
      nunitoSans: {
        regular: 'NunitoSans_400Regular',
        bold: 'NunitoSans_700Bold'
      }
    },
    size: (fontSize: number) => css`
      font-size: ${fontSize}px
      line-height: ${fontSize * (130 / 100)}px
    `
  },
  colors: {
    redLight: '#F4E6E7',
    redMid: '#F3BABD',
    redDark: '#BF3B44',

    greenLight: '#e5f0db',
    greenMid: '#cbe4b4',
    greenDark: '#639339',

    gray1: '#1b1d1e',
    gray2: '#333638',
    gray3: '#5c6265',
    gray4: '#b9bbbc',
    gray5: '#dddedf',
    gray6: '#EFF0F0',
    gray7: '#fafafa',

    white: '#ffffff',
    black: '#000000'
  }
} as const
