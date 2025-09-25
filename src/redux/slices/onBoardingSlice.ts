import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type HealthconcernType = { id: number; label: string };

export interface OnBoardingSlice {
  healthConcern: HealthconcernType[];
}

const initialState: OnBoardingSlice = {
  healthConcern: [],
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
  },
});

// Action creators are generated for each case reducer function
export const { setHealthConcern, setHealthDrag } = onBoardingSlice.actions;

export default onBoardingSlice.reducer;
