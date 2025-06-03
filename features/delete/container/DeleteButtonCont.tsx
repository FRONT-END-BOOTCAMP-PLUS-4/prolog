'use client';

import { useRouter } from 'next/navigation';
import DeleteButtonPres from '../presentational/DeleteButtonPres';

type Props =
  | { mode: 'post'; id: number; userName: string } // 게시글 삭제용
  | { mode: 'comment'; onDelete: () => void }; // 댓글 삭제용

export default function DeleteButtonCont(props: Props) {
  const router = useRouter();

  const handleDelete = () => {
    const confirmed = window.confirm('삭제하시겠습니까?');

    if (!confirmed) return;

    if (props.mode === 'post') {
      fetch(`/api/member/posts/${props.id}`, {
        method: 'DELETE',
      })
        .then(() => {
          router.replace(`/${props.userName}/stories`);
        })
        .catch(() => {
          console.error('게시글 삭제 실패');
        });
    } else {
      props.onDelete();
    }
  };

  return <DeleteButtonPres onDelete={handleDelete} />;
}
