import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const LoginTab = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.welcomeText}>Welcome Back,</Text>
        <Text style={styles.loginText}>Log In!</Text>
        <TextInput
          style={styles.input}
          placeholder="EMAIL ADDRESS"
          placeholderTextColor="#ccc"
        />
        <TextInput
          style={styles.input}
          placeholder="PASSWORD"
          placeholderTextColor="#ccc"
          secureTextEntry
        />
        <View style={styles.rememberMeContainer}>
          <TouchableOpacity>
            <Text style={styles.rememberMeText}>Remember me</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.forgotPasswordText}>Forgot password?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default LoginTab

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0f7fa', // Color de fondo general
  },

  innerContainer: {
    backgroundColor: '#007bff', // Color del fondo del texto
    borderRadius: 30,
    padding: 20,
    width: '90%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  welcomeText: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  loginText: {
    fontSize: 32,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 10,
  },
  input: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'white',
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  rememberMeContainer: {

    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
  rememberMeText: {
    color: 'white',
  },
  forgotPasswordText: {
    color: 'white',
  },
  loginButton: {
    backgroundColor: '#f5b400',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },


})