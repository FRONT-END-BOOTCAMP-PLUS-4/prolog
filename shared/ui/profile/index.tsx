// package
import Image from 'next/image';
// slice
import styles from './Profile.module.scss';

type Props = {
  onClick: () => void;
};

export default function Profile({ onClick }: Props) {
  return (
    <div className={styles.profileInfo} onClick={onClick}>
      <Image src="/svgs/profile.svg" alt="user" width={32} height={32} />
      <div>
        <div className={styles.profileName}>userNickName</div>
        <div className={styles.profileDate}>2025-01-01</div>
      </div>
    </div>
  );
}
