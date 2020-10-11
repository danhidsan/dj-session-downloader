import { ViewStyle, ImageStyle, TextStyle } from 'react-native'

export type SongItemProps = {
  id: string
  title: string
  duration?: string
  saved?: boolean
  image: string
  onLongPress?: (itemId: string) => void
  onPress: (itemId: string) => void
}

export type SongItemStyle = {
  timeContainer: ViewStyle
  imageContainer: ViewStyle
  image: ImageStyle
  textContainer: ViewStyle
  title: TextStyle
  duration: TextStyle
  leftAction: ViewStyle
  actionText: TextStyle
}
