import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type User = {
  email: String;
  password: String;
};

type Auth = {
  isAuthenticated: boolean | null;
  newUser: boolean | null;
  loading: boolean;
  user: User | null;
};

const initialState: Auth = {
  isAuthenticated: null,
  newUser: null,
  loading: true,
  user: null,
};

//remember to update the user with the new user stuff that is passed
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLoaded: (state) => {
      state.loading = false;
      state.isAuthenticated = true;
    },
    authSuccess: (state) => {
      state.isAuthenticated = true;
      state.loading = false;
    },
    authFailure: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.loading = false;
    },
  },
});
const AuthReducer = authSlice.reducer
export default AuthReducer;
export const { userLoaded, authSuccess, authFailure } = authSlice.actions;
