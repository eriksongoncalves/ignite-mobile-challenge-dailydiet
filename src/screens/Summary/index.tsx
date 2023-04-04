import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { ArrowLeft } from 'phosphor-react-native'

import * as S from './styles'
import { CardText } from '@components/CardText'

export const Summary = () => {
  const navigation = useNavigation()
  const color = 'green'

  return (
    <S.Wrapper color={color}>
      <S.Header>
        <S.Back onPress={() => navigation.goBack()}>
          <ArrowLeft size={24} />
        </S.Back>
        <CardText
          title="90,86%"
          subtitle="das refeições dentro da dieta"
          color={color}
        />
      </S.Header>
      <S.Content>
        <S.Title>Estatísticas gerais</S.Title>

        <CardText
          title="22"
          subtitle="melhor sequência de pratos dentro da dieta"
          color="gray"
        />

        <S.Space />

        <CardText title="109" subtitle="refeições registradas" color="gray" />

        <S.Space />

        <S.CardFlexWrapper>
          <S.CardWrapper>
            <CardText
              title="99"
              subtitle="refeições dentro da dieta"
              color="green"
            />
          </S.CardWrapper>
          <S.CardWrapper>
            <CardText
              title="10"
              subtitle="refeições fora da dieta"
              color="red"
            />
          </S.CardWrapper>
        </S.CardFlexWrapper>
      </S.Content>
    </S.Wrapper>
  )
}
