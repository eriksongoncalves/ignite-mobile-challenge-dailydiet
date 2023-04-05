import styled, { css } from 'styled-components/native'

export const Wrapper = styled.SafeAreaView`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.white};
  `}
`
