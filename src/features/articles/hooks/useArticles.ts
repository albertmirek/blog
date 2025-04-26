"use client";

import { ApiArticleDetail } from "@/features/articles/lib/server/getArticleDetail.server";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import {
  deleteArticleAction,
  setMyArticlesAction,
} from "@/features/articles/store/slice";
import { deleteArticle } from "@/features/articles/lib/client/deleteArticle.client";
import {
  PropertyType,
  sortArticlesByProperty,
} from "@/features/articles/lib/sortArticlesByProperty";

export function useArticles(initialArticles: ApiArticleDetail[]) {
  const dispatch = useDispatch();
  const myArticles = useSelector(
    (state: RootState) => state.articles.myArticles,
  );

  console.log("my", myArticles);
  useEffect(() => {
    dispatch(setMyArticlesAction({ articles: initialArticles }));
  }, [initialArticles, dispatch]);

  const handleArticleDelete = async (id: string) => {
    await deleteArticle(id).then((res) => {
      if (res.ok) {
        dispatch(deleteArticleAction(id));
        alert("article deleted");
      }
    });
  };

  const handleOrderBy = (propertyType: PropertyType, order: "asc" | "desc") => {
    dispatch(
      setMyArticlesAction({
        articles: sortArticlesByProperty(myArticles, propertyType, order),
      }),
    );
  };

  return { myArticles, handleArticleDelete, handleOrderBy };
}
