import { ApiComment } from "@/features/articles/lib/server/getArticleDetail.server";
import { StateCreator } from "zustand/vanilla";

type State = {
  comments: ApiComment[];
};

type Actions = {
  setComments: (comments: ApiComment[]) => void;
  addComment: (comments: ApiComment) => void;
  upvoteComment: (commentId: string) => void;
  downvoteComment: (commentId: string) => void;
};

export type CommentsSlice = State & { commentsActions: Actions };

export const createCommentsSlice: StateCreator<CommentsSlice> = (set) => ({
  comments: [],
  commentsActions: {
    setComments: (comments) => set(() => ({ comments: comments })),
    addComment: (comment) =>
      set((state) => ({ comments: [comment, ...state.comments] })),
    upvoteComment: (commentId) =>
      set((state) => ({
        comments: state.comments.map((comment) => {
          if (comment.commentId === commentId) {
            return {
              ...comment,
              score: comment.score + 1,
            };
          }
          return comment;
        }),
      })),
    downvoteComment: (commentId) =>
      set((state) => ({
        comments: state.comments.map((comment) => {
          if (comment.commentId === commentId) {
            return {
              ...comment,
              score: comment.score - 1,
            };
          }
          return comment;
        }),
      })),
  },
});
