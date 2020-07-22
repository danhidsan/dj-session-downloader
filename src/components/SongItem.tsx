import React, { FC } from 'react'
import {
  Image,
  Text,
  View,
  ViewStyle,
  TextStyle,
  StyleSheet,
  ImageStyle,
  TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

interface SongItemProps {
  id: string
  title: string
  duration?: string
  saved?: boolean
  image: string
  onLongPress?: (itemId: string) => void
  onPress: (itemId: string) => void
}

interface SongItemStyle {
  timeContainer: ViewStyle
  imageContainer: ViewStyle
  image: ImageStyle
  textContainer: ViewStyle
  title: TextStyle
  duration: TextStyle
  leftAction: ViewStyle
  actionText: TextStyle
}

const SongItem: FC<SongItemProps> = ({
  id,
  title,
  duration,
  saved,
  image,
  onLongPress,
  onPress
}: SongItemProps) => {
  return (
    <TouchableOpacity
      onPress={() => onPress(id)}
      onLongPress={() => (onLongPress ? onLongPress(id) : null)}>
      <View
        style={{
          flexDirection: 'row',
          height: 120
        }}>
        <View style={style.imageContainer}>
          <Image style={style.image} source={{ uri: image }} />
        </View>
        <View style={style.textContainer}>
          <Text style={style.title}>{title}</Text>
          <View style={style.timeContainer}>
            <Text style={style.duration}>{duration}</Text>
            {saved ? <Icon name="play-arrow" size={40} /> : null}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const style = StyleSheet.create<SongItemStyle>({
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textContainer: {
    flex: 4,
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingLeft: 10
  },
  title: {
    color: 'grey',
    fontFamily: 'MerriweatherSans-ExtraBold',
    fontSize: 16
  },
  duration: {
    color: 'grey',
    fontFamily: 'MerriweatherSans-Regular',
    fontSize: 12
  },
  imageContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 15
  },
  leftAction: {
    backgroundColor: 'red',
    justifyContent: 'center'
  },
  actionText: {
    color: 'white',
    fontSize: 16,
    backgroundColor: 'transparent',
    padding: 10
  }
})

export default SongItem
