import { Header } from "@/components/Header";
import { Heading } from "../../../../ui/Heading";
import { ArticleListing } from "@/features/articles/components/ArticleListing";
import { withAuth } from "@/features/auth/hoc/withAuth";
import { DefaultScreenWrapper } from "@/ui/DefaultScreenWrapper";
import { Suspense } from "react";
import { Loading } from "@/ui/Loading";

async function Page() {
  return (
    <>
      <Header />
      <main>
        <DefaultScreenWrapper>
          <Heading headingLevel={1} headingLevelStyle={1}>
            Recent articles
          </Heading>
          <Suspense fallback={<Loading />}>
            <ArticleListing />
          </Suspense>
        </DefaultScreenWrapper>
      </main>
    </>
  );
}

export const DashboardPage = withAuth(Page);
