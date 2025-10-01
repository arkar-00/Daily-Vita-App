import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import COLORS from "../../assets/colors";
import {
  AnimatedComponent,
  CustomButton,
  LottieImage,
  Screen,
} from "../../components";
import { useAppNavigation } from "../../hooks/useAppNavigation";

export default function WelcomeScreen() {
  const navigation = useAppNavigation();
  const onPress = () => {
    navigation.navigate("HealthConcern");
  };

  return (
    <Screen>
      <View style={styles.header}>
        <AnimatedComponent>
          <Text style={styles.title}>Welcome to DailyVita</Text>
        </AnimatedComponent>
        <AnimatedComponent duration={500}>
          <Text style={styles.subtitle}>
            Hello, we are here to make your life healthier and happier
          </Text>
        </AnimatedComponent>
      </View>
      <AnimatedComponent duration={600}>
        <View style={styles.illusPlaceholder}>
          <LottieImage source={require("../../assets/lottie/Welcome.json")} />

          <Text style={styles.body}>
            We’ll ask a couple of questions to better understand your vitamin
            needs.
          </Text>
        </View>
      </AnimatedComponent>
      <AnimatedComponent duration={700}>
        <CustomButton
          onPress={onPress}
          text="Get Started"
          // disabled={true}
        />
      </AnimatedComponent>

      <StatusBar style="dark" />
    </Screen>
  );
}
const styles = StyleSheet.create({
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
