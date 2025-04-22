import { Header } from "@/components/Header";

import styles from "./style.module.scss";
import { Heading } from "@/ui/Heading";
import { getArticleDetail } from "@/features/articles/lib/getArticleDetail.server";
import { format } from "date-fns";
import { ProxyImage } from "@/ui/ProxyImage";
import { HtmlRenderer } from "@/ui/HtmlRenderer";
import { CommentSection } from "@/features/articles/components/CommentSection";
export async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const article = await getArticleDetail(id);

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <main className={styles.container}>
          <article className={styles.articleWrapper}>
            <Heading headingLevel={1} headingLevelStyle={1}>
              {article.title}
            </Heading>
            <span className={styles.infoWrapper}>
              <span>Todo Author</span>
              <span>•</span>
              <span>{format(article.createdAt, "MM/dd/yy")}</span>
            </span>
            <ProxyImage
              width={760}
              height={504}
              imageId={article.imageId}
              alt={`${article.title} cover image`}
            />
            <HtmlRenderer htmlString={article.content} />
          </article>
          <CommentSection
            articleId={id}
            initialComments={[
              {
                commentId: "1",
                articleId: article.articleId,
                postedAt: new Date(Date.now() - 1000 * (60 * 5)),
                content:
                  "In its flawless grace and superior self-sufficiency I have seen a symbol of the perfect beauty and bland impersonality of the universe itself, objectively considered, and in its air of silent mystery there resides for me all the wonder and fascination of the unknown",
                author: "Albert Mírek",
                score: 42,
              },
            ]}
          />
          {/*TODO*/}
        </main>
      </div>
    </>
  );
}
