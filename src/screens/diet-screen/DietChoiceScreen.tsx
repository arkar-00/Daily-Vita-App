import React from "react";
import {
  Alert,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { CheckSquare, Square, Info } from "lucide-react-native";
import COLORS from "../../assets/colors";
import dietsFile from "../../data/Diets.json";
import { CustomButton, Screen } from "../../components";
import { useAppNavigation } from "../../hooks/useAppNavigation";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleDiet,
  selectDietSelectedIds,
} from "../../redux/slices/onBoardingSlice";
import { Diet } from "../../types";

export default function DietChoiceScreen() {
  const navigation = useAppNavigation();
  const dispatch = useDispatch();
  const selectedIds = useSelector(selectDietSelectedIds);

  const onPressBack = () => {
    navigation.goBack();
  };
  const onPressNext = () => {
    if (!selectedIds.length) {
      Alert.alert("Select at least one", "Choose a diet or select None.");
      return;
    }
    navigation.navigate("AllergiesAlertScreen");
  };
  const dietData: Diet[] = [
    ...((dietsFile as { data: Diet[] }).data ?? []),
    { id: -1, name: "None" },
  ];

  const isNone = (d: Diet) => d.name.trim().toLowerCase() === "none";

  function toggle(diet: Diet) {
    dispatch(toggleDiet(diet));
  }

  const renderItem = ({ item }: { item: Diet }) => {
    const checked = selectedIds.some((d) => d.id === item.id);
    const none = isNone(item);

    return (
      <Pressable style={styles.row} onPress={() => toggle(item)}>
        {checked ? (
          <CheckSquare size={22} color={COLORS.button} />
        ) : (
          <Square size={22} color={COLORS.text} />
        )}

        <View style={styles.labelWrap}>
          <Text style={[styles.label, checked && styles.labelChecked]}>
            {item.name}
          </Text>

          {!none && (
            <Pressable
              hitSlop={10}
              onPress={() =>
                Alert.alert(item.name, item.tool_tip || "No details provided.")
              }
              style={styles.infoBtn}
            >
              <Info size={16} color={COLORS.button} />
            </Pressable>
          )}
        </View>
      </Pressable>
    );
  };

  return (
    <Screen>
      <Text style={styles.title}>
        Select the diets you follow.{" "}
        <Text style={{ color: COLORS.button }}>*</Text>
      </Text>

      <FlatList
        data={dietData}
        keyExtractor={(it) => String(it.id)}
        renderItem={renderItem}
        contentContainerStyle={{ paddingVertical: 8 }}
        ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
        showsVerticalScrollIndicator={false}
      />

      <View style={styles.buttonContainer}>
        <CustomButton
          text="Back"
          onPress={onPressBack}
          style={{ ...styles.button, backgroundColor: "transparent" }}
          textStyle={{ color: COLORS.text }}
        />
        <CustomButton text="Next" onPress={onPressNext} style={styles.button} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: COLORS.text,
    marginBottom: 16,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  labelWrap: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 12,
    flexShrink: 1,
  },
  infoBtn: {
    marginLeft: 8,
  },
  label: {
    fontSize: 18,
    color: COLORS.text,
    fontWeight: "500",
  },
  labelChecked: {
    fontWeight: "700",
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
