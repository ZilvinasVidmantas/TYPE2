/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loggedIn: null,
  user: null,
  redirectTo: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authFailed(state) {
      state.loggedIn = false;
    },
    login(state, { payload }) {
      state.loggedIn = true;
      state.user = payload.user;
      state.redirectTo = payload.redirectTo;
    },
    logout(state) {
      state.loggedIn = false;
      state.user = null;
      state.redirectTo = null;
    },
  },
});

export const { login, logout, authFailed } = authSlice.actions;

export const authSelector = (state) => state.auth;
export const loggedInSelector = (state) => state.auth.loggedIn;
export const userSelector = (state) => state.auth.user;

export default authSlice.reducer;
