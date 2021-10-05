import { configureStore } from '@reduxjs/toolkit';
import foodReducer, { fetchFoodList } from './foodSlice';
import userReducer, { logUserIn } from './userSlice';

const store = configureStore({
  reducer: {
    food: foodReducer,
    user: userReducer,
  },
});

store.dispatch(fetchFoodList());
store.dispatch(logUserIn({ email: 'admin@email.com', password: 1234 }));

export default store;
