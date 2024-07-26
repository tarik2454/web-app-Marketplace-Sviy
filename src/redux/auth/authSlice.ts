import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { RootState } from '../store';
import {
  currentUserThunk,
  loginThunk,
  logoutThunk,
  refreshThunk,
  registerThunk,
  updateProfileThunk,
  updatePasswordThunk,
  deleteProfileThunk,
} from './operations';
import { Address } from '@/models/dataToSubmit';

interface AuthState {
  access?: string;
  refresh?: string;
  full_name?: string;
  email?: string;
  phone?: string;
  address?: Address;
  isLoggedIn: boolean;
  isLoading: boolean;
  isRefresh: boolean;
  // error: string;
}

const initialState: AuthState = {
  access: '',
  refresh: '',
  full_name: '',
  email: '',
  phone: '',
  address: undefined,
  isLoggedIn: false,
  isLoading: false,
  isRefresh: false,
  // error: '',
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
        state.phone = payload.phone;
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
        state.phone = '';
        state.address = {
          city: '',
          street: '',
          number: '',
        };
        state.isLoggedIn = false;
        state.isLoading = false;
        state.isRefresh = false;
        // state.error = '';
      })
      .addCase(updateProfileThunk.fulfilled, (state, { payload }) => {
        state.full_name = payload.full_name;
        state.email = payload.email;
        state.phone = payload.phone;
        state.address = payload.address
          ? {
              city: payload.address.city,
              street: payload.address.street,
              number: payload.address.number,
            }
          : undefined;
        state.isLoading = false;
      })
      .addCase(updateProfileThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        // state.error = payload ?? 'Помилка оновлення профілю';
      })
      .addCase(currentUserThunk.fulfilled, (state, { payload }) => {
        state.full_name = payload.full_name;
        state.email = payload.email;
        state.phone = payload.phone;
        state.address = payload.address
          ? {
              city: payload.address.city,
              street: payload.address.street,
              number: payload.address.number,
            }
          : undefined;
      })
      .addCase(currentUserThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        // state.error = payload ?? 'Помилка отримання данних з серверу';
      })
      .addCase(updatePasswordThunk.fulfilled, state => {
        state.isLoading = false;
        // state.error = '';
      })
      .addCase(updatePasswordThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        // state.error = payload ?? 'Помилка зміни паролю';
      })
      .addCase(deleteProfileThunk.fulfilled, state => {
        state.access = '';
        state.refresh = '';
        state.full_name = '';
        state.email = '';
        state.phone = '';
        state.address = {
          city: '',
          street: '',
          number: '',
        };
        state.isLoggedIn = false;
        state.isLoading = false;
        // state.error = '';
      })
      .addCase(deleteProfileThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        // state.error = payload ?? 'Помилка видалення профілю';
      })
      .addMatcher(
        isAnyOf(
          loginThunk.pending,
          registerThunk.pending,
          refreshThunk.pending,
          updateProfileThunk.pending,
          currentUserThunk.pending,
          updatePasswordThunk.pending,
          deleteProfileThunk.pending
        ),
        state => {
          state.isLoading = true;
          // state.error = '';
        }
      )
      .addMatcher(
        isAnyOf(
          loginThunk.rejected,
          registerThunk.rejected,
          updatePasswordThunk.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          // state.error = payload ?? 'Помилка авторизації';
        }
      );
  },
});

export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;
