import React from 'react'
import { Text, View } from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context'

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
      <SafeAreaView>
        <View>
          <Text>{'SearchView'}</Text>
        </View>
      </SafeAreaView>
    )
  }
}

export default SearchView
