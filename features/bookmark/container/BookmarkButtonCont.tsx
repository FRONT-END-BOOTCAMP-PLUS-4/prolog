'use client';
// package
import { useState } from 'react';
// slice
import BookmarkButtonPres from '../presentational/BookmarkButtonPres';

export default function BookmarkButtonCont() {
  const [bookmarked, setBookmarked] = useState(false);

  const toggleBookmark = () => {
    // 실제 API 호출 자리
    setBookmarked((prev) => !prev);
  };

  return (
    <BookmarkButtonPres bookmarked={bookmarked} onClick={toggleBookmark} />
  );
}
