'use client';

import { useRouter } from 'next/navigation';
import EditButtonPres from '../presentational/EditButtonPres';

type Props =
  | { mode: 'post'; id: number } // 게시글 모드
  | { mode: 'comment'; onEdit: () => void }; // 댓글 모드

export default function EditButtonCont(props: Props) {
  const router = useRouter();

  const handleClick = () => {
    if (props.mode === 'post') {
      router.push(`/member/story/edit/${props.id}`);
    } else {
      props.onEdit();
    }
  };

  return <EditButtonPres onEdit={handleClick} />;
}
