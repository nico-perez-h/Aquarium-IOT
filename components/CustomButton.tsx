// CustomButton.tsx
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

interface CustomButtonProps {
  onPress: () => void;
  children: React.ReactNode;
  disabled?: boolean;
}

const CustomButton = ({ onPress, children, disabled = false }: CustomButtonProps) => {
  return (
    <TouchableOpacity 
      onPress={onPress} 
      disabled={disabled} 
      style={[styles.button, disabled && styles.disabledButton]}
    >
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    minWidth: "40%",
    padding: 7,
    alignItems: "center",
    borderRadius: 30,
    marginVertical: 10,
    backgroundColor: "#605399", // Color de fondo del botón
  },
  buttonText: {
    fontSize: 15,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  disabledButton: {
    opacity: 0.5,
  },
});