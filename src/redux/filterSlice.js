import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setContactsFilter(state, action) {
      return action.payload;
    },
  },
});

export const getFilter = state => state.filter;
export const { setContactsFilter } = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;
