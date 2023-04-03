import styled, { css } from 'styled-components/native'

export const Image = styled.Image`
  ${({ theme }) => css`
    width: 40px;
    height: 40px;
    border-width: 2px;
    border-color: ${theme.colors.gray2};
    border-radius: 20px;
  `}
`
