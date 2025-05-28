'use client';

import { useParams, useRouter } from 'next/navigation';
import styles from './styles.module.scss';
import Button from '@/shared/ui/button';
import { LikeButton } from '@/features/like';
import { BookmarkButton } from '@/features/bookmark';
import Profile from '@/shared/ui/profile';
import {
  AiSummary,
  BodyText,
  CommentInput,
  CommentList,
  CommentLoginPrompt,
} from '@/views/detail/post-detail';
import { EditButtonCont } from '@/features/edit';
import { DeleteButtonCont } from '@/features/delete';

export default function Page() {
  const params = useParams();
  const router = useRouter();
  const dummy = {
    userNickName: 'userNickName',
    date: '2025-01-01',
  };

  const onEditPost = () => {
    router.push(`/member/story/edit/${params.id}`);
  };

  const onDeletePost = () => {
    // 삭제 api 호출
    console.log('Post deleted');
  };

  return (
    <div className={styles.container}>
      {/* 제목 */}
      <div className={styles.titleContainer}>
        <h1 className={styles.titleText}>CSR이란?</h1>
        <div className={styles.actionButtons}>
          {/* 수정 및 삭제 버튼 */}
          <EditButtonCont onEdit={onEditPost} />
          <span>|</span>
          <DeleteButtonCont onDelete={onDeletePost} />
        </div>
      </div>

      <div className={styles.profileLayout}>
        {/* 프로필/팔로우 바 */}
        <div className={styles.profileBar}>
          <Profile
            userNickName={dummy.userNickName}
            date={dummy.date}
            onClick={() => {}}
          />
          <Button
            style={{ padding: '0.2rem 0.5rem', fontSize: '13px' }}
            variants="active"
            size="small"
          >
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
