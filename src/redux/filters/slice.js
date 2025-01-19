import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: {
    location: '',
    bodyType: '',
    features: [],
  },
  isFiltered: false,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      const { name, value } = action.payload;

      if (name === 'features') {
        if (state.items.features.includes(value)) {
          state.items.features = state.items.features.filter(
            feature => feature !== value
          );
        } else {
          state.items.features.push(value);
        }
      } else {
        state.items[name] = value;
      }
    },
    resetFilter: state => {
      state.items = { location: '', bodyType: '', features: [] };
      state.isFiltered = false;
    },
    changeIsFiltered: state => {
      state.isFiltered = true;
    },
  },
});

export const { changeFilter, resetFilter, changeIsFiltered } =
  filtersSlice.actions;

export const selectFilters = state => state.filters.items;
export const selectIsFiltered = state => state.filters.isFiltered;

export default filtersSlice.reducer;
