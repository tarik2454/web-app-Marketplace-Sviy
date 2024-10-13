import { API } from '@/config-api/global-config-api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

interface CreatePhotosParams {
  photos: File[];
  advertId: number;
  types: string[];
}

export interface Type {
  name: string;
  value: string;
}

interface UploadResponse {
  data: {
    id: number;
    url: string;
    types: Type[];
  }[];
}

export const createPhotosThunk = createAsyncThunk<
  UploadResponse,
  CreatePhotosParams,
  { rejectValue: string }
>('photos/submit', async ({ photos, advertId, types }, ThunkAPI) => {
  const formData = new FormData();

  photos.forEach(photo => {
    formData.append('files', photo);
  });

  formData.append('advert', String(advertId));

  types.forEach(type => {
    formData.append('types', type);
  });

  try {
    const response = await API.post<UploadResponse>(
      '/api/catalog/images/multiple_create/',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );

    toast.success('Фото успішно завантажено');
    return response.data;
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
