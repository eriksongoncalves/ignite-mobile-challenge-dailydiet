import styled, { css } from 'styled-components/native'
import { CardTextColors } from '.'
import { ThemeColors } from '@src/@types/global'
import { ArrowUpRight } from 'phosphor-react-native'

type WrapperProps = {
  color: CardTextColors
}

type TitleProps = {
  fontSize: number
}

const parseCardColors = {
  green: 'greenLight',
  red: 'redLight',
  gray: 'gray6'
}

export const Wrapper = styled.View<WrapperProps>`
  ${({ theme, color }) => css`
    width: 100%;
    padding: 24px;
    background-color: ${theme.colors[parseCardColors[color] as ThemeColors]};
    align-items: center;
    border-radius: 8px;
  `}
`

export const Title = styled.Text<TitleProps>`
  ${({ theme, fontSize }) => css`
    font-family: ${theme.fonts.family.nunitoSans.bold};
    ${theme.fonts.size(fontSize)};
    color: ${theme.colors.gray1};
  `}
`

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.family.nunitoSans.regular};
    ${theme.fonts.size(14)};
    color: ${theme.colors.gray2};
    text-align: center;
  `}
`

export const LinkIcon = styled(ArrowUpRight)`
  position: absolute;
  top: 8px;
  right: 8px;
`
