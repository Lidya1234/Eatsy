import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import axios from 'axios';
import { toastDark } from '../toast/toastSetup';

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
      if (data.errors) {
        toast.warning(data.errors[0], toastDark);
        return null;
      }
      return data;
    } catch {
      toast.error('Server does not respond', toastDark);
      return null;
    }
  });

const signUserIn = createAsyncThunk('users/signUserIn',
  async (params) => {
    try {
      const { data } = await axios.post('http://localhost:3000/user', params);
      if (data.errors) {
        toast.warning(data.errors[0], toastDark);
        return null;
      }
      return data;
    } catch {
      toast.error('Server does not respond', toastDark);
      return null;
    }
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
    logout: (state) => {
      state.user = null;
      state.status = null;
    },

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

const { logout } = userSlice.actions;
export { logUserIn, signUserIn, logout };

export default userSlice.reducer;
