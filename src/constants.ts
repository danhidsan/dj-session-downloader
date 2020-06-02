import { Dimensions } from 'react-native'

interface Constants {
  screenWidth: number
  screeHeight: number
}

export default <Constants>{
  screeHeight: Dimensions.get('screen').height,
  screenWidth: Dimensions.get('screen').width
}
