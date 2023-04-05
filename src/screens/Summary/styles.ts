import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'
import { ThemeColors } from '../../@types/global'

type WrapperProps = {
  color: 'green' | 'red'
}

const parseCardColors = {
  green: 'greenLight',
  red: 'redLight'
}

export const Wrapper = styled.SafeAreaView<WrapperProps>`
  ${({ theme, color }) => css`
    flex: 1;
    background-color: ${theme.colors[parseCardColors[color] as ThemeColors]};
  `}
`

export const Header = styled.View`
  width: 100%;
  padding: 24px 0;
`

export const Back = styled(TouchableOpacity)`
  position: absolute;
  left: 24px;
  top: 24px;
  width: 24px;
  height: 24px;
  z-index: 1;
`

export const Content = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.white};
    padding: 24px;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
  `}
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.family.nunitoSans.bold};
    ${theme.fonts.size(14)};
    color: ${theme.colors.gray1};
    text-align: center;
    margin-top: 12px;
    margin-bottom: 16px;
  `}
`

export const Space = styled.View`
  width: 100%;
  height: 12px;
`

export const CardFlexWrapper = styled.View`
  flex-direction: row;
  gap: 12px;
`

export const CardWrapper = styled.View`
  flex: 1;
`
