"use client";

import React from "react";
import { Heading } from "@/ui/Heading";
import { useComments } from "@/features/comments/hooks/useComments";
import { CommentCard } from "@/features/comments/components/CommentSection/parts/CommentCard";
import styles from "./styles.module.scss";
import { CommentInputForm } from "@/features/comments/components/CommentSection/parts/CommentInputForm";

interface Props {
  articleId: string;
}

export const CommentSection = (props: Props) => {
  const { articleId } = props;
  const {
    submitComment,
    comments,
    handleCommentUpvote,
    handleCommentDownvote,
  } = useComments(articleId);

  return (
    <section className={styles.wrapper}>
      <Heading headingLevelStyle={4} headingLevel={4}>
        Comments ({comments.length})
      </Heading>
      <CommentInputForm
        onSubmit={(content) => {
          submitComment({
            postedAt: new Date().toISOString(),
            content: content,
            articleId: articleId,
            author: "Elisabeth Strain",
            commentId: String(comments.length + 1),
            score: 0,
          });
        }}
      />
      <ul className={styles.list}>
        {comments.map((comment) => {
          return (
            <li key={comment.commentId}>
              <CommentCard
                comment={comment}
                onUpvote={handleCommentUpvote}
                onDownvote={handleCommentDownvote}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
};
