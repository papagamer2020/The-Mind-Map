import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import mapReducer from "../features/maps/mapSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    maps: mapReducer,
  },
});
