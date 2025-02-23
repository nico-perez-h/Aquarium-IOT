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
import Colors from "@/components/Colors";
import { db } from "../src/config/firebaseConfig"; // Ajusta la ruta si es necesario
import { addDoc, collection, query, where, getDocs, or } from "firebase/firestore";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";

// Importa el ícono de FontAwesome

const Register = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // Estado para mostrar u ocultar la contraseña
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // Estado para confirmar la contraseña
  const [errors, setErrors] = useState({
    user: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const validateField = (
    field: "user" | "email" | "password" | "confirmPassword",
    value: string
  ) => {
    let errorMessage = "";

    switch (field) {
      case "user":
        if (!value.trim()) {
          errorMessage = "Username is required";
        } else if (value.length < 3) {
          errorMessage = "Username must be at least 3 characters";
        }
        break;

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
        } else if (value.length < 6) {
          errorMessage = "Password must be at least 6 characters";
        }
        break;

      case "confirmPassword":
        if (value !== password) {
          errorMessage = "Passwords do not match";
        }
        break;
    }

    setErrors((prev) => ({ ...prev, [field]: errorMessage }));
  };

  const handleSignUp = async () => {
    // Validación de campos vacíos
    if (
      !user.trim() ||
      !email.trim() ||
      !password.trim() ||
      !confirmPassword.trim()
    ) {
      Alert.alert("Error", "All fields are required!");
      return;
    }

    // Validación del email con una expresión regular
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert("Error", "Please enter a valid email address!");
      return;
    }

    // Validación del nombre de usuario (mínimo 3 caracteres)
    if (user.length < 3) {
      Alert.alert("Error", "Username must be at least 3 characters long!");
      return;
    }

    // Validación de la contraseña (mínimo 6 caracteres)
    if (password.length < 6) {
      Alert.alert("Error", "Password must be at least 6 characters long!");
      return;
    }

    // Validación de la coincidencia de las contraseñas
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match!");
      return;
    }

    try {
      const userOrEmailQuery = query(
        collection(db, "users"),
        or(where("email", "==", email), where("username", "==", user))
      );
      
      const snapshot = await getDocs(userOrEmailQuery);
      
      if (!snapshot.empty) {
        snapshot.forEach((doc) => {
          const data = doc.data();
          if (data.email === email) {
            Alert.alert("Error", "Email is already registered!");
          } else if (data.username === user) {
            Alert.alert("Error", "Username is already taken!");
          }
        });
        return;
      }

      await addDoc(collection(db, "users"), {
        username: user,
        email: email,
        password: password,
        createdAt: new Date(),
      });
      Alert.alert("Éxito", "Usuario registrado correctamente!");

      // Limpiar los campos
      setUser("");
      setEmail("");
      setPassword("");
      setConfirmPassword(""); // Limpiar el campo de confirmación

      // Redirigir al login
      router.push("/login");
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error al agregar documento: ", error.message);
        Alert.alert("Error", "No se pudo registrar al usuario.");
      } else {
        console.error("Error desconocido: ", error);
        Alert.alert("Error", "Ocurrió un error desconocido.");
      }
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
            <AntDesign name="left" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.contText}>
          <Text style={styles.contTitle}>Hola!</Text>
          <Text style={styles.contSubtitle}>Create a new account</Text>
        </View>
        <View style={styles.contInputs}>
          <TextInput
            style={styles.contInput}
            placeholder="User"
            placeholderTextColor="#9B8CB3"
            value={user}
            onChangeText={(text) => {
              setUser(text);
              validateField("user", text);
            }}
          />
          {errors.user ? (
            <Text style={styles.errorText}>{errors.user}</Text>
          ) : null}
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
          {errors.email ? (
            <Text style={styles.errorText}>{errors.email}</Text>
          ) : null}
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.contInput}
              placeholder="Password"
              secureTextEntry={!showPassword}
              placeholderTextColor="#9B8CB3"
              value={password}
              onChangeText={(text) => {
                setPassword(text);
                validateField("password", text);
              }}
            />
            <TouchableOpacity
              style={styles.eyeIcon}
              onPress={() => setShowPassword(!showPassword)}
            >
              <FontAwesome
                name={showPassword ? "eye-slash" : "eye"}
                size={20}
                color="#9B8CB3"
              />
            </TouchableOpacity>
          </View>
          {errors.password ? (
            <Text style={styles.errorText}>{errors.password}</Text>
          ) : null}

          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.contInput}
              placeholder="Confirm Password"
              secureTextEntry={!showConfirmPassword}
              placeholderTextColor="#9B8CB3"
              value={confirmPassword}
              onChangeText={(text) => {
                setConfirmPassword(text);
                validateField("confirmPassword", text);
              }}
            />
            <TouchableOpacity
              style={styles.eyeIcon}
              onPress={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              <FontAwesome
                name={showConfirmPassword ? "eye-slash" : "eye"}
                size={20}
                color="#9B8CB3"
              />
            </TouchableOpacity>
          </View>
          {errors.confirmPassword ? (
            <Text style={styles.errorText}>{errors.confirmPassword}</Text>
          ) : null}
        </View>
        <View style={styles.contButton}>
          <CustomButton onPress={handleSignUp}>SIGN UP</CustomButton>
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
    color: Colors.title,
    fontSize: 60,
    fontWeight: "bold",
  },
  contSubtitle: {
    color: Colors.subTitle,
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
