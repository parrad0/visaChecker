import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { reducer } from "../reducers/wordle";

export const store = configureStore({
  reducer: {
    visaChecker: reducer.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
