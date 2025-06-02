'use client';

// package
import { useState } from 'react';

// slice
import LikeButtonPres from '../presentational/LikeButtonPres';

type Props = {
  isLiked: boolean;
  likeCount: number;
  userId: string;
  postId: string;
};

export default function LikeButtonCont({
  isLiked,
  likeCount,
  userId,
  postId,
}: Props) {
  const [liked, setLiked] = useState(isLiked);
  const [count, setCount] = useState(likeCount);
  const [loading, setLoading] = useState(false);

  const toggleLike = async () => {
    if (loading) return;
    setLoading(true);

    try {
      const res = await fetch('/api/member/likes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId, postId: Number(postId) }),
      });

      if (!res.ok) {
        throw new Error('Failed to toggle like');
      }

      const data = await res.json();
      setLiked(data.liked);
      setCount(data.likeCount);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return <LikeButtonPres liked={liked} count={count} onClick={toggleLike} />;
}
