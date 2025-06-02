'use client';

import { useEffect, useState } from 'react';
import CommentCountPres from '../presentational/CommentCountPres';
import { useCommentStore } from '../stores/useCommentStore';

export default function CommentCountCont({ postId }: { postId: number }) {
  const [commentCount, setCommentCount] = useState<number>(0);

  useEffect(() => {
    if (!postId) return;
    fetch(`/api/comments/count?postId=${postId}`)
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then((data) => {
        setCommentCount(data.count);
      })
      .catch(() => {
        console.error('Failed to fetch comment count');
      });
  }, [postId]);

  return <CommentCountPres commentCount={commentCount} />; // Placeholder count, replace with actual count from state or props
}
