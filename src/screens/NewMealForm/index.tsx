import React, { useState } from 'react'

import * as S from './styles'
import { Input } from '@components/Input'

export const NewMealForm = () => {
  const [value, setValue] = useState('')

  return (
    <S.Wrapper>
      <Input value={value} onChangeText={setValue} />
    </S.Wrapper>
  )
}
