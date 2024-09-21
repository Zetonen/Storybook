import { configureStore } from "@reduxjs/toolkit";
import { settingsReducer } from "./settings/slice";

export const store = configureStore({
  reducer: {
    settings: settingsReducer,
  },
});
