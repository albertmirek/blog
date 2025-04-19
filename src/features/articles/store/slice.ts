import { Article } from "@/app/api/articles/route";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ArticleState {
  allArticles: Article[];
  myArticles: Article[];
}

const initialState: ArticleState = {
  allArticles: [],
  myArticles: [],
};

/*Action Payloads*/
interface SetArticlesActionPayload {
  articles: Article[];
}

const articleSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    setArticleListing: (
      state,
      action: PayloadAction<SetArticlesActionPayload>,
    ) => {
      state.allArticles = action.payload.articles;
    },
  },
});

export const { setArticleListing } = articleSlice.actions;
export default articleSlice.reducer;
