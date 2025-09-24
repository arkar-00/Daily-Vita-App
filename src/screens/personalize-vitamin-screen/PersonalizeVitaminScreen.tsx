import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../../assets/colors";
import { CustomButton, RadioButton } from "../../components";

type Question = {
  key: string;
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

const PersonalizeVitaminScreen = () => {
  const [questions, setQuestions] = useState<Question[]>(initialQuestions);

  // const setAnswer = (key: Question["key"], value: string) => {
  //   setQuestions((prev) =>
  //     prev.map((q) => (q.key === key ? { ...q, value } : q))
  //   );
  // };

  const handleSubmit = () => {
    const answers = Object.fromEntries(questions.map((q) => [q.key, q.value]));
    console.log(answers);
  };

  // const RadioOption = ({
  //   label,
  //   selected,
  //   onPress,
  // }: {
  //   label: string;
  //   selected: boolean;
  //   onPress: () => void;
  // }) => (
  //   <TouchableOpacity style={styles.option} onPress={onPress}>
  //     <View
  //       style={[styles.radioCircle, selected && styles.radioCircleSelected]}
  //     />
  //     <Text style={styles.optionLabel}>{label}</Text>
  //   </TouchableOpacity>
  // );

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.content}>
        <RadioButton />
        <CustomButton
          onPress={handleSubmit}
          text="Get my personalized vitamin"
        />
      </View>
    </SafeAreaView>
  );
};

export default PersonalizeVitaminScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.bg,
    justifyContent: "space-evenly",
    padding: 16,
  },
  content: {
    flex: 1,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 22,
    fontWeight: "500",
    color: COLORS.text,
    marginBottom: 6,
  },
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
  submitBtn: {
    backgroundColor: "#FF6B6B",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 30,
  },
  submitText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
