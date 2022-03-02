/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Category } from 'types';
import { State } from './index';
import CategoryService from 'services/categories-service';
import {
  FulfilledActionFromAsyncThunk,
  RejectedActionFromAsyncThunk
} from '@reduxjs/toolkit/dist/matchers';

type CategoriesState = {
  collection: Category[],
  error?: string,
};

const initialState: CategoriesState = {
  collection: [],
};

// Kuriamas asinchroninis action'as
export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async () => {
    const categories = await CategoryService.getCategories();
    return { categories };
  }
);

type FetchCategoriesAsyncThunk = typeof fetchCategories;

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    deleteErrorReducer: (state: CategoriesState) => {
      state.error = undefined;
    }
  },
  extraReducers: {
    // fetchCategories asinchroninio action'o fulfilled(sėkmės) atvejis
    'categories/fetchCategories/fulfilled': (
      state: CategoriesState,
      action: FulfilledActionFromAsyncThunk<FetchCategoriesAsyncThunk>
    ) => {
      state.collection = action.payload.categories;
    },

    // fetchCategories asinchroninio action'o reject(atmetimo) atvejis
    'categories/fetchCategories/rejected': (
      state: CategoriesState,
      action: RejectedActionFromAsyncThunk<FetchCategoriesAsyncThunk>
    ) => {
      state.error = action.error.message;
    }
  }
});

export const {
  deleteErrorReducer: deleteError,
} = categoriesSlice.actions;

export const categoriesSelector = (state: State) => state.categories.collection;
export const categoriesErrorSelector = (state: State) => state.categories.error;

export default categoriesSlice.reducer;
