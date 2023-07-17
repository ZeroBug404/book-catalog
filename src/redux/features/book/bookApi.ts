/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
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
    addNewBook: builder.mutation({
      query: (data) => ({
        url: `/books/create-book`,
        method: "POST",
        body: data,
      }),
    }),
    deleteBook: builder.mutation({
      query: (bookId) => ({
        url: `/books/${bookId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetLatestBooksQuery,
  useGetSingleBookQuery,
  useAddNewBookMutation,
  useDeleteBookMutation
} = bookApi;
