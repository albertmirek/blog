"use server";
import { getArticles } from "@/features/articles/lib/server/getArticles.server";
import {
  ArticleDetail,
  getArticleDetail,
} from "@/features/articles/lib/server/getArticleDetail.server";

export const getArticlesWithComments = async (): Promise<ArticleDetail[]> => {
  const articles = await getArticles();
  const articleIds = articles.map((_) => _.articleId);

  return await Promise.all(
    articleIds.map((articleId) => getArticleDetail(articleId)),
  );
};
