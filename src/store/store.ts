import { configureStore } from "@reduxjs/toolkit";
import { default as articleReducer } from "@/features/articles/store/slice";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: {
    articles: articleReducer,
  },
});
