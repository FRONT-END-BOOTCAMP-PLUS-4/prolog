'use client';

import { useRouter } from 'next/navigation';
import EditButtonPres from '../presentational/EditButtonPres';
import { usePostEditorStore } from '@/views/post/stores/usePostEditorStore';
import { PostDetailType } from '../types';

type Props =
  | { mode: 'post'; post: PostDetailType } // 게시글 모드
  | { mode: 'comment'; onEdit: () => void }; // 댓글 모드

export default function EditButtonCont(props: Props) {
  const router = useRouter();

  const { setSelectedPost } = usePostEditorStore();

  const handleClick = () => {
    if (props.mode === 'post') {
      setSelectedPost({
        postId: props.post.id,
        title: props.post.title,
        content: props.post.content,
        tags: props.post.tags,
        createdAt: props.post.createdAt,
        aiSummary: props.post.aiSummary,
      });
      router.push(`/member/story/edit/${props.post.id}`);
    } else {
      props.onEdit();
    }
  };

  return <EditButtonPres onEdit={handleClick} />;
}
