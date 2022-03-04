/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  FulfilledActionFromAsyncThunk,
  RejectedActionFromAsyncThunk,
} from '@reduxjs/toolkit/dist/matchers';
import { Service, ServiceData } from 'types';
import ServicesService from '../services/services-service';

type UserServicesState = {
  error?: string,
  services: Service[]
};

const initialState: UserServicesState = {
  services: [],
};

// Kuriamas asinchroninis action'as
export const createService = createAsyncThunk(
  'userServices/createService',
  async (serviceData: ServiceData) => {
    const service = await ServicesService.createUserService(serviceData);

    return { service };
  },
);

const userServicesSlice = createSlice({
  name: 'userServices',
  initialState,
  reducers: {
    deleteErrorReducer: (state: UserServicesState) => {
      state.error = undefined;
    },
  },
  extraReducers: {
    'userServices/createService/fulfilled': (
      state: UserServicesState,
      action: FulfilledActionFromAsyncThunk<typeof createService>,
    ) => {
      const { service } = action.payload;
      state.services.push(service);
    },

    'userServices/createService/rejected': (
      state: UserServicesState,
      action: RejectedActionFromAsyncThunk<typeof createService>,
    ) => {
      if (action.error.message) {
        state.error = action.error.message;
      }
    },
  },
});

export const { deleteErrorReducer: deleteError } = userServicesSlice.actions;

export default userServicesSlice.reducer;
