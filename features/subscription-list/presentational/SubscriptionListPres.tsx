import Image from 'next/image';
import PostsSearchCont from '@/features/search-input';

import styles from '../styles/subscriptionList.module.scss';
import { SubscribeUser } from '@/views/story/profile-card/types';
type UserListProps = {
  handleFollowListDisplay: () => void;
  isFollow: boolean;
  followerList: SubscribeUser;
  followList: SubscribeUser;
};
export default function SubscriptionListPres({
  followerList,
  followList,
  handleFollowListDisplay,
  isFollow,
}: UserListProps) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.flex}>
          <div className={styles.flexColumn}>
            <div className={styles.subscriptionBox}>
              <div className={styles.followGap}>
                <span
                  className={
                    isFollow ? styles.toggleTextActive : styles.toggleTextBasic
                  }
                >
                  팔로워
                </span>
                <span className={styles.text}>/</span>
                <span
                  className={
                    isFollow ? styles.toggleTextBasic : styles.toggleTextActive
                  }
                >
                  팔로잉
                </span>
              </div>
              <div
                onClick={handleFollowListDisplay}
                className={`${styles.toggle} ${isFollow ? '' : styles.movieToggle}`}
              >
                <span className={styles.toggleCurrent}></span>
              </div>
            </div>
            <div className={styles.searchbar}>
              <PostsSearchCont />
            </div>
          </div>
        </div>
        <div className={styles.list}>
          {isFollow
            ? followerList?.users?.map((item, index) => {
                return (
                  <div className={styles.flexCenter} key={index}>
                    <div className={styles.userListContainer}>
                      <div>
                        <Image
                          className={styles.imgBox}
                          src={
                            item.profileImg ?? ('/svgs/profile.svg' as string)
                          }
                          alt="프로필이미지"
                          width={40}
                          height={40}
                        />
                      </div>
                      <div className={styles.userName}>{item.name}</div>
                    </div>
                  </div>
                );
              })
            : followList?.users?.map((item, index) => {
                return (
                  <div className={styles.flexCenter} key={index}>
                    <div className={styles.userListContainer}>
                      <div className={styles.imgBox}>
                        <Image
                          className={styles.imgBox}
                          src={
                            item.profileImg ?? ('/svgs/profile.svg' as string)
                          }
                          alt="프로필이미지"
                          width={40}
                          height={40}
                        />
                      </div>
                      <div className={styles.userName}>{item.name}</div>
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
    </>
  );
}
