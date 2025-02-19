import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { router, Slot } from "expo-router";
import { UserContextProvider, useUserContext } from "@/context/userContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Contexts = () => {
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
