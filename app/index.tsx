import { StyleSheet, Text, TouchableOpacity, TouchableOpacityComponent, View } from 'react-native'
import React from 'react'
import { useNavigation, useRouter } from 'expo-router'
import Nav from '../components/nav'
const Index = () => {
  const router = useRouter();
  return (
    <View style={styles.contMain}>
      <Text >Acuario IOT</Text>
      <TouchableOpacity onPress={() => router.push("/home")}>
        <Text style={styles.contButtonText}>Ir a home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push("/loginTab")}>
        <Text style={styles.contButtonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push("/firstPage")}>
        <Text style={styles.contButtonText}>Pagina de Incio</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push("/iconos")}>
        <Text style={styles.contButtonText}>Pagina de Iconos</Text>
      </TouchableOpacity>
      <Nav/>
    </View>
  )
}

export default Index

const styles = StyleSheet.create({
  contMain: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 375,
    height: 710,
  },
  contButtonText: {
    fontSize:20
  }
})