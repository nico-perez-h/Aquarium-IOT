import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { router } from "expo-router"; // Importa el router para la navegación

const Inicio = () => {
  return (
    <View style={styles.contMain}>
      <Text style={styles.contHead}>AquaLogic</Text>
      <Text style={styles.contSubitle}>
        Lógica precisa para un ambiente perfecto
      </Text>

      {/* Botones de navegación */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/screens/Dashboard")}
      >
        <Text style={styles.buttonText}>Ir al Dashboard</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/screens/Notifications")}
      >
        <Text style={styles.buttonText}>Notificaciones</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/screens/Account")}
      >
        <Text style={styles.buttonText}>Cuenta</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Inicio;

const styles = StyleSheet.create({
  contMain: {
    flex: 1,
    margin: 30,
    justifyContent: "center", // Centra el contenido
    alignItems: "center", // Centra los elementos horizontalmente
  },
  contHead: {
    fontSize: 50,
    fontWeight: "bold",
    marginBottom: 20, // Separación entre el título y el subtítulo
  },
  contSubitle: {
    fontSize: 20,
    fontStyle: "italic",
    fontWeight: "200",
    marginBottom: 40, // Separación entre el subtítulo y los botones
  },
  button: {
    backgroundColor: "green", // Color de fondo del botón
    padding: 12,
    borderRadius: 5,
    marginVertical: 10, // Espaciado entre botones
    width: "80%", // Ajuste del ancho del botón
    alignItems: "center", // Centra el texto dentro del botón
  },
  buttonText: {
    fontSize: 18,
    color: "white", // Color del texto dentro del botón
    fontWeight: "bold",
  },
});
