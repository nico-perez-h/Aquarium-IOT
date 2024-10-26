import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Dashboard = () => {
  return (
    <View style={styles.contMain}>
      <Text style={styles.contText}>Pantalla de Dashboard</Text>
    </View>
  )
}

export default Dashboard

const styles = StyleSheet.create({
  contMain: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#BAD6EB'
  }
})