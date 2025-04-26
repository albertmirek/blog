"use client";

export interface CreateArticleReq {
  title: string;
  content: string;
  perex: string;
  imageId: string;
}
export const createArticle = async (input: CreateArticleReq) => {
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
