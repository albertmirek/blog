"use client";

import React from "react";
import { Heading } from "@/ui/Heading";
import { Comment } from "@/features/articles/lib/getArticleDetail.server";
import { useComments } from "@/features/articles/hooks/useComments";
import { CommentCard } from "@/features/articles/components/CommentSection/parts/CommentCard";
import styles from "./styles.module.scss";

interface Props {
  articleId: string;
  initialComments: Comment[];
}

export const CommentSection = (props: Props) => {
  const { articleId, initialComments } = props;
  const { comments } = useComments(articleId, initialComments);

  return (
    <section className={styles.wrapper}>
      <Heading headingLevelStyle={4} headingLevel={4}>
        Comments ({comments.length})
      </Heading>
      {/*TODO USER + API working*/}
      {/*<CommentInputForm onSubmit={(content) => submitComment(getContentType, )} />*/}
      <ul className={styles.list}>
        {comments.map((comment) => {
          return (
            <li key={comment.commentId}>
              <CommentCard comment={comment} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};
