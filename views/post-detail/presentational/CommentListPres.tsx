// package
import Image from 'next/image';
// slice
import styles from '../styles/CommentListPres.module.scss';

type Comment = {
  userNickName: string;
  date: string;
  text: string;
};

type Props = {
  comments: Comment[];
};

export default function CommentListPres({ comments }: Props) {
  return (
    <div className={styles.commentList}>
      {comments.map((c, idx) => (
        <div className={styles.commentItem} key={idx}>
          <div className={styles.commentUserBox}>
            <Image
              src="/svgs/profile.svg"
              alt="user"
              width={32}
              height={32}
              className={styles.commentProfile}
            />
            <div className={styles.commentContent}>
              <div className={styles.commentUser}>{c.userNickName}</div>
              <div className={styles.commentDate}>{c.date}</div>
            </div>
          </div>
          <div className={styles.commentText}>{c.text}</div>
        </div>
      ))}
    </div>
  );
}
