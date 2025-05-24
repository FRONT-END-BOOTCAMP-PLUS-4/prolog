// package
import Image from 'next/image';
import { toast } from 'react-toastify';
import Link from 'next/link';

// slice
import styles from '../styles/SquareCardPres.module.scss';

// layer
import TagListCont from '@/views/tag/container/TagListCont';
import { LikeButton } from '@/features/like';
import Profile from '@/shared/ui/profile';

export default function SquareCardPres() {
  // 더미 데이터 오브젝트
  const dummy = {
    title: 'CSR이란',
    desc: 'CSR은 클라이언트 사이드 렌더링이라고 합니다. 이는 SEO에 좋지 못하지만, 좀더 인터렉티브한 디자인에는 좋은경험을 CSR은 클라이언트 사이드 렌더링이라고 합니다. 이는 SEO에 좋지 못하지만, 좀더 인터렉티브한 디자인에는 좋은경험을 ........CSR은 클라이언트 사이드 렌더링이라고 합니다. 이는 SEO에 좋지 못하지만, 좀더 인터렉티브한 디자인에는 좋은경험을 ........CSR은 클라이언트 사이드 렌더링이라고 합니다. 이는 SEO에 좋지 못하지만, 좀더 인터렉티브한 디자인에는 좋은경험을 ........CSR은 클라이언트 사이드 렌더링이라고 합니다. 이는 SEO에 좋지 못하지만, 좀더 인터렉티브한 디자인에는 좋은경험을 ........CSR은 클라이언트 사이드 렌더링이라고 합니다. 이는 SEO에 좋지 못하지만, 좀더 인터렉티브한 디자인에는 좋은경험을 ........',
    tags: [
      'Start',
      'React',
      'TypeScript',
      'Next',
      'HTML',
      'CSS',
      'Java',
      'MySql',
      'End',
    ],
    userNickName: 'userNickName',
    date: '2025-01-01',
    commentCount: 16,
    loveCount: 16,
    imageUrl: '/svgs/image.svg',
  };
  return (
    <div className={styles.container}>
      <Link href="/email/stories/1" className={styles.flexGrowArea}>
        {dummy.imageUrl && (
          <div className={styles.iconWrap}>
            <Image src={dummy.imageUrl} alt="이미지" width={80} height={80} />
          </div>
        )}
        <div className={styles.content}>
          <div className={styles.title}>{dummy.title}</div>
          <div
            className={dummy.imageUrl ? styles.descWithImg : styles.descNoImg}
          >
            {dummy.desc}
          </div>
        </div>
      </Link>
      <div className={styles.tagWrap}>
        <TagListCont tags={dummy.tags} />
      </div>
      <div className={styles.profileBar}>
        <div className={styles.profileInfo}>
          <Profile
            userNickName={dummy.userNickName}
            date={dummy.date}
            onClick={() => {
              toast.info('프로필 클릭!');
            }}
          />
        </div>
        <div className={styles.mainIcon}>
          <div className={styles.iconTextGroup}>
            <Image
              src="/svgs/comment.svg"
              alt="comment"
              width={15}
              height={15}
            />
            <span className={styles.iconCount}>{dummy.commentCount}</span>
          </div>
          <div className={styles.iconTextGroup}>
            <LikeButton />
          </div>
        </div>
      </div>
    </div>
  );
}
