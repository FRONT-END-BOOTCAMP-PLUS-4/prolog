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
};

export default function Profile({ userProfileImage, userName, date }: Props) {
  const router = useRouter();
  const onClickHandler = () => {
    router.push(`/${userName}/stories`);
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
