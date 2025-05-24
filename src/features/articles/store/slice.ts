import { ApiArticleDetail } from "@/features/articles/lib/server/getArticleDetail.server";
import { StateCreator } from "zustand/vanilla";

type State = {
  myArticles: ApiArticleDetail[];
};

type Actions = {
  setMyArticlesAction: (articles: ApiArticleDetail[]) => void;
  deleteArticleAction: (articleIdToDelete: string) => void;
};

export type ArticleSlice = State & { articleActions: Actions };

export const createArticleSlice: StateCreator<ArticleSlice> = (set) => ({
  myArticles: [],
  articleActions: {
    setMyArticlesAction: (articles) => set(() => ({ myArticles: articles })),
    deleteArticleAction: (articleIdToDelete) =>
      set((state) => ({
        myArticles: state.myArticles.filter(
          (article: ApiArticleDetail) =>
            article.articleId !== articleIdToDelete,
        ),
      })),
  },
});
