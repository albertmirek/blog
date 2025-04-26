import { configureStore } from "@reduxjs/toolkit";
import { default as articleReducer } from "@/features/articles/store/slice";
import { default as commentsReducer } from "@/features/comments/store/slice";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: {
    articles: articleReducer,
    comments: commentsReducer,
  },
});
