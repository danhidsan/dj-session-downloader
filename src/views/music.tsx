import React, { FC, useState, useEffect } from 'react'
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  View,
  ViewStyle
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {
  connectActionSheet,
  ActionSheetProps,
  ActionSheetOptions
} from '@expo/react-native-action-sheet'

import SongItem from '../components/SongItem'
import Constants from '../constants'
import Session, { SessionTypes } from '../models/session'

import { songs as test_songs } from '../testData'

interface MusicViewStyles {
  container: ViewStyle
}

const useMusicSession = () => {
  const [sessions, setSessions] = useState<Session[]>([])

  const deleteSession = (sessionId: string) => {
    // TODO: Realm deleting logic here

    // Deleting music session from state
    const sessionsCopy: Session[] = sessions.filter(
      (value: Session, index: number) => {
        if (value.id !== sessionId) return value
      }
    )
    setSessions(sessionsCopy)
  }

  useEffect(() => {
    // TODO: Realm retreving logic here

    // adding test data
    setSessions(test_songs)
  }, [])

  return [sessions, deleteSession] as [Session[], (sessionId: string) => void]
}

const MusicView: FC<ActionSheetProps> = (props: ActionSheetProps) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [sessions, deleteSession] = useMusicSession()

  const onItemPress = (itemProps: string): void => {
    // TODO: Playing logic here
  }

  const onItemLongPress = (itemId: string): void => {
    const buttons: string[] = ['Delete', 'Cancel']
    const destructiveButtonIndex = 0
    const cancelButtonIndex = 1

    const options: ActionSheetOptions = {
      options: buttons,
      destructiveButtonIndex,
      cancelButtonIndex
    }

    props.showActionSheetWithOptions(options, (buttonIndex: number) => {
      if (buttonIndex === 0) {
        console.log(`Deleting ${itemId}`)
        deleteSession(itemId)
      }
    })
  }

  return (
    <SafeAreaView>
      <View style={style.container}>
        {!loading ? (
          <FlatList
            data={sessions}
            renderItem={({ item }) => (
              <SongItem
                {...item}
                onLongPress={onItemLongPress}
                onPress={onItemPress}
              />
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

const style = StyleSheet.create<MusicViewStyles>({
  container: {
    width: Constants.screenWidth,
    paddingTop: 5,
    paddingHorizontal: 20
  }
})

const connectedActionSheet = connectActionSheet(MusicView)

export default connectedActionSheet
