import { API } from '@/config/globalConfig';
import { UserData } from '@/types/interfaces/UserData';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';

// Определение типа данных, возвращаемых асинхронным действием
export const fetchUsersThunk = createAsyncThunk<
  // AxiosResponse<UserData[]>, // Тип данных, возвращаемых асинхронным действием
  UserData[], // Тип данных, возвращаемых асинхронным действием
  undefined, // Тип параметра асинхронного действия (в данном случае отсутствует)
  { rejectValue: string } // Тип дополнительных параметров асинхронного действия
>('users/getAllUsers', async (_, ThunkAPI) => {
  try {
    // const response = await API.get('users?_limit=5');
    const response: AxiosResponse<UserData[]> = await API.get('users?_limit=5');
    return response.data;
  } catch (error: any) {
    return ThunkAPI.rejectWithValue(error.message);
  }
});
