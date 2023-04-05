import React, { useCallback } from 'react'
import {
  useNavigation,
  CommonActions,
  useRoute
} from '@react-navigation/native'

import * as S from './styles'
import { MealStatus } from '../../@types/global'
import { Button } from '@components/Button'

type RouteParams = {
  status: MealStatus
}

export const NewMealFormFinish = () => {
  const navigation = useNavigation()
  const route = useRoute()
  const routeParams = route.params as RouteParams

  console.log('>>> status', routeParams.status)

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
      <Button text="Ir para a página inicial" onPress={goToHome} />
    </S.Wrapper>
  )
}
