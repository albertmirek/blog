import { Header } from "@/components/Header";

import styles from "./style.module.scss";
import { Heading } from "@/ui/Heading";
import { getArticleDetail } from "@/features/articles/lib/getArticleDetail.server";
import { format } from "date-fns";
import { ProxyImage } from "@/ui/ProxyImage";
import { HtmlRenderer } from "@/ui/HtmlRenderer";
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
        <main>
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
        </main>
      </div>
    </>
  );
}
