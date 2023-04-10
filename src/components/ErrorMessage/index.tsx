import React from 'react'

import * as S from './styles'

export type ErrorMessageProps = {
  message?: string
}

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return <S.Wrapper>{message}</S.Wrapper>
}
