import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  foodList: [],
  status: null,
};

const fetchFoodList = createAsyncThunk('foods/fetchFoodList',
  async () => {
    const { data } = await axios.get('http://localhost:3000/foods');
    console.log(data);
    return data;
  });

export const foodSlice = createSlice({
  name: 'foods',
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
    [fetchFoodList.pending]: (state) => {
      state.status = 'PENDING';
    },
    [fetchFoodList.fulfilled]: (state, action) => {
      state.foodList = action.payload;
      state.status = 'FULFILLED';
    },
    [fetchFoodList.rejected]: (state) => {
      state.status = 'REJECTED';
    },
  },
  /* eslint-enable no-param-reassign */
});

export { fetchFoodList };

export default foodSlice.reducer;
