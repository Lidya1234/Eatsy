import { configureStore } from '@reduxjs/toolkit';
import foodReducer from './foodSlice';
import userReducer from './userSlice';
import orderReducer from './cartSlice';

const store = configureStore({
  reducer: {
    food: foodReducer,
    user: userReducer,
    order: orderReducer,
  },
});

export default store;
