import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const Inputs = () => {
  return (
    <View>
      <TextInput
        style={styles.contInputs}
        placeholder='example@gmail.com'
      />
      <TextInput
        style={styles.contInputs}
        placeholder='password'
      />
    </View>
  )
}

export default Inputs

const styles = StyleSheet.create({
  contInputs:{
    
  }
})