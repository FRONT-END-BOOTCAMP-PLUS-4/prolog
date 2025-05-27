import PostDraftListPres from '../presentational/PostDraftListPres';
import { useDraftStore } from '../stores/useDraftStore';

export default function PostDraftListCont() {
  const { deleteDraft: onDelete } = useDraftStore();

  /** 임시 저장 글 삭제 로직 */
  const deleteDraft = async (draftId: number) => {
    const confirmed = window.confirm('삭제하시겠습니까?');

    if (confirmed) {
      const res = await fetch(`/api/member/posts/drafts/?draftId=${draftId}`, {
        method: 'DELETE',
      });
      const deletedId = await res.json();

      onDelete(deletedId);
    }
  };

  return <PostDraftListPres onDelete={deleteDraft} />;
}
