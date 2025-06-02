'use client';
import DeleteButtonPres from '../presentational/DeleteButtonPres';

type Props =
  | { mode: 'post'; id: number } // 게시글 삭제용
  | { mode: 'comment'; onDelete: () => void }; // 댓글 삭제용

export default function DeleteButtonCont(props: Props) {
  const handleDelete = () => {
    const confirmed = window.confirm('삭제하시겠습니까?');

    if (!confirmed) return;

    if (props.mode === 'post') {
      // 게시글 삭제 API 호출
      fetch(`/api/member/posts/${props.id}`, {
        method: 'DELETE',
      })
        .then(() => {
          console.log('게시글 삭제 완료');
        })
        .catch(() => {
          console.error('게시글 삭제 실패');
        });
    } else {
      // 댓글 삭제 핸들러 실행
      props.onDelete();
    }
  };

  return <DeleteButtonPres onDelete={handleDelete} />;
}
