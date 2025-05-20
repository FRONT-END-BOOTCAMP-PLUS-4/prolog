'use client';

import Button from '@/shared/ui/button';
import styles from './styles.module.scss';
import { LikeButton } from '@/features/like';
import { BookmarkButton } from '@/features/bookmark';
import Profile from '@/shared/ui/profile';
import {
  AiSummary,
  BodyText,
  CommentInput,
  CommentList,
  CommentLoginPrompt,
} from '@/views/post-detail';

export default function Page() {
  const dummy = {
    userNickName: 'userNickName',
    date: '2025-01-01',
  };

  return (
    <div className={styles.container}>
      {/* 제목 */}
      <div className={styles.title}>CSR이란</div>

      <div className={styles.profileLayout}>
        {/* 프로필/팔로우 바 */}
        <div className={styles.profileBar}>
          <Profile
            userNickName={dummy.userNickName}
            date={dummy.date}
            onClick={() => {}}
          />
          <Button variants="active" size="small">
            팔로우
          </Button>
        </div>

        {/* 아이콘 바 */}
        <div className={styles.iconBar}>
          <BookmarkButton />
          <LikeButton />
        </div>
      </div>

      {/* AI 목차 요약 */}
      <AiSummary />

      {/* 본문 섹션 */}
      <BodyText />

      {/* 댓글 타이틀 */}
      <div className={styles.commentTitle}>댓글 목록 (19)</div>

      {/* 댓글 등록 박스 */}
      <CommentInput />
      <CommentLoginPrompt />

      {/* 댓글 리스트 */}
      <CommentList />
    </div>
  );
}
