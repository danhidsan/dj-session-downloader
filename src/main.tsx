import React from 'react'
import { Text, View, SafeAreaView } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// Views
import MusicView from './views/music'
import SearchView from './views/search'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MainState {}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MainProps {}

const Tab = createBottomTabNavigator()

class MainView extends React.Component<MainProps, MainState> {
  constructor(props: MainProps) {
    super(props)
  }

  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Music"
            component={MusicView}
            options={{ tabBarLabel: 'Music' }}
          />
          <Tab.Screen
            name="Search"
            component={SearchView}
            options={{ tabBarLabel: 'Search' }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    )
  }
}

export default MainView
