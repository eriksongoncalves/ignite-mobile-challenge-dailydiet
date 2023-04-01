import styled, { css } from 'styled-components/native'

export const Hello = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.family.nunitoSans.bold};
    font-size: 32px;
  `}
`
