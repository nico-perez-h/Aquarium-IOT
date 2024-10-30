import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import Colors from '@/components/Colors'

const Inicio = () => {
  return (
    <View style={styles.contPrin}>
      <View style={styles.contMain}>
        <Text style={styles.contHead}>TITULO</Text>
        <Text style={styles.contSubitle}>SUBTITULO</Text>
      </View>
    </View>
  )
}

export default Inicio

const styles = StyleSheet.create({
  contPrin:{
    backgroundColor: Colors.interactive
  },
  contMain: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background
  },
  contHead: {
    fontFamily: 'montserrat-light',
    fontSize: 30,
    color: Colors.text
  },
  contSubitle: {
    fontFamily: 'montserrat-light',
    fontSize: 20,
    color: Colors.secondText

  },
})