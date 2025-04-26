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

export function useArticles(initialArticles: ApiArticleDetail[]) {
  const dispatch = useDispatch();
  const myArticles = useSelector(
    (state: RootState) => state.articles.myArticles,
  );

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

  return { myArticles, handleArticleDelete };
}
