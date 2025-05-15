import styles from '../styles/LongCardPres.module.scss';
import Image from 'next/image';

export default function LongCardPres() {
  // 더미 데이터 오브젝트
  const dummy = {
    title: 'SSG에 대해서 알아보겠습니다',
    desc: 'CSR은 클라이언트 사이드 렌더링이라고 합니다. 이는 SEO에 좋지 못하지만, 좀더 인터렉티브한 디자인에는 좋은경험을 ........',
    tags: ['Tag', 'Tag'],
    userNickName: 'userNickName',
    date: '2025-01-01',
    commentCount: 16,
    loveCount: 16,
  };

  return (
    <div className={styles.container}>
      <div className={styles.profileInfo}>
        <Image src="/svgs/profile.svg" alt="user" width={32} height={32} className={styles.profileIcon} />
        <div>
          <div className={styles.profileName}>{dummy.userNickName}</div>
          <div className={styles.profileDate}>{dummy.date}</div>
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.textWrap}>
          <div className={styles.title}>{dummy.title}</div>
          <div className={styles.desc}>{dummy.desc}</div>
        </div>
        <div className={styles.mainIcon}>
          <Image src="/svgs/image.svg" alt="main" width={80} height={64} />
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.iconTextGroup}>
          <Image src="/svgs/comment.svg" alt="comment" width={15} height={15} />
          <span className={styles.iconCount}>{dummy.commentCount}</span>
        </div>
        <div className={styles.iconTextGroup}>
          <Image src="/svgs/love.svg" alt="love" width={15} height={15} />
          <span className={styles.iconCount}>{dummy.loveCount}</span>
        </div>
        <div className={styles.tags}>
          {dummy.tags.map((tag, idx) => (
            <span className={styles.tag} key={idx}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
