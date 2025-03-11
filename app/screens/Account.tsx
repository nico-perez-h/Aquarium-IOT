import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomButton from '@/components/CustomButton'

const Account = () => {
  return (
    <View style={styles.contMain}>
      <Text style={styles.contText}>Pantalla de Account</Text>
    </View>
  )
}

export default Account

const styles = StyleSheet.create({
  contMain: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#e3ae64'
  }
})