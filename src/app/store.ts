import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import superheroReducer from "../features/dashboard/superheroSlice";

export const store = configureStore({
  reducer: {
    superhero: superheroReducer,
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
