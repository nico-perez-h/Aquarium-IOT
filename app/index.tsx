import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Account, Dashboard, Inicio, Notifications } from './screens'

const Tab = createBottomTabNavigator()

const Index = () => {
  const tabs = [
    {
      id: 1,
      title: 'Inicio',
      screen: 'Inicio',
      icon: 'home',
      Component: Inicio,
    },
    {
      id: 2,
      title: 'Account',
      screen: 'Account',
      icon: 'user',
      Component: Account,
    },
    {
      id: 3,
      title: 'Dashboard',
      screen: 'Dashboard',
      icon: 'dashboard',
      Component: Dashboard,
    },
    {
      id: 4,
      title: 'Notifications',
      screen: 'Notifications',
      icon: 'bell',
      Component: Notifications,
    },
  ]
  return (
    
      <Tab.Navigator
        initialRouteName='Inicio'
        screenOptions={{
          headerShown: false
        }}
      >
        {
          tabs.map(x =>
            <Tab.Screen
              key={x.id}
              name={x.screen}
              component={x.Component}
            >

            </Tab.Screen>
          )
        }

      </Tab.Navigator>
  )
}

export default Index

const styles = StyleSheet.create({
  /* tabBar: {
    height: 70,
    position: 'absolute',
    bottom: 25,
    marginHorizontal: 16,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#dadada'
  } */
})