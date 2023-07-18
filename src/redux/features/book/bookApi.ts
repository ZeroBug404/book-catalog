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
      providesTags: ['reviews'],
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
    updateBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `/books/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
    updateBookReview: builder.mutation({
      query: ({ id, data }) => ({
        url: `/books/post-reviews/${id}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ['reviews'],
    }),
    updateFeature: builder.mutation({
      query: ({ id, data }) => ({
        url: `/books/feature-update/${id}`,
        method: "PATCH",
        body: data,
      }),
      // invalidatesTags: ['reviews'],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetLatestBooksQuery,
  useGetSingleBookQuery,
  useAddNewBookMutation,
  useDeleteBookMutation,
  useUpdateBookMutation,
  useUpdateBookReviewMutation,
  useUpdateFeatureMutation
} = bookApi;
