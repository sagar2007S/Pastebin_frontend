import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { act } from "react";

/* ---------- Async Thunks ---------- */


// const API_URL = process.env.REACT_APP_API_URL;
const API_URL = import.meta.env.VITE_API_URL;

export const loginUser = createAsyncThunk(
  "user/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await axios.post(`${API_URL}/api/v2/users/login`, credentials, {
        withCredentials: true
      });
      return res.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  "user/current",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${API_URL}/api/v2/users/current-user`, {
        withCredentials: true
      });
      return res.data.data;
    } catch (error) {
      return rejectWithValue(null);
    }
  }
);


export const logoutUser = createAsyncThunk(
  "user/logout",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.post(`${API_URL}/api/v2/users/logout`,{},{
        withCredentials: true
      });
      return res.data.data;
    } catch (error) {
      return rejectWithValue(null);
    }
  }
);

/* ---------- Slice ---------- */

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
     accessToken: null,
  refreshToken: null,
    isAuthenticated: false,
    loading: false,
    error: null
  },
  reducers: {
    clearUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    }
  },
  extraReducers: (builder) => {
    builder
      // LOGIN
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        //state.user = action.payload;
        state.user = action.payload.loggedInUser;      // ✅ USER ONLY
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.isAuthenticated = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // CURRENT USER
      .addCase(getCurrentUser.pending, (state, action)=>{
        state.loading=true;
      })

      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.loading=false
        state.user = action.payload;
        state.isAuthenticated = true;
      })

      .addCase(getCurrentUser.rejected, (state, action) => {
      state.loading = false;
     state.user = null;
     state.isAuthenticated = false;
      })

      //logout

      .addCase(logoutUser.pending, (state, action) =>{
        state.loading=true
      })
      .addCase(logoutUser.fulfilled, (state, action)=>{
        state.loading=false;
        state.user=action.payload
      })
      .addCase(logoutUser.rejected, (state, action)=>{
        state.loading=false;
        state.error=action.payload
      })
  }
});

export const { clearUser } = userSlice.actions;
export default userSlice.reducer;
