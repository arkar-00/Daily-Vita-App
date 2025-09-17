import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet, Button } from "react-native";
import COLORS from "../assets/colors";
import healthConcerns from "../data/Healthconcern.json";

export default function SelectButtonUnlimited() {
  const TAGS = (healthConcerns?.data ?? []).map((item: any) => ({
    id: String(item.id),
    label: String(item.name),
  }));

  const [selected, setSelected] = useState<string[]>([]);

  function toggle(id: string) {
    if (selected.includes(id)) {
      setSelected(selected.filter((x) => x !== id));
    } else {
      setSelected([...selected, id]);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.wrap}>
        {TAGS.map((item) => {
          const isSelected = selected.includes(item.id);
          return (
            <Pressable
              key={item.id}
              onPress={() => toggle(item.id)}
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

      {/* <View style={styles.footerRow}>
        <Button
          title="Log Selected"
          onPress={() => {
            const labels = TAGS.filter((t) => selected.includes(t.id)).map(
              (t) => t.label
            );
            console.log("Selected IDs & Labels:", selected, labels);
          }}
        />
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    padding: 16, 
    backgroundColor: COLORS.bg, 
    borderRadius: 16 
  },
  wrap: { 
    flexDirection: "row", 
    flexWrap: "wrap" 
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
    borderColor: COLORS.text 
  },
  chipSelected: { 
    backgroundColor: COLORS.bs, 
    borderColor: COLORS.bs 
  },
  chipText: { 
    fontSize: 14, 
    fontWeight: "600" 
  },
  textDefault: { 
    color: COLORS.text 
  },
  textSelected: { 
    color: COLORS.buttonText 
  },
  // footerRow: { 
  //   marginTop: 10, 
  //   flexDirection: "row", 
  //   alignItems: "center" 
  // }
});
