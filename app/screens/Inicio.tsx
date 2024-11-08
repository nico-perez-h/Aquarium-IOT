import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '@/components/Colors'
import { Link, router } from 'expo-router'

const Inicio = () => {
  return (
    <View style={styles.contMain}>
      <Text style={styles.contHead}>AquaLogic</Text>
      <Text style={styles.contSubitle}>Lógica precisa para un ambiente perfecto</Text>
      <TouchableOpacity>
        <Text onPress={() => router.push('/screens/login')}>Ir al login</Text>
      </TouchableOpacity>
      <Link href="/screens/register">
        <Text>Ir a Register</Text>
      </Link>
    </View>
  )
}

export default Inicio

const styles = StyleSheet.create({
  contMain: {
    flex: 1,
    margin:30,
    backgroundColor: Colors.background,
  },
  contHead: {
    fontFamily: 'montserrat-light',
    fontSize: 50,
    color: Colors.title,
    fontWeight: 'bold'
  },
  contSubitle: {
    fontFamily: 'montserrat-light',
    fontSize: 20,
    color: Colors.subTitle,
    fontStyle:'italic'

  },
})