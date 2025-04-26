import { getArticles } from "@/features/articles/lib/server/getArticles.server";
import { Heading } from "@/ui/Heading";
import styles from "./styles.module.scss";
import { ArticleBox } from "@/features/articles/components/RelatedArticlesListing/parts/ArticleBox";

interface Props {
  excludeArticleId: string;
}

export async function RelatedArticlesListing(props: Props) {
  const articles = (await getArticles()).filter(
    (apiArticle) => apiArticle.articleId !== props.excludeArticleId,
  );

  return (
    <aside className={styles.wrapper}>
      <Heading headingLevelStyle={4} headingLevel={4}>
        Related articles
      </Heading>
      <ul className={styles.list}>
        {articles.map((article, index) => {
          return (
            <li key={index}>
              <ArticleBox title={article.title} perex={article.perex} />
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
