import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome6";
import { router } from "expo-router";
import GoogleIcon from "@/assets/svg/GoogleIcon";
import CustomButton from "@/components/CustomButton";
import Colors from "@/components/Colors";
import { db, collection, addDoc } from "../config/firebaseConfig";

const Register = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ user: "", email: "", password: "" });

  const validateField = (
    field: "user" | "email" | "password",
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
    }

    setErrors((prev) => ({ ...prev, [field]: errorMessage }));
  };

  const handleSignUp = async () => {
    // Validación de campos vacíos
    if (!user.trim() || !email.trim() || !password.trim()) {
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

    try {
      await addDoc(collection(db, "users"), {
        username: user,
        email: email,
        password: password, // ⚠️ RECOMENDACIÓN: Encripta la contraseña antes de guardarla
        createdAt: new Date(),
      });

      Alert.alert("Success", "User registered successfully!");
      router.push("/login"); // Redirigir a la pantalla de login
    } catch (error) {
      Alert.alert("Error", "Could not register user.");
      console.error("Error adding document: ", error);
    }
  };

  return (
    <View style={styles.contMain}>
      <View style={styles.contIcon}>
        <TouchableOpacity onPress={() => router.push("/")}>
          <Icon name="arrow-left" size={30} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.contText}>
        <Text style={styles.contTitle}>Hi!</Text>
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
        {errors.password ? (
          <Text style={styles.errorText}>{errors.password}</Text>
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
    </View>
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
