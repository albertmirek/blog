import { ApiArticleDetail } from "@/features/articles/lib/server/getArticleDetail.server";

export type PropertyType = "title" | "perex";
export const sortArticlesByProperty = (
  articles: ApiArticleDetail[],
  propertyType: PropertyType,
  order: "asc" | "desc",
) => {
  return [...articles].sort((a, b) => {
    const stringA = String(a[propertyType]).toLowerCase();
    const stringB = String(b[propertyType]).toLowerCase();

    const comparison = stringA.localeCompare(stringB); // -1 if A should come first

    return order === "asc" ? comparison : -comparison;
  });
};
