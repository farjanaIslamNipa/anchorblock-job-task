import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/user/userSlice";
import authSlice from "../features/auth/authSlice";
import {authApi} from "../features/auth/authApi";
import {userApi} from "../features/user/userApi";

const store = configureStore({
  reducer : {
    auth: authSlice,
    users: userSlice,

    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(authApi.middleware, userApi.middleware),
})

export default store;