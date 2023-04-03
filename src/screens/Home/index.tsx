import React from 'react'
import { View } from 'react-native'

import { CardText } from '@components/CardText'

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
      <CardText
        title="90,86%"
        subtitle="melhor sequência de pratos dentro da dieta"
        color="red"
      />
    </View>
  )
}
