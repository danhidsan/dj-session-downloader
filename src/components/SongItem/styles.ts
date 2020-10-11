import { StyleSheet } from 'react-native'
import { SongItemStyle } from './types'

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

export default style
