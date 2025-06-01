'use client';

// package
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { CheckCircledIcon } from '@radix-ui/react-icons';

// slice
import styles from '../styles/NotificationListPres.module.scss';
import { type Notification } from '../container/NotificationListCont';

type Props = {
  notificationList: Notification[];
  isSelect: boolean;
  selecterId: ( notificationId: number) => void;
};

export default function NotificationListPres(props: Props) {
  const { notificationList, selecterId, isSelect} = props;

  const router = useRouter();
  const blogPageRouter = (userName: string, postId: number) => {
    router.push(`/${userName}/stories/${postId}`);
  };

  if (!notificationList.length) {
    return <p className={styles.empty}>알람 내역이 없어요</p>;
  };

  return (
    <div className={styles.container}>
      {notificationList.map((notification) => {
        return (
          <div key={notification.idx} className={styles.notification} onClick={() => blogPageRouter(notification.userName, notification.postsId)}>
            {/* 유저 프로필이미지 */}
            <div className={styles.userImage}>
              <Image
                src={notification.userImage ?? '/svgs/profile.svg'}
                fill
                alt="유저이미지"
              />
            </div>

            <div className={styles.infoContainer}>
              {/* 유저이름 및 알람 유형 */}
              <div className={styles.infoContainer__info}>
                <span className={styles.infoContainer__name}>
                  {notification.userName}
                </span>
                <span>{notification.notificationType ? '게시글' : '댓글'}</span>
              </div>
              {/* 댓글내용 및 게시글 내용 */}
              <p className={styles.infoContainer__content}>
                {notification.content}
              </p>
              {/* 게시글 제목 */}
              <p className={styles.infoContainer__title}>
                {notification.title}
              </p>
            </div>

            {/* 알람시간 */}
            <div className={styles.time}>
              <span>{notification.date}</span>
              { isSelect && <CheckCircledIcon className={styles.time__icon} onClick={() => selecterId(notification.idx)}/>}
            </div>
          </div>
        );
      })}
    </div>
  );
}
