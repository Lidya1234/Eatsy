import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import axios from 'axios';

const initialState = {
  user: null,
  status: null,
};

const logUserIn = createAsyncThunk('users/logUserIn',
  async (user) => {
    try {
      const url = new URL('http://localhost:3000/login');
      url.search = new URLSearchParams(user).toString();
      const { data } = await axios.get(url);
      console.log(data);
      return data;
    } catch {
      toast.error('Server doesn\'t respond', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return null;
    }
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

export { logUserIn, signUserIn };

export default userSlice.reducer;
