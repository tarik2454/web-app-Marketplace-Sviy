import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  createAdvertThunk,
  getAdvertListThunk,
  getAdvertThunk,
  updateAdvertThunk,
  deleteAdvertThunk,
} from './operations';
import { RootState } from '../store';

// interface Address {
//   city: string;
//   street: string;
//   number: string;
// }

interface AdvertData {
  owner: number;
  category: number;
  name: string;
  descr: string;
  price: string;
  unit: string;
  availability: string;
  location: string;
  delivery_methods: string[];
  delivery_comment: string;
  payment_methods: string[];
  payment_card: string;
  payment_comment: string;
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
      .addCase(createAdvertThunk.fulfilled, (state, { payload }) => {
        state.entities.push(payload);
        console.log(state.entities);
        console.log(state.entities);
        state.isLoading = false;
        state.error = '';
      })
      .addCase(getAdvertListThunk.fulfilled, (state, { payload }) => {
        state.entities = payload;
        console.log(state.entities);
        state.isLoading = false;
        state.error = '';
      })
      .addCase(getAdvertThunk.fulfilled, (state, { payload }) => {
        const index = state.entities.findIndex(ad => ad.id === payload.id);
        if (index !== -1) {
          state.entities[index] = payload;
          console.log(state.entities);
        } else {
          state.entities.push(payload);
        }
        state.isLoading = false;
        state.error = '';
      })
      .addCase(updateAdvertThunk.fulfilled, (state, { payload }) => {
        const index = state.entities.findIndex(ad => ad.id === payload.id);
        if (index !== -1) {
          state.entities[index] = payload;
        }
        state.isLoading = false;
        state.error = '';
      })
      .addCase(deleteAdvertThunk.fulfilled, (state, { payload }) => {
        state.entities = state.entities.filter(ad => ad.id !== payload);
        state.isLoading = false;
        state.error = '';
      })
      .addMatcher(
        isAnyOf(
          createAdvertThunk.pending,
          getAdvertListThunk.pending,
          getAdvertThunk.pending,
          updateAdvertThunk.pending,
          deleteAdvertThunk.pending
        ),
        state => {
          state.isLoading = true;
          state.error = '';
        }
      )
      .addMatcher(
        isAnyOf(
          createAdvertThunk.rejected,
          getAdvertListThunk.rejected,
          getAdvertThunk.rejected,
          updateAdvertThunk.rejected,
          deleteAdvertThunk.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload ?? 'Помилка оновлення даних';
        }
      );
  },
});

export const selectAdverts = (state: RootState) => state.adverts;

export default advertsSlice.reducer;
