import React from 'react'
import { TouchableWithoutFeedback } from 'react-native'

import * as S from './styles'
import { useTheme } from 'styled-components'

export type CardTextColors = 'green' | 'red' | 'gray'

export type CardTextProps = {
  title: string
  titleSize?: number
  subtitle: string
  color?: CardTextColors
  onPress?: () => void
  testID?: string
}

export const CardText = ({
  title,
  titleSize = 32,
  subtitle,
  color = 'green',
  onPress,
  testID
}: CardTextProps) => {
  const { colors } = useTheme()

  return (
    <TouchableWithoutFeedback onPress={onPress} testID={testID}>
      <S.Wrapper color={color}>
        {onPress && (
          <S.LinkIcon
            size={24}
            color={color === 'green' ? colors.greenDark : colors.redDark}
          />
        )}
        <S.Title fontSize={titleSize}>{title}</S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>
      </S.Wrapper>
    </TouchableWithoutFeedback>
  )
}
