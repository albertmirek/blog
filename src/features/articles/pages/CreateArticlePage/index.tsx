import { withAuth } from "@/features/auth/hoc/withAuth";
import { Header } from "@/ui/Header";
import { DefaultScreenWrapper } from "@/ui/DefaultScreenWrapper";
import { CreateArticlePageClientBoundary } from "@/features/articles/pages/CreateArticlePage/createPageclientBoundary";

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
