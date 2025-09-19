import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import COLORS from "../../assets/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { CustomButton, Draglist, SelectButton } from "../../components";
import healthConcerns from "../../data/Healthconcern.json";
import { selectedItem } from "../../components/SelectButton";
import { useAppNavigation } from "../../hooks/useAppNavigation";

const HealthConcernScreen = () => {
  const navigation = useAppNavigation();
  const onPressBack = () => {
    navigation.goBack();
  };
  const onPressNext = () => {
    navigation.navigate("DietChoice");
  };
  const [selected, setSelected] = useState<selectedItem[]>([]);

  const HConcernData = healthConcerns.data.map((item) => ({
    id: item.id,
    label: item.name,
  }));

  function toggle(item: selectedItem) {
    if (selected.find((i) => i.id === item.id)) {
      setSelected(selected.filter((i) => i.id !== item.id));
    } else {
      setSelected([...selected, item]);
    }
  }

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.title}>
          Select the top health concerns.
          <Text style={{ color: COLORS.button }}>*</Text> (up to 5)
        </Text>
      </View>

      <SelectButton
        data={HConcernData}
        selectedItems={selected}
        onSelectionChange={toggle}
      />

      <Text style={styles.title}>Prioritize</Text>
      <View style={{ flex: 1 }}>
        <Draglist data={selected} onChange={setSelected} />
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
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    flex: 1,
    marginHorizontal: 10,
  },
});
