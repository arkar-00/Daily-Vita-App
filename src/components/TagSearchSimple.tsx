import React, { useMemo, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  FlatList,
  StyleSheet,
} from "react-native";
import allergies from "../data/Allergies.json";
import { X } from "lucide-react-native";
import { Allergies } from "../types";

const ALL_ITEMS: Allergies[] = allergies?.data;

export default function TagSearchSimple({
  value,
  placeholder = "Type to search…",
  onChange,
}: {
  value: Allergies[];
  placeholder?: string;
  onChange: (tags: Allergies[]) => void;
}) {
  const [query, setQuery] = useState("");

  const suggestions = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    const chosen = new Set(value.map((t) => t.name.toLowerCase()));
    return ALL_ITEMS.filter((item) => !chosen.has(item.name.toLowerCase()))
      .filter((item) => item.name.toLowerCase().includes(q))
      .slice(0, 10);
  }, [query, value]);

  function addTag(name: string) {
    const selectedItem = ALL_ITEMS.find(
      (item) => item.name.toLowerCase() === name.toLowerCase()
    );

    if (!selectedItem) return;

    const exists = value.some((x) => x.id === selectedItem.id);

    if (exists) {
      setQuery("");
      return;
    }

    onChange([...value, selectedItem]);
    setQuery("");
  }

  function removeTag(index: number) {
    const next = value.filter((_, i) => i !== index);
    onChange(next);
  }

  return (
    <View style={styles.wrapper}>
      {/* chips + input */}
      <View style={styles.box}>
        <View style={styles.rowWrap}>
          {value.map((t, i) => (
            <View key={`${t}-${i}`} style={styles.chip}>
              <Text style={styles.chipText}>{t.name}</Text>
              <Pressable onPress={() => removeTag(i)} hitSlop={8}>
                <X style={styles.chipClose} />
              </Pressable>
            </View>
          ))}
          <TextInput
            value={query}
            onChangeText={setQuery}
            onSubmitEditing={() => addTag(query)}
            placeholder={placeholder}
            placeholderTextColor="#9AA4B2"
            style={styles.input}
            autoCorrect={false}
            autoCapitalize="none"
            returnKeyType="done"
          />
        </View>

        {/* dropdown */}
        {suggestions.length > 0 && (
          <View style={styles.dropdown}>
            <FlatList
              keyboardShouldPersistTaps="handled"
              data={suggestions}
              keyExtractor={(item, idx) => `${item}-${idx}`}
              renderItem={({ item }) => (
                <Pressable
                  style={({ pressed }) => [
                    styles.item,
                    pressed && styles.itemPressed,
                  ]}
                  onPress={() => addTag(item.name)}
                >
                  <Text style={styles.itemText}>{item.name}</Text>
                </Pressable>
              )}
            />
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { marginTop: 12 },
  box: { position: "relative" },
  rowWrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  chip: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#22324A",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 999,
    gap: 8,
  },
  chipText: { color: "white", fontWeight: "600" },
  chipClose: { color: "white", opacity: 0.85, fontWeight: "700" },
  input: { minWidth: 80, flexGrow: 1, paddingVertical: 6, fontSize: 16 },
  dropdown: {
    marginTop: 6,
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    maxHeight: 220,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  item: { paddingVertical: 12, paddingHorizontal: 12 },
  itemPressed: { backgroundColor: "#F1F5F9" },
  itemText: { fontSize: 16, color: "#111827" },
});
