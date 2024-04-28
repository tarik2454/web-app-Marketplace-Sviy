import { ThunkAction, UnknownAction, configureStore } from '@reduxjs/toolkit';
import usersReducer from './users/usersSlice';
import { authReducer } from './authSlice';

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

const persistConfigUser = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['value'],
};

const authPersistConfig = {
  key: 'auth',
  storage: storage,
  whitelist: ['authState'],
};

const persistedUsersReducer = persistReducer(persistConfigUser, usersReducer);
const persistedReducer = persistReducer(authPersistConfig, authReducer);

export const store = configureStore({
  reducer: {
    users: persistedUsersReducer,
    auth: persistedReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Infer the return type of `makeStore`
// export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  UnknownAction
>;
