import React from 'react'
import { View } from 'react-native'
import { Plus } from 'phosphor-react-native'

import { Button } from '@components/Button'

export const Home = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
      }}
    >
      <Button text="Label" Icon={<Plus color="white" size={18} />} />
    </View>
  )
}
