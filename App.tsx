import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  Alert,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  const onPress = () => {
    Alert.alert("Let’s go!", "We’ll ask a couple of questions next.");
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.card}>
        <Text style={styles.title}>Welcome to DailyVita</Text>

        <Text style={styles.subtitle}>
          Hello, we are here to make your life healthier and happier
        </Text>

        <View style={styles.illusPlaceholder}>
          <Image
            source={require("./assets/hang-out.png")}
            style={styles.illus}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.body}>
          We’ll ask a couple of questions to better understand your vitamin
          needs.
        </Text>

        <TouchableOpacity style={styles.cta} onPress={onPress} activeOpacity={0.9}>
          <Text style={styles.ctaText}>Get started</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="dark" />
    </SafeAreaView>
  );
}

const COLORS = {
  bg: "#DDF3EA",          // minty background
  card: "#E9F7EF",        // light green card
  text: "#20323A",        // dark slate
  sub: "#3E5963",
  button: "#F35C4A",      // coral/red
  buttonText: "#FFFFFF",
  border: "#B7E1CF",
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.bg,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  card: {
    width: "92%",
    backgroundColor: COLORS.card,
    borderRadius: 20,
    paddingVertical: 24,
    paddingHorizontal: 18,
    borderWidth: 1,
    borderColor: COLORS.border,
    // subtle shadow
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 4,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: COLORS.text,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: COLORS.sub,
    lineHeight: 20,
  },
  illusPlaceholder: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 18,
  },
  illus: {
    width: "85%",
    height: 150,
  },
  body: {
    fontSize: 14,
    color: COLORS.sub,
    lineHeight: 20,
    marginBottom: 18,
  },
  cta: {
    backgroundColor: COLORS.button,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
  },
  ctaText: {
    color: COLORS.buttonText,
    fontSize: 16,
    fontWeight: "700",
  },
});
