import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { createAdvertThunk,  
  getAdvertListThunk, 
  getAdvertThunk, 
  updateAdvertThunk, 
  deleteAdvertThunk  } from './operations';
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
    builder
    .addCase(
      createAdvertThunk.fulfilled,
      (state, { payload }: PayloadAction<AdvertResponse>) => {
        state.entities.push(payload);
        state.isLoading = false;
        state.error = null;
      }
    )
    .addCase(createAdvertThunk.pending, state => {
      state.isLoading = true;
    })
    .addCase(
      createAdvertThunk.rejected,
      (state, { payload }: PayloadAction<string | undefined>) => {
        state.isLoading = false;
        state.error = payload || 'Не вдалося створити оголошення';
      }
    )
  
    .addCase(getAdvertListThunk.fulfilled, (state, { payload }: PayloadAction<AdvertResponse[]>) => {
      state.entities = payload;
      state.isLoading = false;
      state.error = null;
    })
    .addCase(getAdvertListThunk.pending, state => {
      state.isLoading = true;
    })
    .addCase(getAdvertListThunk.rejected, (state, { payload }: PayloadAction<string | undefined>) => {
      state.isLoading = false;
      state.error = payload || 'Не вдалося створити оголошення';
    })

    .addCase(getAdvertThunk.fulfilled, (state, { payload }: PayloadAction<AdvertResponse>) => {
      const index = state.entities.findIndex(ad => ad.id === payload.id);
      if (index !== -1) {
        state.entities[index] = payload;
      } else {
        state.entities.push(payload);
      }
      state.isLoading = false;
      state.error = null;
    })
    .addCase(getAdvertThunk.pending, state => {
      state.isLoading = true;
    })
    .addCase(getAdvertThunk.rejected, (state, { payload }: PayloadAction<string | undefined>) => {
      state.isLoading = false;
      state.error = payload || 'Не вдалося створити оголошення';
    })

    .addCase(updateAdvertThunk.fulfilled, (state, { payload }: PayloadAction<AdvertResponse>) => {
      const index = state.entities.findIndex(ad => ad.id === payload.id);
      if (index !== -1) {
        state.entities[index] = payload;
      }
      state.isLoading = false;
      state.error = null;
    })
    .addCase(updateAdvertThunk.pending, state => {
      state.isLoading = true;
    })
    .addCase(updateAdvertThunk.rejected, (state, { payload }: PayloadAction<string | undefined>) => {
      state.isLoading = false;
      state.error = payload || 'Не вдалося створити оголошення';
    })

    .addCase(deleteAdvertThunk.fulfilled, (state, { payload }: PayloadAction<number>) => {
      state.entities = state.entities.filter(ad => ad.id !== payload);
      state.isLoading = false;
      state.error = null;
    })
    .addCase(deleteAdvertThunk.pending, state => {
      state.isLoading = true;
    })
    .addCase(deleteAdvertThunk.rejected, (state, { payload }: PayloadAction<string | undefined>) => {
      state.isLoading = false;
      state.error = payload || 'Не вдалося створити оголошення';
    });
  },
});

export const selectUsers = (state: RootState) => state.adverts;

export default advertsSlice.reducer;
