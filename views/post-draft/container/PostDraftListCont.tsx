import { PostDraftType } from '../types';
import PostDraftListPres from '../presentational/PostDraftListPres';

type Props = {
  draftList: PostDraftType[];
};

export default function PostDraftListCont({ draftList }: Props) {
  /** 임시 저장 글 삭제 로직 */
  const handleDeletePostDraft = async (draftId: number) => {
    const confirmed = window.confirm('삭제하시겠습니까?');

    if (confirmed) {
      console.log(`${draftId}번 임시글 삭제`);
      await fetch(`/api/member/posts/drafts/?draftId=${draftId}`);
    }
  };

  return (
    <PostDraftListPres onDelete={handleDeletePostDraft} drafts={draftList} />
  );
}
