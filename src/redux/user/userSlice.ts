import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from './operations';

const initialState = {
  entities: [],
  loading: false,
  value: 10,
} as any;

const userSlice = createSlice({
  name: 'users',
  initialState,

  reducers: {
    increment: state => {
      state.value++;
    },
  },

  extraReducers: builder => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.entities.push(...action.payload);
    });

    builder.addCase(fetchUsers.pending, (state, action) => {
      state.loading = true;
    });
  },
});

export const { increment } = userSlice.actions;

export default userSlice.reducer;
