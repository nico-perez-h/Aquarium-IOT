import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { router } from 'expo-router'
import Material from "react-native-vector-icons/FontAwesome6";
import Nav from '../components/nav';

const Iconos = () => {
  return (
    <View>
      <Text>Iconos</Text>
      <TouchableOpacity onPress={() => router.push("/")}>
        <Material name="facebook" size={30} color="black" />
      </TouchableOpacity>
      <Material name="arrow-left" size={30} color="black" />

      <Material name="google" size={30} color="#DB4437" />
      <Material name="apple" size={30} color="black" />
      <Material name="lemon" size={30} color="black" />
      <Material name="lemon" size={30} color="black" solid />
      <Material name="wifi" size={30} color="black" />
      <Material name="sun" size={30} color="#FFD700" solid />
      <Material name="react" size={30} color="black" />
      <Material name="6" size={30} color="blue" />
      <Nav/>
    </View>
  )
}

export default Iconos

const styles = StyleSheet.create({})