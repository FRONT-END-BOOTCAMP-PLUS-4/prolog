import React from 'react';

export default function CommentCountPres({
  commentCount,
}: { commentCount: number }) {
  return <span>({commentCount})</span>;
}
