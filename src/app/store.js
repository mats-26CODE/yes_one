import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "../features/homeSlice";
import developmentReducer from "../features/developmentSlice";
import designReducer from "../features/designSlice";

export const store = configureStore({
  reducer: {
    home: homeReducer,
    development: developmentReducer,
    design: designReducer,
  },
});
