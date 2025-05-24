import { useEffect, useState } from 'react';
import PostDraftPres from '../presentational/PostDraftListPres';
import { GetPostDraftDto } from '@/architecture/posts/application/dto/GetPostDraftDto';

export default function PostDraftCont() {
  const [draftList, setDraftList] = useState<GetPostDraftDto[]>([]);

  useEffect(() => {
    /** 임시 저장 리스트 가져오는 로직 */
    const getPostsDraftList = async () => {
      const response = await fetch('/api/member/posts/drafts');

      if (!response.ok) {
        throw new Error('Failed to fetch post draftList');
      }

      const result = await response.json();
      setDraftList(result.data);
    };

    getPostsDraftList();
  }, []);

  /** 임시 저장 글 삭제 로직 */
  const handleDeletePostDraft = async (draftId: number) => {
    const confirmed = window.confirm('삭제하시겠습니까?');

    if (confirmed) {
      console.log(`${draftId}번 임시글 삭제`);
      await fetch(`/api/member/posts/drafts/?draftId=${draftId}`);
    }
  };

  return <PostDraftPres drafts={draftList} onDelete={handleDeletePostDraft} />;
}
