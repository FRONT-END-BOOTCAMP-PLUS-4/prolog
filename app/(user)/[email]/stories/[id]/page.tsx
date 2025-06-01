import { cookies } from 'next/headers';
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

const getPost = async (postId: number) => {
  const cookieStore = await cookies();
  const response = await fetch(`http://localhost:3000/api/posts/${postId}`, {
    headers: {
      cookie: cookieStore.toString(),
    },
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error('Failed to fetch post');
  }
  const data = await response.json();
  return data;
};

export default async function Page({ params }: { params: { id: string } }) {
  const postId = Number(params.id);
  const post = await getPost(postId);

  return (
    <div className={styles.container}>
      {/* 제목 */}
      <div className={styles.titleContainer}>
        <h1 className={styles.titleText}>CSR이란?</h1>
        <div className={styles.actionButtons}>
          {/* 수정 및 삭제 버튼 */}
          <EditButtonCont mode="post" id={postId} />
          <span>|</span>
          <DeleteButtonCont mode="post" id={postId} />
        </div>
      </div>

      <div className={styles.profileLayout}>
        {/* 프로필/팔로우 바 */}
        <div className={styles.profileBar}>
          <Profile
            userName={post.nickname}
            date={post.createdAt}
            userEmail={post.userEmail}
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
          <BookmarkButton isBookmarked={post.isBookmarked} />
          <LikeButton isLiked={post.isLiked} likeCount={post.likeCount} />
        </div>
      </div>

      {/* AI 목차 요약 */}
      <AiSummary aiSummary={post.aiSummary} />

      {/* 본문 섹션 */}
      <BodyText content={post.content} tags={post.tags} />

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
