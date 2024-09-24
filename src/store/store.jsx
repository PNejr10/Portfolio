// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import sectionReducer from './sectionSlice';  // Your slice reducer

export const store = configureStore({
  reducer: {
    section: sectionReducer,  // Add your slice reducer here
  },
});

export default store;
