import React from 'react'
import {
  View,
  ViewStyle,
  StyleSheet,
  FlatList,
  ActivityIndicator
} from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context'

import { Song } from '../types'
import SongItem from '../components/SongItem'
import SearchBar from '../components/SearchBar'
import Constants from '../constants'
import { searchSong } from '../repositories/song'

export interface SearchState {
  songs: Song[]
  loading: boolean
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SearchProps {}

interface SearchViewStyles {
  header: ViewStyle
  container: ViewStyle
}

class SearchView extends React.Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props)
    this.state = {
      songs: [],
      loading: false
    }

    this._handleOnPressItem = this._handleOnPressItem.bind(this)
    this.handleChangeSearchText = this.handleChangeSearchText.bind(this)
  }

  _handleOnPressItem(itemId: string): void {
    // TODO: Downloading logic here
  }

  handleChangeSearchText(text: string): void {
    this.setState({ loading: true })
    searchSong(text)
      .then((songs: Song[]) => {
        this.setState({ songs: songs, loading: false })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render(): React.ReactNode {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={style.header}>
          <SearchBar onSubmit={this.handleChangeSearchText} />
        </View>
        <View style={style.container}>
          {!this.state.loading ? (
            <FlatList
              data={this.state.songs}
              renderItem={({ item }) => (
                <SongItem {...item} onPress={this._handleOnPressItem} />
              )}
              keyExtractor={(item) => item.id}
            />
          ) : (
            <ActivityIndicator size="small" color="grey" />
          )}
        </View>
      </SafeAreaView>
    )
  }
}

const style = StyleSheet.create<SearchViewStyles>({
  header: {
    width: Constants.screenWidth,
    height: 100,
    flex: 0.4,
    borderBottomWidth: 0.5,
    borderBottomColor: '#d3d3d3',
    alignItems: 'center'
  },
  container: {
    width: Constants.screenWidth,
    height: 200,
    flex: 5.6,
    paddingTop: 5,
    paddingHorizontal: 20
  }
})

export default SearchView
