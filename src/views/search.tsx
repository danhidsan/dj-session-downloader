import React, { FC, useState } from 'react'
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

interface SearchViewStyles {
  header: ViewStyle
  container: ViewStyle
}

const useVideo = (): [
  boolean,
  Session[],
  (text: string) => void,
  (sessionId: string) => void
] => {
  const [loading, setLoading] = useState<boolean>(false)
  const [sessions, setSessions] = useState<Session[]>([])

  const searchSession = (text: string): void => {
    setLoading(true)
    searchSong(text)
      .then((songs: Session[]) => {
        setSessions(songs)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const saveSession = (sessionId: string) => {
    const item: SessionTypes = sessions.filter(
      (item: SessionTypes) => item.id === sessionId
    )[0]

    const realm = new Realm({ schema: [Session.schema] })
    console.log(Realm.defaultPath)

    try {
      const existSession =
        realm
          .objects<Session>(Session.schema.name)
          .filtered(`id = "${sessionId}"`).length > 0

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
        Alert.alert('This session is already saved')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return [loading, sessions, searchSession, saveSession]
}

const SearchView: FC = () => {
  const [loading, sessions, searchSession, saveSession] = useVideo()

  const handleOnPressItem = (sessionId: string): void => {
    Alert.alert(
      'Download this session?',
      'Then, the session has been stored in device',
      [
        { text: 'Ok', onPress: () => saveSession(sessionId) },
        {
          text: 'Cancel',
          onPress: () => console.log('Canceling download...'),
          style: 'cancel'
        }
      ],
      { cancelable: false }
    )
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={style.header}>
        <SearchBar onSubmit={searchSession} />
      </View>
      <View style={style.container}>
        {!loading ? (
          <FlatList
            data={sessions}
            renderItem={({ item }) => (
              <SongItem {...item} onPress={handleOnPressItem} />
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
