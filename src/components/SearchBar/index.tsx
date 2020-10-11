import React, { useState, FC } from 'react'
import { TextInput } from 'react-native'
import { SearchBarProps } from './types'
import style from './styles'

const SearchBar: FC<SearchBarProps> = ({ onSubmit }: SearchBarProps) => {
  const [text, setText] = useState<string>('')

  const handleOnSubmit = (): void => {
    onSubmit(text)
  }

  const handleChangeText = (value: string): void => {
    setText(value)
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

export default SearchBar
