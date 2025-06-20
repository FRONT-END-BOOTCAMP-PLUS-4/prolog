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
  followerList: SubscribeUser;
  followList: SubscribeUser;
  userId: string;
  currentId: string;
  onFollowStatusChange: (isFollowing: boolean) => void;
};

export default function ProfileCardPres({
  userData,
  userId,
  followList,
  followerList,
  currentId,
  onFollowStatusChange,
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
                {userId === currentId && currentId ? (
                  <div style={{ display: 'none' }}></div>
                ) : (
                  <SubscriptionCont
                    userId={userId}
                    onFollowStatusChange={onFollowStatusChange}
                  />
                )}
              </div>
            </div>
            <div className={styles.followContainer}>
              <button
                className={styles.followText}
                onClick={() => {
                  openModal(
                    <SubscriptionListCont
                      followList={followList}
                      followerList={followerList}
                      isFollow={true}
                    />,
                    'center',
                  );
                }}
              >
                팔로워
                <span className={styles.followNumberText}>
                  {followerList?.totalCount ?? 0}
                </span>
              </button>

              <button
                className={styles.followText}
                onClick={() => {
                  openModal(
                    <SubscriptionListCont
                      followList={followList}
                      followerList={followerList}
                      isFollow={false}
                    />,
                    'center',
                  );
                }}
              >
                팔로잉
                <span className={styles.followNumberText}>
                  {followList?.totalCount ?? 0}
                </span>
              </button>
            </div>{' '}
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
