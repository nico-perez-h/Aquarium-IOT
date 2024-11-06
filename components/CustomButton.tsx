// CustomButton.tsx
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

interface CustomButtonProps {
  onPress: () => void;
  children: React.ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({ onPress, children }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={['#605399', '#ADA1E6']}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    minWidth: '90%',
    padding: 7,
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 15,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

