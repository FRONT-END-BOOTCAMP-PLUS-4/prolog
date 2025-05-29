import { usePostEditorStore } from '../../stores/usePostEditorStore';
import PostDraftListPres from '../presentational/PostDraftListPres';

type Props = {
  closeModal: () => void;
};

export default function PostDraftListCont({ closeModal }: Props) {
  const { deleteDraft: onDelete } = usePostEditorStore();

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

  return <PostDraftListPres onDelete={deleteDraft} closeModal={closeModal} />;
}
