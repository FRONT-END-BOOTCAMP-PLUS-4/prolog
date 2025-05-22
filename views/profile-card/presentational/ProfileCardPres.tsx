//package
import Image from 'next/image';
//slice
import SubscriptionCont from '@/features/subscription/container/SubscriptionCont';
import { User } from '../types';
//style
import styles from '../styles/ProfileCardPres.module.scss';

type UserProps = {
  userData: User;
};

export default function ProfileCardPres({ userData }: UserProps) {
  const defaultImg = '/svgs/my-card-background.jpg';

  return (
    <>
      <div className={styles.container}>
        <div className={styles.cardBackGroundBox}>
          <Image
            src={userData.bg ?? defaultImg}
            alt="backGroundImg"
            fill={true}
            style={{ borderRadius: '8px' }}
          />
        </div>
        {/* 배경 영역 */}
        <div className={styles.profileImg}>
          {/* 프로필 이미지 */}
          {userData?.profileImg ? (
            <div>
              <Image
                className={styles.mobileProfile}
                src={userData.profileImg as string}
                alt="프로필 이미지"
                width={80}
                height={80}
              />
            </div>
          ) : (
            <div>
              <Image
                className={styles.mobileProfile}
                src="/svgs/profile.svg"
                alt="기본 프로필"
                width={80}
                height={80}
              />
            </div>
          )}
        </div>

        {/* 본문 영역 */}
        <div>
          {/* 유저 정보 (닉네임 + 버튼) */}
          <div className={styles.userFlexBox}>
            <div className={styles.userInfo}>
              <h2 className={styles.nameText}>{userData?.name}</h2>
              <div>
                <SubscriptionCont />
              </div>
            </div>
            <div className={styles.followContainer}>
              <button className={styles.followText}>
                팔로워<span className={styles.followNumberText}>17</span>
              </button>
              <button className={styles.followText}>
                팔로잉<span className={styles.followNumberText}>15</span>
              </button>
            </div>
          </div>

          {/* 소개글 */}
          <div className={styles.infoContent}>
            <p>{userData?.info}</p>
          </div>
        </div>
      </div>
    </>
  );
}
