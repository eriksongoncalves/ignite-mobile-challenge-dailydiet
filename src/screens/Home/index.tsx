import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useTheme } from 'styled-components'
import { Plus } from 'phosphor-react-native'

import * as S from './styles'
import { mealsMock } from '../../mocks/meals'
import SvgLogo from '@assets/logo.svg'
import { MealList } from '@components/MealList'
import { ImageProfile } from '@components/ImageProfile'
import { Button } from '@components/Button'
import { CardText } from '@components/CardText'

export const Home = () => {
  const { colors } = useTheme()
  const navigation = useNavigation()

  return (
    <S.Wrapper>
      <S.Content>
        <S.Header>
          <SvgLogo width={82} height={37} />

          <ImageProfile uri="https://randomuser.me/api/portraits/thumb/men/75.jpg" />
        </S.Header>

        <S.CardTextWrapper>
          <CardText
            title="90,86%"
            subtitle="das refeições dentro da dieta"
            onPress={() => navigation.navigate('summary')}
          />
        </S.CardTextWrapper>

        <S.NewMealWrapper>
          <S.NewMealText>Refeições</S.NewMealText>
          <Button
            text="Nova refeição"
            Icon={<Plus size={20} color={colors.white} />}
            onPress={() => {}}
          />
        </S.NewMealWrapper>

        <MealList meals={mealsMock} />
      </S.Content>
    </S.Wrapper>
  )
}
