import { API } from '@/config-api/global-config-api';
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

// create new advert
export const createAdvertThunk = createAsyncThunk<
  AdvertResponse, // Тип данных, возвращаемых асинхронным действием
  AdvertData, // Тип параметра асинхронного действия (данные для создания объявления)
  { rejectValue: string; state: RootState } // Тип дополнительных параметров асинхронного действия, включая RootState
>('adverts/createAdvert', async (credentials, ThunkAPI) => {
  const state = ThunkAPI.getState(); // Отримуємо стан Redux
  const token = state.auth.access; // Отримуємо access токен з auth стану
  console.log(`Tokkken ${token}`);

  try {
    const response = await API.post<AdvertResponse>(
      '/api/catalog/adverts/',
      credentials,
      {
        headers: {
          Authorization: `Bearer ${token}`, // Додаємо токен у заголовки
        },
      }
    );
    return response.data;
  } catch (error: any) {
    return ThunkAPI.rejectWithValue(error.message);
  }
});

// get advert by id
// export const getAdvertThunk =

// update advert by id
// export const updateAdvertThunk =

// delete advert by id
// export const deleteAdvertThunk =

// get adverts list
// export const getAdvertsListThunk =
