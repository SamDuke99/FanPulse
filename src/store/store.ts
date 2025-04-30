import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../components/counter/counterSlice";
import matchesReducer from "./slices/matchesSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    matches: matchesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
