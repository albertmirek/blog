"use server";
import config from "@/config";

export interface ApiArticle {
  articleId: string;
  title: string;
  perex: string;
  imageId: string;
  content: string;
  createdAt: string;
  lastUpdatedAt: string;
}

interface ApiResponse {
  pagination: {
    offset: number;
    limit: number;
    total: number;
  };
  items: ApiArticle[];
}

export type Article = Omit<ApiArticle, "createdAt" | "lastUpdatedAt"> & {
  createdAt: Date;
  lastUpdatedAt: Date;
};

export const getArticles = async () => {
  const res = await fetch(config.apiEndpoint + "/articles", {
    method: "GET",
    headers: {
      "X-API-KEY": config.apiKey,
    },
  });

  const apiRes = (await res.json()) as ApiResponse;
  return apiRes.items
    .map((article: ApiArticle): Article => {
      const createdAt = new Date(article.createdAt);
      const updatedAt = new Date(article.lastUpdatedAt);

      return {
        ...article,
        createdAt: createdAt,
        lastUpdatedAt: updatedAt,
      };
    })
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
};
