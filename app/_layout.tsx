import { StyleSheet, View } from "react-native";
import { Slot } from "expo-router";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";

const RootLayout = () => {
  const [loaded] = useFonts({
    PoppinsExtraLight: require("../assets/fonts/Poppins-ExtraLight.ttf"),
    PoppinsMedium: require("../assets/fonts/Poppins-Medium.ttf"),
    PoppinsSemiBold: require("../assets/fonts/Poppins-SemiBold.ttf"),
    PoppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
    Canada: require("../assets/fonts/Canada.otf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.mainContainer}>
      <Slot />

      <StatusBar style="dark" />
    </View>
  );
};
export default RootLayout;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 30,
    flex: 1,
  },
});
