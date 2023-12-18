import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  isLoading: false,
  isError: false,
  error: "",
  usersPerPage: 6,
  currentPage: 1,
};

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  const res = await fetch("https://reqres.in/api/users")

  const data = await res.json();

  return data;
});




const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    onNavigateNext: (state) => {
      state.currentPage++;
    },
    onNavigatePrev: (state) => {
      state.currentPage--;
    },
    onChangeToPerPage: (state, action) => {
      state.usersPerPage = action.payload;
    },
    onClickCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
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

export const userActions = userSlice.actions

export default userSlice.reducer