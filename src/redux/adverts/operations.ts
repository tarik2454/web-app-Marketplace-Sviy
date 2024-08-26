import { API, clearToken } from '@/config-api/global-config-api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../store'; // Імпортуємо RootState для типізації state
import axios from 'axios';

// Типы данных для объявления и ответа
interface Address {
  city: string;
  street: string;
  number: string;
}

interface AdvertData {
  owner: number;
  category: number;
  name: string;
  descr: string;
  price: string;
  quantity: number;
  pickup: boolean;
  nova_post: boolean;
  courier: boolean;
  address: Address;
}

// Типы данных ответа от сервера
interface AdvertResponse extends AdvertData {
  id: number;
}

// Определение типа данных, возвращаемых асинхронным действием
export const createAdvertThunk = createAsyncThunk<
  AdvertResponse, // Тип данных, возвращаемых асинхронным действием
  AdvertData, // Тип параметра асинхронного действия (данные для создания объявления)
  { rejectValue: string; state: RootState } // Тип дополнительных параметров асинхронного действия, включая RootState
>('adverts/createAdvert', async (credentials, ThunkAPI) => {
  try {
    const response = await API.post<AdvertResponse>(
      '/api/catalog/adverts/',
      credentials
    );
    return response.data;
  } catch (error: any) {
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

export const fetchAdvertsThunk = createAsyncThunk<
  AdvertResponse[], // Тип даних, що повертаються асинхронним дією (масив оголошень)
  void, // Параметри дії (не потрібні для цього запиту)
  { rejectValue: string; state: RootState } // Додаткові параметри
>('adverts/fetchAdverts', async (_, ThunkAPI) => {
  try {
    const response = await API.get<AdvertResponse[]>('/api/catalog/adverts/');
    return response.data;
  } catch (error: any) {
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

export const fetchAdvertByIdThunk = createAsyncThunk<
  AdvertResponse, // Тип даних, що повертаються асинхронним дією (одне оголошення)
  number, // Параметр - ID оголошення
  { rejectValue: string; state: RootState } // Додаткові параметри
>('adverts/fetchAdvertById', async (id, ThunkAPI) => {
  const state = ThunkAPI.getState();
  const token = state.auth.access;

  try {
    const response = await API.get<AdvertResponse>(
      `/api/catalog/adverts/${id}/`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error: any) {
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

export const updateAdvertThunk = createAsyncThunk<
  AdvertResponse, // Тип даних, що повертаються асинхронним дією (оновлене оголошення)
  { id: number; data: Partial<AdvertData> }, // Параметри - ID оголошення та дані для оновлення
  { rejectValue: string; state: RootState } // Додаткові параметри
>('adverts/updateAdvert', async ({ id, data }, ThunkAPI) => {
  try {
    const response = await API.patch<AdvertResponse>(
      `/api/catalog/adverts/${id}/`,
      data
    );
    return response.data;
  } catch (error: any) {
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

export const deleteAdvertThunk = createAsyncThunk<
  number,
  number,
  { rejectValue: string; state: RootState }
>('adverts/deleteAdvert', async (id, ThunkAPI) => {

  try {
    const response = await API.delete(`/api/catalog/adverts/${id}/`);
    return id;
  } catch (error: any) {
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
