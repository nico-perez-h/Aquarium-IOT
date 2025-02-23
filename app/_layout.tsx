import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import {useFonts} from 'expo-font';
import { router, Slot } from "expo-router";
import { UserContextProvider, useUserContext } from "@/context/userContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Contexts = () => {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <UserContextProvider>
      <Layout />
    </UserContextProvider>
  );
};

const Layout = () => {
  const { user } = useUserContext();

  useEffect(() => {
    if (user) {
      router.push("/screens/Inicio");
      AsyncStorage.setItem("userId", user.id);
    } else {
      router.push("/");
      AsyncStorage.removeItem("userId");
    }
  }, [user]);

  return <Slot />;
};

export default Contexts;

const styles = StyleSheet.create({});
