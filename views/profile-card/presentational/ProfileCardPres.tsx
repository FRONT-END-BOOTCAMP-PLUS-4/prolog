import Image from 'next/image';
import styles from '../styles/ProfileCardPres.module.scss';
import SubscriptionCont from '@/features/subscription/container/SubscriptionCont';

type User = {
  id: string;
  bg: string | null;
  profileImg: string | null;
  name: string;
  info: string | null;
};
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
                src={userData?.profileImg as string}
                alt="프로필 이미지"
                width={100}
                height={100}
              />
            </div>
          ) : (
            <div>
              <Image
                src="/svgs/profile.svg"
                alt="기본 프로필"
                width={100}
                height={100}
              />
            </div>
          )}
        </div>

        {/* 본문 영역 */}
        <div>
          {/* 유저 정보 (닉네임 + 버튼) */}
          <div className={styles.userInfo}>
            <h2>{userData?.name}</h2>
            <div>
              <SubscriptionCont />
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
