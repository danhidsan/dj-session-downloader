import React from 'react'
import { View, Image, Text} from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context'

import SongItem from '../components/SongItem'
import SearchBar from '../components/SearchBar'
import Constants from '../constants'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SearchState {}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SearchProps {}

class SearchView extends React.Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props)
  }

  handleChangeSearchText(text: string): void {
    console.log(text)
  }

  render(): React.ReactNode {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            width: Constants.screenWidth,
            height: 100,
            flex: 0.4,
            borderBottomWidth: 0.5,
            borderBottomColor: '#d3d3d3',
            alignItems: 'center'
          }}>
          <SearchBar onChange={this.handleChangeSearchText} />
        </View>
        <View
          style={{
            width: Constants.screenWidth,
            height: 200,
            flex: 5.6,
            paddingTop: 5,
            paddingHorizontal: 20
          }}>
          <SongItem
            title={'Nervo - Tomorrowland 2019'}
            duration={'00:59'}
            image={'https://i.ytimg.com/vi/CzgOulo5gOg/default.jpg'}
          />
        </View>
      </SafeAreaView>
    )
  }
}

export default SearchView
