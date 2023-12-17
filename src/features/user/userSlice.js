import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  isLoading: false,
  isError: false,
  error: ""
};

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  const res = await fetch("https://reqres.in/api/users?page=2")

  const data = await res.json();

  console.log(data, 'data')

  return data;
});
const userSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    })
    .addCase(getUsers.fulfilled, (state, action) => {
      state.users = action.payload;
      state.isLoading = false;
    })
    .addCase(getUsers.rejected, (state, action) => {
      state.users = [];
      state.isLoading = false;
      state.isError = true;
      state.error = action.error.message;
    })
  }
});

export default userSlice.reducer