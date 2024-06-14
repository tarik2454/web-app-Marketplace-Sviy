// import { PayloadAction, createSlice } from '@reduxjs/toolkit';

// import { fetchUsersThunk } from './operations';
// import { RootState } from '../store';

// import { User } from '@/types/interfaces/User';

// interface UsersState {
//   entities: User[];
//   isLoading: boolean;
//   value: number;
// }

// const initialState: UsersState = {
//   entities: [],
//   isLoading: false,
//   value: 10,
// };

// const usersSlice = createSlice({
//   name: 'users',
//   initialState,

//   reducers: {
//     increment: state => {
//       state.value = state.value + 1;
//     },
//     decrement: state => {
//       state.value = state.value - 1;
//     },
//   },
//   extraReducers: builder => {
//     builder.addCase(
//       fetchUsersThunk.fulfilled,
//       (state, action: PayloadAction<User[]>) => {
//         state.isLoading = false;
//         state.entities.push(...action.payload);
//       }
//     );
//     builder.addCase(fetchUsersThunk.pending, (state, action) => {
//       state.isLoading = true;
//     });
//   },
// });

// export const { increment, decrement } = usersSlice.actions;

// export const selectUsers = (state: RootState) => state.users;

// export default usersSlice.reducer;
