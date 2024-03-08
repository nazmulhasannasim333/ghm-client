import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/users/login-user",
        method: "POST",
        body: userInfo,
      }),
    }),
    getAllUser: builder.query({
      query: () => ({
        url: "/users/get-all-user",
        method: "GET",
      }),
    }),
  }),
});

export const { useLoginMutation, useGetAllUserQuery } = authApi;
