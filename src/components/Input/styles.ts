import styled, { css } from 'styled-components/native'
import { TextInput as Input } from 'react-native'

export const Wrapper = styled.View``

export const Label = styled(Input)`
  ${({ theme }) => css`
    font-family: ${theme.fonts.family.nunitoSans.bold};
    ${theme.fonts.size(14)};
    color: ${theme.colors.gray2};
    margin-bottom: 8px;
  `}
`

export const TextInput = styled(Input)<{ hasFocusOrIsFilled: boolean }>`
  ${({ theme, hasFocusOrIsFilled }) => css`
    width: 100%;
    color: ${theme.colors.gray2};
    border-width: 1px;
    border-radius: 6px;
    border-color: ${theme.colors.gray5};
    height: 48px;
    padding: 14px;

    ${hasFocusOrIsFilled &&
    css`
      border-color: ${theme.colors.gray3};
    `}
  `}
`
