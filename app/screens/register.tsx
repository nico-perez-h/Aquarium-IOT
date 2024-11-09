import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6'
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import GoogleIcon from '@/assets/svg/GoogleIcon';
import CustomButton from '@/components/CustomButton';
import Colors from '@/components/Colors';


const Register = () => {
  return (
    <View style={styles.contMain}>
      <View style={styles.contIcon}>
        <TouchableOpacity onPress={() => router.push('/')}>
          <Icon name="arrow-left" size={30} color='black' />
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
          placeholderTextColor='#9B8CB3'
        />
        <TextInput
          style={styles.contInput}
          placeholder='example@gmail.com'
          keyboardType="email-address"
          placeholderTextColor='#9B8CB3'
        />
        <TextInput
          style={styles.contInput}
          placeholder='Password'
          secureTextEntry
          placeholderTextColor='#9B8CB3'
        />
      </View>
      <View style={styles.contButton}>
        <CustomButton onPress={() => console.log('Button sign up press')}>
          SIGN UP
        </CustomButton>
      </View>
      <View style={styles.contLines}>
        <View style={styles.contLine} />
        <Text style={styles.contTextline}>or</Text>
        <View style={styles.contLine} />
      </View>
      <View style={styles.mainFooter}>
        <Text style={styles.contFooterText}> Social Media Signup</Text>
        <View style={styles.contFooterSvg}>
          <View style={styles.contIcons}>
            <GoogleIcon />
          </View>
        </View>
      </View>
      <View style={styles.contLogin}>
        <Text style={styles.contLoginText}>Already have an account?</Text>
        <TouchableOpacity>
          <Text
            style={styles.contLoginTextLogin}
            onPress={() => router.push('/screens/login')}>Sign in</Text>
        </TouchableOpacity>
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
    color: Colors.title,
    fontSize: 60,
    fontWeight: 'bold'
  },
  contSubtitle: {
    color: Colors.subTitle,
    fontSize: 30,
    marginTop: 15,
    marginLeft: .5,
    fontWeight: '300'
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
    marginHorizontal: 20,
    marginTop: 15,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
  },
  button: {
    width: '90%',
    padding: 7,
    alignItems: 'center',
    borderRadius: 5,
  },
  contButtonText: {
    fontSize: 15,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  contLines: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    marginHorizontal: 50
  },
  contLine: {
    flex: 1,
    height: 1, // Altura de la línea
    backgroundColor: '#023047',
  },
  contTextline: {
    color: '#605399',
    marginHorizontal: 10, // Espacio a los lados del texto
    fontSize: 17,
    fontWeight: 'bold'
  },
  mainFooter: {
    alignItems: 'center',
    alignSelf: 'center',
    width: '90%',
    paddingVertical: 10, // Espaciado vertical para el contenido del footer
    marginTop: 25,
    borderRadius: 5,
  },

  contFooterText: {
    color: '#ADA1E6',
    fontSize: 20,
    fontWeight: '400'
  },
  contFooterSvg: {
    flexDirection: 'row',      // Para alinear los íconos en fila
    justifyContent: 'center',  // Para centrar los íconos
    alignItems: 'center',      // Para alinear los íconos verticalmente
    marginTop: 15,             // Espacio superior
  },
  contIcons: {
    flexDirection: 'row',      // Alinea los íconos en fila
    justifyContent: 'space-around', // Espaciado entre los íconos
    width: '70%',              // Ajusta el ancho según sea necesario
  },
  contLogin: {
    flexDirection: 'row',
    marginLeft: 15,
    marginTop: 45
  },
  contLoginText: {
    color: '#ADA1E6',
    fontSize: 15,
    fontWeight: '400'
  },
  contLoginTextLogin: {
    color: '#605399',
    fontSize: 15,
    fontWeight: '800',
    marginLeft: 15,
  }
})