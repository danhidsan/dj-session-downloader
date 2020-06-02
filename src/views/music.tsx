import React from 'react'
import { Text, View } from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MusicViewState {}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MusicViewProps {}

class MusicView extends React.Component<MusicViewProps, MusicViewState> {
  constructor(props: MusicViewProps) {
    super(props)
  }

  render() {
    return (
      <SafeAreaView>
        <View>
          <Text>{'MusicView'}</Text>
        </View>
      </SafeAreaView>
    )
  }
}

export default MusicView
