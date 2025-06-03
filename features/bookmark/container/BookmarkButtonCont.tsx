'use client';

// package
import { useState } from 'react';
import { toast } from 'react-toastify';
// slice
import BookmarkButtonPres from '../presentational/BookmarkButtonPres';

type Props = {
  isBookmarked: boolean;
  userId: string;
  postId: number;
};

export default function BookmarkButtonCont({
  isBookmarked,
  userId,
  postId,
}: Props) {
  const [bookmarked, setBookmarked] = useState(isBookmarked);

  const toggleBookmark = async () => {
    if (!userId) {
      toast.warning('로그인 후 이용 가능한 기능입니다.');
      return;
    }

    try {
      const res = await fetch('/api/member/bookmarks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId,
          postId,
          bookmarked: !bookmarked,
        }),
      });
      if (!res.ok) {
        throw new Error('Failed to toggle bookmark');
      }

      const data = await res.json();
      setBookmarked(data.bookmarked);
    } catch (error) {
      toast.error('북마크 처리 중 오류가 발생했습니다.');
    }
  };

  return (
    <BookmarkButtonPres bookmarked={bookmarked} onClick={toggleBookmark} />
  );
}
