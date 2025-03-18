import {
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { router } from "expo-router";
import GoogleIcon from "@/assets/svg/GoogleIcon";
import CustomButton from "@/components/CustomButton";
import { auth } from "@/src/config/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Inicio de sesión con email y contraseña
  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Por favor, ingrese su correo y contraseña.");
      return;
    }
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      Alert.alert("Éxito", `Bienvenido, ${userCredential.user.email}`);
      console.log("Usuario autenticado:", userCredential.user);
      router.push("/screens/Inicio");
    } catch (error: any) {
      console.error("Error al iniciar sesión:", error.message);
      Alert.alert("Error", "Credenciales incorrectas o problema de red.");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView style={styles.contMain}>
        {/* <View style={styles.contIcon}>
          <TouchableOpacity onPress={() => router.push("/")}>
            <AntDesign name="left" size={30} color="#605399" />
          </TouchableOpacity>
        </View> */}
        <View style={styles.contText}>
          <Text style={styles.contTitle}>Login</Text>
        </View>
        <View style={styles.contInputs}>
          <MaterialCommunityIcons
            name="email-outline"
            size={24}
            color="gray"
          />
          <TextInput
            style={styles.contInput}
            placeholder="example@gmail.com"
            keyboardType="email-address"
            placeholderTextColor="#9B8CB3"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.contInputs}>
          <TextInput
            style={styles.contInput}
            placeholder="Password"
            secureTextEntry
            placeholderTextColor="#9B8CB3"
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <View style={styles.contButton}>
          <CustomButton onPress={handleLogin}>LOGIN</CustomButton>
        </View>
        <View style={styles.contLines}>
          <View style={styles.contLine} />
          <Text style={styles.contTextline}>or</Text>
          <View style={styles.contLine} />
        </View>
        <View style={styles.mainFooter}>
          <Text style={styles.contFooterText}> Social Media Signup</Text>
          <View style={styles.contFooterSvg}>
            <TouchableOpacity style={styles.contIcons}>
              <GoogleIcon />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.contLogin}>
          <Text style={styles.contLoginText}>Already have an account?</Text>
          <TouchableOpacity>
            <Text
              style={styles.contLoginTextLogin}
              onPress={() => router.push("/register")}
            >
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  contMain: {
    width: "100%",
    height: "100%",
  },
  contFooterSvg: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  contIcons: {
    marginHorizontal: 10,
  },
  contFooterText: {
    color: "#ADA1E6",
    fontSize: 16,
    marginVertical: 10,
  },
  contIcon: {
    marginLeft: 10,
    marginTop: 10,
  },
  contText: {
    marginLeft: 30,
    marginTop: 15,
  },
  contTitle: {
    color: "#605399",
    fontSize: 60,
    fontWeight: "bold",
  },
  contSubtitle: {
    color: "#ADA1E6",
    fontSize: 30,
    marginTop: 15,
    marginLeft: 0.5,
    fontWeight: "300",
  },
  contInputs: {
    marginTop: 30,
    marginLeft: 30,
    marginRight: 50,
  },
  contInput: {
    height: 50,
    borderBottomColor: "#a6a6a6",
    borderBottomWidth: 1.5,
    marginBottom: 20,
    paddingHorizontal: 15,
    fontSize: 20,
    backgroundColor: "transparent",
  },
  contButton: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
    marginTop: 15,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
  },
  contLines: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  contLine: {
    height: 1,
    flex: 1,
    backgroundColor: "#ADA1E6",
  },
  contTextline: {
    marginHorizontal: 10,
    color: "#ADA1E6",
    fontSize: 16,
  },
  contLogin: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  contLoginText: {
    color: "#ADA1E6",
    fontSize: 16,
    marginRight: 5,
  },
  contLoginTextLogin: {
    color: "green",
    fontSize: 16,
    fontWeight: "bold",
  },
  mainFooter: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
});
