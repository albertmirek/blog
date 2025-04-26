import { Routes } from "@/consts/routes";
import React from "react";
import { ArticleDetail } from "@/features/articles/lib/getArticleDetail.server";
import styles from "./styles.module.scss";

interface Props {
  articles: ArticleDetail[];
}
export const ArticlesTableListing = (props: Props) => {
  return (
    <table className={styles.table}>
      <thead>
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
      <tbody>
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
              <a
                href={Routes.EDIT_ARTICLE(article.articleId)}
                className={styles.iconButton}
              >
                ✏️️
              </a>
              <button className={styles.iconButton}>🗑️</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
