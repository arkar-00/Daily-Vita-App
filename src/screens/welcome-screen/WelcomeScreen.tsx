import React, { useEffect, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { Alert, StyleSheet, Text, View } from "react-native";
import LottieView from "lottie-react-native";
import CustomButton from "../../components/CustomButton";
import COLORS from "../../assets/colors";

export default function WelcomeScreen() {
  const animationRef = useRef<LottieView>(null);

  useEffect(() => {
    animationRef.current?.play();

    // Or set a specific startFrame and endFrame with:
    animationRef.current?.play(30, 120);
  }, []);
  const onPress = () => {
    Alert.alert("Let’s go!", "We’ll ask a couple of questions next.");
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
        <LottieView
          style={styles.illus}
          ref={animationRef}
          source={require("../../assets/lottie/Welcome.json")}
        />

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
    // alignItems: "center",
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
  illus: {
    width: "85%",
    height: 250,
  },
  body: {
    fontSize: 16,
    color: COLORS.sub,
    lineHeight: 20,
    marginBottom: 18,
  },
});
