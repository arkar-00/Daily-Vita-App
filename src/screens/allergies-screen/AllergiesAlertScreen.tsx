import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../../assets/colors";
import TagSearchSimple from "../../components/TagSearchSimple";
import { CustomButton } from "../../components";
import { useAppNavigation } from "../../hooks/useAppNavigation";

const AllergiesAlertScreen = () => {
  const navigation = useAppNavigation();
  const onPressBack = () => {
    navigation.goBack();
  };
  const onPressNext = () => {
    navigation.navigate("PersonalizeVitaminScreen");
  };
  const [selected, setSelected] = useState<string[]>([]);

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>
            Write any specific allergies or sensitivity toward specific things.
            (Optional)
          </Text>
        </View>

        <TagSearchSimple
          placeholder="Type to search allergies…"
          onChange={setSelected}
        />
      </View>

      <View style={styles.buttonContainer}>
        <CustomButton
          text="Back"
          onPress={onPressBack}
          style={{ ...styles.button, backgroundColor: "transparent" }}
          textStyle={{ color: COLORS.text }}
        />
        <CustomButton text="Next" onPress={onPressNext} style={styles.button} />
      </View>
    </SafeAreaView>
  );
};

export default AllergiesAlertScreen;

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: COLORS.bg, padding: 16 },
  content: { flex: 1 },
  header: { justifyContent: "flex-start", marginBottom: 12 },
  title: {
    fontSize: 22,
    fontWeight: "500",
    color: COLORS.text,
    marginBottom: 6,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    flex: 1,
    marginHorizontal: 10,
  },
});
