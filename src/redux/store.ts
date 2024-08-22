import { combineReducers, configureStore } from '@reduxjs/toolkit';
import advertsReducer from './adverts/advertsSlice';
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

const createNoopStorage = () => {
  return {
    getItem() {
      return Promise.resolve(null);
    },
    setItem(_key: string, value: number) {
      return Promise.resolve(value);
    },
    removeItem() {
      return Promise.resolve();
    },
  };
};

const storage =
  typeof window !== 'undefined'
    ? createWebStorage('local')
    : createNoopStorage();

const authPersistConfig = {
  key: 'auth',
  version: 1,
  storage: storage,
  whitelist: ['full_name', 'email', 'phone', 'address'],
};

const advertsPersistConfig = {
  key: 'adverts',
  version: 1,
  storage: storage,
  whitelist: [''],
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);
const persistedUsersReducer = persistReducer(
  advertsPersistConfig,
  advertsReducer
);

const rootReducer = combineReducers({
  auth: persistedAuthReducer,
  adverts: persistedUsersReducer,
});

export const store = configureStore({
  reducer: rootReducer,
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
