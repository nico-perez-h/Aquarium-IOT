import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { db } from "@/config/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const Notifications = () => {
  // Función para agregar datos a Firestore
  const addDataToFirestore = async () => {
    try {
      // Especifica la colección donde quieres agregar los datos
      const docRef = await addDoc(collection(db, "users"), {
        name: "Juan Menacho",
        email: "juanperez@example.com",
        age: 25,
      });
      console.log("Documento agregado con ID: ", docRef.id);
    } catch (e) {
      console.error("Error agregando documento: ", e);
    }
  };

  return (
    <View style={styles.contMain}>
      <Text style={styles.contText}>Pantalla de dashboard</Text>
      <TouchableOpacity style={styles.button} onPress={addDataToFirestore}>
        <Text style={styles.buttonText}>Agregar datos a Firestore</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  contMain: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  contText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#BAD6EB",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#4CAF50", // Verde
    padding: 12,
    borderRadius: 5,
    marginVertical: 10,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
});
