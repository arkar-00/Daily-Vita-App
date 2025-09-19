import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import DraggableFlatList, {
  RenderItemParams,
  ScaleDecorator,
} from "react-native-draggable-flatlist";
import { selectedItem } from "./SelectButton";
import COLORS from "../assets/colors";
import { Menu } from "lucide-react-native";

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
        style={styles.row}
      >
        <Text style={[styles.label, styles.chip, isActive && styles.labelActive]}>
          {item.label}
        </Text>
        <Menu
          size={20}
          color={COLORS.bs}
          strokeWidth={2}
        />
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
    paddingHorizontal: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "COLORS.bs",
    backgroundColor: "azure",
    marginBottom: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  chip: {
    borderRadius: 20,
    paddingHorizontal: 14,
    marginRight: 10,
    paddingVertical: 8,
    borderWidth: 1.5,
    backgroundColor: COLORS.bs,
    borderColor: COLORS.bs,
    color: COLORS.buttonText,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
  },
  labelActive: {
    color: COLORS.buttonText,
  },
});
