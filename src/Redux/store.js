import { configureStore } from "@reduxjs/toolkit";
import { reportsReducer } from "./reportsSlice";
import { authReducer } from "./authSlice";

export const store = configureStore({
  reducer: {
    reports: reportsReducer,
    auth: authReducer,
  },
});
