/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import SessionService from '../services/session-service';

const initialState = SessionService.get('auth') ?? {
  loggedIn: false,
  token: null,
  user: null,
  redirectTo: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      state.loggedIn = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.redirectTo = action.payload.redirectTo;
      SessionService.set('auth', state);
    },
    logout(state) {
      state.loggedIn = false;
      state.token = null;
      state.user = null;
      state.redirectTo = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export const authSelector = (state) => state.auth;
export const loggedInSelector = (state) => state.auth.loggedIn;
export const userSelector = (state) => state.auth.user;

export default authSlice.reducer;
