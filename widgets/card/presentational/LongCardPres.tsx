// package
import Image from 'next/image';
import Link from 'next/link';

// slice
import styles from '../styles/LongCardPres.module.scss';
import { CardData } from '../types';

// layer
import { TagListCont } from '@/features/tag-list';
import { LikeButton } from '@/features/like';
import Profile from '@/shared/ui/profile';

type Props = {
  data: CardData;
};

export default function LongCardPres({ data }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.cardRow}>
        <div className={styles.cardLeft}>
          <Link href="/email/stories">
            <div className={styles.profileInfo}>
              <Profile
                userNickName={data.userNickName}
                date={data.date}
                onClick={() => {}}
              />
            </div>
          </Link>
          <Link href="/email/stories/1">
            <div className={styles.main}>
              <div className={styles.textWrap}>
                <div className={styles.title}>{data.title}</div>
                <div className={styles.desc}>{data.desc}</div>
              </div>
            </div>
            <div className={styles.tagWrap}>
              <TagListCont tags={data.tags} />
            </div>
          </Link>
          <div className={styles.bottom}>
            <div className={styles.iconTextGroup}>
              <Image
                src="/svgs/comment.svg"
                alt="comment"
                width={15}
                height={15}
              />
              <span className={styles.iconCount}>{data.commentCount}</span>
            </div>
            <div className={styles.iconTextGroup}>
              <LikeButton />
            </div>
          </div>
        </div>
        {data.imageUrl && (
          <div className={styles.mainIcon}>
            <Image src={data.imageUrl} alt="main" width={80} height={64} />
          </div>
        )}
      </div>
    </div>
  );
}
