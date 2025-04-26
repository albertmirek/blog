import { Header } from "@/ui/Header";
import { DefaultScreenWrapper } from "@/ui/DefaultScreenWrapper";
import { CreateArticlePageClientBoundary } from "@/features/articles/pages/CreateArticlePage/createPageclientBoundary";
import { getAccessTokenOrLogout } from "@/features/auth/lib/getAccessToken.server";

export const CreateArticlePage = async () => {
  await getAccessTokenOrLogout();

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
