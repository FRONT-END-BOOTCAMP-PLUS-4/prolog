// slice
import styles from '../styles/CommentListPres.module.scss';
import Profile from '@/shared/ui/profile';

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
          <Profile
            userNickName={c.userNickName}
            date={c.date}
            onClick={() => {}}
          />
          <div className={styles.commentText}>{c.text}</div>
        </div>
      ))}
    </div>
  );
}
