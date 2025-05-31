'use client';

import { useState } from 'react';
import CommentListPres from '../presentational/CommentListPres';
import { Comment } from '../types';

export default function CommentListCont() {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      userNickName: 'userNickName1',
      date: '2025-01-01',
      text: '좋은글 잘읽고 갑니다~',
    },
    {
      id: 2,
      userNickName: 'userNickName2',
      date: '2025-01-02',
      text: '정말 유익한 정보네요!',
    },
    {
      id: 3,
      userNickName: 'userNickName3',
      date: '2025-01-03',
      text: '감사합니다! 많은 도움이 되었습니다.',
    },
    {
      id: 4,
      userNickName: 'userNickName4',
      date: '2025-01-04',
      text: '좋은글 잘읽고 갑니다~',
    },
    {
      id: 5,
      userNickName: 'userNickName5',
      date: '2025-01-05',
      text: '정말 유익한 정보네요!',
    },
  ]);

  const handleEditComment = async (id: number, newText: string) => {
    console.log(`PATCH /comments/${id}`, { text: newText });

    // API 요청 (예시용)
    // await fetch(`/api/comments/${id}`, {
    //   method: 'PATCH',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ text: newText }),
    // });

    setComments((prev) =>
      prev.map((c) => (c.id === id ? { ...c, text: newText } : c)),
    );
  };

  const handleDeleteComment = async (id: number) => {
    fetch(`/api/member/comments/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        console.log(`Comment with id ${id} deleted`);
      })
      .catch((error) => {
        console.error(`Failed to delete comment with id ${id}:`, error);
      });

    setComments((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <CommentListPres
      comments={comments}
      onEditComment={handleEditComment}
      onDeleteComment={handleDeleteComment}
    />
  );
}
