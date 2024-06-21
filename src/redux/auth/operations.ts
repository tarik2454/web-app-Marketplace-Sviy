import { createAsyncThunk } from '@reduxjs/toolkit';
import { authFormValues } from '../../models/authFormValues';
import axios from 'axios';
import { API, clearToken, setToken } from '../../config/globalConfig';

interface AuthData {
  access?: string;
  refresh?: string;
  full_name?: string;
  email?: string;
  phone?: string;
  password?: string;
  chekSignUp?: boolean;
}

// Register
export const registerThunk = createAsyncThunk<
  AuthData,
  authFormValues,
  { rejectValue: string }
>('auth/register', async (credentials, ThunkAPI) => {
  try {
    const response = await API.post('/api/account/user/register/', credentials);
    const data = response.data;

    return {
      ...data,
      full_name: credentials.full_name,
      email: credentials.email,
      phone: credentials.phone,
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const status = error.response?.status;
      if (status === 401) {
        return ThunkAPI.rejectWithValue('Incorrect email or password');
      }
    }
    return ThunkAPI.rejectWithValue('Something went wrong! Try again....');
  }
});

// Login
export const loginThunk = createAsyncThunk<
  AuthData,
  authFormValues,
  { rejectValue: string }
>('auth/login', async (credentials, ThunkAPI) => {
  try {
    const response = await API.post('/api/account/user/login/', credentials);
    const data = response.data;

    localStorage.setItem('token', JSON.stringify(data));

    return { ...data, email: credentials.email };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const status = error.response?.status;
      if (status === 401) {
        return ThunkAPI.rejectWithValue('Incorrect email or password');
      }
    }
    return ThunkAPI.rejectWithValue('Something went wrong! Try again....');
  }
});

// Refresh
export const refreshThunk = createAsyncThunk<
  AuthData,
  undefined,
  { rejectValue: string }
>('auth/refresh', async (_, ThunkAPI) => {
  try {
    const token = JSON.parse(localStorage.getItem('token') as string);

    if (!token) {
      return ThunkAPI.rejectWithValue('Token does not exist');
    }

    const response = await API.post('/api/account/user/refresh/', {
      refresh: token.refresh,
    });

    const data = response.data;
    setToken(data.access);

    return { ...data };
  } catch (error) {
    clearToken();
    return ThunkAPI.rejectWithValue('Something went wrong! Try again....');
  }
});

// Logout
export const logoutThunk = createAsyncThunk<
  void,
  void,
  { rejectValue: string }
>('auth/logout', async (_, ThunkAPI) => {
  try {
    localStorage.removeItem('token');
    clearToken();

    return;
  } catch (error) {
    return ThunkAPI.rejectWithValue('Failed to logout. Please try again.');
  }
});
