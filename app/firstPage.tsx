import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
const FirstPage = () => {
  return (
    <View style={styles.contMain}>
      <View style={styles.contSub}></View>
      <View style={styles.contSubb}></View>
      <Image
        style={styles.contImage}
        source={require('../assets/images/koiBW.png')}
      />
      <View>
        <Text style={styles.contText}>Acuario
          <Text style={styles.contTextBold}> IOT</Text>
        </Text>
      </View>
    </View >
  )
}

export default FirstPage

const styles = StyleSheet.create({
  contMain: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'

  },
  contSub: {
    backgroundColor: '#338b85',
    width: 200,
    height: 200,
    borderRadius: 200,
    position: 'absolute',
    top: -100,
    right: -100
  },
  contSubb: {
    backgroundColor: '#338b85',
    width: 500,
    height: 500,
    borderRadius: 500,
    position: 'absolute',
    bottom: -280,
    left: -280
  },
  contImage: {
    width: 300,
    height: 300,
    marginTop: -125,
    marginBottom: 0
  },
  contMainText: {
    fontFamily: 'Josefina Sans'
  },
  contText: {
    fontSize: 30
  },
  contTextBold: {
    fontWeight: 'bold'
  },
})