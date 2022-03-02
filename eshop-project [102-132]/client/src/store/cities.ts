/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { City } from 'types';
import CityService from 'services/cities-service';
import {
  FulfilledActionFromAsyncThunk,
  RejectedActionFromAsyncThunk,
} from '@reduxjs/toolkit/dist/matchers';
import { State } from './index';

type CategoriesState = {
  collection: City[],
  error?: string,
};

const initialState: CategoriesState = {
  collection: [],
};

// Kuriamas asinchroninis action'as
export const fetchCities = createAsyncThunk(
  'cities/fetchCities',
  async () => {
    const cities = await CityService.getCities();
    return { cities };
  },
);

type FetchCategoriesAsyncThunk = typeof fetchCities;

const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    deleteErrorReducer: (state: CategoriesState) => {
      state.error = undefined;
    },
  },
  extraReducers: {
    // fetchCities asinchroninio action'o fulfilled(sėkmės) atvejis
    'cities/fetchCities/fulfilled': (
      state: CategoriesState,
      action: FulfilledActionFromAsyncThunk<FetchCategoriesAsyncThunk>,
    ) => {
      state.collection = action.payload.cities;
    },

    // fetchCities asinchroninio action'o reject(atmetimo) atvejis
    'cities/fetchCities/rejected': (
      state: CategoriesState,
      action: RejectedActionFromAsyncThunk<FetchCategoriesAsyncThunk>,
    ) => {
      state.error = action.error.message;
    },
  },
});

export const {
  deleteErrorReducer: deleteError,
} = citiesSlice.actions;

export const citiesSelector = (state: State) => state.cities.collection;
export const citiesErrorSelector = (state: State) => state.cities.error;

export default citiesSlice.reducer;
