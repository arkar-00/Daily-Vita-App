import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../../types";
import COLORS from "../../assets/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { SelectButton } from "../../components";

const HealthConcernScreen = () => {
  const route = useRoute<RouteProp<RootStackParamList, "HealthConcern">>();
  const name = route.params.name;
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.title}>
          Select the top health concerns.<Text style={{ color: COLORS.button }}>*</Text> (up to 5)
        </Text>
      </View>

      <SelectButton />

      <View style={styles.header}>
        <Text style={styles.title}>
          Prioritize
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default HealthConcernScreen;

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
