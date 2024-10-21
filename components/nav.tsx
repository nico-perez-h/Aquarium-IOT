import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { router } from 'expo-router';
import Icon from "react-native-vector-icons/FontAwesome6";
import * as Animatable from 'react-native-animatable'; // Importa la biblioteca

const Nav = () => {
  return (
    <Animatable.View animation="slideInUp" duration={500} style={styles.navbarContainer}>
      <View style={styles.contNav}>
        <TouchableOpacity style={styles.iconContainer} onPress={() => router.push("/")}>
          <Icon name="house" size={30} color="#5dc1b9" />
          <Text style={styles.iconText}>Inicio</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer} onPress={() => router.push("/")}>
          <Icon name="bell" size={30} color="#5dc1b9" solid />
          <Text style={styles.iconText}>Notificaciones</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer} onPress={() => router.push("/")}>
          <Icon name="user" size={30} color="#5dc1b9" solid />
          <Text style={styles.iconText}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </Animatable.View>
  );
};

export default Nav;

const styles = StyleSheet.create({
  navbarContainer: {
    position: 'absolute',
    bottom: 20,  // Separado un poco de la parte inferior
    width: '80%', // No ocupa todo el ancho
    backgroundColor: '#d5ffff',
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 20, // Bordes redondeados
    alignSelf: 'center', // Centrado horizontalmente
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5, // Sombra para dar efecto flotante
  },
  contNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 20,
  },
  iconContainer: {
    alignItems: 'center',
  },
  iconText: {
    marginTop: 5,
    color: '#000',
    fontSize: 12,
    textAlign: 'center',
  },
});
