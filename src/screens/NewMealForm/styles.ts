import styled, { css } from 'styled-components/native'

export const Wrapper = styled.View`
  ${({ theme }) => css`
    flex: 1;
    backgroundcolor: ${theme.colors.white};
    padding: 24px;
  `}
`
