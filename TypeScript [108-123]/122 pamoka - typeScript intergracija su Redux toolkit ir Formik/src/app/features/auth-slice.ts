import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface User {
  name: string,
  surname: string,
  role: 'ADMIN' | 'USER',
  email: string,
}

export interface AuthState {
  loggedIn: boolean,
  user: User | null
}

const initialState: AuthState = {
  loggedIn: false,
  // user: {
  //   name: 'Penediktas',
  //   surname: 'Tušinis',
  //   role: 'USER',
  //   email: 'pentuska@gmail.com',
  // }
  user: null
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.loggedIn = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.loggedIn = false;
      state.user = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions;

export const selectUser = (state: RootState): AuthState['user'] => state.auth.user;

export default authSlice.reducer;
