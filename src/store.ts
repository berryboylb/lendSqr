import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./reducers/auth";
import UserReducer from "./reducers/users";

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    user: UserReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
