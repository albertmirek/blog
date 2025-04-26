import { Header } from "@/ui/Header";
import { Heading } from "@/ui/Heading";
import { ArticleListing } from "@/features/articles/components/ArticleListing";
import { DefaultScreenWrapper } from "@/ui/DefaultScreenWrapper";
import { Suspense } from "react";
import { Loading } from "@/ui/Loading";
import { getAccessTokenOrLogout } from "@/features/auth/lib/getAccessToken.server";

export async function DashboardPage() {
  await getAccessTokenOrLogout(true);

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
