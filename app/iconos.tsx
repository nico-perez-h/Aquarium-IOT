import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { router } from 'expo-router'
import Icon from "react-native-vector-icons/FontAwesome6";
import Nav from '../components/nav';

const Iconos = () => {
  return (
    <View>
      <Text>Iconos</Text>
      <TouchableOpacity onPress={() => router.push("/")}>
        <Icon name="facebook" size={30} color="black" />
      </TouchableOpacity>
      <Icon name="arrow-left" size={30} color="black" />

      <Icon name="google" size={30} color="#DB4437" />
      <Icon name="apple" size={30} color="black" />
      <Icon name="lemon" size={30} color="black" />
      <Icon name="lemon" size={30} color="black" solid />
      <Icon name="wifi" size={30} color="black" />
      <Icon name="sun" size={30} color="#FFD700" solid />
      <Icon name="react" size={30} color="black" />
      <Icon name="6" size={30} color="blue" />
      <Nav/>
    </View>
  )
}

export default Iconos

const styles = StyleSheet.create({})