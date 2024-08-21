import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { createAdvertThunk } from './operations';
import { RootState } from '../store';

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

interface AdvertResponse extends AdvertData {
  id: number;
}

interface AdvertsState {
  entities: AdvertResponse[]; // Массив объявлений
  isLoading: boolean; // Статус загрузки
  error: string | null; // Сообщение об ошибке
}

const initialState: AdvertsState = {
  entities: [],
  isLoading: false,
  error: '',
};

const advertsSlice = createSlice({
  name: 'adverts',
  initialState,

  reducers: {},
  extraReducers: builder => {
    builder.addCase(
      createAdvertThunk.fulfilled,
      (state, { payload }: PayloadAction<AdvertResponse>) => {}
    );
    builder.addCase(createAdvertThunk.pending, state => {});
    builder.addCase(
      createAdvertThunk.rejected,
      (state, { payload }: PayloadAction<string | undefined>) => {}
    );
  },
});

export const selectUsers = (state: RootState) => state.adverts;

export default advertsSlice.reducer;
