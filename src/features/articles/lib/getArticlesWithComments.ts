import { getArticles } from "@/features/articles/lib/getArticles.server";
import {
  ArticleDetail,
  getArticleDetail,
} from "@/features/articles/lib/getArticleDetail.server";

export const getArticlesWithComments = async (): Promise<ArticleDetail[]> => {
  const articles = await getArticles();
  const articleIds = articles.map((_) => _.articleId);

  return await Promise.all(
    articleIds.map((articleId) => getArticleDetail(articleId)),
  );
};
