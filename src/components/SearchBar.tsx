import React from 'react'
import { StyleSheet, TextInput, ViewStyle } from 'react-native'

import Constants from '../constants'

interface Styles {
  input: ViewStyle
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface SearchBarState {}

interface SearchBarProps {
  onChange: (text: string) => void
}

class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
  constructor(props: SearchBarProps) {
    super(props)
  }

  render(): React.ReactNode {
    return (
      <TextInput
        placeholder={'Search session'}
        onChangeText={this.props.onChange}
        style={style.input}
      />
    )
  }
}

const style = StyleSheet.create<Styles>({
  input: {
    height: 40,
    width: Constants.screenWidth * 0.9,
    borderColor: '#d3d3d3',
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 20,
    paddingRight: 10
  }
})

export default SearchBar
