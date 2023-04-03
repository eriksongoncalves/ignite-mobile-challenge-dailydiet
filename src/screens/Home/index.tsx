import React from 'react'
import { View } from 'react-native'

import SvgLogo from '@assets/logo.svg'
import { MealList } from '@components/MealList'
import { mealsMock } from '../../mocks/meals'

export const Home = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        padding: 24
      }}
    >
      <SvgLogo width={82} height={37} />

      <MealList meals={mealsMock} />
    </View>
  )
}
