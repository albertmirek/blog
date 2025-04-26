import { withAuth } from "@/features/auth/hoc/withAuth";
import { Header } from "@/ui/Header";
import { DefaultScreenWrapper } from "@/ui/DefaultScreenWrapper";
import { getArticleDetail } from "@/features/articles/lib/getArticleDetail.server";
import { EditArticlePageClientBoundary } from "@/features/articles/pages/EditArticlePage/editClientBoundary";

async function Page({ params }: { params: Promise<{ id: string }> }) {
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
export const EditArticlePage = withAuth(Page);
