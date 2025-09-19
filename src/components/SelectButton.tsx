import React from "react";
import { View, Text, Pressable, StyleSheet, Button } from "react-native";
import COLORS from "../assets/colors";

export type selectedItem = {
  id: number;
  label: string;
}

type SelectButtonProps = {
  selectedItems: selectedItem[];
  onSelectionChange: (item: selectedItem) => void;
  data: selectedItem[];
};

export default function SelectButtonUnlimited({
  selectedItems,
  onSelectionChange,
  data,
}: SelectButtonProps) {

  return (
    <View style={styles.container}>
      <View style={styles.wrap}>
        {data.map((item) => {
          
          const isSelected = selectedItems?.find((i) => i.id === item.id)? true : false;
          return (
            <Pressable
              key={item.id}
              onPress={() => onSelectionChange?.(item)}
              style={[
                styles.chip,
                isSelected ? styles.chipSelected : styles.chipDefault,
              ]}
            >
              <Text
                style={[
                  styles.chipText,
                  isSelected ? styles.textSelected : styles.textDefault,
                ]}
              >
                {item.label}
              </Text>
            </Pressable>
          );
        })}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: COLORS.bg,
    borderRadius: 16,
  },
  wrap: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  chip: {
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 14,
    marginRight: 10,
    marginBottom: 10,
    borderWidth: 1.5,
  },
  chipDefault: {
    backgroundColor: COLORS.bg,
    borderColor: COLORS.text,
  },
  chipSelected: {
    backgroundColor: COLORS.bs,
    borderColor: COLORS.bs,
  },
  chipText: {
    fontSize: 14,
    fontWeight: "600",
  },
  textDefault: {
    color: COLORS.text,
  },
  textSelected: {
    color: COLORS.buttonText,
  },
});
