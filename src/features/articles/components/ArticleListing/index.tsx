import { ArticleDetail } from "@/features/articles/lib/getArticleDetail.server";
import { ArticleBigCard } from "@/features/articles/components/ArticleListing/parts/ArticleBigCard";
import styles from "./styles.module.scss";
interface ArticleListingProps {
  items: ArticleDetail[];
}
export const ArticleListing = (props: ArticleListingProps) => {
  return (
    <ul className={styles.list}>
      {props.items.map((item) => {
        return (
          <li key={item.articleId}>
            <ArticleBigCard {...item} />
          </li>
        );
      })}
    </ul>
  );
};
