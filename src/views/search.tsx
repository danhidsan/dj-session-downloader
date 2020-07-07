import React from 'react'
import {
  View,
  ViewStyle,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Alert
} from 'react-native'
import Realm from 'realm'
import { SafeAreaView } from 'react-native-safe-area-context'

import Session, { SessionTypes } from '../models/session'
import SongItem from '../components/SongItem'
import SearchBar from '../components/SearchBar'
import Constants from '../constants'
import { searchSong } from '../repositories/song'

export interface SearchState {
  songs: SessionTypes[]
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
    this._handleChangeSearchText = this._handleChangeSearchText.bind(this)
  }

  _saveSession(itemId: string): void {
    const item: SessionTypes = this.state.songs.filter(
      (item: SessionTypes) => item.id === itemId
    )[0]

    const realm = new Realm({ schema: [Session.schema] })
    console.log(Realm.defaultPath)

    try {
      const existSession =
        realm.objects<Session>(Session.schema.name).filtered(`id = "${itemId}"`)
          .length > 0

      if (!existSession) {
        realm.write(() => {
          const session = new Session(
            item.id,
            '',
            item.image,
            item.title,
            `${item.id}.mp3`
          )
          realm.create(Session.schema.name, session)
        })
      } else {
        this._sessionExistAlert()
      }
    } catch (error) {
      console.log(error)
    }
  }

  _sessionExistAlert(): void {
    Alert.alert('This session is already saved')
  }

  _handleOnPressItem(itemId: string): void {
    Alert.alert(
      'Download this session?',
      'Then, the session has been stored in device',
      [
        { text: 'Ok', onPress: () => this._saveSession(itemId) },
        {
          text: 'Cancel',
          onPress: () => console.log('Canceling download...'),
          style: 'cancel'
        }
      ],
      { cancelable: false }
    )
  }

  _handleChangeSearchText(text: string): void {
    this.setState({ loading: true })
    searchSong(text)
      .then((songs: Session[]) => {
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
          <SearchBar onSubmit={this._handleChangeSearchText} />
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
