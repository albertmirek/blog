import { create } from "zustand";
import {
  ApiArticleDetail,
  ApiComment,
} from "@/features/articles/lib/server/getArticleDetail.server";

type State = {
  myArticles: ApiArticleDetail[];
  comments: ApiComment[];
};

type Actions = {
  //   articles
  setMyArticlesAction: (articles: ApiArticleDetail[]) => void;
  deleteArticleAction: (articleIdToDelete: string) => void;

  //   comments
  setComments: (comments: ApiComment[]) => void;
  addComment: (comments: ApiComment) => void;
  upvoteComment: (commentId: string) => void;
  downvoteComment: (commentId: string) => void;
};

export const useStore = create<State & Actions>((set) => ({
  myArticles: [],
  /*setMyArticlesAction: (
        state,
        action: PayloadAction<SetArticlesActionPayload>,
    ) => {
        state.myArticles = action.payload.articles;
    },
    deleteArticleAction: (state, action: PayloadAction<string>) => {
        state.myArticles = state.myArticles.filter(
            (article) => article.articleId !== action.payload,
        );
    },*/
  setMyArticlesAction: (articles) => set(() => ({ myArticles: articles })),
  deleteArticleAction: (articleIdToDelete) =>
    set((state) => ({
      myArticles: state.myArticles.filter(
        (article: ApiArticleDetail) => article.articleId !== articleIdToDelete,
      ),
    })),

  comments: [],
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

  /*  setComments: (state, action: PayloadAction<SetCommentsActionPayload>) => {
    state.comments = action.payload.comments;
  },
  addComment: (state, action: PayloadAction<AddCommentsActionPayload>) => {
    state.comments = [action.payload.comment, ...state.comments];
  },

  upvoteComment: (state, action: PayloadAction<CommentVoteActionPayload>) => {
    state.comments = state.comments.map((comment: ApiComment) => {
      if (comment.commentId === action.payload.commentId) {
        return {
          ...comment,
          score: comment.score + 1,
        };
      }
      return comment;
    });
  },

  downvoteComment: (
      state,
      action: PayloadAction<CommentVoteActionPayload>,
  ) => {
    state.comments = state.comments.map((comment: ApiComment) => {
      if (comment.commentId === action.payload.commentId) {
        return {
          ...comment,
          score: comment.score - 1,
        };
      }
      return comment;
    });
  },*/
}));
