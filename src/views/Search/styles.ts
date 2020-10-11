import { StyleSheet } from 'react-native'
import Constants from '../../constants'
import { StylesType } from './types'

const style = StyleSheet.create<StylesType>({
  header: {
    width: Constants.screenWidth,
    height: 100,
    flex: 0.4,
    borderBottomWidth: 0.5,
    borderBottomColor: '#d3d3d3',
    alignItems: 'center'
  },
  container: {
    width: Constants.screenWidth,
    height: 200,
    flex: 5.6,
    paddingTop: 5,
    paddingHorizontal: 20
  }
})

export default style
