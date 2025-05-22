// package
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { CheckCircledIcon } from '@radix-ui/react-icons';
// slice
import styles from '../styles/NotificationItemPres.module.scss';
import { NotificationItemType } from '../types';

type Props = {
  item: NotificationItemType;
  deleteMode: boolean;
  selected: boolean;
  onToggleSelect: (id: number) => void;
};

export default function NotificationItemPres({
  item,
  deleteMode,
  selected,
  onToggleSelect,
}: Props) {
  const router = useRouter();
  const handleClick = () => {
    if (deleteMode) {
      onToggleSelect(Number(item.id));
    } else {
      router.push(`/${item.userNickname}/stories/${item.postId}`);
    }
  };

  return (
    <div
      className={[
        styles.notification,
        item.isRead ? styles.read : styles.unread,
        deleteMode && selected ? styles.selected : '',
      ].join(' ')}
      onClick={handleClick}
    >
      <Image
        src={item.userProfileImage ?? '/svgs/profile.svg'}
        alt="프로필 이미지"
        className={styles.profileImage}
        width={30}
        height={30}
      />
      <div className={styles.item}>
        {item.type === 'comment' ? (
          <div>
            <span className={styles.nickname}>{item.userNickname}</span>
            <span className={styles.comment}>의 댓글</span>
          </div>
        ) : (
          <div>
            <span className={styles.nickname}>{item.userNickname}</span>
            <span className={styles.comment}>의 게시글</span>
          </div>
        )}
        <span className={styles.content}>{item.content}</span>
        <span className={styles.postTitle}>{item.postTitle}</span>
      </div>
      <div className={styles.iconContainer}>
        <span className={styles.date}>{item.date}</span>
        {deleteMode ? (
          <CheckCircledIcon
            className={selected ? styles.iconSelected : styles.icon}
          />
        ) : (
          <div className={styles.icon} /> // 빈 공간 확보
        )}
      </div>
    </div>
  );
}
