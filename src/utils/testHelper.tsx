import React, { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components/native'
import { render, RenderOptions } from '@testing-library/react-native'

import theme from '@styles/theme'

const customRender = (ui: ReactNode, options?: RenderOptions) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>, options)

export * from '@testing-library/react-native'
export { customRender as render }
