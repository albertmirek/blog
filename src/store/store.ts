import { create } from "zustand";
import {
  ArticleSlice,
  createArticleSlice,
} from "@/features/articles/store/slice";
import {
  CommentsSlice,
  createCommentsSlice,
} from "@/features/comments/store/slice";

export type RootState = ArticleSlice & CommentsSlice;

export const useStore = create<RootState>()((...a) => ({
  ...createArticleSlice(...a),
  ...createCommentsSlice(...a),
}));
