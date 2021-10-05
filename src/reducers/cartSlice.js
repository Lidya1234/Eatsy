import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  cartList: [],
  status: null,
};

const fetchOrderList = createAsyncThunk('orders/fetchOrderList',
  async () => {
    const { data } = await axios.get('http://localhost:3000/orders');
    console.log(data);
    return data;
  });
const addOrderList = createAsyncThunk('orders/addOrderList',
  async (order) => {
    const { data } = await axios.post('http://localhost:3000/orders', { order });
    console.log(data);
    return data;
  });

export const cartSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    /* eslint-disable no-param-reassign */
    // increment: (state) => {
    //   state.value += 1;
    // },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
  extraReducers: {
    [fetchOrderList.pending]: (state) => {
      state.status = 'PENDING';
    },
    [fetchOrderList.fulfilled]: (state, action) => {
      state.foodList = action.payload;
      state.status = 'FULFILLED';
    },
    [fetchOrderList.rejected]: (state) => {
      state.status = 'REJECTED';
    },
    [addOrderList.pending]: (state) => {
      state.status = 'PENDING';
    },
    [addOrderList.fulfilled]: (state, action) => {
      state.foodList = action.payload;
      state.status = 'FULFILLED';
    },
    [addOrderList.rejected]: (state) => {
      state.status = 'REJECTED';
    },
  },
  /* eslint-enable no-param-reassign */
});

export { fetchOrderList, addOrderList };

export default cartSlice.reducer;
