import React, { useState } from "react";
import {
  Alert,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CheckSquare, Square, Info } from "lucide-react-native";
import COLORS from "../../assets/colors";
import dietsFile from "../../data/Diets.json";

type Diet = { id: number; name: string; tool_tip?: string };

export default function DietChoiceScreen() {
  const dietData: Diet[] = [
    ...((dietsFile as { data: Diet[] }).data ?? []),
    { id: -1, name: "None" },
  ];

  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const isNone = (d: Diet) => d.name.trim().toLowerCase() === "none";

  function toggle(diet: Diet) {
    if (isNone(diet)) {
      setSelectedIds((prev) => (prev.includes(diet.id) ? [] : [diet.id]));
      return;
    }
    setSelectedIds((prev) => {
      const withoutNone = prev.filter((id) => id !== -1);
      return withoutNone.includes(diet.id)
        ? withoutNone.filter((id) => id !== diet.id)
        : [...withoutNone, diet.id];
    });
  }

  const renderItem = ({ item }: { item: Diet }) => {
    const checked = selectedIds.includes(item.id);
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
    <SafeAreaView style={styles.screen}>
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.bg,
    padding: 16,
  },
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
});
