import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { loginThunk, refreshThunk, registerThunk } from './operations';

interface AuthState {
  access?: string;
  refresh?: string;
  full_name?: string;
  email?: string;
  phone?: string;
  isLoggedIn: boolean;
  error: string;
  isLoading: boolean;
  isRefresh: boolean;
}

const initialState: AuthState = {
  access: '',
  refresh: '',
  full_name: '',
  email: '',
  phone: '',
  isLoggedIn: false,
  isLoading: false,
  isRefresh: false,
  error: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,

  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(registerThunk.fulfilled, (state, { payload }) => {
        // state.access = payload.access;
        // state.refresh = payload.refresh;
        // state.full_name = payload.full_name;
        // state.email = payload.email;
        // state.phone = payload.phone;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.access = payload.access;
        state.refresh = payload.refresh;
        state.email = payload.email;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(refreshThunk.fulfilled, (state, { payload }) => {
        state.access = payload.access;
        state.refresh = payload.refresh;
        state.isLoggedIn = true;
        state.isRefresh = false;
      })
      .addCase(refreshThunk.pending, state => {
        state.isRefresh = true;
      })
      .addCase(refreshThunk.rejected, state => {
        state.isRefresh = false;
        state.access = '';
        state.refresh = '';
      })
      .addMatcher(isAnyOf(loginThunk.pending, registerThunk.pending), state => {
        state.isLoading = true;
        state.error = '';
      })
      .addMatcher(
        isAnyOf(loginThunk.rejected, registerThunk.rejected),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload ?? 'Error refreshing token';
        }
      );
  },
});

export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;
