import config from "@/config";
import {
  ApiArticle,
  Article,
} from "@/features/articles/lib/getArticles.server";

export interface ApiComment {
  articleId: string;
  author: string;
  content: string;
  commentId: string;
  postedAt: string;
  score: number;
}
export type Comment = Omit<ApiComment, "postedAt"> & {
  postedAt: Date;
};

export interface ApiArticleDetail extends ApiArticle {
  comments: ApiComment[];
}

export type ArticleDetail = Article & {
  comments: Comment[];
};

export const getArticleDetail = async (id: string): Promise<ArticleDetail> => {
  const res = await fetch(`${config.apiEndpoint}/articles/${id}`, {
    method: "GET",
    headers: {
      "X-API-KEY": config.apiKey,
    },
  });

  const apiRes = (await res.json()) as ApiArticleDetail;

  return {
    ...apiRes,
    createdAt: new Date(apiRes.createdAt),
    lastUpdatedAt: new Date(apiRes.lastUpdatedAt),
    comments: apiRes.comments
      .map((comment) => {
        return {
          ...comment,
          postedAt: new Date(comment.postedAt),
        };
      })
      .sort((a, b) => b.postedAt.getTime() - a.postedAt.getTime()),
  };
};
