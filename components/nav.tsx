import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useRouter, useSegments } from 'expo-router';
import Icon from "react-native-vector-icons/FontAwesome6";
import * as Animatable from 'react-native-animatable';

const Nav = () => {
  const router = useRouter();
  const segments = useSegments();
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const currentPath = '/' + segments.join('/'); // Asegúrate de tener la barra inicial
    console.log(currentPath); // Para depurar y ver el path actual
    setShowText(currentPath === '/' || currentPath === '/iconos'); // Comprueba las rutas deseadas
  }, [segments]);

  return (
    <Animatable.View animation="slideInUp" duration={500} style={styles.navbarContainer}>
      <View style={styles.contNav}>
        <TouchableOpacity style={styles.iconContainer} onPress={() => router.push("/")}>
          <Icon name="house" size={30} color="#5dc1b9" />
          {showText && <Text style={styles.iconText}>Inicio</Text>}
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer} onPress={() => router.push("/iconos")}>
          <Icon name="bell" size={30} color="#5dc1b9" solid />
          {showText && <Text style={styles.iconText}>Notificaciones</Text>}
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer} onPress={() => router.push("/")}>
          <Icon name="user" size={30} color="#5dc1b9" solid />
          {showText && <Text style={styles.iconText}>Perfil</Text>}
        </TouchableOpacity>
      </View>
    </Animatable.View>
  );
};

export default Nav;

const styles = StyleSheet.create({
  navbarContainer: {
    position: 'absolute',
    bottom: -20,
    width: '90%',
    backgroundColor: '#d5ffff',
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 50,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
  },
  contNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 30,
  },
  iconContainer: {
    alignItems: 'center',
  },
  iconText: {
    marginTop: 10,
    color: '#000',
    fontSize: 12,
    textAlign: 'center',
  },
});
