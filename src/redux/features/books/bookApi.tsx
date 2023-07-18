/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { api } from "../../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/books/all-books",
    }),
    getSingleBook: builder.query({
      query: (id: string) => `/books/book/${id}`,
    }),
    addNewBook: builder.mutation({
      query: (data) => ({
        url: "/books/create-new-book",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["book"],
    }),
    deleteBook: builder.mutation({
      query: (id: string) => ({
        url: `/books/book/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["delete"],
    }),
    updateBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `/books/book/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["update"],
    }),
    postComment: builder.mutation({
      query: ({ id, data }) => ({
        url: `/books/review/${id}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["comments"],
    }),
    //   getComment: builder.query({
    //     query: (id) => `/comment/${id}`,
    //     providesTags: ['comments'],
    //   }),
  }),
});

export const {
  useGetBooksQuery,
  useGetSingleBookQuery,
  useAddNewBookMutation,
  useDeleteBookMutation,
  useUpdateBookMutation,
  usePostCommentMutation,
} = bookApi;
