import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/user/userSlice";
import authSlice from "../features/auth/authSlice";
import {authApi} from "../features/auth/authApi";

const store = configureStore({
  reducer : {
    auth: authSlice,
    users: userSlice,

    [authApi.reducerPath]: authApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(authApi.middleware),
})

export default store;