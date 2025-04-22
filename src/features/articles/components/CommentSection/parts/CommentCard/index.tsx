import { Comment } from "@/features/articles/lib/getArticleDetail.server";
import styles from "./styles.module.scss";
import Image from "next/image";
import profilePic from "./profile-picture.jpg";
import { formatDistance } from "date-fns";

interface Props {
  comment: Comment;
}

export const CommentCard = (props: Props) => {
  return (
    <div className={styles.wrapper}>
      <Image
        src={profilePic}
        width={44}
        height={44}
        alt={`${props.comment.author} profile picture`}
        priority={true}
      />
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
            {props.comment.score > 0 ? "+" : "-"}
            {props.comment.score}
          </span>
          <div className={styles.divider} />
          <button className={styles.scoringButton}>ᐱ</button>
          <div className={styles.divider} />
          <button className={styles.scoringButton}>ᐯ</button>
          <div className={styles.divider} />
        </span>
      </div>
    </div>
  );
};
