import { StyleSheet } from 'react-native'
import { StylesType } from './types'
import Constants from '../../constants'

const style = StyleSheet.create<StylesType>({
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

export default style
