import React from 'react'
import { StyleSheet, TextInput, ViewStyle } from 'react-native'

import Constants from '../constants'

interface Styles {
  input: ViewStyle
}

interface SearchBarState {
  text: string
}

interface SearchBarProps {
  onSubmit: (text: string) => void
}

class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
  constructor(props: SearchBarProps) {
    super(props)
    this.state = {
      text: ''
    }

    this.handleChangeText = this.handleChangeText.bind(this)
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
  }

  handleOnSubmit(): void {
    this.props.onSubmit(this.state.text)
  }

  handleChangeText(text: string): void {
    this.setState({ text: text })
  }

  render(): React.ReactNode {
    return (
      <TextInput
        value={this.state.text}
        placeholder={'Search session'}
        onChangeText={this.handleChangeText}
        onSubmitEditing={this.handleOnSubmit}
        style={style.input}
        clearButtonMode="while-editing"
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
