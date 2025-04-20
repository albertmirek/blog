import { FC } from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import { Heading } from "@/ui/Heading";
import Link from "next/link";
import { format } from "date-fns";
import { ArticleDetail } from "@/features/articles/lib/getArticleDetail.server";
type Props = ArticleDetail;

export const ArticleBigCard: FC<Props> = (props: Props) => {
  return (
    <article className={styles.card}>
      <Image
        src={`/api/image/${props.imageId}`}
        alt={""}
        width={272}
        height={244}
        style={{ borderRadius: 4 }}
      />
      <div className={styles.contentWrapper}>
        <Heading headingLevelStyle={4} headingLevel={2}>
          {props.title}
        </Heading>
        <span className={styles.infoWrapper}>
          <span>Todo Author</span>
          <span>•</span>
          <span>{format(props.createdAt, "MM/dd/yy")}</span>
        </span>
        <p className={styles.perex}>{props.perex}</p>
        <div className={styles.bottomWrapper}>
          <Link className={styles.link} href={`/article/${props.articleId}`}>
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
