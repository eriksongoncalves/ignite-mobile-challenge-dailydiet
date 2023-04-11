import React from 'react'
import { ActivityIndicator } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { ArrowLeft } from 'phosphor-react-native'

import * as S from './styles'
import { CardText } from '@components/CardText'
import { useMeals } from '../../hooks/meals'

export const Summary = () => {
  const navigation = useNavigation()
  const { loading, data } = useMeals()

  const color = 'green'

  return (
    <S.Wrapper color={color}>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <>
          <S.Header>
            <S.Back onPress={() => navigation.goBack()}>
              <ArrowLeft size={24} />
            </S.Back>
            <CardText
              title={`${data.percentageIn}%`}
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

            <CardText
              title={String(data.count).padStart(2, '0')}
              subtitle="refeições registradas"
              color="gray"
            />

            <S.Space />

            <S.CardFlexWrapper>
              <S.CardWrapper>
                <CardText
                  title={String(data.mealsIn).padStart(2, '0')}
                  subtitle="refeições dentro da dieta"
                  color="green"
                />
              </S.CardWrapper>
              <S.CardWrapper>
                <CardText
                  title={String(data.mealsOut).padStart(2, '0')}
                  subtitle="refeições fora da dieta"
                  color="red"
                />
              </S.CardWrapper>
            </S.CardFlexWrapper>
          </S.Content>
        </>
      )}
    </S.Wrapper>
  )
}
