import { configureStore } from '@reduxjs/toolkit';
import homeReducer from '../features/home/homeSlice';
import developmentReducer from '../features/home/developmentSlice';

export const store = configureStore({
  reducer: {
    home: homeReducer,
    development: developmentReducer,
  },
});
