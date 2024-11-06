import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Cards from '@/components/Cards'

const Dashboard = () => {
  return (
    <View style={styles.dashboardContainer}>
      <Cards title="Temperature" value={25.3} unit="°C" color="#FF5733" />
      <Cards title="pH Level" value={7.4} unit="" color="#33FF57" />
      <Cards title="Water Level" value={50} unit="%" color="#3375FF" />
    </View>
  )
}

export default Dashboard

const styles = StyleSheet.create({
  dashboardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 20,
    marginTop: 20,
  },
})