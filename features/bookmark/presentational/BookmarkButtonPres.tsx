// package
import Image from 'next/image';
// slice
import styles from '../styles/BookmarkButton.module.scss';

type Props = {
  bookmarked: boolean;
  onClick: () => void;
};

export default function BookmarkButton({ bookmarked, onClick }: Props) {
  return (
    <button className={styles.bookmarkWrapper} onClick={onClick}>
      <Image
        src={bookmarked ? '/svgs/book.svg' : '/svgs/book.svg'}
        alt="bookmark"
        width={20}
        height={20}
      />
    </button>
  );
}
