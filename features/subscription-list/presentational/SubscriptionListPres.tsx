import Image from 'next/image';
import { UserList } from '../types';
import PostsSearchCont from '@/features/search-input';

import styles from '../styles/subscriptionList.module.scss';
import { SubscribeUser } from '@/views/story/profile-card/types';
type UserListProps = {
  handleFollowListDisplay: () => void;
  isFollow: boolean;
  followers: SubscribeUser;
  following: SubscribeUser;
};
export default function SubscriptionListPres({
  followers,
  following,
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
            <PostsSearchCont />
          </div>
        </div>
        {followers.users.map((item, index) => {
          return (
            <div className={styles.userList} key={index}>
              <div>
                <Image
                  src={item.profileImg as string}
                  alt="프로필이미지"
                  width={32}
                  height={32}
                />
              </div>
              <div className={styles.userName}>{item.name}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}
