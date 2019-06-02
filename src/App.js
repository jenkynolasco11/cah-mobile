import React from 'react'
import { createAppContainer, createStackNavigator } from 'react-navigation'
import { StyleSheet, View, StatusBar } from 'react-native'

import Login from './screens/login'

const Navigator = createStackNavigator(
  {
    login: { screen: Login },
  },
  {
    initialRouteKey: 'login',
    headerMode: 'none',
  }
)

const AppNavigator = createAppContainer(Navigator)

function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <AppNavigator />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default App
