import { configureStore } from "@reduxjs/toolkit";
import { postsApi } from "../services/post";
export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
  },
});
