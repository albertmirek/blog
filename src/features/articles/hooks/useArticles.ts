"use client";

import { ApiArticleDetail } from "@/features/articles/lib/server/getArticleDetail.server";
import { useEffect } from "react";
import { deleteArticle } from "@/features/articles/lib/client/deleteArticle.client";
import {
  PropertyType,
  sortArticlesByProperty,
} from "@/features/articles/lib/sortArticlesByProperty";
import { useStore } from "@/store/store";

export function useArticles(initialArticles: ApiArticleDetail[]) {
  const myArticles = useStore((state) => state.myArticles);
  const { setMyArticlesAction, deleteArticleAction } = useStore(
    (state) => state.articleActions,
  );

  useEffect(() => {
    setMyArticlesAction(initialArticles);
  }, [initialArticles, setMyArticlesAction]);

  const handleArticleDelete = async (id: string) => {
    await deleteArticle(id).then((res) => {
      if (res.ok) {
        deleteArticleAction(id);
        alert("article deleted");
      }
    });
  };

  const handleOrderBy = (propertyType: PropertyType, order: "asc" | "desc") => {
    const sortedArticles = sortArticlesByProperty(
      myArticles,
      propertyType,
      order,
    );
    setMyArticlesAction(sortedArticles);
  };

  return { myArticles, handleArticleDelete, handleOrderBy };
}
