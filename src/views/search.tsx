import React from 'react'
import {Text, TextInput, View} from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context'

import Constants from '../constants'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SearchState {}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SearchProps {}

class SearchView extends React.Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props)
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            width: Constants.screenWidth,
            height: 100,
            flex: 0.4,
            borderBottomWidth: 0.5,
            borderBottomColor: 'grey',
            alignItems: 'center'
          }}>
          <TextInput
            style={{
              height: 40,
              width: Constants.screenWidth * 0.9,
              borderColor: 'gray',
              borderWidth: 1,
              borderRadius: 20
            }}
          />
        </View>
        <View
          style={{
            width: Constants.screenWidth,
            height: 200,
            flex: 5.6
          }}>
          <Text>{''}</Text>
        </View>
      </SafeAreaView>
    )
  }
}

export default SearchView
