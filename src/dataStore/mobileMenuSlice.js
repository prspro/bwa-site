import { createSlice } from "@reduxjs/toolkit";

const mobileMenuSlice = createSlice({
  name: "mobileMenu",
  initialState: {
    isShown: false,
  },
  reducers: {
    toggleMobileMenu(state, action) {
      // console.log(state, action);
      state.isShown = !state.isShown;
    },
    hideMobileMenu(state, action) {
      state.isShown = false;
    },
    showMobileMenu(state, action) {
      state.isShown = true;
    },
  },
});

export const { showMobileMenu, toggleMobileMenu, hideMobileMenu } =
  mobileMenuSlice.actions;

export default mobileMenuSlice.reducer;
