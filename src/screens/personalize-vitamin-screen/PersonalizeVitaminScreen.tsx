import React, { useMemo } from "react";
import { StyleSheet, View, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../../assets/colors";
import { CustomButton, RadioButton } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import Allergies from "../../data/Allergies.json";
import { RootState } from "../../redux/store";
import {
  selectVitaminAnswers,
  selectVitaminUnanswered,
  setVitaminAnswer,
} from "../../redux/slices/onBoardingSlice";
import { Question } from "../../types";
import { CATALOG } from "../../data/Catalog";

// const healthConcern = useSelector((s: any) => s.onBoarding.healthConcern);
// const selectedDiets = useSelector(selectDietSelectedIds);
// const allergies = useSelector(selectAllergies);
// const vitaminAnswers = useSelector(selectVitaminAnswers);

// const payload = buildOnboardingPayload({
//   healthConcern,
//   selectedDiets,
//   vitaminAnswers,
//   allergies,
// });

const PersonalizeVitaminScreen = () => {
  const dispatch = useDispatch();

  const answers = useSelector(selectVitaminAnswers);
  const { healthConcern, selectedDiets, allergies, vitaminAnswers } =
    useSelector((state: RootState) => state.onBoarding);

  const questions: Question[] = useMemo(
    () =>
      CATALOG.map((q) => ({
        ...q,
        value: answers[q.key] ?? null,
      })),
    [answers]
  );

  const setAnswer = (key: string, value: string) => {
    dispatch(setVitaminAnswer({ key, value }));
  };

  const selectUnanswered = useMemo(() => selectVitaminUnanswered(CATALOG), []);
  const unansweredKeys = useSelector(selectUnanswered);

  const handleSubmit = () => {
    if (unansweredKeys.length) {
      Alert.alert("Missing answers", "Please answer all questions.");
      return;
    }

    const payload = {
      health_concerns: healthConcern,
      diets: selectedDiets,
      is_daily_exposure: vitaminAnswers,
      allergies: allergies.map((b) => {
        const modifyData = Allergies.data.find((a) => a.name == b);
        if (modifyData) return modifyData;
      }),
    };
    console.log("final output:", payload);
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.content}>
        <RadioButton questions={questions} onChange={setAnswer} />
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
});
