import { createSlice } from "@reduxjs/toolkit";
import { removeItem, setItem } from "../utils/persistanceStorage";

const initialState = {
  isAuthenticated: false,
  user: null,
  error: null,
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    authSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      state.loading = false;
      state.error = null;
      setItem("token", action.payload.token);
    },
    authFailure: (state, action) => {
      state.isAuthenticated = false;
      state.user = null;
      state.loading = false;
      state.error = action.payload;
    },
    
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.error = null;
      state.loading = false;
      removeItem("token"); // Clear token from storage
    },
  },
});

export const {
  authStart,
  authSuccess,
  authFailure,
  logout,
} = authSlice.actions;
export default authSlice.reducer;
