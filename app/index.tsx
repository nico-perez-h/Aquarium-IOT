import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomButton from '@/components/CustomButton'
import { router } from 'expo-router'

const Index = () => {
  return (
    <View style={styles.conMain}>
      <Text>AQUALOGIC</Text>
      <CustomButton onPress={() => router.push('/login')}>
        LOGIN
      </CustomButton>
      <CustomButton onPress={() => router.push('/register')}>
        REGISTER
      </CustomButton>
    </View>
  )
}

export default Index

const styles = StyleSheet.create({
  conMain:{
    flex: 1,
    justifyContent: 'center',
    alignItems:'center'
  }

})