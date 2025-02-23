import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";

const image = require("@/assets/images/bg.jpg");

const Index = () => {
  return (
    <View style={styles.conMain}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.conttexto}>
          <Text style={styles.contText}>AQUA</Text>
          <Text style={styles.contText}>LOGIC</Text>
        </View>
        <View style={styles.contButtom}>
          {/* <CustomButton onPress={() => router.push("/login")}>
            LOGIN
          </CustomButton> */}
          {/* <CustomButton onPress={() => router.push("/register")}>
            REGISTER
          </CustomButton> */}
          <TouchableOpacity style={styles.loginButton} onPress={() => router.push("/login")}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.registerButton} onPress={() => router.push("/register")}>
            <Text style={styles.registerButtonText}>Register</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  conMain: {
    flex: 1,
  },
  conttexto: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 25,
  },
  
  image: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  contText: {
    color: "#f0f0f0",
    fontSize: 50,
    fontWeight: "bold",
    fontFamily:'SpaceMono'
  },
  contButtom: {
    marginBottom: 45,
  },
  loginButton: {
    backgroundColor: '#e65',
    padding: 10,
    borderRadius: 20,
    marginBottom: 10,
    width: 200,
    alignItems: 'center',
  },
  registerButton: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#4f4f9d',
    width: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerButtonText: {
    color: '#e65',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
