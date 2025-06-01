//package
import Image from 'next/image';
//slice
import SubscriptionCont from '@/features/subscription/container/SubscriptionCont';
import { useModalStore } from '@/shared/stores/useModalStore';
import { SubscribeUser, User } from '../types';
//style
import styles from '../styles/ProfileCardPres.module.scss';
import SubscriptionListCont from '@/features/subscription-list/container/SubscriptionListCont';

type UserProps = {
  userData: User;
  followers: SubscribeUser;
  following: SubscribeUser;
};

export default function ProfileCardPres({
  userData,
  followers,
  following,
}: UserProps) {
  const defaultImg = '/svgs/my-card-background.jpg';
  const openModal = useModalStore((state) => state.action.open);

  return (
    <>
      <div className={styles.profileCardContainer}>
        <div className={styles.cardBackGroundBox}>
          <Image
            src={userData?.backgroundImg ?? defaultImg}
            alt="backGroundImg"
            fill={true}
            style={{ borderRadius: '8px' }}
          />
        </div>
        {/* 배경 영역 */}
        <div className={styles.profileImg}>
          {/* 프로필 이미지 */}
          {userData?.profileImg ? (
            <div className={styles.profile}>
              <Image
                className={styles.mobileProfile}
                src={userData.profileImg as string}
                alt="프로필 이미지"
                width={80}
                height={80}
              />
            </div>
          ) : (
            <div className={styles.profile}>
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
            <div
              onClick={() => {
                openModal(
                  <SubscriptionListCont
                    followers={followers}
                    following={following}
                  />,
                  'center',
                );
              }}
              className={styles.followContainer}
            >
              <button className={styles.followText}>
                팔로워
                <span className={styles.followNumberText}>
                  {followers.totalCount}
                </span>
              </button>
              <button className={styles.followText}>
                팔로잉
                <span className={styles.followNumberText}>
                  {following.totalCount}
                </span>
              </button>
            </div>
          </div>

          {/* 소개글 */}
          <div className={styles.infoContent}>
            <p>
              {userData?.introduction ?? '자신을 소개하는 글을 작성해주세요.'}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
