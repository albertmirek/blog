"use client";

export const deleteArticle = async (id: string) => {
  const res = await fetch(`/api/articles/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return res;
};
