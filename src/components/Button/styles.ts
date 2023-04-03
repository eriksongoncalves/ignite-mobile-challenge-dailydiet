import styled, { css, DefaultTheme } from 'styled-components/native'
import { ButtonProps } from './'
import { TouchableOpacity } from 'react-native'

type WrapperProps = Pick<ButtonProps, 'isActive' | 'outline' | 'fullWidth'>

type TextProps = Pick<ButtonProps, 'outline'>

const wrapperModifiers = {
  outline: css`
    background-color: transparent;
  `,
  active: (theme: DefaultTheme, isOutline: boolean) => css`
    background-color: ${isOutline ? theme.colors.gray5 : theme.colors.gray1};
  `,
  fullWidth: css`
    width: 100%;
  `
}

export const Wrapper = styled(TouchableOpacity)<WrapperProps>`
  ${({ theme, isActive, outline, fullWidth }) => css`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 16px 24px;
    gap: 12px;
    border: 1px solid ${theme.colors.gray2};
    border-radius: 6px;
    background-color: ${theme.colors.gray2};

    ${!!outline && wrapperModifiers.outline};
    ${!!fullWidth && wrapperModifiers.fullWidth};
    ${!!isActive && wrapperModifiers.active(theme, !!outline)};
  `}
`

export const Text = styled.Text<TextProps>`
  ${({ theme, outline }) => css`
    font-family: ${theme.fonts.family.nunitoSans.bold};
    ${theme.fonts.size(14)};
    color: ${outline ? theme.colors.gray2 : theme.colors.white};
  `}
`
