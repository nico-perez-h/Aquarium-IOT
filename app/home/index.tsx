import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Account from '../screens/Account'
import Dashboard from '../screens/Dashboard'
import Inicio from '../screens/Inicio'
import Notifications from '../screens/Notifications'
import TabButton from '../../components/TabButton';
import Colors from '@/components/Colors'

const Tab = createBottomTabNavigator()

const Index = () => {
  const tabs = [
    {
      id: 1,
      title: 'Home',
      screen: 'Inicio',
      icon: 'home',
      Component: Inicio,
    },
    {
      id: 2,
      title: 'Dashboard',
      screen: 'Dashboard',
      icon: 'dashboard',
      Component: Dashboard,
    },
    {
      id: 3,
      title: 'Notifications',
      screen: 'Notifications',
      icon: 'bell',
      Component: Notifications,
    },
    {
      id: 4,
      title: 'Account',
      screen: 'Account',
      icon: 'user',
      Component: Account,
    },
  ]
  return (

    <Tab.Navigator
      initialRouteName={'Inicio'}
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar
      }}
    >
      {
        tabs.map((item, index) =>
          <Tab.Screen
            key={item.id}
            name={item.screen}
            component={item.Component}
            options={{
              tabBarShowLabel: false,
              tabBarButton: (props) => (
                <TabButton
                  item={item}
                  accessibilityState={props.accessibilityState}
                  onPress={props.onPress}
                />
              )
            }}
          />
        )
      }
    </Tab.Navigator>
  )
}

export default Index

const styles = StyleSheet.create({
  tabBar: {
    height: 70,
    position: 'absolute',
    bottom: 25,
    marginHorizontal: 16,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#dadada',
    backgroundColor: Colors.title
  }
})