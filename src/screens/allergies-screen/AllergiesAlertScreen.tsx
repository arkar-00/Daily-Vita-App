import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../../assets/colors";

const AllergiesAlertScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.title}>
          Write any specific allergies or sensitivity toward specific things.
          (Optional)
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default AllergiesAlertScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.bg,
    padding: 16,
  },
  header: {
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 22,
    fontWeight: "500",
    color: COLORS.text,
    marginBottom: 6,
  },
});
