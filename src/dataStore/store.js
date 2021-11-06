import { configureStore } from "@reduxjs/toolkit";
import mobileMenuReducer from "./mobileMenuSlice";

export default configureStore({
  reducer: {
    mobileMenu: mobileMenuReducer,
  },
});
