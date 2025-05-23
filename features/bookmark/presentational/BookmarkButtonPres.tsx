// package
import { BookmarkIcon, BookmarkFilledIcon } from '@radix-ui/react-icons';
// slice
import styles from '../styles/BookmarkButton.module.scss';

type Props = {
  bookmarked: boolean;
  onClick: () => void;
};

export default function BookmarkButton({ bookmarked, onClick }: Props) {
  return (
    <button className={styles.bookmarkWrapper} onClick={onClick}>
      {bookmarked ? (
        <BookmarkFilledIcon className={styles.bookmarkedIcon} />
      ) : (
        <BookmarkIcon className={styles.unBookmarkedIcon} />
      )}
    </button>
  );
}
