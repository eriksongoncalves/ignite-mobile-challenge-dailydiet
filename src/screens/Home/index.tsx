import React from 'react'
import { View } from 'react-native'

import { CardText } from '@components/CardText'
import SvgLogo from '@assets/logo.svg'

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

      <CardText
        title="90,86%"
        subtitle="melhor sequência de pratos dentro da dieta"
        color="red"
      />
    </View>
  )
}
