import { cookies } from 'next/headers';
import styles from './styles.module.scss';
import Button from '@/shared/ui/button';
import { LikeButton } from '@/features/like';
import { BookmarkButton } from '@/features/bookmark';
import Profile from '@/shared/ui/profile';
import {
  AiSummary,
  BodyText,
  CommentCount,
  CommentInput,
  CommentList,
  CommentLoginPrompt,
} from '@/views/detail/post-detail';
import { EditButtonCont } from '@/features/edit';
import { DeleteButtonCont } from '@/features/delete';
import { getMetadata } from '@/shared/utils/metadata';

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

const isLoggedIn = async () => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('authjs.session-token');
  return !!accessToken;
};

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ id: string; email: string }>;
}) => {
  const { id, email } = await params;
  const post = await getPost(Number(id));

  return getMetadata({
    title: post?.title,
    description: post?.title,
    ogImage: post?.thumbnailUrl,
    asPath: `/${email}/stories/${id}`,
  });
};

export default async function Page({
  params,
}: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const postId = Number(id);

  const post = await getPost(postId);
  const loggedIn = await isLoggedIn();

  console.log('Post data:', post);

  return (
    <div className={styles.container}>
      {/* 제목 */}
      <div className={styles.titleContainer}>
        <h1 className={styles.titleText}>{post.title}</h1>
        <div className={styles.actionButtons}>
          {/* 수정 및 삭제 버튼 */}
          {post.isMine && (
            <>
              <div className={styles.editWrapper}>
                <EditButtonCont mode="post" post={post} />
                <span>|</span>
              </div>
              <DeleteButtonCont
                mode="post"
                id={postId}
                userName={post.nickname}
              />
            </>
          )}
        </div>
      </div>

      <div className={styles.profileLayout}>
        {/* 프로필/팔로우 바 */}
        <div className={styles.profileBar}>
          <Profile userName={post.nickname} date={post.createdAt} />
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
      <div className={styles.commentTitle}>
        댓글 목록 <CommentCount postId={postId} />
      </div>

      {/* 댓글 등록 박스 */}
      {loggedIn ? <CommentInput /> : <CommentLoginPrompt />}

      {/* 댓글 리스트 */}
      <CommentList postId={postId} />
    </div>
  );
}
