import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  Vibration,
} from "react-native";
import React, { useState } from "react";
import { router } from "expo-router";

import FacebookIcon from "@/assets/svg/FacebookIcon";
import GoogleIcon from "@/assets/svg/GoogleIcon";
import AppleIcon from "@/assets/svg/AppleIcon";
import { Colors } from "@/src/constants/Colors"; // Importamos los colores

const AnimatedButton: React.FC<{
  onPress: () => void;
  children: React.ReactNode;
}> = ({ onPress, children }) => {
  const [scaleValue] = useState(new Animated.Value(1));

  const onPressIn = () => {
    // Activar la vibración cuando el botón es presionado
    Vibration.vibrate(30); // La vibración dura 30 ms

    // Animación para simular que el botón se hunde
    Animated.spring(scaleValue, {
      toValue: 0.92, // Reducción para dar el efecto de presión
      friction: 4, // Menor fricción para un "apretón" más suave
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    // Animación para recuperar el botón al tamaño original
    Animated.spring(scaleValue, {
      toValue: 1,
      friction: 4,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View style={{ transform: [{ scale: scaleValue }] }}>
      <TouchableOpacity
        onPressIn={onPressIn} // Inicia la animación y vibración al presionar
        onPressOut={onPressOut} // Termina la animación al soltar
        onPress={onPress}
        style={styles.contButtonsTouchable}
      >
        {children}
      </TouchableOpacity>
    </Animated.View>
  );
};

const Index = () => {
  const handleLogin = () => {
    console.log("Touchable de incio de sesion");
    router.push("/login");
  };

  const handleRegister = () => {
    console.log("Touchable de registro");
    router.push("/register");
  };

  const handlePressFacebook = () => {
    console.log("Touchable pressed Facebook");
  };

  const handlePressGoogle = () => {
    console.log("Touchable pressed Google");
  };

  const handlePressApple = () => {
    console.log("Touchable pressed Apple");
  };

  return (
    <View style={styles.contPrincipal}>
      <View style={styles.contText}>
        <Text style={styles.contTexts}>Entra ahora</Text>
      </View>

      <View style={styles.contButtons}>
        <AnimatedButton onPress={handlePressFacebook}>
          <FacebookIcon style={styles.contButtonsImage} />
          <Text style={styles.contButtonsTexto}>Continuar con Facebook</Text>
        </AnimatedButton>
        <AnimatedButton onPress={handlePressGoogle}>
          <GoogleIcon style={styles.contButtonsImage} />
          <Text style={styles.contButtonsTexto}>Continuar con Google</Text>
        </AnimatedButton>
        <AnimatedButton onPress={handlePressApple}>
          <AppleIcon style={styles.contButtonsImage} />
          <Text style={styles.contButtonsTexto}>Continuar con Apple</Text>
        </AnimatedButton>
      </View>

      {/* Linea que divide  */}
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={{ flex: 1, height: 1, backgroundColor: "gray" }} />
        <View>
          <Text style={{ width: 50, textAlign: "center", color:"gray" }}>o</Text>
        </View>
        <View style={{ flex: 1, height: 1, backgroundColor: "gray" }} />
      </View>


      {/* Botón de continuar con correo */}
      <View style={styles.contButtonLogin}>
        <AnimatedButton onPress={handleLogin}>
          <Text style={styles.contButtonsTexto}>Continuar con correo</Text>
        </AnimatedButton>
      </View>

      {/* Redirigir a Registrarse */}
      <View style={styles.contRegistro}>
        <Text style={styles.contRegistroTexto}>No tengo una cuenta</Text>
        <TouchableOpacity
          onPress={handleRegister}
          style={styles.contRegistroLink}
        >
          <Text style={styles.contRegistroLinkTexto}>Registrarme</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contPrincipal: {
    flex: 1, // Hace que el fondo cubra el 100% de la pantalla
    justifyContent: "center",
    backgroundColor: Colors.Blanco_Perla, // Fondo claro
  },

  contText: {
    alignItems: "center",
    marginBottom: 30,
  },

  contTexts: {
    fontSize: 60,
    fontFamily: "PoppinsExtraLight",
    color: Colors.Azul_Profundo, // Color de texto de título
  },

  contButtons: {
    marginBottom: 40,
  },

  contButtonsTouchable: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.Azul_Celeste, // Fondo de los botones
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 10, // Separación entre botones
    marginHorizontal: 15, // Margen horizontal
    justifyContent: "center", // Centra el contenido dentro del botón
  },

  contButtonsImage: {
    width: 32,
    height: 32,
    marginRight: 10,
  },

  contButtonsTexto: {
    fontSize: 18,
    color: Colors.Blanco_Perla, // Texto blanco en botones
    fontFamily: "PoppinsSemiBold", // Usamos la fuente de semi negrita
  },

  // Estilo para la línea divisoria
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },

  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.Azul_Profundo, // Color de la línea divisoria
  },

  dividerText: {
    width: 50,
    textAlign: "center",
    fontSize: 18,
    color: Colors.Azul_Profundo, // Color del texto "o"
    fontFamily: "PoppinsMedium", // Fuente de tamaño medio
  },

  contButtonLogin: {
    marginTop: 20,
  },

  contRegistro: {
    flexDirection: "row", // Los elementos estarán en una sola línea
    justifyContent: "center", // Centra todo el contenido en la línea
    marginTop: 20,
    alignItems: "center",
    alignContent: "center",
  },

  contRegistroTexto: {
    fontSize: 16,
    color: Colors.Azul_Profundo, // Color de texto "No tengo cuenta"
    fontFamily: "PoppinsRegular", // Aseguramos que sea regular
  },

  contRegistroLink: {
    marginLeft: 7,
  },

  contRegistroLinkTexto: {
    fontSize: 18,
    color: Colors.Azul_Celeste, // Color de enlace para "Registrarme"
    fontFamily: "PoppinsRegular", // Enlace en negrita
  },
});

export default Index;
