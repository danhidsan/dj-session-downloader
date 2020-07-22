import React, { useState, FC } from 'react'
import { StyleSheet, TextInput, ViewStyle } from 'react-native'

import Constants from '../constants'

interface Styles {
  input: ViewStyle
}

interface SearchBarProps {
  onSubmit: (text: string) => void
}

const SearchBar: FC<SearchBarProps> = ({ onSubmit }: SearchBarProps) => {
  const [text, setText] = useState<string>('')

  const handleOnSubmit = (): void => {
    onSubmit(text)
  }

  const handleChangeText = (text: string): void => {
    setText(text)
  }

  return (
    <TextInput
      value={text}
      placeholder={'Search session'}
      onChangeText={handleChangeText}
      onSubmitEditing={handleOnSubmit}
      style={style.input}
      clearButtonMode="while-editing"
    />
  )
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
