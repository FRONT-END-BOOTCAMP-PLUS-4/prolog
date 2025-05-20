// package
import Image from 'next/image';
// slice
import styles from './Profile.module.scss';

type Props = {
  userProfileImage?: string;
  userNickName: string;
  date: string;
  onClick: () => void;
};

export default function Profile({
  userProfileImage,
  userNickName,
  date,
  onClick,
}: Props) {
  return (
    <div className={styles.profileInfo} onClick={onClick}>
      <Image
        src={userProfileImage ?? '/svgs/profile.svg'}
        alt="user profile image"
        width={32}
        height={32}
      />
      <div>
        <div className={styles.profileName}>{userNickName}</div>
        <div className={styles.profileDate}>{date}</div>
      </div>
    </div>
  );
}
