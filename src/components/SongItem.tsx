import React from 'react'
import {
  Image,
  Text,
  View,
  ViewStyle,
  TextStyle,
  StyleSheet,
  ImageStyle
} from 'react-native'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface SongItemState {}
interface SongItemProps {
  title: string
  duration?: string
  image: string
}

interface SongItemStyle {
  imageContainer: ViewStyle
  image: ImageStyle
  textContainer: ViewStyle
  title: TextStyle
  duration: TextStyle
}

class SongItem extends React.Component<SongItemProps, SongItemState> {
  constructor(props: SongItemProps) {
    super(props)
  }

  render(): React.ReactNode {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 120
        }}>
        <View style={style.imageContainer}>
          <Image
            style={style.image}
            source={{
              uri: this.props.image
            }}
          />
        </View>
        <View style={style.textContainer}>
          <Text style={style.title}>{this.props.title}</Text>
          <Text style={style.duration}>{this.props.duration}</Text>
        </View>
      </View>
    )
  }
}

const style = StyleSheet.create<SongItemStyle>({
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
  }
})

export default SongItem
