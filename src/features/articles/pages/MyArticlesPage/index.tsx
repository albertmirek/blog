import { withAuth } from "@/features/auth/hoc/withAuth";
import { Header } from "@/ui/Header";
import { Heading } from "@/ui/Heading";
import { Button } from "@/ui/Button";
import Link from "next/link";
import { Routes } from "@/consts/routes";
import React from "react";
import { DefaultScreenWrapper } from "@/ui/DefaultScreenWrapper";
import { getArticlesWithComments } from "@/features/articles/lib/getArticlesWithComments";
import { ArticlesTableListing } from "@/features/articles/components/ArticlesTableListing";

async function Page() {
  const articlesWithComments = await getArticlesWithComments();

  const CreateArticleButton = (
    <Link href={Routes.CREATE_ARTICLE}>
      <Button color={"primary"} useSpan={true}>
        Create new article
      </Button>
    </Link>
  );

  /*TODO*/
  return (
    <>
      <Header />
      <main>
        <DefaultScreenWrapper>
          <Heading
            headingLevelStyle={1}
            headingLevel={1}
            elementToRight={CreateArticleButton}
          >
            My articles - still lot things to do
          </Heading>
          <ArticlesTableListing articles={articlesWithComments} />
        </DefaultScreenWrapper>
      </main>
    </>
  );
}

export const MyArticlesPage = withAuth(Page);
