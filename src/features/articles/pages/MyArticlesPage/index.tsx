import { Header } from "@/ui/Header";
import { Heading } from "@/ui/Heading";
import { Button } from "@/ui/Button";
import Link from "next/link";
import { Routes } from "@/consts/routes";
import React from "react";
import { DefaultScreenWrapper } from "@/ui/DefaultScreenWrapper";
import { getArticlesWithComments } from "@/features/articles/lib/server/getArticlesWithComments";
import { ArticlesTableListing } from "@/features/articles/components/ArticlesTableListing";
import { getAccessTokenOrLogout } from "@/features/auth/lib/getAccessToken.server";

export async function MyArticlesPage() {
  await getAccessTokenOrLogout();
  const articlesWithComments = (await getArticlesWithComments()).map(
    (article) => ({
      ...article,
      createdAt: article.createdAt.toISOString(),
      lastUpdatedAt: article.lastUpdatedAt.toISOString(),
      comments: article.comments.map((comment) => ({
        ...comment,
        postedAt: comment.postedAt.toISOString(),
      })),
    }),
  );

  const CreateArticleButton = (
    <Link href={Routes.CREATE_ARTICLE}>
      <Button color={"primary"} useSpan={true}>
        Create new article
      </Button>
    </Link>
  );

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
            My articles
          </Heading>
          <ArticlesTableListing articles={articlesWithComments} />
        </DefaultScreenWrapper>
      </main>
    </>
  );
}
