import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://reqres.in'
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/api/users?page=2"
    })
  })
})

export const { useGetUsersQuery } = userApi;