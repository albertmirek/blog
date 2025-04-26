import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ApiArticleDetail } from "@/features/articles/lib/server/getArticleDetail.server";

interface ArticleState {
  myArticles: ApiArticleDetail[];
}

const initialState: ArticleState = {
  myArticles: [],
};

interface SetArticlesActionPayload {
  articles: ApiArticleDetail[];
}

const articleSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    setMyArticlesAction: (
      state,
      action: PayloadAction<SetArticlesActionPayload>,
    ) => {
      state.myArticles = action.payload.articles;
    },
    deleteArticleAction: (state, action: PayloadAction<string>) => {
      state.myArticles = state.myArticles.filter(
        (article) => article.articleId !== action.payload,
      );
    },
  },
});

export const { setMyArticlesAction, deleteArticleAction } =
  articleSlice.actions;
export default articleSlice.reducer;
