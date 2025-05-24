"use client";

import { ApiComment } from "@/features/articles/lib/server/getArticleDetail.server";
import { useEffect } from "react";
import { useStore } from "@/store/store";

const getMockedComments = (articleId: string): ApiComment[] => {
  return [
    {
      commentId: "1",
      articleId: articleId,
      postedAt: "2025-04-26T09:39:27.139Z",
      content:
        "In its flawless grace and superior self-sufficiency I have seen a symbol of the perfect beauty and bland impersonality of the universe itself, objectively considered, and in its air of silent mystery there resides for me all the wonder and fascination of the unknown",
      author: "Elisabeth Strain",
      score: 42,
    },
  ];
};

export function useComments(articleId: string) {
  const { comments, setComments, addComment, downvoteComment, upvoteComment } =
    useStore((state) => state);

  useEffect(() => {
    setComments(getMockedComments(articleId));
  }, [articleId, setComments]);

  const submitComment = (comment: ApiComment) => {
    addComment(comment);
  };

  const handleCommentUpvote = (commentId: string) => {
    upvoteComment(commentId);
  };

  const handleCommentDownvote = (commentId: string) => {
    downvoteComment(commentId);
  };

  /*const submitComment = async (content: string, author: string) => {
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
  };*/

  return {
    comments,
    submitComment,
    handleCommentUpvote,
    handleCommentDownvote,
  };
}
