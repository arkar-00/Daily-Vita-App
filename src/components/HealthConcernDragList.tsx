import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import DraggableFlatList, {
  RenderItemParams,
  ScaleDecorator,
} from "react-native-draggable-flatlist";
import { selectedItem } from "./SelectButton";
import COLORS from "../assets/colors";

type Props = {
  data: selectedItem[];
  onChange: (next: selectedItem[]) => void;
};

export default function SimpleDragList({ data, onChange }: Props) {
  const renderItem = ({
    item,
    drag,
    isActive,
  }: RenderItemParams<selectedItem>) => (
    <ScaleDecorator>
      <TouchableOpacity
        delayLongPress={100}
        onLongPress={drag}
        disabled={isActive}
        style={[styles.row, isActive && styles.rowActive]}
      >
        <Text style={styles.label}>{item.label}</Text>
        <Text style={styles.grip}>≡</Text>
      </TouchableOpacity>
    </ScaleDecorator>
  );

  return (
    <DraggableFlatList
      scrollEnabled
      showsVerticalScrollIndicator={false}
      data={data}
      keyExtractor={(it) => String(it.id)}
      onDragEnd={({ data: next }) => onChange(next)}
      renderItem={renderItem}
      contentContainerStyle={{ paddingVertical: 6, paddingHorizontal: 20 }}
    />
  );
}

const styles = StyleSheet.create({
  row: {
    minHeight: 52,
    paddingHorizontal: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "COLORS.bs",
    backgroundColor: "grey",
    marginBottom: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  rowActive: {
    backgroundColor: "brown",
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
  },
  grip: {
    fontSize: 20,
    opacity: 0.5,
  },
});
