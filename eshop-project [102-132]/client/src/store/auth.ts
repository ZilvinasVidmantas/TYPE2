import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../types';
import { State } from './index';

type AuthState = {
  loggedIn: boolean | null,
  user: User | null,
  redirectTo?: string
};

const initialState: AuthState = {
  loggedIn: null,
  user: null,
};

type LoginReducer = CaseReducer<AuthState, PayloadAction<{ user: User, redirectTo?: string }>>;
const loginReducer: LoginReducer = (state, { payload }) => {
  state.loggedIn = true;
  state.user = payload.user;
  if (payload.redirectTo) {
    state.redirectTo = payload.redirectTo;
  }
};

type AuthFailedReducer = CaseReducer<AuthState>;
const authFailedReducer: AuthFailedReducer = (state) => {
  state.loggedIn = false;
};

type LogoutReducer = CaseReducer<AuthState>;
const logoutReducer: LogoutReducer = (state) => {
  state.loggedIn = false;
  state.user = null;
  state.redirectTo = undefined;
};

type UpdateUserReducer = CaseReducer<AuthState, PayloadAction<{ user: User }>>;
const updateUserReducer: UpdateUserReducer = (state, { payload }) => {
  state.user = payload.user;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authFailedReducer,
    loginReducer,
    logoutReducer,
    updateUserReducer,
  },
});

export const {
  loginReducer: login,
  logoutReducer: logout,
  authFailedReducer: authFailed,
  updateUserReducer: updateUser,
} = authSlice.actions;

export const authSelector = (state: State) => state.auth;
export const loggedInSelector = (state: State) => state.auth.loggedIn;
export const userSelector = (state: State) => state.auth.user;

export default authSlice.reducer;
