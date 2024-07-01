import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { RootState } from '../store';
import {
  loginThunk,
  logoutThunk,
  refreshThunk,
  registerThunk,
} from './operations';

interface AuthState {
  access?: string;
  refresh?: string;
  full_name?: string;
  email?: string;
  phone?: string;
  isLoggedIn: boolean;
  isLoading: boolean;
  isRefresh: boolean;
  error: string;
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
        state.full_name = payload.full_name;
        state.email = payload.email;
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
      .addCase(logoutThunk.fulfilled, state => {
        state.access = '';
        state.refresh = '';
        state.full_name = '';
        state.isLoggedIn = false;
        state.isLoading = false;
        state.isRefresh = false;
        state.error = '';
      })
      .addMatcher(isAnyOf(loginThunk.pending, registerThunk.pending), state => {
        state.isLoading = true;
        state.error = '';
      })
      .addMatcher(
        isAnyOf(loginThunk.rejected, registerThunk.rejected),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload ?? 'Помилка оновлення токену';
        }
      );
  },
});

export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;
