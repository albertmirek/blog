"use client";

import { UpdateArticleResBody } from "@/app/api/articles/[articleId]/route";

export interface UpdateArticleReq {
  articleId: string;
  title?: string;
  content?: string;
  perex?: string;
  imageId?: string;
}
export const updateArticle = async (input: UpdateArticleReq) => {
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
