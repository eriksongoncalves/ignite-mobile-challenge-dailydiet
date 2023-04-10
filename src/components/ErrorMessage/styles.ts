import styled, { css } from 'styled-components/native'

export const Wrapper = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.family.nunitoSans.bold};
    ${theme.fonts.size(12)};
    color: ${theme.colors.redDark};
  `}
`
