import { useEffect, useState } from 'react';
import PostDraftPres from '../presentational/PostDraftListPres';
import { GetPostDraftDto } from '@/architecture/posts/application/dto/GetPostDraftDto';

export default function PostDraftCont() {
  const [draftList, setDraftList] = useState<GetPostDraftDto[]>([]);

  useEffect(() => {
    const getPostsDraftList = async () => {
      const response = await fetch('/api/member/posts/draft');

      if (!response.ok) {
        throw new Error('Failed to fetch post draftList');
      }

      const result = await response.json();
      setDraftList(result.data);
    };

    getPostsDraftList();
  }, []);

  const handleDeletePostDraft = (id: number) => {
    const confirmed = window.confirm('삭제하시겠습니까?');
    if (confirmed) {
      console.log(`${id}번 임시글 삭제`);
      // 실제 삭제 로직 작성 예정
    }
  };

  return <PostDraftPres drafts={draftList} onDelete={handleDeletePostDraft} />;
}
