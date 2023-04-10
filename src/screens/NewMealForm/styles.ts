import styled, { css } from 'styled-components/native'
import { TouchableOpacity } from 'react-native'

export const Wrapper = styled.View`
  flex: 1;
`

export const Header = styled.SafeAreaView`
  ${({ theme }) => css`
    flex-direction: row;
    justify-content: center;
    width: 100%;
    height: 140px;
    padding: 24px 0;
    background: ${theme.colors.gray5};
    align-items: center;
  `}
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.family.nunitoSans.bold};
    ${theme.fonts.size(18)};
    color: ${theme.colors.gray1};
    text-align: center;
    margin-top: -15px;
  `}
`

export const Back = styled(TouchableOpacity)`
  position: absolute;
  left: 24px;
  top: 72px;
  width: 24px;
  height: 24px;
  z-index: 1;
`

export const Content = styled.View`
  ${({ theme }) => css`
    flex: 1;
    justify-content: space-between;
    background-color: ${theme.colors.white};
    padding: 24px;
    padding-bottom: 50px;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    margin-top: -10px;
  `}
`

export const FlexRow = styled.View`
  flex-direction: row;
  gap: 18px;
`

export const InputWrapper = styled.View`
  flex: 1;
`

export const Form = styled.View`
  gap: 24px;
`
export const OptionsWrapper = styled.View``

export const OptionLabel = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.family.nunitoSans.bold};
    ${theme.fonts.size(14)};
    color: ${theme.colors.gray2};
    margin-bottom: 8px;
  `}
`

export const OptionButtonsWrapper = styled.View`
  flex-direction: row;
  gap: 8px;
  margin-bottom: 5px;
`
export const OptionButton = styled(TouchableOpacity)<{
  color: 'green' | 'red'
  isActive: boolean
}>`
  ${({ theme, color, isActive }) => css`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.gray6};
    border-color: ${theme.colors.gray6};
    border-width: 1px;
    flex: 1;
    padding: 16px;
    border-radius: 6px;

    ${isActive &&
    color === 'green' &&
    css`
      background-color: ${theme.colors.greenLight};
      border-color: ${theme.colors.greenDark};
    `}

    ${isActive &&
    color === 'red' &&
    css`
      background-color: ${theme.colors.redLight};
      border-color: ${theme.colors.redDark};
    `}
  `}
`

export const OptionButtonsBullet = styled.View<{ color: 'green' | 'red' }>`
  ${({ theme, color }) => css`
    width: 8px;
    height: 8px;
    border-radius: 4px;
    margin-right: 8px;
    background-color: ${color === 'green'
      ? theme.colors.greenDark
      : theme.colors.redDark};
  `}
`

export const OptionButtonText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.family.nunitoSans.bold};
    ${theme.fonts.size(14)};
    color: ${theme.colors.gray1};
  `}
`
