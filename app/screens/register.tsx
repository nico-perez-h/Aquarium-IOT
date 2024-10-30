import { Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome6'
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router'

const Register = () => {
  return (
    <View style={styles.contMain}>
      <View style={styles.contIcon}>
        <TouchableOpacity onPress={() => router.push('/')}>
          <Icon name="arrow-left" size={30} color='#023047' />
        </TouchableOpacity>
      </View>
      <View style={styles.contText}>
        <Text style={styles.contTitle}>Hi!</Text>
        <Text style={styles.contSubtitle}>Create a new account</Text>
      </View>
      <View style={styles.contInputs}>
        <TextInput
          style={styles.contInput}
          placeholder='User'
          placeholderTextColor='#E4DEF9'
        />
        <TextInput
          style={styles.contInput}
          placeholder='example@gmail.com'
          keyboardType="email-address"
          placeholderTextColor='#E4DEF9'
        />
        <TextInput
          style={styles.contInput}
          placeholder='Password'
          secureTextEntry
          placeholderTextColor='#E4DEF9'
        />
      </View>
      <View style={styles.contButton}>
        <LinearGradient
          // Button Linear Gradient
          colors={['#605399', '#ADA1E6']}
          style={styles.button}>
          <Text style={styles.contButtonText}>SIGN UP</Text>
        </LinearGradient>
      </View>
      <View style={styles.contLines}>
        <View style={styles.contLine} />
        <Text style={styles.contTextline}>or</Text>
        <View style={styles.contLine} />
      </View>
    </View>
  )
}

export default Register

const styles = StyleSheet.create({
  contMain: {
    width: '100%',
    height: '100%',
  },
  contIcon: {
    marginLeft: 10,
    marginTop: 10
  },
  contText: {
    marginLeft: 30,
    marginTop: 15,
  },
  contTitle: {
    color: '#605399',
    fontSize: 60
  },
  contSubtitle: {
    color: '#ADA1E6',
    fontSize: 30,
    marginTop: 15,
    marginLeft: .5
  },
  contInputs: {
    marginTop: 30,
    marginLeft: 30,
    marginRight: 50,
  },
  contInput: {
    height: 50,
    borderBottomColor: '#a6a6a6', // Color de la línea inferior
    borderBottomWidth: 1.5, // Grosor de la línea inferior
    marginBottom: 20,
    paddingHorizontal: 15, // Sin padding lateral
    fontSize: 20,
    backgroundColor: 'transparent', // Fondo transparente
  },
  contButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 50,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,  
    backgroundColor: 'black',
  },
  contButtonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  contLines: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    marginHorizontal: 50
  }, // Espacio vertical alrededor de la línea},
  contLine: {
    flex: 1,
    height: 1, // Altura de la línea
    backgroundColor: '#023047',
  },
  contTextline: {
    marginHorizontal: 10, // Espacio a los lados del texto
    color: '#023047', // Color del texto
    fontSize: 16,
  },
  button: {
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  text: {
    backgroundColor: 'transparent',
    fontSize: 15,
    color: '#fff',
  },
})