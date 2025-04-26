import { ArticleBigCard } from "@/features/articles/components/ArticleListing/parts/ArticleBigCard";
import styles from "./styles.module.scss";
import { getArticlesWithComments } from "@/features/articles/lib/server/getArticlesWithComments";

export const ArticleListing = async () => {
  const articlesWithComments = await getArticlesWithComments();
  return (
    <ul className={styles.list}>
      {articlesWithComments.map((item) => {
        return (
          <li key={item.articleId}>
            <ArticleBigCard {...item} />
          </li>
        );
      })}
    </ul>
  );
};
