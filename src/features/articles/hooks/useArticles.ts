"use client";

import { UpdateArticleResBody } from "@/app/api/articles/[articleId]/route";

interface CreateArticleReq {
  title: string;
  content: string;
  perex: string;
  imageId: string;
}

interface UpdateArticleReq {
  articleId: string;
  title?: string;
  content?: string;
  perex?: string;
  imageId?: string;
}

export function useArticles() {
  const createArticle = async (input: CreateArticleReq) => {
    const res = await fetch("/api/articles", {
      method: "POST",
      body: JSON.stringify({
        title: input.title,
        content: input.content,
        perex: input.perex,
        imageId: input.imageId,
      }),
    });

    if (!res.ok) {
      throw new Error(res.statusText);
    }
    return res.json() as Promise<{ articleId: string }>;
  };

  const updateArticle = async (input: UpdateArticleReq) => {
    const res = await fetch(`/api/articles/${input.articleId}`, {
      method: "PATCH",
      body: JSON.stringify({
        title: input.title,
        content: input.content,
        perex: input.perex,
        imageId: input.imageId,
      }),
    });
    if (!res.ok) {
      throw new Error(res.statusText);
    }

    return res.json() as Promise<UpdateArticleResBody>;
  };

  const deleteArticle = async (id: string) => {
    const res = await fetch(`/api/articles/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      throw new Error(res.statusText);
    }
    return res;
  };

  return { createArticle, updateArticle, deleteArticle };
}
