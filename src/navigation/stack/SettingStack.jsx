import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Profile from '../../pages/Profile'
import Login from '../../pages/Login'
import SettingProfile from '../../pages/SettingProfile'

const Stack = createNativeStackNavigator()

const navigationOptions = {
  headerStyle: { backgroundColor: '#0f172a' },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  headerTitleAlign: 'center',
}

export const SettingStack = () => {
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen
        name="Profile Page"
        component={Profile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Setting Profile"
        component={SettingProfile}
        options={{ ...navigationOptions }}
      />
    </Stack.Navigator>
  )
}
