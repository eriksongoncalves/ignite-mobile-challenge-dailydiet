import React from 'react'
import { TouchableOpacityProps } from 'react-native'

import * as S from './styles'

export type ButtonProps = {
  text: string
  Icon?: JSX.Element
  outline?: boolean
  isActive?: boolean
  fullWidth?: boolean
} & TouchableOpacityProps

export const Button = ({
  text,
  Icon,
  outline = false,
  isActive = false,
  fullWidth = true,
  ...rest
}: ButtonProps) => {
  return (
    <S.Wrapper
      isActive={isActive}
      outline={outline}
      fullWidth={fullWidth}
      isDisabled={!!rest?.disabled}
      {...rest}
    >
      {Icon && Icon}
      <S.Text outline={outline}>{text}</S.Text>
    </S.Wrapper>
  )
}
