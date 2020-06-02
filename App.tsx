/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'

import MainView from './src/main'

const App: () => React.ReactNode = () => {
  return (
    <>
      <StatusBar barStyle="default" />
      <SafeAreaView>
        <MainView></MainView>
      </SafeAreaView>
    </>
  )
}

export default App
