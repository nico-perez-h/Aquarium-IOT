import { StyleSheet, Text, TouchableOpacity, TouchableOpacityComponent, View } from 'react-native'
import React from 'react'
import { useNavigation, useRouter } from 'expo-router'

const Index = () => {
  const router = useRouter();
  return (
    <View>
      <Text>Hola Juan</Text>
      <TouchableOpacity onPress={() => router.push("/home")}><Text>Ir a home</Text></TouchableOpacity>
    </View>
  )
}

export default Index

const styles = StyleSheet.create({})