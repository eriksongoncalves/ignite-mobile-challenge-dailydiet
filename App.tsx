import React from 'react'
import { Text } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { ThemeProvider } from 'styled-components'
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold
} from '@expo-google-fonts/nunito-sans'

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <ThemeProvider theme={{}}>
      <StatusBar style="light" backgroundColor="transparent" translucent />
      <Text>Hello</Text>
    </ThemeProvider>
  )
}
