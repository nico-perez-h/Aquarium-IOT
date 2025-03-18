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
  Animated,
  Vibration,
} from "react-native";
import React, { useState } from "react";
import { router } from "expo-router";
import GoogleIcon from "@/assets/svg/GoogleIcon";
import CustomButton from "@/components/CustomButton";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/src/config/firebaseConfig";
import { FirebaseError } from "firebase/app";

import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const AnimatedButton: React.FC<{
  onPress: () => void;
  children: React.ReactNode;
}> = ({ onPress, children }) => {
  const [scaleValue] = useState(new Animated.Value(1));

  const onPressIn = () => {
    // Activar la vibración cuando el botón es presionado
    Vibration.vibrate(30); // La vibración dura 30 ms

    // Animación para simular que el botón se hunde
    Animated.spring(scaleValue, {
      toValue: 0.92, // Reducción para dar el efecto de presión
      friction: 4, // Menor fricción para un "apretón" más suave
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    // Animación para recuperar el botón al tamaño original
    Animated.spring(scaleValue, {
      toValue: 1,
      friction: 4,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View style={{ transform: [{ scale: scaleValue }] }}>
      <TouchableOpacity
        onPressIn={onPressIn} // Inicia la animación y vibración al presionar
        onPressOut={onPressOut} // Termina la animación al soltar
        onPress={onPress}
        style={styles.contButtonsTouchable}
      >
        {children}
      </TouchableOpacity>
    </Animated.View>
  );
};

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
        <View style={styles.contMainIcon}>
          <TouchableOpacity onPress={() => router.push("/")} style={styles.contMainIcons}>
            <AntDesign name="left" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.contHeader}>
          <Text style={styles.contTitulo}>Crea tu cuenta!</Text>
        </View>
        <View style={styles.contMainInputs}>
          <View style={styles.contInputs}>
            <MaterialCommunityIcons
              name="email-outline"
              size={24}
              color="gray"
            />
            <TextInput
              style={styles.contInput}
              placeholder="Correo electrónico"
              keyboardType="email-address"
              placeholderTextColor="black"
              value={email}
              onChangeText={setEmail}
              editable={!loading} // Deshabilitar el campo si se está cargando
            />
          </View>
          <View style={styles.contInputs}>
            <MaterialIcons name="lock-outline" size={24} color="gray" />
            <TextInput
              style={styles.contInput}
              placeholder="Contraseña"
              placeholderTextColor="black"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={handlePasswordChange}
            />
            <TouchableOpacity
              style={styles.contIconOjo}
              onPress={() => setShowPassword(!showPassword)}
            >
              <FontAwesome
                name={showPassword ? "eye" : "eye-slash"}
                size={20}
                color="gray"
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Botón de continuar con correo */}
        <View style={styles.contButtonLogin}>
          <AnimatedButton onPress={handleRegister}>
            <Text style={styles.contButtonsTexto}>Registratre</Text>
          </AnimatedButton>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Register;

const styles = StyleSheet.create({
  contMain: {},
  contMainIcon:{},
  contMainIcons:{},
  contHeader:{},
  contTitulo:{},
  contMainInputs:{},
  contInputs:{},
  contInput:{},
  contIconOjo:{},
  contButtonLogin:{},
  contButtonsTexto:{},
  contButtonsTouchable:{},

});
