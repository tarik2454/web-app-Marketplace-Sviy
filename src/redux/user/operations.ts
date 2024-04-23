import { API } from '@/config/globalConfig';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUsers = createAsyncThunk(
  'users/getAllUsers',
  async (_, thunkAPI) => {
    try {
      const response = await API.get('users?_limit=5');
      const data = response.data;
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
