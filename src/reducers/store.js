import { configureStore } from '@reduxjs/toolkit';
import foodReducer, { fetchFoodList } from './foodSlice';

const store = configureStore({
  reducer: {
    food: foodReducer,
  },
});

store.dispatch(fetchFoodList());

export default store;
