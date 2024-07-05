import { createAsyncThunk } from '@reduxjs/toolkit';
import { authFormValues } from '../../models/authFormValues';
import axios from 'axios';
import { API, clearToken, setToken } from '../../config-api/global-config-api';

interface AuthData {
  access?: string;
  refresh?: string;
  full_name?: string;
  email?: string;
  phone?: string;
  address?: string;
  password?: string;
  chekSignUp?: boolean;
}

interface UpdateProfileValues {
  full_name?: string;
  email?: string;
  phone?: string;
  address?: string;
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
        return ThunkAPI.rejectWithValue('Введено некоректні дані');
      }
    }
    return ThunkAPI.rejectWithValue('Щось пішло не так! Спробуй знову....');
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
        return ThunkAPI.rejectWithValue('Некоректний email або пароль');
      }
    }
    return ThunkAPI.rejectWithValue('Щось пішло не так! Спробуй знову....');
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

    return data;
  } catch (error) {
    clearToken();
    return ThunkAPI.rejectWithValue('Щось пішло не так! Спробуй знову....');
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
    return ThunkAPI.rejectWithValue('Щось пішло не так! Спробуй знову....');
  }
});

// Update profile
export const updateProfileThunk = createAsyncThunk<
  AuthData,
  UpdateProfileValues,
  { rejectValue: string }
>('auth/updateProfile', async (credentials, ThunkAPI) => {
  try {
    const response = await API.patch(
      '/api/account/user/update_me/',
      credentials
    );
    const data = response.data;
    console.log(data);

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const status = error.response?.status;
      if (status === 401) {
        return ThunkAPI.rejectWithValue(
          'Аутентификационные данные не предоставлены.'
        );
      }
    }
    return ThunkAPI.rejectWithValue('Щось пішло не так! Спробуй знову....');
  }
});

// Current user
export const currentUserThunk = createAsyncThunk<
  AuthData,
  undefined,
  { rejectValue: string }
>('auth/currentUser', async (_, ThunkAPI) => {
  try {
    const response = await API.get('/api/account/user/retrieve_me/');
    const data = response.data;

    return data;
  } catch (error) {
    return ThunkAPI.rejectWithValue('Щось пішло не так! Спробуй знову....');
  }
});

// Update password
export const updatePasswordThunk = createAsyncThunk<
  void,
  { password: string; new_password: string },
  { rejectValue: string }
>('auth/updatePassword', async ({ password, new_password }, ThunkAPI) => {
  try {
    const response = await API.put('/api/account/user/set_password_me/', {
      password,
      new_password,
    });

    if (response.status === 204) {
      return;
    } else if (response.status === 400) {
      const errorData = await response.data;
      return ThunkAPI.rejectWithValue(JSON.stringify(errorData));
    } else if (response.status === 401) {
      return ThunkAPI.rejectWithValue(
        'User is unauthenticated or token is invalid or expired.'
      );
    } else {
      return ThunkAPI.rejectWithValue('Unexpected error occurred.');
    }
  } catch (error) {
    return ThunkAPI.rejectWithValue('Something went wrong. Please try again.');
  }
});
