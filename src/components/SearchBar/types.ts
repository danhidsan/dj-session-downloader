import { ViewStyle } from 'react-native'

export type StylesType = {
  input: ViewStyle
}

export type SearchBarProps = {
  onSubmit: (text: string) => void
}
