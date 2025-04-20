import { ArticleBigCard } from "@/features/articles/components/ArticleBigCard";
import { ArticleDetail } from "@/features/articles/lib/getArticleDetail.server";

interface ArticleListingProps {
  items: ArticleDetail[];
}
export const ArticleListing = (props: ArticleListingProps) => {
  return (
    <ul>
      {props.items.map((item) => {
        return (
          <li key={item.articleId}>
            <ArticleBigCard {...item} />;
          </li>
        );
      })}
    </ul>
  );
};
