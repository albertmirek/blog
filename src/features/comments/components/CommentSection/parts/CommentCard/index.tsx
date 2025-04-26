import { ApiComment } from "@/features/articles/lib/server/getArticleDetail.server";
import styles from "./styles.module.scss";
import { formatDistance } from "date-fns";
import { UpvoteIcon } from "@/features/comments/components/CommentSection/parts/CommentCard/parts/UpvoteIcon";
import { DownvoteIcon } from "@/features/comments/components/CommentSection/parts/CommentCard/parts/DownvoteIcon";
import { Button } from "@/ui/Button";
import { ProfileImage } from "@/ui/ProfileImage";

interface Props {
  comment: ApiComment;
  onUpvote: (articleId: string) => void;
  onDownvote: (articleId: string) => void;
}

export const CommentCard = (props: Props) => {
  return (
    <div className={styles.wrapper}>
      <ProfileImage />
      <div className={styles.contentWrapper}>
        <span className={styles.authorWrapper}>
          <span className={styles.authorName}>{props.comment.author}</span>
          <span className={styles.dateSub}>
            {formatDistance(props.comment.postedAt, new Date())}&nbsp;ago
          </span>
        </span>
        <p className={styles.content}>{props.comment.content}</p>
        <span className={styles.scoreWrapper}>
          <span>
            {props.comment.score > 0
              ? "+"
              : props.comment.score === 0
                ? ""
                : "-"}
            {props.comment.score}
          </span>
          <div className={styles.divider} />
          <Button
            color={"primary"}
            isOutline={true}
            onClick={() => props.onUpvote(props.comment.commentId)}
          >
            <UpvoteIcon />
          </Button>
          <div className={styles.divider} />
          <Button
            color={"primary"}
            isOutline={true}
            onClick={() => props.onDownvote(props.comment.commentId)}
          >
            <DownvoteIcon />
          </Button>
          <div className={styles.divider} />
        </span>
      </div>
    </div>
  );
};
