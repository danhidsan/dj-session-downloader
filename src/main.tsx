import React from 'react'
import { Text, View, SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ActionSheetProvider } from '@expo/react-native-action-sheet'
import { enableScreens } from 'react-native-screens'

// Views
import MusicView from './views/Music'
import SearchView from './views/Search'

enableScreens()

const RootStack = createStackNavigator()
const Tab = createBottomTabNavigator()

const Home = () => (
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
)

const Main = () => (
  <ActionSheetProvider>
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="Home" component={Home}/>
      </RootStack.Navigator>
    </NavigationContainer>
  </ActionSheetProvider>
)

export default Main
