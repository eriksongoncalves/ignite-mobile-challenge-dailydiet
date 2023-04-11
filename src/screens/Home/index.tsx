import React from 'react'
import { ActivityIndicator } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useTheme } from 'styled-components'
import { Plus } from 'phosphor-react-native'

import * as S from './styles'
import SvgLogo from '@assets/logo.svg'
import { MealList } from '@components/MealList'
import { ImageProfile } from '@components/ImageProfile'
import { Button } from '@components/Button'
import { CardText } from '@components/CardText'
import { useMeals } from '../../hooks/meals'

export const Home = () => {
  const { colors } = useTheme()
  const navigation = useNavigation()
  const { loading, data } = useMeals()

  return (
    <S.Wrapper>
      <S.Content>
        {loading ? (
          <ActivityIndicator size="large" />
        ) : (
          <>
            <S.Header>
              <SvgLogo width={82} height={37} />

              <ImageProfile uri="https://randomuser.me/api/portraits/thumb/men/75.jpg" />
            </S.Header>

            <S.CardTextWrapper>
              <CardText
                title={`${data.percentageIn}%`}
                subtitle="das refeições dentro da dieta"
                onPress={() => navigation.navigate('summary')}
              />
            </S.CardTextWrapper>

            <S.NewMealWrapper>
              <S.NewMealText>Refeições</S.NewMealText>
              <Button
                text="Nova refeição"
                Icon={<Plus size={20} color={colors.white} />}
                onPress={() => navigation.navigate('newMealForm')}
              />
            </S.NewMealWrapper>

            {data.count > 0 && <MealList meals={data.meals} />}
          </>
        )}
      </S.Content>
    </S.Wrapper>
  )
}
