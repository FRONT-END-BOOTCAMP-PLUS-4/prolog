import { PostDraftType } from '../types';
import PostDraftListPres from '../presentational/PostDraftListPres';
import { Dispatch, SetStateAction } from 'react';

type Props = {
  draftList: PostDraftType[];
  setDraftList: Dispatch<SetStateAction<PostDraftType[]>>;
};

export default function PostDraftListCont({ draftList, setDraftList }: Props) {
  /** 임시 저장 글 삭제 로직 */

  const deleteDraft = async (draftId: number) => {
    const confirmed = window.confirm('삭제하시겠습니까?');

    if (confirmed) {
      const res = await fetch(`/api/member/posts/drafts/?draftId=${draftId}`, {
        method: 'DELETE',
      });
      const result = await res.json();

      if (res.ok) {
        setDraftList((prev) =>
          prev.filter((draft) => draft.id !== result.deletedId),
        );
      } else {
        throw new Error('Failed to fetch delete draft');
      }
    }
  };

  return <PostDraftListPres onDelete={deleteDraft} drafts={draftList} />;
}
