import React from 'react'
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

export interface MusicViewState {
  songs: Session[]
  loading: boolean
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MusicViewProps extends ActionSheetProps {}

interface MusicViewStyles {
  container: ViewStyle
}

class MusicView extends React.Component<MusicViewProps, MusicViewState> {
  constructor(props: MusicViewProps) {
    super(props)
    this.state = {
      loading: false,
      songs: test_songs
    }

    this._onItemPress = this._onItemPress.bind(this)
    this._onItemLongPress = this._onItemLongPress.bind(this)
  }

  _onItemPress(itemProps: string): void {
    // TODO: Playing logic here
  }

  _onItemLongPress(itemId: string): void {
    const buttons: string[] = ['Delete', 'Cancel']
    const destructiveButtonIndex = 0
    const cancelButtonIndex = 1

    const options: ActionSheetOptions = {
      options: buttons,
      destructiveButtonIndex,
      cancelButtonIndex
    }

    this.props.showActionSheetWithOptions(options, (buttonIndex: number) => {
      if (buttonIndex === 0) {
        // TODO: Deleting logic here
        console.log(`Deleting ${itemId}`)
      }
    })
  }

  render() {
    return (
      <SafeAreaView>
        <View style={style.container}>
          {!this.state.loading ? (
            <FlatList
              data={this.state.songs}
              renderItem={({ item }) => (
                <SongItem
                  {...item}
                  onLongPress={this._onItemLongPress}
                  onPress={this._onItemPress}
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
