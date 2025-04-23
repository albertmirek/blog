import { withAuth } from "@/features/auth/hoc/withAuth";
import { Header } from "@/components/Header";
import { DefaultScreenWrapper } from "@/ui/DefaultScreenWrapper";
import { Heading } from "@/ui/Heading";

async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <>
      <Header />
      <main>
        <DefaultScreenWrapper>
          <Heading headingLevelStyle={1} headingLevel={1}>
            Edit article {id}
          </Heading>
        </DefaultScreenWrapper>
      </main>
    </>
  );
}
export const EditArticlePage = withAuth(Page);
