import { createSelector, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Diet } from "../../types";

type HealthconcernType = { id: number; label: string };
const NONE_ID = -1;

export interface OnBoardingSlice {
  healthConcern: HealthconcernType[];
  selectedDiets: Diet[];
  allergies: string[];
  vitaminAnswers: Record<string, string | null>;
}

const initialState: OnBoardingSlice = {
  healthConcern: [],
  selectedDiets: [],
  allergies: [],
  vitaminAnswers: {},
};

export const onBoardingSlice = createSlice({
  name: "onBoarding",
  initialState,
  reducers: {
    setHealthConcern: (state, action: PayloadAction<HealthconcernType>) => {
      const existingItem = state.healthConcern.find(
        (i) => i.id === action.payload.id
      );
      const newItem = action.payload;

      if (existingItem) {
        state.healthConcern = state.healthConcern.filter(
          (i) => i.id !== newItem.id
        );
      } else {
        state.healthConcern = [newItem, ...state.healthConcern];
      }
    },
    setHealthDrag: (state, action: PayloadAction<HealthconcernType[]>) => {
      state.healthConcern = action.payload;
    },

    setDietSelected(state, action: PayloadAction<Diet[]>) {
      state.selectedDiets = action.payload ?? [];
    },
    toggleDiet(state, action: PayloadAction<Diet>) {
      const diet = action.payload;
      const isNone =
        diet.id === NONE_ID ||
        (diet.name && diet.name.trim().toLowerCase() === "none");

      if (isNone) {
        const noneSelected = state.selectedDiets.some((d) => d.id === NONE_ID);
        if (noneSelected) {
          state.selectedDiets = [];
        } else {
          state.selectedDiets = [{ id: NONE_ID, name: "None" }];
        }
        return;
      }

      state.selectedDiets = state.selectedDiets.filter((d) => d.id !== NONE_ID);

      const exists = state.selectedDiets.some((d) => d.id === diet.id);
      if (exists) {
        state.selectedDiets = state.selectedDiets.filter(
          (d) => d.id !== diet.id
        );
      } else {
        state.selectedDiets.push(diet);
      }
    },
    clearDiet(state) {
      state.selectedDiets = [];
    },

    setAllergies(state, action: PayloadAction<string[]>) {
      state.allergies = action.payload ?? [];
    },
    clearAllergies(state) {
      state.allergies = [];
    },

    setVitaminAnswers(
      state,
      action: PayloadAction<Record<string, string | null>>
    ) {
      state.vitaminAnswers = action.payload ?? {};
    },

    setVitaminAnswer(
      state,
      action: PayloadAction<{ key: string; value: string }>
    ) {
      const { key, value } = action.payload;
      state.vitaminAnswers[key] = value ?? null;
    },

    clearVitaminAnswers(state) {
      state.vitaminAnswers = {};
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setHealthConcern,
  setHealthDrag,
  setDietSelected,
  toggleDiet,
  clearDiet,
  setAllergies,
  clearAllergies,
  setVitaminAnswers,
  setVitaminAnswer,
  clearVitaminAnswers,
} = onBoardingSlice.actions;

export const selectDietSelectedIds = (s: RootState) =>
  s.onBoarding.selectedDiets;

export const selectDietIsSelected = (dietId: number) => (s: RootState) =>
  s.onBoarding.selectedDiets.some((d) => d.id === dietId);

export const selectDietIsNone = (s: RootState) =>
  s.onBoarding.selectedDiets.some((d) => d.id === NONE_ID);

export const selectDietCount = (s: RootState) =>
  s.onBoarding.selectedDiets.length;

export const selectAllergies = (s: RootState) => s.onBoarding.allergies;

export const selectVitaminAnswer = (key: string) => (s: RootState) =>
  s.onBoarding.vitaminAnswers[key] ?? null;

export const selectVitaminAnswers = (s: RootState) =>
  s.onBoarding.vitaminAnswers;

export const selectVitaminUnanswered = (catalog: { key: string }[]) =>
  createSelector(
    [selectVitaminAnswers],
    (answers) => catalog.filter((q) => !answers[q.key]).map((q) => q.key) // return just keys (or q itself if you prefer)
  );

export default onBoardingSlice.reducer;
