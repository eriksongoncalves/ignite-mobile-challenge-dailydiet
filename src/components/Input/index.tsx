import { useState } from 'react'
import { TextInputProps } from 'react-native'

import * as S from './styles'

type InputProps = TextInputProps

export const Input = ({ value, ...rest }: InputProps) => {
  const [hasFocus, setHasFocus] = useState(false)

  return (
    <S.Wrapper>
      <S.Label>Label</S.Label>
      <S.TextInput
        {...rest}
        value={value}
        hasFocusOrIsFilled={hasFocus || !!value}
        onFocus={() => setHasFocus(true)}
        onBlur={() => setHasFocus(false)}
      />
    </S.Wrapper>
  )
}
