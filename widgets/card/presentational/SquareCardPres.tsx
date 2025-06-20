// package
import Image from 'next/image';
import Link from 'next/link';
import { ChatBubbleIcon } from '@radix-ui/react-icons';

// slice
import styles from '../styles/SquareCardPres.module.scss';
import { CardData } from '../types';

// layer
import { TagListCont } from '@/features/tag-list';
import { LikeButton } from '@/features/like';
import Profile from '@/shared/ui/profile';

type Props = {
  data: CardData;
  userId: string;
};

export default function SquareCardPres({ data, userId }: Props) {
  return (
    <div className={`${styles.cardContainer} cardContainer`}>
      <Link
        href={`/${data.userName}/stories/${data.id}`}
        className={styles.flexGrowArea}
      >
        {data.imageUrl && (
          <div className={styles.iconWrap}>
            <Image
              src={data.imageUrl}
              alt="이미지"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        )}
        <div className={styles.content}>
          <div className={styles.title}>{data.title}</div>
          <div
            className={data.imageUrl ? styles.descWithImg : styles.descNoImg}
          >
            {data.desc}
          </div>
        </div>
      </Link>
      <div className={styles.tagWrap}>
        <TagListCont tags={data.tags} />
      </div>
      <div className={styles.profileBar}>
        <Link href={`/${data.userName}/stories`}>
          <div className={styles.profileInfo}>
            <Profile
              userProfileImage={data.userProfileImage}
              userName={data.userName}
              date={data.date}
            />
          </div>
        </Link>
        <div className={styles.mainIcon}>
          <div className={styles.iconTextGroup}>
            <ChatBubbleIcon className={styles.chatIcon} />
            <span className={styles.iconCount}>{data.commentCount}</span>
          </div>
          <div className={styles.iconTextGroup}>
            <LikeButton
              isLiked={data.isLiked}
              likeCount={data.loveCount}
              userId={userId}
              postId={data.id}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
