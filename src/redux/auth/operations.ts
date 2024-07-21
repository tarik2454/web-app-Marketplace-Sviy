import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { API, clearToken, setToken } from '../../config-api/global-config-api';
import { Address } from '@/models/dataToSubmit';

export interface authFormValues {
  full_name?: string;
  email?: string;
  phone?: string;
  password?: string;
  passwordRepeat?: string;
  chekSignUp?: boolean;
}

interface AuthData {
  access?: string;
  refresh?: string;
  full_name?: string;
  email?: string;
  phone?: string;
  address?: Address;
  password?: string;
  chekSignUp?: boolean;
}

interface UpdateProfileValues {
  full_name?: string;
  email?: string;
  phone?: string;
  address?: Address;
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
        return ThunkAPI.rejectWithValue('Введено некоректні дані.');
      }
    }
    return ThunkAPI.rejectWithValue('Щось пішло не так! Спробуйте знову....');
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
        return ThunkAPI.rejectWithValue('Некоректний email або пароль.');
      }
    }
    return ThunkAPI.rejectWithValue('Щось пішло не так! Спробуйте знову....');
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
      return ThunkAPI.rejectWithValue('Помилка оновлення токену');
    }

    const response = await API.post('/api/account/user/refresh/', {
      refresh: token.refresh,
    });

    const data = response.data;
    setToken(data.access);

    return data;
  } catch (error) {
    clearToken();
    return ThunkAPI.rejectWithValue('Щось пішло не так! Спробуйте знову....');
  }
});

// Logout
export const logoutThunk = createAsyncThunk<
  void,
  void,
  { rejectValue: string }
>('auth/logout', async (_, ThunkAPI) => {
  try {
    const response = await API.post('/api/account/user/logout/');

    if (response.status === 204) {
      localStorage.removeItem('token');
      clearToken();
      return;
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const status = error.response?.status;
      if (status === 401) {
        clearToken();
        return ThunkAPI.rejectWithValue('Користувач не автентифікований.');
      }
    }
    return ThunkAPI.rejectWithValue('Щось пішло не так! Спробуйте знову....');
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

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const status = error.response?.status;
      if (status === 401) {
        return ThunkAPI.rejectWithValue('Користувач не автентифікований.');
      }
    }
    return ThunkAPI.rejectWithValue('Щось пішло не так! Спробуйте знову....');
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
    return ThunkAPI.rejectWithValue('Щось пішло не так! Спробуйте знову....');
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
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const status = error.response?.status;
      if (status === 400) {
        return ThunkAPI.rejectWithValue('Надано некорректні данні.');
      }
      if (status === 401) {
        return ThunkAPI.rejectWithValue('Користувач не автентифікований.');
      }
    }
    return ThunkAPI.rejectWithValue('Щось пішло не так! Спробуйте знову....');
  }
});

// Delete profile
export const deleteProfileThunk = createAsyncThunk<
  void,
  void,
  { rejectValue: string }
>('auth/deleteProfile', async (_, ThunkAPI) => {
  try {
    const response = await API.delete('/api/account/user/disable_me/');

    clearToken();

    if (response.status === 204) {
      return;
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      clearToken();
      const status = error.response?.status;
      if (status === 401) {
        return ThunkAPI.rejectWithValue('Користувач не автентифікований.');
      }
    }
    return ThunkAPI.rejectWithValue('Щось пішло не так! Спробуйте знову....');
  }
});
