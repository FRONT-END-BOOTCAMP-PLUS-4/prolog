import styles from './styles.module.scss';
import Image from 'next/image';

export default function Page() {
  // 더미 데이터
  const user = {
    nickname: '유저닉네임',
    intro: '안녕하세요! FE개발자입니다. 현재는 취준생이며 이러한 기술들을 사용중입니다. ...',
    isFollowing: false,
    follower: 123,
    following: 45,
  };
  const posts = [
    {
      title: 'SSG에 대해서 알아보겠습니다',
      desc: 'CSR은 클라이언트 사이드 렌더링이라고 합니다. 이는 SEO에 좋지 못하지만, 좀더 인터렉티브한 디자인에는 좋은경험을 ........',
      tags: ['Tag', 'Tag'],
      userNickName: 'userNickName',
      date: '2025-01-01',
      commentCount: 16,
      loveCount: 16,
    },
    // ...더미 게시글
  ];
  const followerList = Array(6).fill({ userNickName: 'userNickName' });

  return (
    <div className={styles.container}>
      {/* 프로필 카드 */}
      <div className={styles.profileCard}>
        <div className={styles.profileImageWrap}>
          <div className={styles.profileImageGradient} />
          <Image src="/svgs/profile.svg" alt="profile" width={80} height={80} className={styles.profileImage} />
        </div>
        <div className={styles.profileInfoWrap}>
          <div className={styles.nickname}>{user.nickname}</div>
          <div className={styles.intro}>{user.intro}</div>
          <div className={styles.followBtnWrap}>
            <button className={user.isFollowing ? styles.followingBtn : styles.followBtn}>
              {user.isFollowing ? '팔로잉' : '팔로우'}
            </button>
          </div>
        </div>
      </div>

      {/* 팔로워/팔로잉/토글 (피그마 1297-4812) */}
      <div className={styles.followerCard}>
        <div className={styles.followerHeader}>
          <div className={styles.followerTitle}>팔로워 / 팔로잉</div>
          <button className={styles.toggleBtn}>
            <Image src="/svgs/down.svg" alt="toggle" width={20} height={20} />
          </button>
        </div>
        <div className={styles.followerList}>
          {followerList.map((f, idx) => (
            <div className={styles.followerItem} key={idx}>
              <Image src="/svgs/profile.svg" alt="user" width={32} height={32} className={styles.followerProfile} />
              <span className={styles.followerName}>{f.userNickName}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 검색/정렬 바 */}
      <div className={styles.searchSortBar}>
        <div className={styles.searchBox}>
          <Image src="/svgs/search.svg" alt="search" width={20} height={20} />
          <input className={styles.searchInput} placeholder="찾으시는 글이있나요?" disabled />
        </div>
        <div className={styles.sortBox}>
          <span className={styles.sortText}>최신순</span>
          <Image src="/svgs/down.svg" alt="down" width={12} height={10} className={styles.sortIcon} />
        </div>
      </div>

      {/* 게시글 리스트 */}
      <div className={styles.postList}>
        {posts.map((post, idx) => (
          <div className={styles.postCard} key={idx}>
            <div className={styles.postHeader}>
              <Image src="/svgs/profile.svg" alt="user" width={32} height={32} />
              <div>
                <div className={styles.postUser}>{post.userNickName}</div>
                <div className={styles.postDate}>{post.date}</div>
              </div>
            </div>
            <div className={styles.postTitle}>{post.title}</div>
            <div className={styles.postDesc}>{post.desc}</div>
            <div className={styles.postFooter}>
              <div className={styles.iconTextGroup}>
                <Image src="/svgs/comment.svg" alt="comment" width={15} height={15} />
                <span>{post.commentCount}</span>
              </div>
              <div className={styles.iconTextGroup}>
                <Image src="/svgs/love.svg" alt="love" width={15} height={15} />
                <span>{post.loveCount}</span>
              </div>
              <div className={styles.tags}>
                {post.tags.map((tag, tIdx) => (
                  <span className={styles.tag} key={tIdx}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
  