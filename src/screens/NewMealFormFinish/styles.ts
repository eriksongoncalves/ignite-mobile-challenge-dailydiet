import styled, { css } from 'styled-components/native'

type TitleProps = {
  isIn: boolean
}

type TextProps = {
  isBold?: boolean
}

export const Wrapper = styled.View`
  ${({ theme }) => css`
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    gap: 24px;
    padding: 24px;
    background-color: ${theme.colors.white};
  `}
`

export const Title = styled.Text<TitleProps>`
  ${({ theme, isIn }) => css`
    font-family: ${theme.fonts.family.nunitoSans.bold};
    ${theme.fonts.size(24)};
    color: ${isIn ? theme.colors.greenDark : theme.colors.redDark};
  `}
`

export const Text = styled.Text<TextProps>`
  ${({ theme, isBold }) => css`
    font-family: ${isBold
      ? theme.fonts.family.nunitoSans.bold
      : theme.fonts.family.nunitoSans.regular};
    ${theme.fonts.size(16)};
    color: ${theme.colors.gray1};
    text-align: center;
  `}
`
