import { baseApi } from "../../api/baseApi";

const memberApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllMember: builder.query({
      query: () => {
        return {
          url: `/members/get-all-members`,
          method: "GET",
        };
      },
      providesTags: ["members"],
    }),
    getPaidMember: builder.query({
      query: () => {
        return {
          url: `/members/get-paid-members`,
          method: "GET",
        };
      },
      providesTags: ["members"],
    }),
    getUnpaidMember: builder.query({
      query: () => {
        return {
          url: `/members/get-unpaid-members`,
          method: "GET",
        };
      },
      providesTags: ["members"],
    }),
  }),
});

export const {
  useGetAllMemberQuery,
  useGetPaidMemberQuery,
  useGetUnpaidMemberQuery,
} = memberApi;
