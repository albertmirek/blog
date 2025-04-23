import { Header } from "@/components/Header";
import { Heading } from "../../../../ui/Heading";
import { ArticleListing } from "@/features/articles/components/ArticleListing";
import { withAuth } from "@/features/auth/hoc/withAuth";
import { DefaultScreenWrapper } from "@/ui/DefaultScreenWrapper";
import { getArticlesWithComments } from "@/features/articles/lib/getArticlesWithComments";

async function Page() {
  const articlesWithComments = await getArticlesWithComments();

  return (
    <>
      <Header />
      <main>
        <DefaultScreenWrapper>
          <Heading headingLevel={1} headingLevelStyle={1}>
            Recent articles
          </Heading>
          <ArticleListing items={articlesWithComments} />
        </DefaultScreenWrapper>
      </main>
    </>
  );
}

export const DashboardPage = withAuth(Page);
