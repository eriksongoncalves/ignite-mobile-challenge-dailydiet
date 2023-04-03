import React from 'react'

import * as S from './styles'
import defaultUserImg from '../../assets/default-user.jpg'

export type ImageProfileProps = {
  uri?: string
}

export const ImageProfile = ({ uri }: ImageProfileProps) => {
  const source = uri ? { uri: uri } : defaultUserImg

  return <S.Image source={source} resizeMode="cover" testID="imageProfile" />
}
