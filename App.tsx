/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

Icon.loadFont()

import { SafeAreaProvider } from 'react-native-safe-area-context'

import MainView from './src/main'

const App: () => React.ReactNode = () => {
  return (
    <SafeAreaProvider>
      <MainView />
    </SafeAreaProvider>
  )
}

export default App
