import { ApiComment } from "@/features/articles/lib/server/getArticleDetail.server";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CommentsState {
  comments: ApiComment[];
}

const initialState: CommentsState = {
  comments: [],
};

interface SetCommentsActionPayload {
  comments: ApiComment[];
}

interface AddCommentsActionPayload {
  comment: ApiComment;
}

interface CommentVoteActionPayload {
  commentId: string;
}

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    setComments: (state, action: PayloadAction<SetCommentsActionPayload>) => {
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
    },
  },
});

export const { setComments, addComment, upvoteComment, downvoteComment } =
  commentsSlice.actions;
export default commentsSlice.reducer;
