import { Header } from "@/ui/Header";

import styles from "./style.module.scss";
import { Heading } from "@/ui/Heading";
import { getArticleDetail } from "@/features/articles/lib/server/getArticleDetail.server";
import { format } from "date-fns";
import { ProxyImage } from "@/ui/ProxyImage";
import { MarkdownRenderer } from "@/ui/MarkdownRenderer";
import { CommentSection } from "@/features/comments/components/CommentSection";
import { DefaultScreenWrapper } from "@/ui/DefaultScreenWrapper";
import { getAccessTokenOrLogout } from "@/features/auth/lib/getAccessToken.server";
import { Suspense } from "react";
import { Loading } from "@/ui/Loading";
import { RelatedArticlesListing } from "@/features/articles/components/RelatedArticlesListing";
export async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  await getAccessTokenOrLogout();
  const { id } = await params;
  const article = await getArticleDetail(id);

  return (
    <>
      <Header />
      <DefaultScreenWrapper>
        <div className={styles.container}>
          <main className={styles.wrapper}>
            <article className={styles.articleWrapper}>
              <Heading headingLevel={1} headingLevelStyle={1}>
                {article.title}
              </Heading>
              <span className={styles.infoWrapper}>
                <span>Elisabeth strain</span>
                <span>•</span>
                <span>{format(article.createdAt, "MM/dd/yy")}</span>
              </span>
              <ProxyImage
                width={760}
                height={504}
                imageId={article.imageId}
                alt={`${article.title} cover image`}
                priority={true}
              />
              <MarkdownRenderer markdown={article.content} />
            </article>
            <CommentSection articleId={id} />
          </main>
          <Suspense fallback={<Loading />}>
            <RelatedArticlesListing excludeArticleId={id} />
          </Suspense>
        </div>
      </DefaultScreenWrapper>
    </>
  );
}
