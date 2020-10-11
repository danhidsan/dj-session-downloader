import React, { FC } from 'react'
import { Image, Text, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { SongItemProps } from './types'
import style from './styles'

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

export default SongItem
