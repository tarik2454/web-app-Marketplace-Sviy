import { ThunkAction, UnknownAction, configureStore } from '@reduxjs/toolkit';
import usersReducer from './users/usersSlice';
import authReducer from './auth/authSlice';

import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import createWebStorage from 'redux-persist/es/storage/createWebStorage';

export function createPersistStore() {
  const isServer = typeof window === 'undefined';
  if (isServer) {
    return {
      getItem() {
        return Promise.resolve(null);
      },
      setItem() {
        return Promise.resolve();
      },
      removeItem() {
        return Promise.resolve();
      },
    };
  }
  return createWebStorage('local');
}

const storage =
  typeof window !== 'undefined'
    ? createWebStorage('local')
    : createPersistStore();

const usersPersistConfig = {
  key: 'users',
  version: 1,
  storage,
  whitelist: ['value'],
};

const authPersistConfig = {
  key: 'auth',
  version: 1,
  storage,
  whitelist: ['authState'],
};

const persistedUsersReducer = persistReducer(usersPersistConfig, usersReducer);
const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

export const store = configureStore({
  reducer: {
    users: persistedUsersReducer,
    auth: persistedAuthReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  UnknownAction
>;
