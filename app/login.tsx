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
import React, { useState } from "react";
import { router } from "expo-router";
import GoogleIcon from "@/assets/svg/GoogleIcon";
import CustomButton from "@/components/CustomButton";
import AntDesign from "@expo/vector-icons/AntDesign";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });
  
  const validateField = (field: "email" | "password", value: string) => {
    let errorMessage = "";
    switch (field) {
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value.trim()) {
          errorMessage = "Email is required";
        } else if (!emailRegex.test(value)) {
          errorMessage = "Enter a valid email address";
        }
        break;
      case "password":
        if (!value.trim()) {
          errorMessage = "Password is required";
        }
        break;
    }
    setErrors((prev) => ({ ...prev, [field]: errorMessage }));
  };

  const handleLogin = async () => {
    // Validación de campos vacíos
    if (!email.trim() || !password.trim()) {
      Alert.alert("Error", "All fields are required!");
      return;
    }

    try {
      /* await signInWithEmailAndPassword(auth, email, password); */
      Alert.alert("Success", "Logged in successfully!");
      router.push("/screens/Inicio"); // Redirigir a la pantalla de inicio
    } catch (error) {
      Alert.alert("Error", "Could not log in. Please check your credentials.");
      console.error("Login error: ", error); // Muestra el error en consola para depurar
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView style={styles.contMain}>
        <View style={styles.contIcon}>
          <TouchableOpacity onPress={() => router.push("/")}>
            <AntDesign name="left" size={30} color="#605399" />
          </TouchableOpacity>
        </View>
        <View style={styles.contText}>
          <Text style={styles.contTitle}>Welcome!</Text>
          <Text style={styles.contSubtitle}>Sign in to continue</Text>
        </View>
        <View style={styles.contInputs}>
          <TextInput
            style={styles.contInput}
            placeholder="example@gmail.com"
            keyboardType="email-address"
            placeholderTextColor="#9B8CB3"
            value={email}
            onChangeText={(text) => {
              setEmail(text);
              validateField("email", text);
            }}
          />
          {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
          <TextInput
            style={styles.contInput}
            placeholder="Password"
            secureTextEntry
            placeholderTextColor="#9B8CB3"
            value={password}
            onChangeText={(text) => {
              setPassword(text);
              validateField("password", text);
            }}
          />
          {errors.password && (
            <Text style={styles.errorText}>{errors.password}</Text>
          )}
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
            <View style={styles.contIcons}>
              <GoogleIcon />
            </View>
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
    borderBottomColor: "#a6a6a6", // Color de la línea inferior
    borderBottomWidth: 1.5, // Grosor de la línea inferior
    marginBottom: 20,
    paddingHorizontal: 15, // Sin padding lateral
    fontSize: 20,
    backgroundColor: "transparent", // Fondo transparente
  },
  errorText: {
    color: "red",
    fontSize: 14,
    marginBottom: 10,
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
    marginTop: 15,
    marginHorizontal: 50,
  },
  contLine: {
    flex: 1,
    height: 1, // Altura de la línea
    backgroundColor: "#023047",
  },
  contTextline: {
    color: "#605399",
    marginHorizontal: 10, // Espacio a los lados del texto
    fontSize: 17,
    fontWeight: "bold",
  },
  mainFooter: {
    alignItems: "center",
    alignSelf: "center",
    width: "90%",
    paddingVertical: 10, // Espaciado vertical para el contenido del footer
    marginTop: 25,
    borderRadius: 5,
  },

  contFooterText: {
    color: "#ADA1E6",
    fontSize: 20,
    fontWeight: "400",
  },
  contFooterSvg: {
    flexDirection: "row", // Para alinear los íconos en fila
    justifyContent: "center", // Para centrar los íconos
    alignItems: "center", // Para alinear los íconos verticalmente
    marginTop: 15, // Espacio superior
  },
  contIcons: {
    flexDirection: "row", // Alinea los íconos en fila
    justifyContent: "space-around", // Espaciado entre los íconos
    width: "70%", // Ajusta el ancho según sea necesario
  },
  contLogin: {
    flexDirection: "row",
    marginLeft: 15,
    marginTop: 45,
    marginBottom: 20,
  },
  contLoginText: {
    color: "#ADA1E6",
    fontSize: 15,
    fontWeight: "400",
  },
  contLoginTextLogin: {
    color: "#605399",
    fontSize: 15,
    fontWeight: "800",
    marginLeft: 15,
  },
});
