import React from "react";
import { StyleSheet, ViewStyle, StyleProp, ScrollView } from "react-native";
import { SafeAreaView, Edge } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import COLORS from "../assets/colors";

type ScreenProps = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  edges?: Edge[];
  scroll?: boolean;
  backgroundColor?: string;
  barStyle?: "dark-content" | "light-content";
};

export default function Screen({
  children,
  style,
  edges = ["top", "right", "bottom", "left"],
  scroll = false,
  backgroundColor = COLORS.bg,
  barStyle = "dark-content",
}: ScreenProps) {
  const containerStyle = [styles.screen, { backgroundColor }, style];

  return (
    <>
      <StatusBar barStyle={barStyle} backgroundColor={backgroundColor} />
      <SafeAreaView style={containerStyle} edges={edges}>
        {scroll ? (
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            {children}
          </ScrollView>
        ) : (
          children
        )}
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "space-evenly",
    padding: 16,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "space-evenly",
    paddingBottom: 16,
  },
});
