import styled, { css } from 'styled-components/native'

export const Wrapper = styled.SafeAreaView`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.white};
  `}
`

export const Content = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.white};
    padding: 24px;
  `}
`

export const CardTextWrapper = styled.View`
  margin-bottom: 24px;
`

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 24px;
`

export const NewMealWrapper = styled.View`
  width: 100%;
  margin-bottom: 32px;
`

export const NewMealText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.family.nunitoSans.regular};
    ${theme.fonts.size(16)};
    color: ${theme.colors.gray1};
    margin-bottom: 8px;
  `}
`
