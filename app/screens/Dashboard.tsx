import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const Notifications = () => {
  
  return (
    <View style={styles.contMain}>
      <Text style={styles.contText}>Pantalla de dashboard</Text>
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
