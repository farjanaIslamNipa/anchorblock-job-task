import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: []
};

const getUsers = createAsyncThunk("users/getUsers", async () => {
  const res = await fetch("https://reqres.in/api/users?page=2")

  const data = res.json();

  return data.data;
});
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {

  }
});

export default userSlice.reducer