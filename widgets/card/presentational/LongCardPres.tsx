// package
import Image from 'next/image';
import Link from 'next/link';
import { ChatBubbleIcon } from '@radix-ui/react-icons';

// slice
import styles from '../styles/LongCardPres.module.scss';
import { MyBlogCardData } from '@/views/story/myblog-card-list/types';

// layer
import { TagListCont } from '@/features/tag-list';
import { LikeButton } from '@/features/like';
import Profile from '@/shared/ui/profile';

type Props = {
  data: MyBlogCardData;
  userId: string;
};

export default function LongCardPres({ data, userId }: Props) {
  return (
    <div className={`${styles.cardContainer} cardContainer`}>
      <div className={styles.cardRow}>
        <div className={styles.cardLeft}>
          <Link href={`/${data.userName}/stories`}>
            <div className={styles.profileInfo}>
              <Profile
                userProfileImage={data.userProfileImage}
                userName={data.userName}
                date={data.date}
              />
            </div>
          </Link>
          <Link href={`/email/stories/${data.id}`}>
            <div className={styles.main}>
              <div className={styles.textWrap}>
                <div className={styles.title}>{data.title}</div>
                <div className={styles.desc}>{data.desc}</div>
              </div>
            </div>
          </Link>
          <div className={styles.tagWrap}>
            <TagListCont tags={data.tags} />
          </div>
          <div className={styles.bottom}>
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
      </div>
    </div>
  );
}
