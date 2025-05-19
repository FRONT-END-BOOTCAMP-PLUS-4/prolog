// package
import Image from 'next/image';
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
        <Image
          src={liked ? '/svgs/love.svg' : '/svgs/love.svg'}
          alt="like"
          width={20}
          height={20}
        />
      </button>
      <span className={styles.count}>{count}</span>
    </div>
  );
}
