import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  user: null,
  status: null,
};

const logUserIn = createAsyncThunk('users/logUserIn',
  async (user) => {
    const url = new URL('http://localhost:3000/login');
    url.search = new URLSearchParams(user).toString();
    const { data } = await axios.get(url);
    console.log(data);
    return data;
  });

const signUserIn = createAsyncThunk('users/signUserIn',
  async (params) => {
    const { data } = await axios.post('http://localhost:30', params);
    return data;
  });

export const userSlice = createSlice({
  name: 'users',
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
    [logUserIn.pending]: (state) => {
      state.status = 'PENDING';
    },
    [logUserIn.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.status = 'FULFILLED';
    },
    [logUserIn.rejected]: (state) => {
      state.status = 'REJECTED';
    },
    [signUserIn.pending]: (state) => {
      state.status = 'PENDING';
    },
    [signUserIn.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.status = 'FULFILLED';
    },
    [signUserIn.rejected]: (state) => {
      state.status = 'REJECTED';
    },
  },
  /* eslint-enable no-param-reassign */
});

export { logUserIn };

export default userSlice.reducer;
