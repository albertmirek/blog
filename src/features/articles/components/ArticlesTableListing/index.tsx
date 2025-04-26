"use client";
import { Routes } from "@/consts/routes";
import React from "react";
import { ArticleDetail } from "@/features/articles/lib/server/getArticleDetail.server";
import styles from "./styles.module.scss";
import { TableActionIcon } from "@/features/articles/components/ArticlesTableListing/parts/Icon";
import { redirect } from "next/navigation";

interface Props {
  articles: ArticleDetail[];
}
export const ArticlesTableListing = (props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {};

  return (
    <table className={styles.table}>
      <thead className={styles.tablHead}>
        <tr>
          <th className={styles.checkBox}>
            <input type="checkbox" />
          </th>
          <th className={styles.title}>Article title</th>
          <th className={styles.perex}>Perex</th>
          <th className={styles.author}>Author</th>
          <th className={styles.comments}># of comments</th>
          <th className={styles.actions}>Actions</th>
        </tr>
      </thead>
      <tbody className={styles.tableBody}>
        {props.articles.map((article, index) => (
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
              <TableActionIcon icon={"delete"} onClick={handleDelete} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
