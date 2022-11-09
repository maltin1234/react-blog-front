// Need to use the React-specific entry point to import createApi
import { current } from '@reduxjs/toolkit'
import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/api/v1/' }),
  endpoints: (builder) => ({
    tagTypes: ['Post'],
    getPosts: builder.query({
      query: (page = 1) => `posts/pagination?page=${page}`,
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      transformResponse: response => ({
      totalPages: response.totalPages,
      posts: response.posts,
      currentPage: response.currentPage
      }),
      providesTags: ['Post'],

  }),
    getPost: builder.query({
      query: postId => `/posts/${postId}`,
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }),
    addNewPost: builder.mutation({
        query: initialPost => ({
          url: '/posts',
          method: 'POST',
          headers: {
            "Content-Type":"application/json ",
          },
          body:  JSON.stringify(initialPost),
   
         
        }),
        invalidatesTags: ['Post']
      }),
      editPost: builder.mutation({
        query: post => ({
          url: `/posts/${post.id}`,
          method: 'PATCH',
          body: post
        })
      })
  }),

})



// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPostsQuery, useAddNewPostMutation, useGetPostQuery } = postApi