import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import COLORS from "../assets/colors";

type Question = {
  key: "sunExposure" | "smoke" | "alcohol";
  label: string;
  options: string[];
  value: string | null;
};

const initialQuestions: Question[] = [
  {
    key: "sunExposure",
    label: "Is your daily exposure to sun limited?",
    options: ["Yes", "No"],
    value: null,
  },
  {
    key: "smoke",
    label: "Do you currently smoke (tobacco or marijuana)?",
    options: ["Yes", "No"],
    value: null,
  },
  {
    key: "alcohol",
    label: "On average, how many alcoholic beverages do you have in a week?",
    options: ["0-1", "2-5", "5+"],
    value: null,
  },
];

const RadioButton = () => {
  const [questions, setQuestions] = useState<Question[]>(initialQuestions);

  const setAnswer = (key: Question["key"], value: string) => {
    setQuestions((prev) =>
      prev.map((q) => (q.key === key ? { ...q, value } : q))
    );
  };

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
              onPress={() => setAnswer(item.key, opt)}
            />
          ))}
        </View>
      )}
      keyExtractor={(item) => item.key}
    />

    /* <ScrollView>
          {questions.map((q) => (
            <View key={q.key} style={{ marginBottom: 16 }}>
              <Text style={styles.title}>
                {q.label}
                <Text style={{ color: COLORS.button }}> *</Text>
              </Text>
              {q.options.map((opt) => (
                <RadioOption
                  key={opt}
                  label={opt.replace("-", " - ")}
                  selected={q.value === opt}
                  onPress={() => setAnswer(q.key, opt)}
                />
              ))}
            </View>
          ))}
        </ScrollView> */
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
