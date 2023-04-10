import React, { useCallback, useMemo } from 'react'
import {
  useNavigation,
  CommonActions,
  useRoute
} from '@react-navigation/native'

import * as S from './styles'
import { MealStatus } from '../../@types/global'
import { Button } from '@components/Button'
import SvgIn from '@assets/Illustration1.svg'
import SvgOut from '@assets/Illustration2.svg'

type RouteParams = {
  status: MealStatus
}

export const NewMealFormFinish = () => {
  const navigation = useNavigation()
  const route = useRoute()
  const routeParams = route.params as RouteParams

  const isStatusIn = routeParams.status === MealStatus.IN

  const data = useMemo(() => {
    return isStatusIn
      ? {
          title: 'Continue assim!',
          subtitle: (
            <S.Text>
              Você continua <S.Text isBold>dentro da dieta</S.Text>. Muito bem!
            </S.Text>
          ),
          illustration: <SvgIn />
        }
      : {
          title: 'Que pena!',
          subtitle: (
            <S.Text>
              Você <S.Text isBold>saiu da dieta</S.Text> dessa vez, mas continue
              se esforçando e não desista!
            </S.Text>
          ),
          illustration: <SvgOut />
        }
  }, [isStatusIn])

  const goToHome = useCallback(() => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'home' }]
      })
    )
  }, [navigation])

  return (
    <S.Wrapper>
      <S.Title isIn={isStatusIn}>{data.title}</S.Title>

      {data.subtitle}

      {data.illustration}

      <Button text="Ir para a página inicial" onPress={goToHome} />
    </S.Wrapper>
  )
}
