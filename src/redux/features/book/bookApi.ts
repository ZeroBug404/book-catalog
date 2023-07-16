import { api } from "../../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query<any, { searchData: string }>({
      query: ({ searchData }) => `/books?searchTerm=${searchData}`,
    }),
    getLatestBooks: builder.query({
      query: () => `/books/get-latest`,
    }),
    getSingleBook: builder.query({
      query: (id) => `/books/${id}`,
    }),
  }),
});

export const { useGetBooksQuery, useGetLatestBooksQuery,useGetSingleBookQuery } = bookApi;
