import { createSlice } from '@reduxjs/toolkit';

// Initial state
const initialState = {
  user: null,
  loading: false,
  error: null,
};

// Create the slice
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    fetchUser: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchUserSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    fetchUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// Export actions
export const { fetchUser, fetchUserSuccess, fetchUserFailure } = userSlice.actions;

// Export reducer
export default userSlice.reducer;
