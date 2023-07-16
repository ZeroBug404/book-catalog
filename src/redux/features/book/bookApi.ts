import { api } from "../../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // getBooks: builder.query<any, { searchData: string }>({
    //     query: () => `/books`,
    // }),
    getBooks: builder.query<any, { searchData: string }>({
        query: ({ searchData }) => `/books?searchTerm=${searchData}`,
    }),
  }),
});

export const { useGetBooksQuery } = bookApi;
