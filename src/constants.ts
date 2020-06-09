import { Dimensions } from 'react-native'

interface Constants {
  screenWidth: number
  screeHeight: number
  apiKey: string
}

export default <Constants>{
  screeHeight: Dimensions.get('screen').height,
  screenWidth: Dimensions.get('screen').width,
  apiKey: 'AIzaSyD0Z3HDiV08wpLtjsi--_FQ1op4UacXtpM'
}
