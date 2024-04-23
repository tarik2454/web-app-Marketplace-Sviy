import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from './operations';

const initialState = {
  entities: [],
  isLoading: false,
  value: 10,
} as any;

const userSlice = createSlice({
  name: 'users',
  initialState,

  reducers: {
    increment: state => {
      state.value = state.value + 1;
    },
    decrement: state => {
      state.value = state.value - 1;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.entities.push(...action.payload);
    });
    builder.addCase(fetchUsers.pending, (state, action) => {
      state.isLoading = true;
    });
  },
});

export const { increment, decrement } = userSlice.actions;

export default userSlice.reducer;
