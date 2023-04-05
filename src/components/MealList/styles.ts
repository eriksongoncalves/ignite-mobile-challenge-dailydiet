import styled, { css } from 'styled-components/native'
import { MealStatus } from '../../@types/global'

export type StatusProps = {
  type: MealStatus
}

export const Item = styled.View`
  ${({ theme }) => css`
    border-width: 1px;
    border-color: ${theme.colors.gray5};
    border-radius: 6px;
    padding: 14px 16px;
    margin-bottom: 12px;
    flex-direction: row;
    align-items: center;
  `}
`

export const Hour = styled.View`
  ${({ theme }) => css`
    border-right-width: 1px;
    border-color: ${theme.colors.gray4};
    padding-right: 14px;
    margin-right: 14px;
  `}
`

export const SectionTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.family.nunitoSans.bold};
    ${theme.fonts.size(18)};
    color: ${theme.colors.gray1};
    background: #fff;
    padding-bottom: 12px;
  `}
`

export const MealText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.family.nunitoSans.regular};
    flex: 1;
    ${theme.fonts.size(16)};
    color: ${theme.colors.gray2};
    margin-right: 12px;
  `}
`

export const SectionFooterSpace = styled.View`
  margin-top: 20px;
`
export const Status = styled.View<StatusProps>`
  ${({ theme, type }) => css`
    width: 14px;
    height: 14px;
    border-radius: 7px;
    background-color: ${type === 'in'
      ? theme.colors.greenMid
      : theme.colors.redMid};
  `}
`
