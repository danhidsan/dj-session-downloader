import React from 'react'
import { View, ViewStyle, StyleSheet, FlatList } from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context'

import { Song } from '../types'
import SongItem from '../components/SongItem'
import SearchBar from '../components/SearchBar'
import Constants from '../constants'
import { searchSong } from '../repositories/song'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SearchState {
  songs: Song[]
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SearchProps {}

interface SearchViewStyles {
  header: ViewStyle
  container: ViewStyle
}

const DATA: Array<Song> = [
  {
    id: 'Ifwz5BgY4eA',
    title: 'NERVO Live @ Tomorrowland 2018',
    duration: '00:59',
    image: 'https://i.ytimg.com/vi/Ifwz5BgY4eA/default.jpg'
  },
  {
    id: 'zs0EAexTA4o',
    title: 'Nervo | Tomorrowland Belgium 2019',
    duration: '00:59',
    image: 'https://i.ytimg.com/vi/zs0EAexTA4o/default.jpg'
  },
  {
    id: 'AZGOcZFRgd8',
    title: 'Tomorrowland Belgium 2017 | Nervo',
    duration: '01:59',
    image: 'https://i.ytimg.com/vi/AZGOcZFRgd8/default.jpg'
  },
  {
    id: 'CzgOulo5gOg',
    title: 'Tomorrowland Belgium 2016 | NERVO',
    duration: '00:59',
    image: 'https://i.ytimg.com/vi/CzgOulo5gOg/default.jpg'
  },
  {
    id: '_m9OgQkdVqQ',
    title: 'NERVO - Tomorrowland Main Stage Saturday July 22, 2017',
    duration: '01:59',
    image: 'https://i.ytimg.com/vi/_m9OgQkdVqQ/default.jpg'
  },
  {
    id: '05DSMz1Tyrk',
    title: 'TomorrowWorld 2014 | NERVO',
    duration: '00:49',
    image: 'https://i.ytimg.com/vi/05DSMz1Tyrk/default.jpg'
  }
]

class SearchView extends React.Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props)
    this.state = {
      songs: []
    }
    this.handleChangeSearchText = this.handleChangeSearchText.bind(this)
  }

  handleChangeSearchText(text: string): void {
    searchSong(text)
      .then((songs: Song[]) => {
        console.log(songs)
        this.setState({ songs: songs })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render(): React.ReactNode {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={style.header}>
          <SearchBar onChange={this.handleChangeSearchText} />
        </View>
        <View style={style.container}>
          <FlatList
            data={this.state.songs}
            renderItem={({ item }) => <SongItem {...item} />}
            keyExtractor={(item) => item.id}
          />
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
