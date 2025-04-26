import { Header } from "@/ui/Header";
import { DefaultScreenWrapper } from "@/ui/DefaultScreenWrapper";
import { getArticleDetail } from "@/features/articles/lib/server/getArticleDetail.server";
import { EditArticlePageClientBoundary } from "@/features/articles/pages/EditArticlePage/editClientBoundary";
import { getAccessTokenOrLogout } from "@/features/auth/lib/getAccessToken.server";

export async function EditArticlePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  await getAccessTokenOrLogout();
  const { id } = await params;
  const articleToEdit = await getArticleDetail(id);

  return (
    <>
      <Header />
      <main>
        <DefaultScreenWrapper>
          <EditArticlePageClientBoundary article={articleToEdit} />
        </DefaultScreenWrapper>
      </main>
    </>
  );
}
