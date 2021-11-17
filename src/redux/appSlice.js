import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMobileMenuShown: false,
    isOverlayShown: false,
    lang: "en",
  },
  reducers: {
    setLanguage(state, action) {
      state.lang = action.payload;
    },
    toggleMobileMenu(state, action) {
      state.isMobileMenuShown = !state.isMobileMenuShown;
    },
    hideMobileMenu(state, action) {
      state.isMobileMenuShown = false;
    },
    showMobileMenu(state, action) {
      state.isMobileMenuShown = true;
    },
    toggleOverlay(state, action) {
      state.isOverlayShown = !state.isOverlayShown;
    },
    showOverlay(state, action) {
      state.isOverlayShown = true;
    },
    hideOverlay(state, action) {
      state.isOverlayShown = false;
    },
  },
});

export const {
  setLanguage,
  toggleOverlay,
  showOverlay,
  hideOverlay,
  showMobileMenu,
  toggleMobileMenu,
  hideMobileMenu,
} = appSlice.actions;

export default appSlice.reducer;
