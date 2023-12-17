import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://reqres.in' }),
  endpoints:(builder) => ({
    signInUser: builder.mutation({
      query: (body) => {
        return {
          url: "/api/login",
          method: "post",
          body,
        };
      },
    }),

    signupUser: builder.mutation({
      query: (body) => {
        return {
          url: "/api/register",
          method: "post",
          body,
        };
      },
    }),
  }),
})


export const { useSignInUserMutation, useSignupUserMutation } = authApi