import React, { memo, useCallback } from "react";
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

const RenderItem = memo(
  ({ item, drag, isActive }: RenderItemParams<selectedItem>) => (
    <ScaleDecorator>
      <TouchableOpacity
        delayLongPress={100}
        onLongPress={drag}
        disabled={isActive}
        style={[styles.row, { backgroundColor: isActive ? "grey" : "white" }]}
      >
        <Text style={[styles.label, styles.chip]}>{item.label}</Text>
        <Menu size={20} color={COLORS.bs} strokeWidth={2} />
      </TouchableOpacity>
    </ScaleDecorator>
  ),
  (prev, next) =>
    prev.item.id === next.item.id &&
    prev.isActive === next.isActive &&
    prev.item.label === next.item.label
);

const SimpleDragList = memo(({ data, onChange }: Props) => {
  const keyExtractor = useCallback(
    (item: selectedItem) => item.id.toString(),
    []
  );
  const handleDragEnd = useCallback(
    ({ data: next }: { data: selectedItem[] }) => onChange(next),
    [onChange]
  );

  return (
    <DraggableFlatList
      scrollEnabled
      showsVerticalScrollIndicator={false}
      data={data}
      keyExtractor={keyExtractor}
      onDragEnd={handleDragEnd}
      renderItem={(params) => <RenderItem {...params} />}
      contentContainerStyle={styles.container}
    />
  );
});

export default SimpleDragList;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 6,
    paddingHorizontal: 20,
  },
  row: {
    minHeight: 52,
    paddingHorizontal: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.bs,
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
});
