import { getArticles } from "@/features/articles/lib/getArticles.server";
import { getArticleDetail } from "@/features/articles/lib/getArticleDetail.server";

export const getArticlesWithComments = async () => {
  const articles = await getArticles();
  const articleIds = articles.map((_) => _.articleId);

  return await Promise.all(
    articleIds.map((articleId) => getArticleDetail(articleId)),
  );
};
