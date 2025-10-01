import React, { useMemo } from "react";
import { StyleSheet, View, Alert } from "react-native";
import { CustomButton, RadioButton, Screen } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import {
  selectVitaminAnswers,
  selectVitaminUnanswered,
  setVitaminAnswer,
} from "../../redux/slices/onBoardingSlice";
import { Question, VitaminAnswer } from "../../types";
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
        value: answers[q.key as keyof VitaminAnswer] ?? null,
      })),
    [answers]
  );

  const setAnswer = (key: string, value: string) => {
    dispatch(
      setVitaminAnswer({ key, value } as {
        key: keyof VitaminAnswer;
        value: string;
      })
    );
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
      allergies: allergies,
    };
    console.log("final output:", payload);
  };

  return (
    <Screen>
      <View style={styles.content}>
        <RadioButton questions={questions} onChange={setAnswer} />
        <CustomButton
          onPress={handleSubmit}
          text="Get my personalized vitamin"
        />
      </View>
    </Screen>
  );
};

export default PersonalizeVitaminScreen;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "space-between",
  },
});
