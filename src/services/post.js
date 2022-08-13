import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postsApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getPost: builder.query({
      query: (name) => `posts/1`,
    }),
    createPost: builder.mutation({
      query: ({ title, postBody, userId }) => ({
        url: `posts`,
        method: "POST",
        body: { title, body: postBody, userId },
      }),
    }),
    upatePost: builder.mutation({
      query: ({ title, postBody, userId }) => ({
        url: `posts`,
        method: "PUT",
        body: { title, body: postBody, userId },
      }),
    }),
    deletePost: builder.mutation({
      query({ id }) {
        return {
          url: `posts/${id}`,
          method: "DELETE",
        };
      },
    }),
  }),
});

export const { useGetPostQuery, useCreatePostMutation, useDeletePostMutation } =
  postsApi;
