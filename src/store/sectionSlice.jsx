// sectionSlice.js
import { createSlice } from '@reduxjs/toolkit';

const sectionSlice = createSlice({
  name: 'section',
  initialState: 'about',
  reducers: {
    changeSection: (state, action) => action.payload,
  },
});

export const { changeSection } = sectionSlice.actions;
export default sectionSlice.reducer;
