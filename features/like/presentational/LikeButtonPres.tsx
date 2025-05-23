// package
import { HeartIcon, HeartFilledIcon } from '@radix-ui/react-icons';
// slice
import styles from '../styles/LikeButton.module.scss';

type Props = {
  liked: boolean;
  count: number;
  onClick: () => void;
};

export default function LikeButton({ liked, count, onClick }: Props) {
  return (
    <div className={styles.likeWrapper}>
      <button className={styles.likeBtn} onClick={onClick}>
        {liked ? (
          <HeartFilledIcon className={styles.likedIcon} />
        ) : (
          <HeartIcon className={styles.unLikedIcon} />
        )}
      </button>
      <span className={styles.count}>{count}</span>
    </div>
  );
}
