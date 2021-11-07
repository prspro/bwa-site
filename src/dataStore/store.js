import { configureStore } from "@reduxjs/toolkit";
import mobileMenuReducer from "./mobileMenuSlice";
import overlayReducer from "./overlaySlice";

export default configureStore({
  reducer: {
    mobileMenu: mobileMenuReducer,
    overlay: overlayReducer,
  },
});
