'use client';

// package
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { CheckCircledIcon } from '@radix-ui/react-icons';
// slice
import styles from '../styles/NotificationListPres.module.scss';
import { NotificationItemType } from '../types';

type Props = {
  list: NotificationItemType[];
  deleteMode: boolean;
  selectedIds: number[];
  onToggleSelect: (id: number) => void;
};

export default function NotificationListPres({
  list,
  deleteMode,
  selectedIds,
  onToggleSelect,
}: Props) {
  const router = useRouter();

  if (list.length === 0) {
    return <p className={styles.empty}>알람 내역이 없어요</p>;
  }

  return (
    <>
      {list.map((item) => {
        const handleClick = () => {
          if (deleteMode) {
            onToggleSelect(item.id);
          } else {
            router.push(`/${item.userNickname}/stories/${item.postId}`);
          }
        };

        return (
          <div
            key={item.id}
            className={[
              styles.notification,
              item.isRead ? styles.read : styles.unread,
              deleteMode && selectedIds.includes(item.id)
                ? styles.selected
                : '',
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
                  className={
                    selectedIds.includes(item.id)
                      ? styles.iconSelected
                      : styles.icon
                  }
                />
              ) : (
                <div className={styles.icon} />
              )}
            </div>
          </div>
        );
      })}
    </>
  );
}
