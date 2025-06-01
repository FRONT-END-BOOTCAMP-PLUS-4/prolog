'use client';

// package
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { CheckCircledIcon } from '@radix-ui/react-icons';

// slice
import styles from '../styles/NotificationListPres.module.scss';
import { type Notification } from '../types';

type Props = {
  notificationList: Notification[];
  isSelect: boolean;
  selecterId: (notificationId: number) => void;
};

export default function NotificationListPres(props: Props) {
  const { notificationList, selecterId, isSelect } = props;

  const router = useRouter();
  const blogPageRouter = (userName: string, postId: number) => {
    router.push(`/${userName}/stories/${postId}`);
  };

  if (!notificationList.length) {
    return <p className={styles.empty}>알람 내역이 없어요</p>;
  }

  return (
    <div className={styles.container}>
      {notificationList.map((notification) => {
        return (
          <div
            key={notification.id}
            className={styles.notification}
            onClick={() =>
              blogPageRouter(notification.senderName, notification.postsId)
            }
          >
            {/* 유저 프로필이미지 */}
            <div className={styles.userImage}>
              <Image
                src={notification.senderProfileImg ?? '/svgs/profile.svg'}
                fill
                alt="유저이미지"
              />
            </div>

            <div className={styles.infoContainer}>
              {/* 유저이름 및 알람 유형 */}
              <div className={styles.infoContainer__info}>
                <span className={styles.infoContainer__name}>
                  {notification.senderName}
                </span>
              </div>
              {/* 댓글내용 및 게시글 내용 */}
              <p className={styles.infoContainer__content}>
                {/* 시안 1 */}
                {/* {notification.content} */}
                {/* 시안 2 */}
                {notification.title}
              </p>
              {/* 게시글 제목 */}
              <p className={styles.infoContainer__title}>
                {/* 시안 1 */}
                {/* {notification.title}  */}
                {/* 시안 2*/}
                {notification.type === 1
                  ? '게시글을 작성하였습니다.'
                  : '게시물에 댓글을 남겼습니다.'}
              </p>
            </div>

            {/* 알람시간 */}
            <div className={styles.time}>
              <span>{notification.createAt}</span>
              {isSelect && (
                <CheckCircledIcon
                  className={styles.time__icon}
                  onClick={() => selecterId(notification.id)}
                />
              )}
              {/* 시안 1 */}
              {/* <span>{notification.type === 1 ? '게시글' : '댓글'}</span> */}
            </div>
          </div>
        );
      })}
    </div>
  );
}
