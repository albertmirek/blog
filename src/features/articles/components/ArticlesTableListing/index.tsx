"use client";
import { Routes } from "@/consts/routes";
import React from "react";
import { ApiArticleDetail } from "@/features/articles/lib/server/getArticleDetail.server";
import styles from "./styles.module.scss";
import { TableActionIcon } from "@/features/articles/components/ArticlesTableListing/parts/Icon";
import { redirect } from "next/navigation";
import { useArticles } from "@/features/articles/hooks/useArticles";
import { OrderIcon } from "@/features/articles/components/ArticlesTableListing/parts/OrderIcon";

interface Props {
  articles: ApiArticleDetail[];
}
export const ArticlesTableListing = (props: Props) => {
  const { myArticles, handleArticleDelete, handleOrderBy } = useArticles(
    props.articles,
  );
  return (
    <table className={styles.table}>
      <thead className={styles.tablHead}>
        <tr>
          <th className={styles.checkBox}>
            <input type="checkbox" />
          </th>
          <th className={styles.title}>
            <div className={styles.textWithIconWrap}>
              Article title
              <span>
                <OrderIcon type={"title"} onClick={handleOrderBy} />
              </span>
            </div>
          </th>
          <th className={styles.perex}>
            <div className={styles.textWithIconWrap}>
              Perex
              <span>
                <OrderIcon type={"perex"} onClick={handleOrderBy} />
              </span>
            </div>
          </th>
          <th className={styles.author}>Author</th>
          <th className={styles.comments}># of comments</th>
          <th className={styles.actions}>Actions</th>
        </tr>
      </thead>
      <tbody className={styles.tableBody}>
        {myArticles.map((article, index) => (
          <tr key={index}>
            <td className={styles.checkBox}>
              <input type="checkbox" />
            </td>
            <td className={styles.title}>
              <span>{article.title}</span>
            </td>
            <td className={styles.perex}>
              <span>{article.perex}</span>
            </td>
            <td className={styles.author}>
              <span>Elisabeth Strain</span>
            </td>
            <td className={styles.comments}>
              <span>{article.comments.length}</span>
            </td>
            <td className={styles.actions}>
              <TableActionIcon
                icon={"edit"}
                onClick={() => redirect(Routes.EDIT_ARTICLE(article.articleId))}
              />
              <TableActionIcon
                icon={"delete"}
                onClick={() => handleArticleDelete(article.articleId)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
