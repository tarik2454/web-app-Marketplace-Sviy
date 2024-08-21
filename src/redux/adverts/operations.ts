// import { API } from '@/config-api/global-config-api';
// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// // Типы данных для объявления и ответа
// interface Address {
//   city: string;
//   street: string;
//   number: string;
// }

// interface AdvertData {
//   owner: number;
//   category: number;
//   name: string;
//   descr: string;
//   price: string;
//   quantity: number;
//   pickup: boolean;
//   nova_post: boolean;
//   courier: boolean;
//   address: Address;
// }

// // Типы данных ответа от сервера
// interface AdvertResponse extends AdvertData {
//   id: number;
// }

// // Определение типа данных, возвращаемых асинхронным действием
// export const createAdvertThunk = createAsyncThunk<
//   AdvertResponse, // Тип данных, возвращаемых асинхронным действием
//   AdvertData, // Тип параметра асинхронного действия (данные для создания объявления)
//   { rejectValue: string } // Тип дополнительных параметров асинхронного действия
// >('adverts/createAdvert', async (credentials, ThunkAPI) => {
//   try {

//   } catch (error) {

// });
