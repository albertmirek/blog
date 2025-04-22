"use client";

import { Comment } from "@/features/articles/lib/getArticleDetail.server";
import { useState } from "react";

export function useComments(
  articleId: string,
  initialComments: Comment[] = [],
) {
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const submitComment = async (content: string, author: string) => {
    setLoading(true);
    await fetch(`/api/comments`, {
      method: "POST",
      body: JSON.stringify({
        articleId: articleId,
        content: content,
        author: author,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          setError("There was a problem creating new comment");
          throw new Error("There was a problem creating new comment");
        }
        return res.json() as Promise<Comment>;
      })
      .then((comment: Comment) => setComments([comment, ...comments]))
      .catch((err: Error) => setError(err.message))
      .finally(() => setLoading(false));
  };

  /*const upVote = async (commentId: string) => {
    await fetch(`/api/comments/${commentId}/vote/up`, {
      method: "POST",
    })
      .then((res) => {
        if (!res.ok) {
          setError("There was a problem with upvoting");
          throw new Error("There was a problem with upvoting");
        }
        return res.json() as Promise<CommentCard>;
      })
      .then((comment: CommentCard) => {
        setComments([
          ...comments.filter((_) => _.commentId !== comment.commentId),
          comment,
        ].sort((a, b) => b.postedAt.getTime() - a.postedAt.getTime())
      })
        .catch((err: Error) => setError("There was a problem with upvoting"));
  };*/

  return { comments, loading, submitComment, error };
}
