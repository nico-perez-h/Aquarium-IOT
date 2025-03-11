import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { router } from "expo-router";
import GoogleIcon from "@/assets/svg/GoogleIcon";
import CustomButton from "@/components/CustomButton";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/src/config/firebaseConfig";
import { FirebaseError } from "firebase/app";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = async () => {
    if (!email || !password || !confirmPass) {
      Alert.alert("Error", "Todos los campos son obligatorios");
      return;
    }
    if (password !== confirmPass) {
      Alert.alert("Error", "Las contraseñas no coinciden");
      return;
    }
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      Alert.alert("Éxito", "Cuenta creada correctamente");
      router.push("/login");
    } catch (error) {
      if (error instanceof FirebaseError) {
        Alert.alert("Error", error.message);
      } else{
        Alert.alert("Error", "Ocurrió un error al crear la cuenta");
      }
    }
    setLoading(false);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView style={styles.contMain}>
        <View style={styles.contIcon}>
          <TouchableOpacity onPress={() => router.push("/")}>
            <AntDesign name="left" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.contText}>
          <Text style={styles.contTitle}>Hola!</Text>
          <Text style={styles.contSubtitle}>Crea una cuenta nueva</Text>
        </View>
        <View style={styles.contInputs}>
          <TextInput
            style={styles.contInput}
            placeholder="Correo electrónico"
            keyboardType="email-address"
            placeholderTextColor="#9B8CB3"
            value={email}
            onChangeText={setEmail}
          />
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.contInput}
              placeholder="Contraseña"
              placeholderTextColor="#9B8CB3"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity
              style={styles.eyeIcon}
              onPress={() => setShowPassword(!showPassword)}
            >
              <FontAwesome
                name={showPassword ? "eye" : "eye-slash"}
                size={20}
                color="#9B8CB3"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.contInput}
              placeholder="Confirmar contraseña"
              placeholderTextColor="#9B8CB3"
              secureTextEntry={!showPassword}
              value={confirmPass}
              onChangeText={setConfirmPass}
            />
            <TouchableOpacity style={styles.eyeIcon} onPress={() => setShowPassword(!showPassword)}>
              <FontAwesome name={showPassword ? "eye" : "eye-slash"} size={20} color="#9B8CB3" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.contButton}>
        <CustomButton onPress={handleRegister} disabled={loading}>
            {loading ? "Registrando..." : "REGISTRARSE"}
          </CustomButton>
{/* 
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
              onPress={() => router.push("/login")}
            >
              Sign in
            </Text>
          </TouchableOpacity> */}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Register;

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
    fontSize: 60,
    fontWeight: "bold",
  },
  contSubtitle: {
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
  errorText: {
    color: "red",
    fontSize: 14,
    marginBottom: 10,
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
  contButton: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
    marginTop: 15,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
  },
  button: {
    width: "90%",
    padding: 7,
    alignItems: "center",
    borderRadius: 5,
  },
  contButtonText: {
    fontSize: 15,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
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
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  eyeIcon: {
    position: "absolute",
    right: 10,
    padding: 10,
  },
});
