import { configureStore } from "@reduxjs/toolkit";
import appGeneralReducer from "./appSlice";

export default configureStore({
  reducer: {
    appMainLogic: appGeneralReducer,
  },
});
