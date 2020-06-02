import React from 'react'
import { Text, View } from 'react-native'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MainState {}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MainProps {}

class MainView extends React.Component<MainProps, MainState> {
  constructor(props: MainProps) {
    super(props)
  }

  render() {
    return (
      <View>
        <Text>{'Hello World'}</Text>
      </View>
    )
  }
}

export default MainView
