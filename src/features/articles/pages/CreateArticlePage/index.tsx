import { withAuth } from "@/features/auth/hoc/withAuth";
import { Header } from "@/components/Header";
import { DefaultScreenWrapper } from "@/ui/DefaultScreenWrapper";
import { CreateArticlePageClientBoundary } from "@/features/articles/pages/CreateArticlePage/clientBoundary";

const Page = () => {
  return (
    <>
      <Header />
      <main>
        <DefaultScreenWrapper>
          <CreateArticlePageClientBoundary />
        </DefaultScreenWrapper>
      </main>
    </>
  );
};

export const CreateArticlePage = withAuth(Page);
