import { StyleSheet, View } from "react-native";
import { Slot } from "expo-router";
import { useFonts } from "expo-font";
import { StatusBar } from 'expo-status-bar'

const RootLayout = () => {
  const [loaded] = useFonts({
    PoppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
    PoppinsMedium: require("../assets/fonts/Poppins-Medium.ttf"),
    PoppinsSemiBold: require("../assets/fonts/Poppins-SemiBold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.mainContainer}>
      <Slot />


      <StatusBar style="light"/>
    </View>
  );
};

export default RootLayout;

const styles = StyleSheet.create({
  mainContainer:{
    marginTop: 40,
    flex: 1,
  }
});
