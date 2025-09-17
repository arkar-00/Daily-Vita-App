import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, View } from "react-native";
import COLORS from "../../assets/colors";
import { CustomButton, LottieImage } from "../../components";
import { useAppNavigation } from "../../hooks/useAppNavigation";


export default function WelcomeScreen() {
  const navigation = useAppNavigation();
  const onPress = () => {
    navigation.navigate("HealthConcern", { name: "HealthConcern" });
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome to DailyVita</Text>
        <Text style={styles.subtitle}>
          Hello, we are here to make your life healthier and happier
        </Text>
      </View>

      <View style={styles.illusPlaceholder}>
        <LottieImage source={require("../../assets/lottie/Welcome.json")} />

        <Text style={styles.body}>
          We’ll ask a couple of questions to better understand your vitamin
          needs.
        </Text>
      </View>
      <CustomButton
        onPress={onPress}
        text="Get Started"
        // disabled={true}
      />

      <StatusBar style="dark" />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.bg,
    justifyContent: "space-evenly",
    padding: 16,
  },
  header: {
    justifyContent: "space-between",
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: COLORS.text,
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.sub,
    lineHeight: 20,
  },
  illusPlaceholder: {
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 18,
  },
  body: {
    fontSize: 16,
    color: COLORS.sub,
    lineHeight: 20,
    marginBottom: 18,
  },
});
