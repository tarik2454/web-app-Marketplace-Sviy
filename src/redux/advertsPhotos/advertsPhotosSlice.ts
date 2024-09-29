import { createSlice } from '@reduxjs/toolkit';
import { createPhotosThunk } from './operations';

interface PhotosState {
  isLoading: boolean;
  error: string | null;
}

const initialState: PhotosState = {
  isLoading: false,
  error: null,
};

const photosSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(createPhotosThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createPhotosThunk.fulfilled, state => {
        state.isLoading = false;
      })
      .addCase(createPhotosThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'Не вдалося завантажити фото';
      });
  },
});

export default photosSlice.reducer;
