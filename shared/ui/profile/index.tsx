'use client';

// package
import Image from 'next/image';
import { useRouter } from 'next/navigation';

// slice
import styles from './Profile.module.scss';

type Props = {
  userProfileImage?: string;
  userName: string;
  date: string;
  userEmail: string;
};

export default function Profile({
  userProfileImage,
  userName,
  date,
  userEmail,
}: Props) {
  const router = useRouter();
  const email = userEmail ?? '';
  const userId = email.split('@')[0];
  const onClickHandler = () => {
    router.push(`/${userId}/stories`);
  };

  return (
    <div className={styles.profileInfo} onClick={onClickHandler}>
      <Image
        src={userProfileImage ?? '/svgs/profile.svg'}
        alt="user profile image"
        width={32}
        height={32}
      />
      <div>
        <div className={styles.profileName}>{userName}</div>
        <div className={styles.profileDate}>{date}</div>
      </div>
    </div>
  );
}
