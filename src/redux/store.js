import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { locationSlice } from './location/locSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['city'],
};

const persistedReducer = persistReducer(persistConfig, locationSlice.reducer);

export const store = configureStore({
  reducer: {
    location: persistedReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
