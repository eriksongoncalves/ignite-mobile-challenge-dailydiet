import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '@screens/Home'
import { Summary } from '@screens/Summary'
import { NewMealForm } from '@screens/NewMealForm'

const Stack = createNativeStackNavigator()

export const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="summary" component={Summary} />
        <Stack.Screen name="newMealForm" component={NewMealForm} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
