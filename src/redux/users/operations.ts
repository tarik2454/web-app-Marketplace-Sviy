// import { API } from '@/config/globalConfig';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// import { User } from '@/types/interfaces/User';

// // Определение типа данных, возвращаемых асинхронным действием
// export const fetchUsersThunk = createAsyncThunk<
//   User[], // Тип данных, возвращаемых асинхронным действием
//   void, // Тип параметра асинхронного действия (в данном случае отсутствует)
//   { rejectValue: string } // Тип дополнительных параметров асинхронного действия
// >('users/getAllUsers', async (_, ThunkAPI) => {
//   try {
//     const response = await API.get('users?_limit=5');
//     return response.data;
//   } catch (error: any) {
//     return ThunkAPI.rejectWithValue(error.message);
//   }
// });
