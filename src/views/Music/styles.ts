import { StyleSheet } from 'react-native'
import Constants from '../../constants'
import { StylesType } from './types'

const style = StyleSheet.create<StylesType>({
  container: {
    width: Constants.screenWidth,
    paddingTop: 5,
    paddingHorizontal: 20
  }
})

export default style
