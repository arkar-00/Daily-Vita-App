import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import COLORS from "../assets/colors";
import { Question } from "../types";

type Props = {
  questions: Question[];
  onChange: (key: Question["key"], value: string) => void;
};

const RadioButton = ({ questions, onChange }: Props) => {
  const RadioOption = ({
    label,
    selected,
    onPress,
  }: {
    label: string;
    selected: boolean;
    onPress: () => void;
  }) => (
    <TouchableOpacity style={styles.option} onPress={onPress}>
      <View
        style={[styles.radioCircle, selected && styles.radioCircleSelected]}
      />
      <Text style={styles.optionLabel}>{label}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={questions}
      renderItem={({ item }) => (
        <View style={{ marginBottom: 16 }}>
          <Text style={styles.title}>
            {item.label}
            <Text style={{ color: COLORS.button }}> *</Text>
          </Text>
          {item.options.map((opt) => (
            <RadioOption
              key={opt}
              label={opt.replace("-", " - ")}
              selected={item.value === opt}
              onPress={() => onChange(item.key, opt)}
            />
          ))}
        </View>
      )}
      keyExtractor={(item) => item.key}
    />
  );
};

export default RadioButton;

const styles = StyleSheet.create({
  option: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#333",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  radioCircleSelected: {
    backgroundColor: "#d76262ff",
  },
  optionLabel: {
    fontSize: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: "500",
    color: COLORS.text,
    marginBottom: 6,
  },
});
