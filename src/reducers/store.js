import { configureStore } from '@reduxjs/toolkit';
import foodReducer, { fetchFoodList } from './foodSlice';
import userReducer, { logUserIn } from './userSlice';
import orderReducer, { fetchOrderList, addOrderList } from './cartSlice';

const store = configureStore({
  reducer: {
    food: foodReducer,
    user: userReducer,
    order: orderReducer,
  },
});

const order = {
  customer_id: 1,
  food_id: 1,
};

store.dispatch(fetchFoodList());
store.dispatch(logUserIn({ email: 'admin@email.com', password: 1234 }));
store.dispatch(fetchOrderList());
store.dispatch(addOrderList(order));
export default store;
