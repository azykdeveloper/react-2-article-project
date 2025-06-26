import { configureStore } from "@reduxjs/toolkit";
import auth from "../slice/auth";
import article from "../slice/article";

export default configureStore({
  reducer: {
    auth,
    article
  },
  devTools: process.env.NODE_ENV !== 'production',
})