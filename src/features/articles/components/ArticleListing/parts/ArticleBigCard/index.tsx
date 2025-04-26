import { FC } from "react";
import styles from "./styles.module.scss";
import { Heading } from "@/ui/Heading";
import Link from "next/link";
import { format } from "date-fns";
import { ArticleDetail } from "@/features/articles/lib/server/getArticleDetail.server";
import { ProxyImage } from "@/ui/ProxyImage";
import { Routes } from "@/consts/routes";
type Props = ArticleDetail;

export const ArticleBigCard: FC<Props> = (props: Props) => {
  return (
    <article className={styles.card}>
      <ProxyImage
        alt={`${props.title} cover image`}
        width={272}
        height={244}
        style={{ borderRadius: 4 }}
        imageId={props.imageId}
        priority={true}
      />
      <div className={styles.contentWrapper}>
        <Heading headingLevelStyle={4} headingLevel={2}>
          {props.title}
        </Heading>
        <span className={styles.infoWrapper}>
          <span>Elisabeth Strain</span>
          <span>•</span>
          <span>{format(props.createdAt, "MM/dd/yy")}</span>
        </span>
        <p className={styles.perex}>{props.perex}</p>
        <div className={styles.bottomWrapper}>
          <Link
            className={styles.link}
            href={Routes.ARTICLE_DETAIL(props.articleId)}
          >
            Read whole article
          </Link>
          <span className={styles.comments}>
            {props.comments.length}&nbsp;comments
          </span>
        </div>
      </div>
    </article>
  );
};
