import { useState } from 'react'
import { TextInputProps } from 'react-native'
import { Control, Controller } from 'react-hook-form'

import { ErrorMessage } from '../ErrorMessage'

import * as S from './styles'

type InputProps = {
  name: string
  label: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>
  errorMessage?: string
} & Omit<TextInputProps, 'onChangeText' | 'value' | 'onFocus' | 'onBlur'>

export const Input = ({
  name,
  label,
  control,
  errorMessage,
  ...rest
}: InputProps) => {
  const [hasFocus, setHasFocus] = useState(false)

  return (
    <S.Wrapper>
      <S.Label>{label}</S.Label>

      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => {
          return (
            <>
              <S.TextInput
                autoCorrect={false}
                {...rest}
                value={value}
                hasFocusOrIsFilled={hasFocus || !!value}
                onFocus={() => setHasFocus(true)}
                onBlur={() => setHasFocus(false)}
                onChangeText={onChange}
              />
              {errorMessage && <ErrorMessage message={errorMessage} />}
            </>
          )
        }}
      />
    </S.Wrapper>
  )
}
