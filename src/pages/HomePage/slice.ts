import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { addNewData, getData } from './API';
import { HomeContainerState, EmployessItemStatePayload, GetEmployessPayload } from "./types";

const PER_PAGE = 5;
// update type later

const initialState: HomeContainerState = {
  data: [],
  page: 0,
  totalPage: 0,
  filter: {
    page: 1,
    limit: PER_PAGE,
    sortBy: 'createdAt',
    order: 'desc'
  }
};

export const getDataEmployess = createAsyncThunk(
  'Home/fetchCount',
  async (params: GetEmployessPayload) => {
    const response = await getData(params);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const addNewEmployess = createAsyncThunk(
  'Home/addCount',
  async (params: EmployessItemStatePayload) => {
    const response = await addNewData(params);
    return response.data;
  }
);

export const HomeSlice = createSlice({
  name: 'Home',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    incrementPage: (state) => {
      state.filter = {
        ...state.filter,
        page: state.filter.page + 1
      }
    },

    decrementPage: (state) => {
      state.filter = {
        ...state.filter,
        page: state.filter.page - 1
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addNewEmployess.pending, (state) => {
      })
      .addCase(addNewEmployess.fulfilled, (state, action) => {
        let newData = []
        if (state.filter.page === 1) {
          newData= [
            action.payload,
            ...state.data,
           ];
        } else {
          newData= [...state.data];
        }
        state.data = newData
      })
      .addCase(addNewEmployess.rejected, (state, action) => {
      })
      .addCase(getDataEmployess.pending, (state) => {
      })
      .addCase(getDataEmployess.fulfilled, (state, action) => {
        state.data = [...action.payload];
      })
      .addCase(getDataEmployess.rejected, (state, action) => {
      });
  },
});

export const { incrementPage, decrementPage } = HomeSlice.actions;

export const selectData = (state: RootState) => state.home.data;
export const selectFilter = (state: RootState) => state.home.filter;

export default HomeSlice.reducer;
