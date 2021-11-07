import { createSlice } from "@reduxjs/toolkit";

const overlaySlice = createSlice({
  name: "overlay",
  initialState: {
    isShown: false,
  },
  reducers: {
    toggleOverlay(state, action) {
      state.isShown = !state.isShown;
    },
    showOverlay(state, action) {
      state.isShown = true;
    },
    hideOverlay(state, action) {
      state.isShown = false;
    },
  },
});

export const { toggleOverlay, showOverlay, hideOverlay } = overlaySlice.actions;

export default overlaySlice.reducer;
