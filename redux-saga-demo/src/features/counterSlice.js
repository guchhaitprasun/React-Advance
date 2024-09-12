import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    loading: false,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementAsync: (state) => {
      state.loading = true;
    },
    incrementAsyncSuccess: (state) => {
      state.value += 1;
      state.loading = false;
    },
    incrementAsyncFailure: (state) => {
      state.loading = false;
    },
  },
});

export const {
  increment,
  decrement,
  incrementAsync,
  incrementAsyncSuccess,
  incrementAsyncFailure,
} = counterSlice.actions;

export default counterSlice.reducer;
