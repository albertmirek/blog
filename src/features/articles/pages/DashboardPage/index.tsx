import { Header } from "@/components/Header";
import { Heading } from "../../../../ui/Heading";
import styles from "./styles.module.scss";
import { ArticleListing } from "@/features/articles/components/ArticleListing";
import { getArticles } from "@/features/articles/lib/getArticles.server";
import { getArticleDetail } from "@/features/articles/lib/getArticleDetail.server";
import { withAuth } from "@/features/auth/hoc/withAuth";

async function Page() {
  const articles = await getArticles();
  const articleIds = articles.map((_) => _.articleId);

  const articlesWithComments = await Promise.all(
    articleIds.map((articleId) => getArticleDetail(articleId)),
  );

  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <Heading headingLevel={1} headingLevelStyle={1}>
          Recent articles
        </Heading>
        <ArticleListing items={articlesWithComments} />
      </main>
    </>
  );
}

export const DashboardPage = withAuth(Page);
