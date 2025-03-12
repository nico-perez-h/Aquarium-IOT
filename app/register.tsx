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

//Funcion para validar el correo electronico
const validateEmail = (email: string) => {
  const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  return regex.test(email);
};

const Register = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPass, setConfirmPass] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(true); // Estado para verificar si las contraseñas coinciden

  // Función para manejar los cambios en la contraseña y verificar que coincidan
  const handlePasswordChange = (password: string) => {
    setPassword(password);
    setPasswordsMatch(password === confirmPass);
  };

  // Función para manejar los cambios en la confirmación de la contraseña
  const handleConfirmPasswordChange = (confirmPass: string) => {
    setConfirmPass(confirmPass);
    setPasswordsMatch(password === confirmPass);
  };

  // Función para validar la contraseña
  const validatePassword = (password: string) => {
    const minLength = 6;
    const regex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*._])[A-Za-z\d!@#$%^&*._]{6,}$/;
    return password.length >= minLength && regex.test(password);
  };

  // Función para manejar el registro de un nuevo usuario
  const handleRegister = async (): Promise<void> => {
    // Validar que los campos no estén vacíos
    if (!email || !password || !confirmPass) {
      Alert.alert("Error", "Todos los campos son obligatorios");
      return;
    }

    // Validar que el correo tenga un formato correcto
    if (!validateEmail(email)) {
      Alert.alert("Error", "Por favor ingresa un correo válido");
      return;
    }

    // Validar que la contraseña tenga al menos 6 caracteres, un número y un carácter especial
    if (!validatePassword(password)) {
      Alert.alert(
        "Error",
        "La contraseña debe tener al menos 6 caracteres, un número y un carácter especial"
      );
      return;
    }

    // Validar que las contraseñas coincidan

    if (password !== confirmPass) {
      Alert.alert("Error", "Las contraseñas no coinciden");
      return;
    }

    // Crear la cuenta con el correo y la contraseña
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      Alert.alert("Éxito", "Cuenta creada correctamente");

      // Limpiar los campos después de crear la cuenta
      setEmail("");
      setPassword("");
      setConfirmPass("");

      // Redirigir al usuario a la página de inicio de sesión
      router.push("/login");
    } catch (error) {
      if (error instanceof FirebaseError) {
        // Obtener mensajes de error más específicos
        const getErrorMessage = (errorCode: string): string => {
          switch (errorCode) {
            case "auth/email-already-in-use": // Correo ya en uso
              return "El correo ya está en uso";
            case "auth/weak-password": // Contraseña débil
              return "La contraseña debe tener al menos 6 caracteres";
            case "auth/invalid-email": // Correo inválido
              return "El correo electrónico no es válido";
            default:
              return "Ocurrió un error al crear la cuenta";
          }
        };

        Alert.alert("Error", getErrorMessage(error.code));
      } else {
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
            editable={!loading} // Deshabilitar el campo si se está cargando
          />
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.contInput}
              placeholder="Contraseña"
              placeholderTextColor="#9B8CB3"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={handlePasswordChange}
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
          <Text style={styles.specialCharactersText}>
            Puedes usar caracteres especiales como:
          </Text>
          <Text style={styles.specialCharactersText}>
            ! @ # $ % ^ & * ( ) _ + .
          </Text>

          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.contInput}
              placeholder="Confirmar contraseña"
              placeholderTextColor="#9B8CB3"
              secureTextEntry={!showPassword2}
              value={confirmPass}
              onChangeText={handleConfirmPasswordChange}
            />
            <TouchableOpacity
              style={styles.eyeIcon}
              onPress={() => setShowPassword2(!showPassword2)}
            >
              <FontAwesome
                name={showPassword2 ? "eye" : "eye-slash"}
                size={20}
                color="#9B8CB3"
              />
            </TouchableOpacity>
          </View>
          {/* Mostrar mensaje si las contraseñas no coinciden */}
          <Text style={{ color: passwordsMatch ? "green" : "red" }}>
            {passwordsMatch
              ? "Las contraseñas coinciden"
              : "Las contraseñas no coinciden"}
          </Text>
        </View>
        <View style={styles.contButton}>
          <CustomButton onPress={handleRegister} disabled={loading}>
            {loading ? "Registrando..." : "REGISTRARSE"}
          </CustomButton>
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
          </TouchableOpacity>
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
    minWidth: "100%", // Ancho del 90% del contenedor
    borderBottomColor: "#a6a6a6", // Color de la línea inferior
    borderBottomWidth: 1.5, // Grosor de la línea inferior
    marginBottom: 20,
    paddingHorizontal: 15, // Sin padding lateral
    fontSize: 20,
    backgroundColor: "transparent", // Fondo transparente
  },
  specialCharactersText: {
    color: "#7E7E7E",
    fontSize: 14,
    marginBottom: 10,
    textAlign: "center",
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
