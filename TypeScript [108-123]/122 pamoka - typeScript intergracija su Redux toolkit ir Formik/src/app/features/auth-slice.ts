import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
  user: null
};

export const counterSlice = createSlice({
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
export const { login, logout } = counterSlice.actions;

export default counterSlice.reducer;
