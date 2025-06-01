'use client';
// package
import { useState } from 'react';
// slice
import BookmarkButtonPres from '../presentational/BookmarkButtonPres';

export default function BookmarkButtonCont({
  isBookmarked,
}: { isBookmarked: boolean }) {
  const [bookmarked, setBookmarked] = useState(isBookmarked);

  const toggleBookmark = () => {
    // 실제 API 호출 자리
    setBookmarked((prev) => !prev);
  };

  return (
    <BookmarkButtonPres bookmarked={bookmarked} onClick={toggleBookmark} />
  );
}
