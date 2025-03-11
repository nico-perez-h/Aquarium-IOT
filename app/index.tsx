import React from 'react'
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Colors } from "@/constants/Colors";
import { router } from 'expo-router';

const Index = () => {
  const handleLogin = () => {
    router.push("/login"); // Asegúrate de que el archivo `app/login.js` o `app/login.tsx` existe
  };

  const handleRegister = () => {
    router.push("/register"); // Asegúrate de que el archivo `app/register.js` o `app/register.tsx` existe
  };
  
  return (
    <ImageBackground
    source={require("../assets/images/betawhite.jpg")}
    style={styles.imgContainer}
    resizeMode="cover"
  >
    <View style={styles.overlay} />
    <View style={styles.mainTextContainer}>
      <Text style={styles.textContainer}>Smart</Text>
      <Text style={styles.textContainer}>Tank</Text>
    </View>

    {/* Opciones de Login y Registro */}
    <View style={styles.optionsContainer}>
      <Text style={styles.optionText}>¿Ya tienes una cuenta?</Text>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Iniciar sesión</Text>
      </TouchableOpacity>

      <Text style={styles.optionText}>¿No tienes una cuenta?</Text>
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Registrarse</Text>
      </TouchableOpacity>
    </View>
  </ImageBackground>
  )
}

export default Index

const styles = StyleSheet.create({
  imgContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.4)", // Overlay semitransparente
  },
  mainTextContainer: {
    position: "absolute",
    top: 80,
    right: 20,
    alignItems: "flex-end",
  },
  textContainer: {
    fontSize: 75,
    fontFamily: "PoppinsSemiBold",
    color: Colors.secondaryColors.SnowWhite,
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  optionsContainer: {
    position: "absolute",
    bottom: 100,
    width: "80%",
    padding: 20,
    backgroundColor: "rgba(0, 0, 0, 0.7)", // Fondo semitransparente
    borderRadius: 10,
    alignItems: "center",
  },
  optionText: {
    color: Colors.secondaryColors.SnowWhite,
    fontSize: 18,
    marginBottom: 10,
  },
  button: {
    backgroundColor: Colors.primaryColors.Turquoise, // Botón con Turquoise para Login
    padding: 15,
    width: "100%",
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 15,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
})