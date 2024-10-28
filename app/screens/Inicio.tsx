import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LoadFonts from '../../components/LoadFonts'
import Colors from '@/components/Colors'
const Inicio = () => {
  return (
    <View style={styles.contMain}>
      <Text style={styles.contText}>Pantalla de Home</Text>
      <Text style={styles.contTextPlay}>Texto con Playwrite</Text>
    </View>
  )
}

export default Inicio

const styles = StyleSheet.create({
  contMain: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contText: {
    fontFamily:'montserrat-light',
    fontSize:24,
    color:Colors.primaryText
  },
  contTextPlay:{
    fontFamily:'oxanium',
    fontSize:50
  }
})